n.d(t, {
	BR: function () {
		return d;
	},
	RX: function () {
		return l;
	},
	Tw: function () {
		return c;
	},
	dY: function () {
		return E;
	},
	wL: function () {
		return _;
	},
	z5: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(664323);
let l = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)('div', {
			className: a()(o.autocompleteRowContent, n),
			children: t
		});
	},
	u = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)('div', {
			className: a()(o.autocompleteRowContentPrimary, n),
			children: t
		});
	},
	c = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)('div', {
			className: a()(o.autocompleteRowIcon, n),
			children: t
		});
	},
	d = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)(s.Text, {
			className: a()(n, o.autocompleteRowHeading),
			color: 'interactive-active',
			variant: 'text-md/normal',
			children: t
		});
	},
	_ = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)(s.Text, {
			className: a()(n, o.autocompleteRowSubheading),
			color: 'interactive-normal',
			variant: 'text-xs/normal',
			children: t
		});
	},
	E = (e) => {
		let { children: t, className: n } = e;
		return (0, r.jsx)(s.Text, {
			className: a()(n, o.autocompleteRowContentSecondary),
			color: 'interactive-normal',
			variant: 'text-xs/normal',
			children: t
		});
	};
