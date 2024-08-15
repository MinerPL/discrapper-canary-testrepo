var e = o(354848),
	n = String,
	c = TypeError;
r.exports = function (r) {
	if ('object' == typeof r || e(r)) return r;
	throw c("Can't set " + n(r) + ' as a prototype');
};
