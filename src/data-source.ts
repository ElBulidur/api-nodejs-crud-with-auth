import { DataSource } from "typeorm";

require("dotenv").config();

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        logging: ["error"],
        maxQueryExecutionTime: 500,
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",

        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_END === "production"
            ? { rejectUnauthorized: false }
            : false,
        synchronize: false,
        logging: true,
        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/entities/*.ts"]
            : ["src/entities/*.ts"],
        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.ts"]
            : ["src/entities/*.ts"],
      });