function r(e, t) {
	if (!e) throw Error(t);
}
n.d(t, {
	E_: function () {
		return s;
	},
	fp: function () {
		return a;
	},
	hu: function () {
		return r;
	},
	ug: function () {
		return i;
	}
});
function i(e) {
	if ('number' != typeof e) throw Error('invalid int 32: ' + typeof e);
	if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw Error('invalid int 32: ' + e);
}
function a(e) {
	if ('number' != typeof e) throw Error('invalid uint 32: ' + typeof e);
	if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw Error('invalid uint 32: ' + e);
}
function s(e) {
	if ('number' != typeof e) throw Error('invalid float 32: ' + typeof e);
	if (Number.isFinite(e) && (e > 3.4028234663852886e38 || e < -3.4028234663852886e38))
		throw Error('invalid float 32: ' + e);
}
