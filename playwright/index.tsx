import { afterMount, beforeMount } from '@playwright/experimental-ct-react/hooks'
import type { ReactElement } from 'react'
import '../src/App.css'
import '../src/index.css'

beforeMount(async ({ App }) => {
  return (<App />) satisfies ReactElement
})

afterMount(async () => {
  window.localStorage.clear()
  window.sessionStorage.clear()
})
