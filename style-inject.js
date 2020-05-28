/* eslint-env browser */

function styleInject(css = '', ref, id) {
  if (ref === undefined) ref = {}
  const { insertAt } = ref

  const previous = document.querySelectorAll('[data-module="' + id + '"]')

  // NOTE we want to inject the style el at the same position in the DOM to
  // respect equal power selectors priority (last one wins)
  const anchor = previous[previous.length - 1]

  const remove = () => previous.forEach(element => element.remove())

  if (typeof document === 'undefined') {
    remove()
    return
  }

  const head = document.head || document.querySelector('head')
  const style = document.createElement('style')
  style.type = 'text/css'

  style.dataset.module = id

  if (anchor) {
    anchor.parentNode.insertBefore(style, anchor)
  } else if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.append(style)
    }
  } else {
    head.append(style)
  }

  remove()

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.append(document.createTextNode(css))
  }
}

export default styleInject
