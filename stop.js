var AWS = require('aws-sdk');

module.exports = (instanceId) => {
    var rds = new AWS.RDS();
    var today = new Date();
    var params = {
      DBInstanceIdentifier: instanceId, 
      DBSnapshotIdentifier: `${instanceId}-${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}-${today.getTime()}`
    };
    rds.stopDBInstance(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};