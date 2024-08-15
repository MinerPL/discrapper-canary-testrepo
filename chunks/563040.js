n.d(t, {
	rK: function () {
		return p;
	},
	tR: function () {
		return m;
	},
	tj: function () {
		return f;
	}
}),
	n(757143),
	n(653041),
	n(47120),
	n(411104);
var r = n(913527),
	i = n.n(r),
	a = n(55935);
function s(e, t, n) {
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
let o = /^[0]+/,
	l = /:00/,
	u = /(AM|ΠΜ|सुबह)/i,
	c = /(PM|ΜΜ|शाम)/i,
	d = /\s+/,
	_ = (e) => e.replace(o, '').replace(l, '').replace(u, '').replace(d, ''),
	E = (e) => e.replace(o, '').replace(c, '').replace(d, ''),
	f = (e, t) => {
		let n = t.toUpperCase().trim();
		if (n.length > 0) {
			let t = i()(''.concat(null == e ? void 0 : e.format('YYYY-MM-DD'), ' ').concat(n), 'YYYY-MM-DD LT');
			if (_(t.format('LT')) === _(n)) return t;
		}
	},
	h = i()('2021-04-12T00:00:00'),
	p = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
	I = (e, t) => e.value.unix() - t.value.unix();
class m {
	lookupByValue(e) {
		if (null == e) return;
		let t = p(h, e);
		return this._index[t.unix()];
	}
	_createLabel(e) {
		return (0, a.vc)(e.locale(i().locale()), this.labelFormat);
	}
	_generateTimeOptions() {
		(this.options = []), (this._index = {});
		let e = i()(h),
			t = i()(e).add(1, 'day'),
			n = i()(e);
		for (; n < t; ) {
			let e = this._createNewOption(n.clone());
			this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, 'minutes');
		}
	}
	_createNewOption(e) {
		let t = p(h, e);
		return {
			label: this._createLabel(t),
			value: t
		};
	}
	_addNewOption(e) {
		let t = p(h, e),
			n = this._createLabel(t);
		return (
			(this._index[t.unix()] = t),
			this.options.push({
				label: n,
				value: t
			}),
			this.options.sort(I),
			e
		);
	}
	_guessOptions(e) {
		let t = [];
		if (/[:\\.]/.test(e)) {
			let n = f(h, e);
			if (null != n) {
				t.push(n.clone());
				let r = n.add({ hours: 12 });
				r.isBefore(h.clone().add({ hours: 24 })) && E(r.format('LT')) === E(e) && t.push(r);
			}
		}
		return t;
	}
	getOptions(e) {
		let t = this._guessOptions(e);
		if (!(t.length > 0)) return this.options;
		{
			let e = [...this.options];
			return (
				t.forEach((t) => {
					null == this.lookupByValue(t) && e.push(this._createNewOption(t));
				}),
				e.sort(I),
				e
			);
		}
	}
	selectValue(e) {
		let t = this.lookupByValue(e);
		return null == t ? this._addNewOption(e) : t;
	}
	constructor({ intervalInMinutes: e = 15, labelFormat: t = 'LT' } = {}) {
		if (
			(s(this, 'intervalInMinutes', void 0),
			s(this, 'labelFormat', void 0),
			s(this, 'options', []),
			s(this, '_index', {}),
			e <= 0)
		)
			throw Error('intervalInMinutes should be positive number, got '.concat(e));
		(this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
	}
}
