# Weather-Dashboard

### Description

The purpose of this project was to create a weather dashboard that pulls data from OpenWeather to produce current weather stats as well as a five day forecast for a city inputted by the user. The user's search history is stored and displayed on the page so long as they stay on the page. This serves to deliver concise weather data to users.

Components:
1. Bootstrap grid
2. CSS Styling
3. Bootstrap navbar
4. Search bar with input field and search button
 - Fontawesome icon for search button
5. Separate divs for displaying current weather and 5-day forecast
6. Ajax calls using OpenWeather query urls and API key
 - data indexing
7. jQuery generated titles, text, and bootstrap cards
 - css styling overrides bootstrap styling of cards
8. localStorage
9. Media queries to optimize user experience on mobile devices
10. Googlefonts
11. Super cool background

### Links to Project

https://github.com/svivoli/Weather-Dashboard  
https://svivoli.github.io/Weather-Dashboard/

### User Experience

![Blank Page](https://i.imgur.com/KmGt2uD.jpg)

The user is greeted with a somewhat barren page, their attention directed toward the search bar in the top left corner.

![Current Weather](https://i.imgur.com/lxIWrKG.png)

Upon inputting a city, a div to the right expands to display the current weather. The current weather data that is displayed includes temperature, humidity, and wind speed. The city name, date, and current weather icon are displayed as a title at the top.

![Forecast](https://i.imgur.com/t4G58Bg.png)

In a div below the current weather, the 5-day forecast for that city is displayed on bootstrap cards. For each day, the date, weather icon, temperature, and humidity are displayed, corresponding to data at the 03:00:00 hour of that date. 

![Full Page](https://i.imgur.com/Yy8ip70.jpg)

As the user performs multiple searches, their search history is displayed below the search bar. 

### Developer Experience

Code Summary:
- Concise
- One for loop used for 5-day forecast

Unresolved:
- Search history lines cannot be clicked to display data for those cities
- Media queries are a bit messy

I enjoyed incorporating ajax calls into this project. Giving the user access to third-party data makes a site feel vastly more functional. I am excited to see what's possible when using more than one API.

--Sarah Vivoli


