module.exports.homeList= function(req,res){
  res.render('location-list',{title:'Home'});
};

module.exports.locationInfo= function(req,res){
  res.render('location-info',{title:'Grand hotel'});
};
module.exports.locationInfo1= function(req,res){
  res.render('location-info1',{title:'Roosevelt hotel'});
};
module.exports.locationInfo2= function(req,res){
  res.render('location-info2',{title:'Plaza Hotel'});
};

module.exports.addReview= function(req,res){
  res.render('location-review-form',{title:'Add review'});
};