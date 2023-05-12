const winston = require("winston");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

class APILogger {
  info(message, data) {
    if (data) {
      logger.info(`${message} ${JSON.stringify(data)}`);
    } else {
      logger.info(message);
    }
  }

  error(message) {
    logger.error(message);
  }
}

module.exports = new APILogger();
