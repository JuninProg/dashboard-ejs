const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('layout', { page: 'index' });
});

router.use(require('./controllers/customer/CustomerRoutes'));

module.exports = router;
