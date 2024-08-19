export default {
  beforeMount(el: any) {
    el.addEventListener('click', function(event: Event) {
      event.preventDefault()

      const targetId = el.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        })
      }
    })
  }
}
