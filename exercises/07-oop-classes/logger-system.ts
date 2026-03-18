// Exercise: Logger System
//
// Practice: interfaces, implementing interfaces, abstract classes, static members.
//
// 1. Create an interface Logger with:
//    - info(message: string): void
//    - warn(message: string): void
//    - error(message: string): void
//
// 2. Create a ConsoleLogger class that implements Logger.
//    - Each method should prefix the message with a tag:
//      info  → "[INFO] message"
//      warn  → "[WARN] message"
//      error → "[ERROR] message"
//    - Store all messages in a private log array (as strings with the prefix)
//    - Add a getHistory(): string[] method that returns the log array
//
// 3. Create a PrefixedLogger class that also implements Logger.
//    - Constructor takes a prefix string (e.g. "MyApp")
//    - Each method outputs: "[INFO] [MyApp] message" (prefix inserted after tag)
//    - Also stores history like ConsoleLogger
//
// Example:
//   const logger = new ConsoleLogger();
//   logger.info("Server started");
//   logger.error("Connection failed");
//   logger.getHistory()
//   // ["[INFO] Server started", "[ERROR] Connection failed"]
//
//   const appLogger = new PrefixedLogger("API");
//   appLogger.warn("Slow query");
//   appLogger.getHistory()
//   // ["[WARN] [API] Slow query"]

// Your code here


// Test your implementation:
// const logger = new ConsoleLogger();
// logger.info("Server started");
// logger.warn("High memory usage");
// logger.error("Connection failed");
// console.log(logger.getHistory());
//
// const appLogger = new PrefixedLogger("API");
// appLogger.info("Request received");
// appLogger.warn("Slow query");
// console.log(appLogger.getHistory());
