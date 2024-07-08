# Fibonacci API
API นี้คือการสร้างลำดับ Fibonacci และคำนวณผลรวมของมันตามจำนวนสมาชิกที่กำหนด โดยรับค่าตัวเลขระหว่าง 1 ถึง 100 
## Endpoints Example 

```json
{
“member-count”: 8,
“sequence”: [ 0, 1, 1, 2, 3, 5, 8, 13 ],
“total”: 33
}
```
## Endpoints 
```
GET /api/v1/test/:memberCount
```
**Parameters :**
- `memberCount` (integer): จำนวนสมาชิกของลำดับ Fibonacci (ต้องอยู่ระหว่าง 1 ถึง 100)

**Response :**
- `member-count`: จำนวนสมาชิกที่ใส่เข้ามา
- `sequence`: ลำดับของ Fibonacci
- `total`: ผลรวมของลำดับ Fibonacci

## Usage
1. Clone Repository:
    ```bash
    git clone <repository-url>
    cd fibonacci-api
    ```

2. Installing Dependencies:
    ```bash
    npm install
    ```

3. Start Server::
    ```bash
    npm start
    ```
## Build & Run

```bash
npm run build
npm start
```
## Credits
- [geeksforgeeks](https://www.geeksforgeeks.org/javascript-program-to-print-fibonacci-series/)