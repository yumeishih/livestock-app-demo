export const ICDF_LINK = 'http://www.icdf.org.tw/ct.asp?xItem=52227&ctNode=29877&mp=2j5QEKxz0rKT0Mjva6u5YtilodjSEJ2SHD_po1Z5GTiaO4'

export const FEED_TYPES = [
  'Aruana',
  'Maralfafal',
  'Mulberry',
  'CitrusPulp',
  'GroundCorn',
  'SorghumGrain',
  'SoyBeanMeal',
  'FullFatSoyBean',
  'GroundBlackeye',
  'Molasses',
  'Concenration'
]

export const GROSS_ENERGY_TYPES = [
  'TDN',
  'DE',
  'ME',
  'NDF',
  'ADF',
  'CP',
  'Fat',
  'Ash',
  'Ca',
  'Phosphorus'
]

export const FLOCK_STATUS = [
  'ewe5hr',
  'lateGestation',
  'lactation',
  'weanedLambs',
  'ewe0hr',
  'ram0hr',
  'blackBellySeparate',
  'dorperSeparate'
]

export const FLOCK_STATUS_WORDING = {
  ewe5hr: '',
  lateGestation: '',
  lactation: '',
  weanedLambs: '',
  ewe0hr: '',
  ram0hr: '',
  blackBellySeparate: '',
  dorperSeparate: ''
}

export const FLOCK_NUTRIENT_REQUIREMENT = {
  ewe5hr: {
    TDN: 0.56,
    DE: 3.61,
    ME: 2.21,
    DM: 2.1,
    CP: 93,
    Ca: 2.6,
    Phosphorus: 2.1
  },
  lateGestation: {
    TDN: 1.09,
    DE: 4.7,
    ME: 3.94,
    DM: 2.1,
    CP: 173,
    Ca: 8.1,
    Phosphorus: 4.8
  },
  lactation: {
    TDN: 0.94,
    DE: 4.2,
    ME: 3.39,
    DM: 1.776,
    CP: 210,
    Ca: 5.7,
    Phosphorus: 4
  },
  weanedLambs: {
    TDN: 0.6,
    DE: 2.5,
    ME: 2.17,
    DM: 0.91,
    CP: 171,
    Ca: 5.3,
    Phosphorus: 3.8
  },
  ewe0hr: {
    TDN: 0.59,
    DE: 3.61,
    ME: 2.13,
    DM: 2.1,
    CP: 133,
    Ca: 6.5,
    Phosphorus: 3.6
  },
  ram0hr: {
    TDN: 0.94,
    DE: 3.61,
    ME: 3.38,
    DM: 2.275,
    CP: 128,
    Ca: 3.3,
    Phosphorus: 3.1
  },
  blackBellySeparate: {
    TDN: 0.82,
    DE: 3.77,
    ME: 2.94,
    DM: 1.026,
    CP: 163,
    Ca: 5.1,
    Phosphorus: 3.9
  },
  dorperSeparate: {
    TDN: 1.32,
    DE: 5.2,
    ME: 4.78,
    DM: 1.65,
    CP: 161,
    Ca: 4.5,
    Phosphorus: 3.9
  }
}

export const FLOCK_NUTRIENT_REQUIREMENT_SUGGESTION = {
  ewe5hr: {
    Aruana: 6,
    Maralfafal: 0.36,
    Mulberry: 0.36,
    CitrusPulp: 0,
    GroundCorn: 0,
    SorghumGrain: 0,
    SoyBeanMeal: 0,
    FullFatSoyBean: 0,
    GroundBlackeye: 0,
    Molasses: 0.18,
    Concenration: 0.3
  },
  lateGestation: {
    Aruana: 6,
    Maralfafal: 0.36,
    Mulberry: 0.36,
    CitrusPulp: 0,
    GroundCorn: 0,
    SorghumGrain: 0,
    SoyBeanMeal: 0,
    FullFatSoyBean: 0,
    GroundBlackeye: 0,
    Molasses: 0.18,
    Concenration: 0.3
  },
  lactation: {
    Aruana: 4.55,
    Maralfafal: 0.36,
    Mulberry: 0.36,
    CitrusPulp: 0,
    GroundCorn: 0.23,
    SorghumGrain: 0,
    SoyBeanMeal: 0.09,
    FullFatSoyBean: 0,
    GroundBlackeye: 0.23,
    Molasses: 0.18,
    Concenration: 0.09
  },
  weanedLambs: {
    Aruana: 0,
    Maralfafal: 1.25,
    Mulberry: 1.25,
    CitrusPulp: 0,
    GroundCorn: 0.1,
    SorghumGrain: 0,
    SoyBeanMeal: 0.05,
    FullFatSoyBean: 0,
    GroundBlackeye: 0.15,
    Molasses: 0,
    Concenration: 0.1
  },
  ewe0hr: {
    Aruana: 0,
    Maralfafal: 3,
    Mulberry: 3,
    CitrusPulp: 0,
    GroundCorn: 0,
    SorghumGrain: 0,
    SoyBeanMeal: 0,
    FullFatSoyBean: 0,
    GroundBlackeye: 0,
    Molasses: 0.2,
    Concenration: 0.22
  },
  ram0hr: {
    Aruana: 0,
    Maralfafal: 3.5,
    Mulberry: 3.5,
    CitrusPulp: 0,
    GroundCorn: 0,
    SorghumGrain: 0,
    SoyBeanMeal: 0,
    FullFatSoyBean: 0,
    GroundBlackeye: 0,
    Molasses: 0.24,
    Concenration: 0.5
  },
  blackBellySeparate: {
    Aruana: 0,
    Maralfafal: 1.09,
    Mulberry: 1.09,
    CitrusPulp: 0,
    GroundCorn: 0.3,
    SorghumGrain: 0,
    SoyBeanMeal: 0.1,
    FullFatSoyBean: 0,
    GroundBlackeye: 0.18,
    Molasses: 0,
    Concenration: 0
  },
  dorperSeparate: {
    Aruana: 0,
    Maralfafal: 1.82,
    Mulberry: 1.82,
    CitrusPulp: 0,
    GroundCorn: 0.4,
    SorghumGrain: 0,
    SoyBeanMeal: 0,
    FullFatSoyBean: 0,
    GroundBlackeye: 0,
    Molasses: 0.08,
    Concenration: 0.18
  }
}

export const DM_PERCENTAGE = {
  Aruana: 21.00,
  Maralfafal: 18.00,
  Mulberry: 28.40,
  CitrusPulp: 91.80,
  GroundCorn: 86.30,
  SorghumGrain: 89.00,
  SoyBeanMeal: 89.00,
  FullFatSoyBean: 90.00,
  GroundBlackeye: 89.90,
  Molasses: 74.3,
  Concenration: 98
}

export const GROSS_ENERGY = {
  Aruana: {
    TDN: 57.00,
    DE: 2.47,
    ME: 2.03,
    NDF: 37.00,
    ADF: 75.00,
    CP: 6.00,
    Fat: 1.60,
    Ash: null,
    Ca: 0.71,
    Phosphorus: 0.59
  },
  Maralfafal: {
    TDN: 64.00,
    DE: 2.44,
    ME: 2.19,
    NDF: 71.00,
    ADF: 42.00,
    CP: 11.00,
    Fat: 1.76,
    Ash: null,
    Ca: 0.36,
    Phosphorus: 0.29
  },
  Mulberry: {
    TDN: 69.10,
    DE: 2.99,
    ME: 2.39,
    NDF: 32.00,
    ADF: 19.40,
    CP: 19.40,
    Fat: 5.60,
    Ash: 13.20,
    Ca: 2.74,
    Phosphorus: 0.45
  },
  CitrusPulp: {
    TDN: 80.38,
    DE: 3.47,
    ME: 3.12,
    NDF: 24.20,
    ADF: 22.20,
    CP: 6.90,
    Fat: 3.90,
    Ash: 7.2,
    Ca: 1.92,
    Phosphorus: 0.12
  },
  GroundCorn: {
    TDN: 88.00,
    DE: 3.84,
    ME: 3.25,
    NDF: 12.20,
    ADF: 3.00,
    CP: 9.40,
    Fat: null,
    Ash: null,
    Ca: 0.50,
    Phosphorus: 3.00
  },
  SorghumGrain: {
    TDN: 87.40,
    DE: 3.82,
    ME: 3.22,
    NDF: 11.00,
    ADF: 4.30,
    CP: 11.00,
    Fat: null,
    Ash: 2.10,
    Ca: 0.04,
    Phosphorus: 0.32
  },
  SoyBeanMeal: {
    TDN: 84.00,
    DE: 4.34,
    ME: 3.25,
    NDF: 15.00,
    ADF: 10.00,
    CP: 49.00,
    Fat: null,
    Ash: 7,
    Ca: 0.36,
    Phosphorus: 0.70
  },
  FullFatSoyBean: {
    TDN: 94.00,
    DE: 3.41,
    ME: 3.07,
    NDF: 32.00,
    ADF: 19.40,
    CP: 19.40,
    Fat: 5.60,
    Ash: 1.32,
    Ca: 2.47,
    Phosphorus: 0.45
  },
  GroundBlackeye: {
    TDN: 90.00,
    DE: 4.03,
    ME: 3.25,
    NDF: 16.60,
    ADF: 6.60,
    CP: 25.20,
    Fat: null,
    Ash: null,
    Ca: 1.10,
    Phosphorus: 4.20
  },
  Molasses: {
    TDN: 80.94,
    DE: 3.47,
    ME: 3.12,
    NDF: 0.4,
    ADF: 0.2,
    CP: 5.8,
    Fat: 0.2,
    Ash: 13.3,
    Ca: 1,
    Phosphorus: 0.1
  },
  Concenration: {
    TDN: 92,
    DE: 3.2,
    ME: 2.88,
    NDF: 15,
    ADF: 25,
    CP: 14,
    Fat: null,
    Ash: null,
    Ca: 1,
    Phosphorus: 0.75
  }
}
