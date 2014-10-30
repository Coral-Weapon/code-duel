var sandbox_eval = (require('./sandbox_eval.js')).sandbox_eval;

sandbox_eval({
	code : "\
		var id = function(x){return x};\
	",
	test : "\
		var testFunction = function () {return id(4) === 4;};\
		exports.main = function () {exit(testFunction())}\
	",
}, function (err, output) {
	console.log("err", err);
	console.log("output", output);
});