s.d(t, {
	Z: function () {
		return N;
	}
}),
	s(390547);
var n = s(735250),
	i = s(470079),
	o = s(120356),
	l = s.n(o),
	a = s(658722),
	r = s.n(a),
	h = s(392711),
	d = s.n(h),
	u = s(217986),
	c = s(481060),
	p = s(600164),
	m = s(133080),
	C = s(689938),
	f = s(383322),
	g = s(256507);
function y(e, t, s) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = s),
		e
	);
}
class N extends i.PureComponent {
	renderItems() {
		let { query: e } = this.state,
			t = u.Z.flatMap((e, t) => {
				let { alpha2: s, phoneCountryCodes: i, name: o } = e,
					l = (0, m.q9)(s);
				return i.map((e) => ({
					key: ''.concat(t, '-').concat(e),
					name: o,
					translatedName: l,
					countryData: {
						name: o,
						alpha2: s,
						code: e
					},
					children: (0, n.jsxs)(p.Z, {
						className: f.countryItem,
						justify: p.Z.Justify.CENTER,
						align: p.Z.Align.CENTER,
						children: [
							(0, n.jsx)(p.Z.Child, {
								className: f.countryName,
								children: l
							}),
							(0, n.jsx)(p.Z.Child, {
								className: f.countryCode,
								grow: 0,
								shrink: 0,
								children: e
							})
						]
					})
				}));
			}),
			s = d()(t)
				.filter(
					(t) =>
						0 === e.length ||
						r()(e.toLowerCase(), t.name.toLowerCase()) ||
						r()(e.toLowerCase(), t.translatedName.toLowerCase())
				)
				.map((e) =>
					(0, i.createElement)(c.PopoutList.Item, {
						...e,
						key: e.key,
						onClick: () => this.onClick(e.countryData)
					})
				)
				.value();
		return 0 === s.length
			? (0, n.jsx)(c.PopoutList.Empty, { children: C.Z.Messages.NONE })
			: (0, n.jsx)(c.ScrollerAuto, {
					className: f.phoneFieldScroller,
					children: s
				});
	}
	render() {
		let { className: e } = this.props;
		return (0, n.jsxs)(c.PopoutList, {
			className: l()(f.phoneFieldPopout, g.elevationBorderLow, e),
			children: [
				(0, n.jsx)(c.PopoutList.SearchBar, {
					query: this.state.query,
					placeholder: C.Z.Messages.SEARCH_COUNTRY,
					onChange: this.onChangeQuery,
					onClear: this.onClearQuery,
					autoComplete: 'off'
				}),
				(0, n.jsx)(c.PopoutList.Divider, {}),
				this.renderItems()
			]
		});
	}
	constructor(e) {
		super(e),
			y(this, 'onChangeQuery', (e) => {
				this.setState({ query: e });
			}),
			y(this, 'onClearQuery', () => {
				this.setState({ query: '' });
			}),
			y(this, 'onClick', (e) => {
				var t, s;
				null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e);
			}),
			(this.state = { query: '' });
	}
}
