n.d(t, {
	BL: function () {
		return u;
	},
	Ct: function () {
		return p;
	},
	F2: function () {
		return a;
	},
	I: function () {
		return i;
	},
	Pj: function () {
		return _;
	},
	YP: function () {
		return f;
	},
	bw: function () {
		return h;
	},
	d7: function () {
		return o;
	},
	k5: function () {
		return E;
	},
	mv: function () {
		return l;
	},
	t$: function () {
		return s;
	},
	ut: function () {
		return c;
	},
	we: function () {
		return r;
	},
	xs: function () {
		return m;
	},
	zV: function () {
		return d;
	}
});
var r = 'top',
	i = 'bottom',
	a = 'right',
	s = 'left',
	o = 'auto',
	l = [r, i, a, s],
	u = 'start',
	c = 'end',
	d = 'clippingParents',
	_ = 'viewport',
	E = 'popper',
	f = 'reference',
	h = l.reduce(function (e, t) {
		return e.concat([t + '-' + u, t + '-' + c]);
	}, []),
	p = [].concat(l, [o]).reduce(function (e, t) {
		return e.concat([t, t + '-' + u, t + '-' + c]);
	}, []),
	m = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];
