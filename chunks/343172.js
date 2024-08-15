var r = n(661233),
	i = n(876557),
	a = n(213066),
	s = Object.prototype.hasOwnProperty;
e.exports = function (e) {
	if (!r(e)) return a(e);
	var t = i(e),
		n = [];
	for (var o in e) !('constructor' == o && (t || !s.call(e, o))) && n.push(o);
	return n;
};
