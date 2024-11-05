import { useState, useEffect } from 'react'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const fetchRepositories = async () => {
    setLoading(true)

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.199.189:5000/api/repositories')
    const json = await response.json()
    setLoading(false)
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])
  console.log(repositories)

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
