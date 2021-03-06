import React, { PureComponent } from 'react'
import '../css/components/LocationDetails.css'

class LocationDetails extends PureComponent {
  render () {
    return (
      <div className='details'>
        <h3 className='title'>Ceremony & Reception</h3>
        <p className='dinner'>Dinner will be served</p>
        <div className='vcard'>
          <p className='address'>
            <span className='name'>Winter Park Farmers' Market</span><br />
            <span className='street-address'>200 W New England Avenue</span><br />
            <span className='region'>Winter Park, FL </span>
            <span className='postal-code'>32789</span><br />
            <a target='_blank' rel='noopener noreferrer' href='https://cityofwinterpark.org/departments/parks-recreation/farmers-market/'>Winter Park Farmers' Market</a>
          </p>
          <a className='button' href='http://maps.apple.com/?daddr=200+W+New+England+Avenue+Winter+Park+Florida+32789'>Directions</a>
        </div>
      </div>
    )
  }
}

export default LocationDetails
