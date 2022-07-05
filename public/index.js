const downloadBtn = document.querySelector('.download-button')
const getBtn = document.querySelector('.get-button')
let urlInput = document.querySelector('.url-input')

urlInput.addEventListener('keyup', () => {
  isValidURL = urlInput.checkValidity()
  getBtn.disabled = isValidURL ? false :  true
})

getBtn.addEventListener('click', () => {
  setURL(urlInput.value)
  showDownloadBtn()
})

downloadBtn.addEventListener('click', () => {
  urlInput.value = ''
  document.location.reload()
  getBtn.disabled = true
})

function showDownloadBtn() {
  downloadBtn.classList.remove('hide')
}

function setURL(URL) {
  downloadBtn.href = `http://localhost:4000/download?URL=${URL}`
}
