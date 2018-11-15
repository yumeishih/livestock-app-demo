import {
  GRASS_ENERGY,
  GRASS_ENERGY_TYPES,
  DM_PERCENTAGE,
  FLOCK_NUTRIENT_REQUIREMENT
} from 'Utils/const'
import { forIn, zipObject } from 'lodash'

const calculateEnergy = (grassEnergyType, feedValue) => {
  let result = 0
  forIn(feedValue, (supply, grass) => {
    result += (supply * DM_PERCENTAGE[grass])
    * GRASS_ENERGY[grass][grassEnergyType]
  })

  return (result / 100)
}

export const calculateEnergyAll = ({ flockStatus, ...feedValue }) => {
  const energyResult = zipObject(GRASS_ENERGY_TYPES, new Array(GRASS_ENERGY_TYPES.length).fill(0))
  forIn(energyResult, (value, key) => {
    energyResult[key] = calculateEnergy(key, feedValue)
  })
  return energyResult
}

export const calculateDiffAll = (flockStatus, energyResult) => {
  const diffResult = zipObject(GRASS_ENERGY_TYPES, new Array(GRASS_ENERGY_TYPES.length).fill(0))
  forIn(diffResult, (value, key) => {
    diffResult[key] = energyResult[key] - FLOCK_NUTRIENT_REQUIREMENT[flockStatus][key]
  })
  return diffResult
}
