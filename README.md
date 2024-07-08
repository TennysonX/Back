# Fibonacci API

The Fibonacci API generates a Fibonacci sequence and calculates its sum based on a specified number of members. It accepts an integer between 1 and 100.

**Parameters :**

-  `memberCount` (integer): The number of members in the Fibonacci sequence (must be between 1 and 100)

**Response :**

-  `member-count`: The number of members requested

-  `sequence`: The Fibonacci sequence

-  `total`: The sum of the Fibonacci sequence
## Installation
1. Clone Repository:

```bash
git clone <https://github.com/TennysonX/Back-end-Developer-Test.git>
```

2. Installing Dependencies:

```bash
npm install
```
## Usage
 Running the Server
 To start the server, use the following command:
```bash
npm start
```
## Testing the API Endpoint
Once the server is running, you can access the API by sending a GET request to the following endpoint:
```
GET http://localhost:3000/api/v1/test/8
```
**Response :**
```json
{
"member-count": 8,
"sequence": [0, 1, 1, 2, 3, 5, 8, 13],
"total": 33
}
```

## Credits

- [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-program-to-print-fibonacci-series/)
-  [Programiz](https://www.programiz.com/javascript/examples/fibonacci-series)