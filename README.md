###

PROJECT DOCUMENTATION

Project goal: to introduce breweries from Tampere area and their products. To practice data scraping and full stack development in React/Redux framework.

Steps:

1. Data scraping from the Nokian Panimo website using XML import (Google Sheets) and JSON conversion. The downside of this simple method is that the data is static and should be manually updated

2. Placing scraped data to JSON server. The data is fetched and updated by using Axios. Implementation of Redux-based state control. At this point the user is able to filter products by their names and vote their favorites. The amount of votes per user is not limited.

3. Styling the site by using modular CSS.

4. Creating custom SVG icons

5. Creating a modal for age verification

6. Creating a custom hook for setting overflow hidden when the age verification modal is visible
