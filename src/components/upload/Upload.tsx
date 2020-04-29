import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'

import UploadList from './UploadList'
import Dragger from './Dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string
  size: number
  name: string
  /** 文件当前状态 */
  status?: UploadFileStatus
  /** 上传进度 */
  percent?: number
  /** 源文件 */
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  /** 目标url */
  action: string
  defaultFileList?: UploadFile[]
  /** 自定义请求header */
  headers?: { [key: string]: any }
  /** 自定义上传文件的name */
  name?: string
  /** 自定义请求formData */
  data?: { [key: string]: any }
  /** 发送请求时是否携带cookie */
  withCredentials?: boolean
  /** 自定义允许上传的文件类型 */
  accept?: string
  /** 是否可以选择多个文件 */
  multiple?: boolean
  /** 是否可以拖拽文件上传  */
  drag?: boolean
  /** 上传前的回调，可用于验证，转换文件等操作 */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /** 上传进展监听事件 */
  onProgress?: (percentage: number, file: UploadFile) => void
  /** 上传成功回调 */
  onSuccess?: (data: any, file: UploadFile) => void
  /** 上传失败回调 */
  onError?: (err: any, file: UploadFile) => void
  /** 无论上传成功与否都会触发 */
  onChange?: (file: UploadFile) => void
  /** 取消上传回调 */
  onRemove?: (file: UploadFile) => void
}

/**
 * 上传文件组件，支持做拽上传
 * ### 引用方法
 *
 * ~~~js
 * import { Upload } from 'chen-ui'
 * ~~~
 */
export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    headers,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    children,
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }

  // 点击按钮后触发上传文件
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid))
    if (onRemove) {
      onRemove(file)
    }
  }

  // 上传文件
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }

    setFileList((prevList) => [_file, ...prevList])

    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0
          if (percentage < 100) {
            updateFileList(_file, {
              percent: percentage,
              status: 'uploading',
            })
            if (onProgress) {
              onProgress(percentage, _file)
            }
          }
        },
      })
      .then((res) => {
        updateFileList(_file, { status: 'success', response: res.data })
        if (onSuccess) {
          onSuccess(res.data, _file)
        }
        if (onChange) {
          onChange(_file)
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: 'error', error: err })
        if (onError) {
          onError(err, _file)
        }
        if (onChange) {
          onChange(_file)
        }
      })
  }
  return (
    <div className="upload-component">
      <div
        className="upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger
            onFile={(files) => {
              uploadFiles(files)
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          type="file"
          className="file-input"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          ref={fileInput}
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file',
}

export default Upload
