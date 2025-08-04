import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        beige: '#F7F3F0',
				card: '#FF7342',
				'main-border': 'rgba(27, 27, 27, 0.1)'
      }
    }
  }
}
