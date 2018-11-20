import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({
  options,
  labelString,
  className,
  radioType
}) => {
  return (
    <form className={`common-check-box ${className}`}>
      <label>
        {labelString} :
        {options.map((element) => (
          <div className={radioType} key={`checkbox_${element}`}>
            <input type="radio" name="optradio" />{element}
          </div>
        ))}
      </label>
    </form>
  )
}

CheckBox.defaultProps = {
  labelString: null,
  className: null,
  options: [],
  radioType: 'radio-inline'
}

CheckBox.propTypes = {
  labelString: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any),
  radioType: PropTypes.string,
}

export default CheckBox
