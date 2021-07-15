export type Unit = {
  unitId: string,
  unitName: string,
  conversionFactor: number,
}

export type Category = {
  categoryId: string,
  categoryName: string,
  units: Unit[]
}

export const DATA: Category[] = [
  {
    'categoryId': 'length',
    'categoryName': 'Length',
    'units': [
      {
        'unitId': 'meters',
        'unitName': 'Meters',
        'conversionFactor': 1
      },
      {
        'unitId': 'centimeters',
        'unitName': 'Centimeters',
        'conversionFactor': 100
      },
      {
        'unitId': 'inches',
        'unitName': 'Inches',
        'conversionFactor': 39.37
      },
    ]
  },

  {
    'categoryId': 'weight',
    'categoryName': 'Weight',
    'units': [
      {
        'unitId': 'kilograms',
        'unitName': 'Kilograms',
        'conversionFactor': 1
      },
      {
        'unitId': 'grams',
        'unitName': 'Grams',
        'conversionFactor': 1000
      },
      {
        'unitId': 'pounds',
        'unitName': 'Pounds',
        'conversionFactor': 2.205
      },
    ]
  },
]