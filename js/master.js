const fetchposts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  } finally {
    console.log('Posts Fetch attempt finished')
  }
}
export default fetchposts
