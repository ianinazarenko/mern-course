function notFoundMiddleware(req, res) {
  res.status(404).send('Page is not found')
}

export default notFoundMiddleware
