export type UnitDataType = {
  unitId: string,
  unitName: string,
  conversionFactor: number,
}

export type CategoryDataType = {
  categoryId: string,
  categoryName: string,
  units: UnitDataType[]
}

export const DATA: CategoryDataType[] = [
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
  }
]