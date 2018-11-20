import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ labelString, className }) => {
  return (
    <div className={`common-input ${className}`}>
      {labelString} :
      <label>
        <input
          type="text"
        />
      </label>
    </div>
  )
}

Input.defaultProps = {
  labelString: null,
  className: null,
}

Input.propTypes = {
  labelString: PropTypes.string,
  className: PropTypes.string
}

export default Input
