var r = {
	'./ggsans-400-normal.woff2': '776764',
	'./ggsans-500-mediumitalic.woff2': '811135',
	'./ggsans-600-semibolditalic.woff2': '480854',
	'./ggsans-700-bold.woff2': '909671',
	'./ggsans-600-semibold.woff2': '151859',
	'./ggsans-400-normalitalic.woff2': '963686',
	'./ggsans-500-medium.woff2': '5983',
	'./ggsans-800-extrabolditalic.woff2': '69891',
	'./ggsans-700-bolditalic.woff2': '228978',
	'./ggsans-800-extrabold.woff2': '362799'
};
function i(e) {
	return Promise.resolve().then(function () {
		if (!n.o(r, e)) {
			var t = Error("Cannot find module '" + e + "'");
			throw ((t.code = 'MODULE_NOT_FOUND'), t);
		}
		var i = r[e];
		return n.t(i, 17);
	});
}
(i.keys = function () {
	return Object.keys(r);
}),
	(i.id = '529305'),
	(e.exports = i);
