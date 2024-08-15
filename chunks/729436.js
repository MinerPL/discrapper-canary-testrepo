n.d(t, {
	Cc: function () {
		return f;
	},
	Hd: function () {
		return s;
	},
	QE: function () {
		return o;
	},
	qB: function () {
		return u;
	}
});
var r = n(470079),
	i = n(392711),
	a = n(366040);
let s = (e) =>
		e.sort((e, t) => {
			var n, r;
			return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0);
		}),
	o = (e) => {
		if ('1228233381897179137' === e.id || '1228234629429985300' === e.id) {
			var t;
			(null === (t = e.config.effects) || void 0 === t ? void 0 : t.length) >= 2 && (e.config.effects[1].start = 2832);
		}
		return e;
	},
	l = (e, t) => ('png' === t ? e : '.png' === e.slice(e.length - 4, e.length) ? e.slice(0, e.lastIndexOf('.png')) + '.' + t : e),
	u = (e) => {
		let t = (0, a.w7)('Profile Effect Component');
		void 0 !== e && (e.effects = e.effects.map((e) => ((e.src = l(e.src, t)), e)));
	},
	c = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
	d = /\[(.+)\]/,
	_ = (e) => {
		let t = e.match(d);
		if (null != t) {
			let e = t[1],
				n = [];
			if (e.includes('-')) {
				let t = (n = e.split('-'))[0],
					r = n[1];
				return c(Number(t), Number(r)).toString();
			}
			if (e.includes(',')) return (n = e.split(',')), (0, i.shuffle)(n), n[0];
		}
	},
	E = (e, t) => {
		let n = e.match(d);
		if (null != n) {
			let r = null != t ? t : _(e),
				i = n[1],
				a = e.indexOf(i) - 1,
				s = i.length + 2,
				o = e.slice(0, a);
			return o + r + e.slice(a + s);
		}
		return e;
	},
	f = (e) =>
		r.useMemo(() => {
			let t;
			if (null == e) return e;
			let n = (0, i.cloneDeep)(e);
			return (n.effects = n.effects.map((e) => (null == t && (t = _(e.src)), (e.src = E(e.src, t)), e))), n;
		}, [e]);
