export const postNews = async (formData) => {
  const response = await fetch(`/api/add_news`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  return result
}

export const getNews = async () => {
  const response = await fetch(`http://localhost:3000/api/get_news`)
  const result = await response.json()
  return result
}
