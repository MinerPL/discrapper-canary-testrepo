r.exports = function (r, t, n, e, o, i, u, c) {
	if (!r) {
		var a;
		if (void 0 === t)
			a = Error(
				'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
			);
		else {
			var f = [n, e, o, i, u, c],
				s = 0;
			(a = Error(
				t.replace(/%s/g, function () {
					return f[s++];
				})
			)).name = 'Invariant Violation';
		}
		throw ((a.framesToPop = 1), a);
	}
};
