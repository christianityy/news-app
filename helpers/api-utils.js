export const postNews = async (formData) => {
  let error = ''
  const response = await fetch(`/api/add_news`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  if (!response.ok) {
    error = 'error while adding a news'
  }
  return { result, error }
}

export const getNews = async () => {
  let error = ''
  const response = await fetch(`http://localhost:3000/api/get_news`)
  const result = await response.json()
  if (!response.ok) {
    error = 'error while fetching your news'
  }
  return { result, error }
}

export const getLatestNews = async () => {
  let error = ''
  const response = await fetch(`http://localhost:3000/api/get_latest_news`)
  const result = await response.json()
  if (!response.ok) {
    error = 'error while adding a news'
  }
  return { result, error }
}
