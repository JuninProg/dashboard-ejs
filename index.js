const { listen } = require('./src/Server');

(async () => {
  try {
    await listen();
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
})();
