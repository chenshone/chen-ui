import React, { FC } from 'react'

import { UploadFile } from './Upload'

import Icon from '../icon/Icon'
import Progress from '../progress/Progress'

interface UploadListPros {
  fileList: UploadFile[]
  /** 取消文件回调 */
  onRemove: (_file: UploadFile) => void
}

export const UploadList: FC<UploadListPros> = (props) => {
  const { fileList, onRemove } = props
  return (
    <ul className="upload-list">
      {fileList.map((item) => (
        <li className="upload-list-item" key={item.uid}>
          <span className={`file-name file-name-${item.status}`}>
            <Icon icon="file-alt" theme="secondary" />
            {item.name}
          </span>
          <span className="file-status">
            {(item.status === 'uploading' || item.status === 'ready') && (
              <Icon icon="spinner" spin theme="primary" />
            )}
            {item.status === 'success' && (
              <Icon icon="check-circle" theme="success" />
            )}
            {item.status === 'error' && (
              <Icon icon="times-circle" theme="danger" />
            )}
          </span>
          <span className="file-actions">
            <Icon
              icon="times"
              onClick={() => {
                onRemove(item)
              }}
            />
          </span>
          {item.status === 'uploading' && (
            <Progress percent={item.percent || 0} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default UploadList
