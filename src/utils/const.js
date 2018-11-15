export const ICDF_LINK = 'http://www.icdf.org.tw/ct.asp?xItem=52227&ctNode=29877&mp=2j5QEKxz0rKT0Mjva6u5YtilodjSEJ2SHD_po1Z5GTiaO4'

export const UNIT = 'Kg/Day'
export const GRASS_ENERGY_TYPES_UNIT = {
  TDN: '%DM',
  DE: 'Mcal/kg',
  ME: 'Mcal/kg',
  NDF: '%DM',
  ADF: '%DM',
  CP: '%DM',
  Ca: '%DM',
  Phosphorus: '%DM'
}
export const resultTableHeader = ['Supply', 'Require', 'Balance']

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

export const GRASS_ENERGY_TYPES = [
  'TDN',
  'DE',
  'ME',
  'CP',
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

export const GRASS_ENERGY = {
  Aruana: {
    TDN: 0.57,
    DE: 2.47,
    ME: 2.03,
    NDF: 0.37,
    ADF: 0.75,
    CP: 60,
    Ca: 7.1,
    Phosphorus: 5.9
  },
  Maralfafal: {
    TDN: 0.64,
    DE: 2.44,
    ME: 2.19,
    NDF: 0.71,
    ADF: 0.42,
    CP: 110,
    Ca: 3.6,
    Phosphorus: 2.9
  },
  Mulberry: {
    TDN: 0.691,
    DE: 2.99,
    ME: 2.39,
    NDF: 0.32,
    ADF: 0.194,
    CP: 194,
    Ca: 27.4,
    Phosphorus: 4.5
  },
  CitrusPulp: {
    TDN: 0.8038,
    DE: 3.47,
    ME: 3.12,
    NDF: 0.242,
    ADF: 0.222,
    CP: 69,
    Ca: 19.2,
    Phosphorus: 1.2
  },
  GroundCorn: {
    TDN: 0.88,
    DE: 3.84,
    ME: 3.25,
    NDF: 0.122,
    ADF: 0.03,
    CP: 94,
    Ca: 5,
    Phosphorus: 30
  },
  SorghumGrain: {
    TDN: 0.874,
    DE: 3.82,
    ME: 3.22,
    NDF: 0.11,
    ADF: 0.0430,
    CP: 110,
    Ca: 0.4,
    Phosphorus: 3.2
  },
  SoyBeanMeal: {
    TDN: 0.84,
    DE: 4.34,
    ME: 3.25,
    NDF: 0.15,
    ADF: 0.10,
    CP: 490,
    Ca: 3.6,
    Phosphorus: 7
  },
  FullFatSoyBean: {
    TDN: 0.94,
    DE: 3.41,
    ME: 3.07,
    NDF: 0.32,
    ADF: 0.194,
    CP: 194,
    Ca: 24.7,
    Phosphorus: 4.5
  },
  GroundBlackeye: {
    TDN: 0.90,
    DE: 4.03,
    ME: 3.25,
    NDF: 0.166,
    ADF: 0.066,
    CP: 252,
    Ca: 11,
    Phosphorus: 42
  },
  Molasses: {
    TDN: 0.8094,
    DE: 3.47,
    ME: 3.12,
    NDF: 0.004,
    ADF: 0.002,
    CP: 58,
    Ca: 10,
    Phosphorus: 1
  },
  Concenration: {
    TDN: 0.92,
    DE: 3.2,
    ME: 2.88,
    NDF: 0.15,
    ADF: 0.25,
    CP: 140,
    Ca: 10,
    Phosphorus: 7.5
  }
}
