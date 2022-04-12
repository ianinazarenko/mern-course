async function getAllJobs(req, res) {
  res.send('getAllJobs')
}
async function createJob(req, res) {
  res.send('createJob')
}
async function updateJob(req, res) {
  res.send('updateJob')
}
async function deleteJob(req, res) {
  res.send('deleteJob')
}
async function showStats(req, res) {
  res.send('showStats')
}

export { getAllJobs, createJob, updateJob, deleteJob, showStats }
