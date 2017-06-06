var AWS = require('aws-sdk');

module.exports = (instanceId) => {
    var rds = new AWS.RDS();
    var params = {
      DBInstanceIdentifier: instanceId
    };
    rds.startDBInstance(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};