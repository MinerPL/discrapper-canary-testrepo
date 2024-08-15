r.d(t, {
	_: function () {
		return a;
	}
});
let n = (e, t) => (e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'),
	a = (e, t, r, a) => {
		let o, i;
		return (_) => {
			t.value >= 0 &&
				(_ || a) &&
				((i = t.value - (o || 0)) || void 0 === o) &&
				((o = t.value), (t.delta = i), (t.rating = n(t.value, r)), e(t));
		};
	};
