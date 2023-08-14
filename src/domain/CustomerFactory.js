module.exports.format = (customer) => ({
  id: customer._id,
  name: customer.name,
  age: `${customer.age} anos`,
  gender: customer.gender,
  billing: `R$ ${customer.billing}`,
  createdAt: customer.createdAt.toISOString(),
});
