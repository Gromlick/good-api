import { createLogger, config, transports, format } from "winston";

export default createLogger({
    level: "debug",
    levels: config.npm.levels,
    transports: [
        new transports.Console({
            format: format.combine(
                format.cli(),
                format.splat(),
            ),
        }),
    ],

    format: format.combine(
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
    ),
});