/* eslint-env browser */

function styleInject(css, ref, id) {
  if (ref === undefined) ref = {}
  const { insertAt } = ref

  document
    .querySelectorAll('[data-module="' + id + '"]')
    .forEach(element => element.remove())

  if (!css || typeof document === 'undefined') return

  const head = document.head || document.querySelector('head')
  const style = document.createElement('style')
  style.type = 'text/css'

  style.dataset.module = id

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.append(style)
    }
  } else {
    head.append(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.append(document.createTextNode(css))
  }
}

export default styleInject
