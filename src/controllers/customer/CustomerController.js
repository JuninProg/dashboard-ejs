const CustomerModel = require('../../models/CustomerModel');

module.exports.list = async () => {
  let customers = [];
  try {
    customers = await CustomerModel.find();
  } catch (error) {
    console.error(error);
  }
  return customers;
};
