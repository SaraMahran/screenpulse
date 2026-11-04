import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// jsdom has no scrolling implementation for router scroll restoration.
window.scrollTo = vi.fn()

afterEach(cleanup)
