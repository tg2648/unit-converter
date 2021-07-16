
<img src="public/icon-192x192.png" alt="logo" width="100"/>

# Unit Converter

This is a simple unit converter that is published at [tg2648.github.io/unit-converter](https://tg2648.github.io/unit-converter/) as a progressive web app, which means you can use it like an app on your phone. I wanted to create a converter that is simple to use and only has a handful of common units. However, more units can be added by editing the [data file](src/data.tsx). The `DATA` variable contains unit definitions group by unit category (lenght, mass, etc.). Within each category, units are converted against one common unit (identified by having a `conversionFactor` of 1).