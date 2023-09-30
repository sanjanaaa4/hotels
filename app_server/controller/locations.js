module.exports.homelist = function(req, res) {
    renderHomepage(req, res);
};

var renderHomepage = function(req, res){
    res.render('location-list', {
        title: 'HotelRoom - Find hotels to stay!',
        pageHeader: {
            title: 'Hotel Room',
            strapline: 'Find hotels to stay near you'
        },
        sidebar: "Looking for hotel Rooms near you?Go check in hotel Rooms website for better experience."
    });
};


/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
      title: 'Tulips',
      pageHeader: {
          title: 'Tulips'
      },
      sidebar: {
          context: 'is well-know for its ambience and delicious food .',
          callToAction: 'Room Service and varities of food will be provided'
      },
      location: {
          name: 'Tulips',
          address: 'jodimetla,pocharam,hyderabad',
          rating: 3,
          facilities: ['Rooms', 'Food', 'Spa'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};


/* GET 'Location info 2' page */
module.exports.locationInfo2 = function(req, res) {
  res.render('location-info2', {
      title: 'Novetel',
      pageHeader: {
          title: 'Novetel'
      },
      sidebar: {
          context: 'Novetel is well-known for business meetings.',
          callToAction: 'you can have your luxury lifestyle and experience the great infrastructure.'
      },
      location: {
          name: 'Novetel',
          address: 'Hi-Tech City',
          rating: 3,
          facilities: ['Clean and spacious Rooms', 'Restaurant', 'Wellness center'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};


/* GET 'Location info 3' page */
module.exports.locationInfo3 = function(req, res) {
  res.render('location-info3', {
      title: 'ITc kaktaiya',
      pageHeader: {
          title: 'ITc Kaktaiya'
      },
      sidebar: {
          context: 'is good hotel for food',
          callToAction: 'If you`ve been and you likeit -or if you dont - please leave a review to help other people just like you.'
      },
      location: {
          name: 'ITc Kakatiya',
          address: 'Begumpet,Hyderabad',
          rating: 3,
          facilities: ['Rooms', 'Food', 'premium wifi'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {
      title: 'Review Tulips on HotelRooms',
      pageHeader: {
          title: 'Review Tulips'
      }
  });
};
