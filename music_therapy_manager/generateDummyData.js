const faker = require('faker');
const fs = require('fs');

const data = [];

// Generate dummy businesses, therapists, patients, sessions, and invoices
for (let i = 0; i < 10; i++) {
  const therapists = [];

  for (let j = 0; j < 5; j++) {
    const patients = [];

    for (let k = 0; k < 20; k++) {
      const sessions = [];

      for (let l = 0; l < 5; l++) {
        sessions.push({
          date: faker.date.past(),
          time: faker.time.recent(),
          duration: faker.random.number({min: 30, max: 120}),
          notes: faker.lorem.sentences(3),
          progress: faker.random.number({min: 1, max: 10})
        });
      }

      const invoices = [];

      for (let m = 0; m < 3; m++) {
        invoices.push({
          date: faker.date.past(),
          amount: faker.random.number({min: 50, max: 500}),
          status: faker.random.arrayElement(['paid', 'unpaid']),
          notes: faker.lorem.sentences(2)
        });
      }

      patients.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        sessions: sessions,
        invoices: invoices
      });
    }

    therapists.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      patients: patients
    });
  }

  data.push({
    name: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    therapists: therapists
  });
}

// Write data to JSON file
fs.writeFile('dummy-data.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('Data written to file.');
});
