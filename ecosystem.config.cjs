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
      // Pass host/port as CLI args — more reliable than env alone under PM2
      args: "start -H 127.0.0.1 -p 3030",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: "3030",
        HOSTNAME: "127.0.0.1",
      },
      max_memory_restart: "400M",
      time: true,
    },
  ],
};
