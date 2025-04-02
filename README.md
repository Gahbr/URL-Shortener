# URL Shortener API Documentation

## Overview
The URL Shortener API provides a simple and efficient way to shorten long URLs and retrieve their original versions using shortened links. This project is designed to run on AWS Lambda, ensuring scalability and cost-effectiveness. Additionally, it includes GitHub workflows for CI/CD automation.  

For the front-end implementation, visit the [URL Shortener Frontend Repository](https://github.com/Gahbr/URL-Shortener-Frontend).

- **Version**: 1.0.3  
- **Author**: Gabriel Ribeiro  
- **License**: MIT  

## Base URL

The base URL for this API is:  
`http://localhost:4000`

## Endpoints

### 1. POST `/shorturl`

**Description**: Creates a shortened URL.  

**Request Body**:
```json
{
  "url": "string"
}
```
- `url`: The original URL you want to shorten.

**Response**:  
- **200 OK**: Returns the shortened URL.
    ```json
    {
      "shortId": "short123",
      "originalUrl": "https://www.example.com"
    }
    ```
- **400 Bad Request**: If the provided URL is invalid.
    ```json
    {
      "error": "Invalid URL"
    }
    ```

**Example Request**:
```bash
curl -X POST http://localhost:4000/shorturl -H "Content-Type: application/json" -d '{"url": "https://www.example.com"}'
```

**Example Response**:
```json
{
  "shortId": "abc123",
  "originalUrl": "https://www.example.com"
}
```

---

### 2. GET `/:input`

**Description**: Redirects to the original URL for the given shortened ID.  

**Parameters**:  
- `input`: The shortened URL ID.

**Response**:  
- **200 OK**: Returns the original URL.
    ```json
    {
      "originalUrl": "https://www.example.com"
    }
    ```
- **404 Not Found**: If the shortened URL ID does not exist.
    ```json
    {
      "error": "URL not found"
    }
    ```

**Example Request**:
```bash
curl http://localhost:4000/abc123
```

**Example Response**:
```json
{
  "originalUrl": "https://www.example.com"
}
```

---

### 3. GET `/url/all`

**Description**: Retrieves a list of all stored URLs.  

**Response**:  
- **200 OK**: Returns a list of all stored URLs.
    ```json
    [
      {
        "shortId": "abc123",
        "originalUrl": "https://www.example.com"
      },
      {
        "shortId": "xyz456",
        "originalUrl": "https://www.another-example.com"
      }
    ]
    ```

**Example Request**:
```bash
curl http://localhost:4000/url/all
```

**Example Response**:
```json
[
  {
    "shortId": "abc123",
    "originalUrl": "https://www.example.com"
  },
  {
    "shortId": "xyz456",
    "originalUrl": "https://www.another-example.com"
  }
]
```

---

## Middleware

- **CORS**: Cross-Origin Resource Sharing is enabled.  
- **Body Parser**: Parses incoming request bodies in JSON format.

---

## Error Handling

The API includes error handling for various scenarios. If an error occurs during a request, a standard error message is returned:

- **500 Internal Server Error**: General server errors.
    ```json
    {
      "error": "Something went wrong!"
    }
    ```
- **400 Bad Request**: In case of a bad request or invalid URL.
    ```json
    {
      "error": "Invalid URL"
    }
    ```
- **404 Not Found**: If a requested URL ID cannot be found.
    ```json
    {
      "error": "URL not found"
    }
    ```

---

## Development Setup

To start the application locally, follow these steps:

1. Clone the repository.  
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the application:
    ```bash
    npm start
    ```
4. To run in development mode (with TypeScript):
    ```bash
    npm run dev
    ```

---

## Available Scripts

- `start`: Starts the server using Node.js.  
- `build`: Compiles the TypeScript files.  
- `dev`: Runs the server in development mode using ts-node.  
- `lint`: Lints the project files with Prettier.  
- `package`: Packages the source files using a custom shell script.  
- `offline`: Starts the serverless offline environment on port 4000.  

---

## Dependencies

- `express`: Web framework for building the API.  
- `mongoose`: MongoDB ODM for interacting with the database.  
- `cors`: Middleware to enable CORS.  
- `dotenv`: Loads environment variables.  
- `serverless-http`: Helps integrate with the Serverless framework.  
- `valid-url`: Validates the URL format.  

### Development Dependencies

- `typescript`: TypeScript compiler.  
- `prettier`: Code formatting tool.  
- `serverless-offline`: Simulates AWS Lambda and API Gateway locally.  
- `@types/`: Type definitions for TypeScript compatibility.  

---

## License

This project is licensed under the MIT License.

---

## Author

Gabriel Ribeiro
