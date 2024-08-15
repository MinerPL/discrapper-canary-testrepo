var n = r(807419),
	a = r(143283),
	o = r(706627),
	i = r(19235),
	_ = /^\[object .+?Constructor\]$/,
	E = Object.prototype,
	s = Function.prototype.toString,
	c = E.hasOwnProperty,
	I = RegExp(
		'^' +
			s
				.call(c)
				.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
				.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	);
e.exports = function (e) {
	return !(!o(e) || a(e)) && (n(e) ? I : _).test(i(e));
};
