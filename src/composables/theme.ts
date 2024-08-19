import { ref, watchEffect } from 'vue'

export function useTheme() {
  const theme = ref(localStorage.getItem('theme'))

  // Watch for changes and update localStorage
  watchEffect(() => {
    localStorage.setItem('theme', theme.value || 'default')
  })


  return {
    theme,
    setTheme: (newTheme: string) => {
      theme.value = newTheme
    }
  }
}