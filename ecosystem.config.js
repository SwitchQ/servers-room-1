module.exports = {
  apps: [
    {
      name: "servers-room-1",
      script: "npm",
      args: "start",
      cwd: "/home/forge/servers.pages.switchq.co.il", // Update this path
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
    },
  ],
};
