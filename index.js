const https = require("https");

/**
 * Fetches the public IPv4 address of the machine by querying the ipify API.
 *
 * @returns {Promise<string>} A promise that resolves to the public IP address as a string.
 */
async function getPublicIP() {
  return new Promise((resolve, reject) => {
    https.get("https://api.ipify.org/?format=json", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const ipData = JSON.parse(data);
          resolve(ipData.ip);
        } catch (err) {
          reject(new Error("Failed to parse IP address response."));
        }
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

module.exports = getPublicIP;