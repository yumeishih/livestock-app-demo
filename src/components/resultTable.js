import React from 'react'
import PropTypes from 'prop-types'
import {
  GRASS_ENERGY_TYPES,
  FLOCK_NUTRIENT_REQUIREMENT,
  resultTableHeader,
  GRASS_ENERGY_TYPES_UNIT
} from 'Utils/const'

const ResultTable = ({ energyResult, diffResult, flockStatus }) => {
  return (
    <table className="resultTable">
      <thead>
        <tr>
          <th></th>
          {resultTableHeader.map((ele) => (<th key={ele}>{ele}</th>))}
        </tr>
      </thead>
      <tbody>
        {GRASS_ENERGY_TYPES.map((ele) => {
          const diffClass = diffResult[ele] < 0 ? 'negative' : null
          return (
            <tr key={ele}>
              <td>{`${ele} (${GRASS_ENERGY_TYPES_UNIT[ele]})`}</td>
              <td>{energyResult[ele].toFixed(2)}</td>
              <td>{FLOCK_NUTRIENT_REQUIREMENT[flockStatus][ele].toFixed(2)}</td>
              <td className={diffClass}>{diffResult[ele].toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
ResultTable.propTypes = {
  energyResult: PropTypes.objectOf(PropTypes.number).isRequired,
  diffResult: PropTypes.objectOf(PropTypes.number).isRequired,
  flockStatus: PropTypes.string.isRequired
}

export default ResultTable
