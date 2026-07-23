/**
 * PM2 process file for LebPar on the shared Ubuntu host.
 * Usage: pm2 start ecosystem.config.cjs
 */
module.exports = {
  apps: [
    {
      name: "lebpar-web",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
        HOSTNAME: "127.0.0.1",
      },
      max_memory_restart: "400M",
      time: true,
    },
  ],
};
