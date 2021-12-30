const paginate = (userData) => {
  const itemPerPage = 12
  const pages = Math.ceil(userData.length / itemPerPage)
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage
    const end = start + itemPerPage
    return userData.slice(start, end)
  })

  return newFollowers
}

export default paginate
