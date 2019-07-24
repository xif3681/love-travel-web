import Request from './request'

export const loadExportedFileList = () => Request.get('/exportFile', {}, {
  manualCloseErrorNotification: true,
  showErrorDetail: true,
  showLoading: false
})