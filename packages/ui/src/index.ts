import type { App } from 'vue'

import * as components from './components'
export * from './components'

export const install = async (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default install
