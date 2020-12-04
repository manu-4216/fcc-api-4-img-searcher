## Image Search Abstraction Layer

Objective: Build a full stack JavaScript app that allows you to search for images and browse recent search queries, and then deploy it to Heroku

**User Stories:**

 1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
 2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
 3. I can get a list of the most recently submitted search strings.
 
There are 2 endpoints, on the /api endpoint:
 - /api/search/:query
 - /api/recent
 
 
