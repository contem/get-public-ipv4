const getPublicIP = require("get-public-ipv4");

(async () => {
  try {
    const ip = await getPublicIP();
    console.log("Public IP:", ip);
  } catch (err) {
    console.error("Failed to fetch public IP:", err);
  }
})();
