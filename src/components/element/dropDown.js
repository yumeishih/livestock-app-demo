import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ options, labelString, className }) => {
  return (
    <div className={`common-drop-down ${className}`}>
      {labelString} :
      <label>
        <select>
          {options.map((element, index) => (<option value={element} key={`option_${index}`}>{element}</option>))}
        </select>
      </label>
    </div>
  )
}

Dropdown.defaultProps = {
  labelString: null,
  className: null,
  options: []
}

Dropdown.propTypes = {
  labelString: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any)
}

export default Dropdown
