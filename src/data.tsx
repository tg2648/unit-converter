/**
 * Unit definitions.
 * Search for icons here: https://react-icons.github.io/react-icons/search
 */

import { IconType } from 'react-icons';
import { FaMugHot, FaRuler, FaWeightHanging } from 'react-icons/fa';

export type Unit = {
  unitId: string,
  unitName: string,
  conversionFactor: number,
}

export type Category = {
  categoryId: string,
  categoryName: string,
  categoryIcon: IconType,
  units: Unit[]
}

export const DATA: Category[] = [
  {
    'categoryId': 'length',
    'categoryName': 'Length',
    'categoryIcon': FaRuler,
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
        'unitId': 'feet',
        'unitName': 'Feet',
        'conversionFactor': 3.281
      },
      {
        'unitId': 'yard',
        'unitName': 'Yard',
        'conversionFactor': 1.094
      },
      {
        'unitId': 'inches',
        'unitName': 'Inches',
        'conversionFactor': 39.37
      },
    ]
  },

  {
    'categoryId': 'mass',
    'categoryName': 'Mass',
    'categoryIcon': FaWeightHanging,
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
      {
        'unitId': 'ounce',
        'unitName': 'Ounce',
        'conversionFactor': 35.274
      },
    ]
  },

  {
    'categoryId': 'volume',
    'categoryName': 'Volume',
    'categoryIcon': FaMugHot,
    'units': [
      {
        'unitId': 'liters',
        'unitName': 'Liters',
        'conversionFactor': 1
      },
      {
        'unitId': 'gallons',
        'unitName': 'Gallons',
        'conversionFactor': 0.264
      },
      {
        'unitId': 'cup',
        'unitName': 'Cup',
        'conversionFactor': 4.167
      },
    ]
  },
]