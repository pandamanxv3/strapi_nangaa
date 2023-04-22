module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fafdsfdsfdsfsfewhrgdsfvd'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'fsdfdsfdsfgrehtew4trge'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
