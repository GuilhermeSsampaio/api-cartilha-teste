module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL"),
    },
    //
  },
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: env("DATABASE_URL", {
//       ssl: env.bool("DATABASE_SSL", false),
//     }),
//   },
// });
