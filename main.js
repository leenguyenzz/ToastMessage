function toast({
  title = '',
  message = '',
  type = '',
  duration = 3000,
  icon = '',
}) {
  const main = document.getElementById('toast')
  const delay = (duration / 1000).toFixed(2)
  if (main) {
    const toast = document.createElement('div')
    toast.classList.add('toast', `toast--${type}`)
    toast.style.animation = `fadeInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__message">${message}</div>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
    const autoCloseToastID = setTimeout(function () {
      main.removeChild(toast)
    }, duration + 1000)
    toast.onclick = function (e) {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast)
        clearTimeout(autoCloseToastID)
      }
    }
    main.appendChild(toast)
  }
}

const btnSuccess = document.querySelector('.btn-success')
btnSuccess.onclick = function () {
  toast({
    title: 'success',
    message: 'Success is done!',
    type: 'success',
    duration: 3000,
    icon: 'fa-solid fa-check',
  })
}

const btnInfo = document.querySelector('.btn-info')
btnInfo.onclick = function () {
  toast({
    title: 'Information',
    message: 'An Information Toast!',
    type: 'info',
    duration: 3000,
    icon: 'fa-solid fa-info',
  })
}

const btnWarning = document.querySelector('.btn-warning')
btnWarning.onclick = function () {
  toast({
    title: 'Warning',
    message: 'An Warning Toast!',
    type: 'warning',
    duration: 3000,
    icon: 'fa-solid fa-triangle-exclamation',
  })
}

const btnError = document.querySelector('.btn-error')
btnError.onclick = function () {
  toast({
    title: 'error',
    message: 'An Error Toast!',
    type: 'error',
    duration: 3000,
    icon: 'fa-solid fa-triangle-exclamation',
  })
}
