var r = n(706627),
	i = n(292403),
	a = n(906087),
	s = Object.prototype.hasOwnProperty;
e.exports = function (e) {
	if (!r(e)) return a(e);
	var t = i(e),
		n = [];
	for (var o in e) !('constructor' == o && (t || !s.call(e, o))) && n.push(o);
	return n;
};
