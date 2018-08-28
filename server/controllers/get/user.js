var User = require('../../models/user');

exports.getList = function (req, res) {
  User.find({}).sort({created:-1}).limit(10).lean().exec(function (error, result) {
    if (error) {
      return res.status(500).send(error);
    }
    else {
      res.status(200).send(result);
    }
  });
};
exports.userDetails = function (req,res) {
  var id = req.params.id;
  User.findOne({_id:id},function (error,result) {
    if (error) {
      return res.status(500).send(error);
    }
    else {
      res.status(200).send(result);
    }
  })
}
