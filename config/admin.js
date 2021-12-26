module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88e28566f7cb995dcb4ba3b14bf99959'),
  },
});
