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
        'unitId': 'kilometers',
        'unitName': 'Kilometers',
        'conversionFactor': 0.001
      },
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
        'unitId': 'millimeters',
        'unitName': 'Millimeters',
        'conversionFactor': 1000
      },
      {
        'unitId': 'miles',
        'unitName': 'Miles',
        'conversionFactor': 0.000621371
      },
      {
        'unitId': 'feet',
        'unitName': 'Feet',
        'conversionFactor': 3.281
      },
      {
        'unitId': 'yard',
        'unitName': 'Yards',
        'conversionFactor': 1.094
      },
      {
        'unitId': 'inches',
        'unitName': 'Inches',
        'conversionFactor': 39.370078740157
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
        'conversionFactor': 2.20462
      },
      {
        'unitId': 'ounce',
        'unitName': 'Ounces',
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
        'unitId': 'milliliter',
        'unitName': 'Milliliter',
        'conversionFactor': 1000
      },
      {
        'unitId': 'gallons',
        'unitName': 'Gallons',
        'conversionFactor': 0.264172
      },
      {
        'unitId': 'quart',
        'unitName': 'Quarts',
        'conversionFactor': 1.05669
      },
      {
        'unitId': 'pint',
        'unitName': 'Pints',
        'conversionFactor': 2.11338
      },
      {
        'unitId': 'cup',
        'unitName': 'Cups',
        'conversionFactor': 4.22675
      },
      {
        'unitId': 'ounce',
        'unitName': 'Ounces',
        'conversionFactor': 33.814
      },
    ]
  },
]