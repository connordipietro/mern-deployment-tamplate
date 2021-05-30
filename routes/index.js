
const router = require("express").Router();
const generatePassword = require('password-generator');
const testDbItem = require("../models/test-model.js");
const testDbItemData = require("../dev/test-data.js")

//Generate test data to populate the database 
router.get("/generate-test-data", (req, res)=> {
  testDbItem.deleteMany({})
  .exec()
  .then(
    testDbItemData.forEach(testItem => {
      let newTestDataEntry = new testDbItem(testItem);

      newTestDataEntry.save((err) => {

        if (err) throw err;

      });
    }) 
  )
  res.send('Saved the test data!');
});

//Get the test data!
router.get("/test-data", (req, res) => {
  testDbItem.find({})
    .then((results) => res.send(results))
    .catch((err) => res.send(err))
});

router.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

module.exports = router;