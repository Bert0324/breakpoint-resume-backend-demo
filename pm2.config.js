/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
    apps: [
        {
            name: 'breakpoint-resume',
            cwd: __dirname,
            script: './app/index.js',
            instances: 1,
            exec_mode: 'cluster',
            watch: false,
            max_memory_restart: '1G',
            combine_logs: true,
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
            max_restarts: 30,
            min_uptime: '1m',
        },
    ],
};
