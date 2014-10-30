// evals user code inside of a sandbox.
// SandCastle gives us nice stacktraces when there's an error
// so we can display them to the user.
// unfortunately, I don't know of a way to execute several scripts,
// and maintain the global namespace between them,
// but I'm looking into it. more to come.
var SandCastle = require('sandcastle').SandCastle;

var sandbox_eval = function(obj, cb) {
  var allCode;
  if (typeof obj === "object") {
    var code = obj.code;
    var test = obj.test;
    var testFun = obj.testFun || 'testFunction';
    var sandBox = obj.sandBox || new SandCastle({timeOut : 6000});
    // call the function named testFun inside the object.
    // kind of a cheap hack but whatever
    allCode = [code, test ].join(";\n");

    console.log(allCode);
  } else {
    throw new Error("expected object");
  }
  var script = sandBox.createScript(allCode);
  // cb gets passed (error, output)
  script.on("exit", cb);
  // we can add additional variables.
  script.run();
};

exports.sandbox_eval = sandbox_eval;