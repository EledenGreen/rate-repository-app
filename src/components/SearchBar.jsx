import { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { useDebounce } from 'use-debounce'

const SearchBar = ({ keyword, setKeyword }) => {
  const [text, setText] = useState(keyword)
  const [debouncedText] = useDebounce(text, 500)

  // Update the keyword only when the debouncedText changes
  useEffect(() => {
    setKeyword(debouncedText)
  }, [debouncedText, setKeyword])

  return <Searchbar placeholder="Search" onChangeText={setText} value={text} />
}

export default SearchBar
