n.d(t, {
	I8: function () {
		return i;
	},
	KW: function () {
		return m;
	},
	LT: function () {
		return u;
	},
	Me: function () {
		return o;
	},
	eU: function () {
		return c;
	},
	rI: function () {
		return d;
	}
});
var a = n(512722),
	s = n.n(a);
function r(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let l = 2 / 3,
	i = 12;
class o {
	getWidth(e) {
		return this.getRenderOptions(e).columnWidth;
	}
	getRenderOptions(e) {
		if (e <= this.minWidth)
			return {
				columns: 1,
				columnWidth: this.minWidth
			};
		let t = e / this.maxWidth,
			n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
			a = this.gap * (n - 1);
		return {
			columns: n,
			columnWidth: (e - a) / n
		};
	}
	constructor({ minWidth: e, maxWidth: t, gap: n }) {
		r(this, 'minWidth', void 0),
			r(this, 'maxWidth', void 0),
			r(this, 'gap', void 0),
			s()(e < t, 'minWidth needs to be smaller than maxWidth'),
			(this.minWidth = e),
			(this.maxWidth = t),
			(this.gap = n);
	}
}
let c = {
		columns: 1,
		columnWidth: 450
	},
	d = (e) => {
		let t = e - 2,
			n = Math.ceil(t * l);
		return [t, n];
	},
	u = 12,
	m = (e) => 60 + d(e - 2 * u)[1] + 24 + 3 * i;
