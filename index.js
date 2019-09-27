const Bot = require("./src/Bot");
const instance = new Bot();

process.on("SIGINT", async () => {
    await instance.exit();
    process.exit(0);
});

module.exports = instance;