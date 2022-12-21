const fs = require("fs");
const path = require("path");
const configPath = path.resolve(__dirname, "bot-config.json");

let DefaultBotConfig = {
    Token: "MTA1NDc5NDYyNjI5NDM2NjMxOA.GUi-Ci.wMAneYuM_lIz0sbf4UmloAX8zXrF-ZruMca_uM",
    Owner: "708727559432699994",
}

if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(DefaultBotConfig, null, 4));
} else {
    let existingConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    DefaultBotConfig = Object.assign(DefaultBotConfig, existingConfig);
}

module.exports = DefaultBotConfig;
