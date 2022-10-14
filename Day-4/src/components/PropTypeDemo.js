import React from 'react'
import PropTypes from 'prop-types'

function PropTypeDemo ({ name, age, hobbies, email, isDeveloper }) {
  return (
    <>
        <details>
          <summary>PropTypeDemo</summary><hr/>
          <p>Name : <strong>{name}</strong></p>
          <p>Age : <strong>{age}</strong></p>
          <p>Email Id : <strong>{email.office}</strong></p>
          <p>Are You Developer : <strong>{isDeveloper ? 'Yes' : 'No'}</strong></p>
          <p>Hobbies : <strong>[{hobbies.join(', ')}]</strong></p>
        </details>
    </>
  )
}

PropTypeDemo.propTypes = {
  /**
   * @type {string} name is required
   */
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.array,
  email: PropTypes.objectOf(PropTypes.string),
  isDeveloper: PropTypes.bool
}

PropTypeDemo.defaultProps = {
  name: 'abcd',
  email: 'example@gmail.com'
}

export default PropTypeDemo
