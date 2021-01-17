// @ts-nocheck

const showActiveSetting = (setting, value) => {
  document.querySelector(`[data=${setting}] [data=${value}]`).classList.add('active')
}

const changeSetting = (el, setting, value) => {
  _.each(document.querySelector(`[data=${setting}]`).children, button => {
    button.classList.remove('active')
  })

  localStorage.setItem(setting, value)

  el.classList.add('active')
}

window.onload = () => {
  if (localStorage.units) {
    showActiveSetting('units', localStorage.units)
  }
}

