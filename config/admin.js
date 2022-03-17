module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd03350110fc0b8747fa0755688bfe4e7'),
  },
  watchIgnoreFiles: ['**/db/**'],
});
