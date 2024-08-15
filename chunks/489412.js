var e = r(936940),
	i = r(161581).RegExp,
	u = e(function () {
		var n = i('a', 'y');
		return (n.lastIndex = 2), null !== n.exec('abcd');
	}),
	o =
		u ||
		e(function () {
			return !i('a', 'y').sticky;
		}),
	a =
		u ||
		e(function () {
			var n = i('^r', 'gy');
			return (n.lastIndex = 2), null !== n.exec('str');
		});
n.exports = {
	BROKEN_CARET: a,
	MISSED_STICKY: o,
	UNSUPPORTED_Y: u
};
