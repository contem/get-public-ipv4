# 🌐 get-public-ipv4

Simple utility to get the **public IPv4 address** of your machine using the `ipify.org` API.

---

## 📦 Installation

### Using npm

```bash
npm install get-public-ipv4
```

### Using yarn

```bash
yarn add get-public-ipv4
```

---

## 🚀 Usage

```js
const getPublicIP = require("get-public-ipv4");

(async () => {
  try {
    const ip = await getPublicIP();
    console.log("Public IPv4 address:", ip);
  } catch (err) {
    console.error("Failed to fetch public IP:", err);
  }
})();
```

---

## ⚙️ Options

No options are required.  
The module performs a single HTTP request to retrieve the caller's public IP address.

---

## 🌐 How it Works

This module sends a `GET` request to:

```
https://api.ipify.org?format=json
```

And returns your public IPv4 address in string format (e.g. `"85.105.12.34"`).

---

## 📤 Output Example

```bash
Public IPv4 address: 85.105.12.34
```

---

## 🧪 Run Test

```bash
node test.js
```

> You can also run the function directly to see your current IP.

---

## 🪪 License

```
MIT
```
