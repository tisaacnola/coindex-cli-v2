# Coindex CLI V2

Due to sunsetting of the nomics api and Inquirer.js moving from Commonjs to ES6 modules

This is an updated version of Brad Travesty's Command line interface written in Node.js to check cryptocurrency prices

Original CLI github: https://github.com/bradtraversy/coindex-cli

Register an API key at https://coingecko.com

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
```

### Version

2.0.0

### License

MIT
