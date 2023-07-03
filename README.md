<img src="public/icon-192x192.png" alt="logo" width="100"/>

# Unit Converter
This is a simple unit converter published at [tg2648.github.io/unit-converter](https://tg2648.github.io/unit-converter/), which can be ["installed"](https://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/) like an app. I wanted to create a converter that is simple to use and only has a handful of common units. 

## Adding more units
The `DATA` variable in [src/data.tsx](src/data.tsx) contains units grouped by category (length, mass, etc.). Within each category, units are converted against one common unit (identified by having a `conversionFactor` of 1).
