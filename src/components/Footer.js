import React, { PureComponent } from 'react'
import '../css/components/Footer.css'

class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <div className='container'>
          <pre>Made with ❤️ by Mike for Hannah | <a href='https://github.com/Megagator/wedding'>Source</a></pre>
        </div>
      </footer>
    )
  }
}

export default Footer
