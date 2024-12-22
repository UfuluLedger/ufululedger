# Node.js Express Content Ownership

This project is a decentralized content ownership management system built using Node.js and Express. It interacts with a smart contract deployed on the Ethereum blockchain to manage content registration, ownership, and transfer.

## Project Structure

```
nodejs-express-content-ownership
├── src
│   ├── app.js                  # Entry point of the application
│   ├── routes
│   │   └── contentRoutes.js    # Routes for content operations
│   ├── controllers
│   │   └── contentController.js # Controller for handling content requests
│   ├── services
│   │   └── contentService.js    # Service for interacting with the smart contract
│   └── config
│       └── web3Config.js       # Web3 configuration for Ethereum connection
├── package.json                 # NPM configuration file
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nodejs-express-content-ownership
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```
   ETH_NODE_URL=<your_ethereum_node_url>
   CONTRACT_ADDRESS=<your_contract_address>
   ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage

- **Register Content:**
  POST `/api/content/register`
  
- **Transfer Ownership:**
  POST `/api/content/transfer`

- **Get Content Details:**
  GET `/api/content/:contentHash`

- **Get User Contents:**
  GET `/api/content/user/:ownerAddress`

## License

This project is licensed under the MIT License.