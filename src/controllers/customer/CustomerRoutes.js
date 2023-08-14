const { Router } = require('express');

const CustomerController = require('./CustomerController');

const router = Router();

router.get('/customers', async (req, res) => {
  const customers = await CustomerController.list();
  res.render('layout', { page: 'customers/customers-index', customers });
});

router.get('/customers/create', (req, res) => {
  res.render('layout', { page: 'customers/customers-create' });
});

router.get('/customers/:id/edit', async (req, res) => {
  const customer = await CustomerController.find(req.params.id);
  res.render('layout', { page: 'customers/customers-edit', customer });
});

router.post('/api/customers', async (req, res) => {
  await CustomerController.create(req.body);
  res.redirect('/customers');
});

router.post('/api/customers/:id', async (req, res) => {
  await CustomerController.update(req.params.id, req.body);
  res.redirect('/customers');
});

router.get('/api/customers/:id/remove', async (req, res) => {
  await CustomerController.remove(req.params.id);
  res.redirect('/customers');
});

module.exports = router;
