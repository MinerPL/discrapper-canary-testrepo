n.d(t, {
	x: function () {
		return E;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(803997),
	s = n.n(a),
	o = n(696689),
	l = n.n(o),
	u = n(692547),
	c = n(715186),
	d = n(906998);
let _ = Object.fromEntries(Object.keys(u.Z.colors).map((e) => [l()(e), e])),
	E = i.forwardRef(function (e, t) {
		let n,
			{
				variant: i,
				tag: a = 'div',
				selectable: o = !1,
				className: l,
				lineClamp: E,
				color: f,
				tabularNumbers: h = !1,
				scaleFontToUserSetting: p = !1,
				...I
			} = e,
			m = '',
			T = {};
		if (
			(null != E &&
				(1 === E
					? (m = c.lineClamp1)
					: ((m = c.lineClamp2Plus),
						(T = {
							lineClamp: E,
							WebkitLineClamp: E
						}))),
			void 0 !== f)
		)
			switch (f) {
				case 'currentColor':
					n = 'currentColor';
					break;
				case 'none':
					n = void 0;
					break;
				case 'always-white':
					n = 'white';
					break;
				default:
					var g;
					n = null === (g = u.Z.colors[_[f]]) || void 0 === g ? void 0 : g.css;
			}
		let S = {
			color: n,
			...T,
			...I.style
		};
		return (0, r.jsx)(a, {
			ref: t,
			className: s()(
				{
					[c.defaultColor]: void 0 === f,
					[c.selectable]: o,
					[c.tabularNumbers]: h,
					[d.fontScaling]: p
				},
				m,
				d[i],
				l
			),
			...I,
			style: Object.values(S).filter(Boolean).length > 0 ? S : void 0,
			'data-text-variant': i
		});
	});
