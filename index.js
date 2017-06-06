var startInstance = require('./start');
var stopInstance = require('./stop');

exports.handler = (event, context, callback) => {
    event.instances.forEach((instance) => {
        switch(event.action) {
            case 'stop':
                console.log(`Stopping instance '${instance}'...`);
                stopInstance(instance);
                break;
            case 'start':
                console.log(`Starting instance '${instance}'...`);
                startInstance(instance);
                break;
            default:
                throw `Invalid action ${event.action}`;
        }
    })
    callback(null, 'Done!');
};