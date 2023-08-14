const CustomerModel = require('../../models/CustomerModel');
const CustomerFactory = require('../../domain/CustomerFactory');

module.exports.list = async () => {
  let customers = [];
  try {
    customers = await CustomerModel.find();
  } catch (error) {
    console.error(error);
  }
  return customers.map((customer) => CustomerFactory.format(customer));
};

module.exports.create = async (data) => {
  try {
    const customers = Array.from({ length: 10 }).map(() => data);
    await CustomerModel.insertMany(customers);
  } catch (error) {
    console.error(error);
  }
};

module.exports.remove = async (id) => {
  try {
    await CustomerModel.deleteOne({ _id: id });
  } catch (error) {
    console.error(error);
  }
};

module.exports.update = async (id, data) => {
  try {
    await CustomerModel.updateOne({ _id: id }, data);
  } catch (error) {
    console.error(error);
  }
};

module.exports.find = async (id) => {
  let customer = {};
  try {
    customer = await CustomerModel.findById(id);
  } catch (error) {
    console.error(error);
  }
  return customer;
};
