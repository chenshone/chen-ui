import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete, DataSourceType } from './AutoComplete'

// interface OWPlayerProps {
//   value: string
//   number: number
// }

interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}
const SimpleComplete = () => {
  // const ow = [
  //   '美',
  //   '麦爹',
  //   '法鸡',
  //   '安娜',
  //   '巴蒂',
  //   '毛妹',
  //   '老鼠',
  //   '源氏',
  //   '死神',
  //   '大锤',
  //   '西格玛',
  //   '天使姐姐',
  // ]
  // const owWithNumber = [
  //   { value: '美', number: 11 },
  //   { value: '麦爹', number: 1 },
  //   { value: '法鸡', number: 4 },
  //   { value: '安娜', number: 2 },
  //   { value: '巴蒂', number: 15 },
  //   { value: '毛妹', number: 23 },
  //   { value: '老鼠', number: 3 },
  //   { value: '源氏', number: 14 },
  //   { value: '死神', number: 39 },
  //   { value: '大锤', number: 12 },
  //   { value: '西格玛', number: 30 },
  //   { value: '天使姐姐', number: 42 },
  // ]
  // const handleFetch = (query: string) => {
  // return ow.filter((name) => name.includes(query))
  // .map((name) => ({ value: name }))
  // }
  // const handleFetch = (query: string) => {
  //   return owWithNumber.filter((player) => player.value.includes(query))
  // }
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items)
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <div>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>url: {itemWithGithub.url}</p>
      </div>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      renderOption={renderOption}
    />
  )
}

storiesOf('AutoComplete', module).add('AutoComplete', SimpleComplete)
