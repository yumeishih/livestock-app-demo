import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ labelString, className }) => {
  return (
    <div className={`common-text-area ${className}`}>
      {labelString}
      <textarea className="form-control" rows="3" />
    </div>
  )
}

TextArea.defaultProps = {
  labelString: null,
  className: null,
}

TextArea.propTypes = {
  labelString: PropTypes.string,
  className: PropTypes.string
}

export default TextArea
