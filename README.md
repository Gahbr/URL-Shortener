<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#layout">Layout</a> • 
 <a href="#user-stories">User Stories</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#tech-stack">Tech Stack</a> 
</p>

## About

A Nodejs Microservice that shortens URL's. This project was proposed as a challenge in freecodecamp's "Back End Development and APIs" course. Link : https://shortenmylink.herokuapp.com

---

## Layout

![Screenshot 2022-08-31 at 21-31-36 URL Shortener Microservice Node js](https://user-images.githubusercontent.com/80289718/187807825-ea0ed20a-244e-4abe-8e8b-05284a749bdc.png)

---

## User Stories

- The API endpoint is GET [project_url]/api/shorturl/<shortenedUrl>

- You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties.
  Here's an example: {original_url:'https://freeCodeCamp.org', short_url : 1}

- When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

- If you pass an invalid URL that doesn't follow the valid http://www.example.com format,
  the JSON response will contain{ error: 'invalid url' }

---

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the application (server)

```bash
# Clone this repository
$ git clone https://github.com/Gahbr/URL-Shortener
# Access the project folder cmd/terminal
$ cd URL-Shortener
# install the dependencies
$ npm install
# Run the application in development mode
$ npm run dev
# The server will start at port: 3000 - go to http://localhost:3000
```

---

## Tech Stack

The following tools were used in the construction of the project:

> See the file [package.json](https://github.com/Gahbr/URL-Shortener/blob/main/package.json)

#### [](https://github.com/Gahbr/URL-Shortener)**Server**

- **[Nodejs](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[MongoDB](https://mongodb.com)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Mongoose](https://mongodb.com/)**
- **[Valid URL](https://www.npmjs.com/package/valid-url)**
- **[BodyParser](https://www.npmjs.com/package/body-parser)**

---
