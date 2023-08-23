module.exports.homeList= function(req,res){
  res.render('location-list',{title:'Home'});
};

module.exports.locationInfo= function(req,res){
  res.render('location-info',{title:'tulips'});
};
module.exports.locationInfo1= function(req,res){
  res.render('location-info1',{title:'novotel'});
};
module.exports.locationInfo2= function(req,res){
  res.render('location-info2',{title:'itc  kakatiya'});
  
};

module.exports.addReview= function(req,res){
  res.render('location-review-form',{title:'Add review'});
};