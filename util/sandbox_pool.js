var Pool = require('sandcastle').Pool;

var poolOfSandcastles = new Pool( { numberOfInstances: 3 }, { timeout: 6000 } );

var script = poolOfSandcastles.createScript("\
  exports.main = function() {\
    exit('Hello World!');\
  }\
");

script.on('exit', function(err, output) {
    console.log(output);
});

script.run();