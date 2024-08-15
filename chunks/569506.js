var r = n(867996),
	i = n(350780),
	a = n(661233),
	s = n(785775),
	o = /^\[object .+?Constructor\]$/,
	l = Object.prototype,
	u = Function.prototype.toString,
	c = l.hasOwnProperty,
	d = RegExp(
		'^' +
			u
				.call(c)
				.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
				.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	);
e.exports = function (e) {
	return !(!a(e) || i(e)) && (r(e) ? d : o).test(s(e));
};
