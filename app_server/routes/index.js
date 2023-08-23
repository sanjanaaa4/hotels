var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlOthers = require('../controller/others');

/* GET Locations page */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview);

/*GET others page */
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);

router.get('/register', ctrlOthers.register);
module.exports = router;