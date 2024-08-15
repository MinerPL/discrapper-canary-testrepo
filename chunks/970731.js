n.d(t, {
	DF: function () {
		return a;
	},
	ZP: function () {
		return f;
	},
	_F: function () {
		return s;
	}
});
var r,
	i,
	a,
	s,
	o = n(735250),
	l = n(470079),
	u = n(120356),
	c = n.n(u),
	d = n(481060),
	_ = n(921944),
	E = n(928874);
function f(e) {
	let {
		className: t,
		header: n,
		headerClassName: r,
		content: i,
		contentClassName: a,
		buttonCTA: s,
		secondaryButtonCTA: u,
		onClick: f,
		onSecondaryClick: h,
		buttonProps: p = {
			color: d.Button.Colors.BRAND,
			look: d.Button.Looks.FILLED
		},
		secondaryButtonProps: I = { color: d.Button.Colors.BRAND_INVERTED },
		onComponentMount: m,
		asset: T,
		markAsDismissed: g,
		caretPosition: S = 'caretTopCenter',
		buttonLayout: A = 0
	} = e;
	l.useEffect(() => {
		null == m || m();
	}, []);
	let N = null != u;
	return (0, o.jsxs)('div', {
		className: c()(t, E.upsellTooltipWrapper, E[S]),
		children: [
			T,
			null == n
				? null
				: (0, o.jsx)(d.Heading, {
						className: c()(r, E.upsellTooltipHeader),
						variant: 'heading-md/semibold',
						children: n
					}),
			(0, o.jsx)(d.Text, {
				color: 'always-white',
				className: c()(a, E.content),
				variant: 'text-sm/normal',
				children: i
			}),
			null != s || N
				? (0, o.jsxs)('div', {
						className: c()(E.upsellButtonsContainer, {
							[E.upsellButtonsAdjacent]: 0 === A,
							[E.upsellButtonsStacked]: 1 === A
						}),
						children: [
							N
								? (0, o.jsx)(d.Button, {
										...I,
										fullWidth: 1 === A,
										onClick: () => {
											null == h || h(), null == g || g(_.L.SECONDARY);
										},
										children: u
									})
								: null,
							null == s
								? null
								: (0, o.jsx)(d.Button, {
										...p,
										fullWidth: !N || 1 === A,
										onClick: (e) => {
											f(e), null == g || g(_.L.PRIMARY);
										},
										children: s
									})
						]
					})
				: null
		]
	});
}
((r = a || (a = {})).TOP_CENTER = 'caretTopCenter'),
	(r.TOP_RIGHT = 'caretTopRight'),
	(r.TOP_LEFT = 'caretTopLeft'),
	(r.BOTTOM_CENTER = 'caretBottomCenter'),
	(r.BOTTOM_LEFT = 'caretBottomLeft'),
	(r.LEFT_CENTER = 'caretLeftCenter'),
	(r.LEFT_TOP = 'caretLeftTop'),
	(r.RIGHT_CENTER = 'caretRightCenter'),
	(r.RIGHT_TOP = 'caretRightTop'),
	((i = s || (s = {}))[(i.ADJACENT = 0)] = 'ADJACENT'),
	(i[(i.STACKED = 1)] = 'STACKED'),
	(f.CaretPosition = a),
	(f.ButtonLayout = s);
