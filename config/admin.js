module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc2544f97e63ea64f8f4fccb522923a0'),
  },
});
