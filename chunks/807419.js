var n = r(657398),
	a = r(706627);
e.exports = function (e) {
	if (!a(e)) return !1;
	var t = n(e);
	return (
		'[object Function]' == t ||
		'[object GeneratorFunction]' == t ||
		'[object AsyncFunction]' == t ||
		'[object Proxy]' == t
	);
};
