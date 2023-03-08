const admin = require('firebase-admin');
const faker = require('faker');

// Replace these values with your own Firebase project credentials
const serviceAccount = require('./serviceAccount.json');
const projectId = 'music-therapy-manager-ff592';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${projectId}.firebaseio.com`
});

const db = admin.firestore();

async function generateDummyData() {
  for (let i = 0; i < 10; i++) {
    const businessRef = db.collection('businesses').doc();
    await businessRef.set({
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      name: faker.company.companyName(),
      phone: faker.phone.phoneNumber()
    });
    for (let j = 0; j < 5; j++) {
      const therapistRef = businessRef.collection('therapists').doc();
      await therapistRef.set({
        email: faker.internet.email(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        phone: faker.phone.phoneNumber()
      });
      for (let k = 0; k < 20; k++) {
        const patientRef = therapistRef.collection('patients').doc();
        await patientRef.set({
          email: faker.internet.email(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          phone: `${faker.phone.phoneNumber()}`
        });

        for (let l = 0; l < 10; l++) {
          const sessionRef = patientRef.collection('sessions').doc();
          await sessionRef.set({
            date: `${faker.date.past().toISOString()}`,
            duration: `${Math.floor(Math.random() * 120)}`,
            notes: [`${faker.lorem.sentence()}`],
            progress: `${Math.floor(Math.random() * 100)}`
          })
        }

        for (let m = 0; m < 5; m++) {
          const invoiceRef = patientRef.collection('invoices').doc();
          await invoiceRef.set({
            amount: `${Math.floor(Math.random() * 10000)}`,
            date: `${faker.date.past().toISOString()}`,
            notes: [`${faker.lorem.sentence()}`],
            status: `${["paid", "unpaid", "pending"][Math.floor(Math.random() * 3)]}`
          })
        }
      }
    }
  }
}

generateDummyData().then(() => {
  console.log("Dummy data written to Firestore");
});