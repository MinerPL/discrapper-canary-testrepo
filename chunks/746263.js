t.d(s, {
	Z: function () {
		return I;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(772848),
	l = t(481060),
	c = t(451593),
	d = t(694539),
	_ = t(792461);
let E = (e) => {
		var s, t, a;
		let { effect: i, onClick: o } = e,
			{ deleteConfig: d } = (0, c.E)();
		return (0, n.jsxs)(l.Clickable, {
			className: _.previewCard,
			onClick: () => {
				o(i);
			},
			children: [
				(0, n.jsx)('div', {
					className: _.previewCardImage,
					style: {
						backgroundImage: 'url('.concat(
							null === (a = i.config) || void 0 === a
								? void 0
								: null === (t = a.effects) || void 0 === t
									? void 0
									: null === (s = t[0]) || void 0 === s
										? void 0
										: s.base64,
							')'
						)
					}
				}),
				(0, n.jsxs)('div', {
					className: r()(_.previewCardFooter, _.row),
					children: [
						(0, n.jsx)(l.Text, {
							variant: 'text-md/bold',
							children: i.name
						}),
						(0, n.jsx)(l.Button, {
							color: l.ButtonColors.RED,
							look: l.ButtonLooks.LINK,
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), d(i.id);
							},
							children: 'Delete'
						})
					]
				})
			]
		});
	},
	u = () => {
		let e = (0, o.Z)();
		return {
			id: e,
			name: 'New Profile Effect',
			config: { effects: [] }
		};
	};
function I() {
	let { profileEffects: e, upsertConfig: s } = (0, c.E)(),
		[t, i] = a.useState();
	return (0, n.jsxs)('div', {
		className: _.root,
		children: [
			null == t &&
				(0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsxs)('div', {
							className: _.col,
							children: [
								(0, n.jsx)('div', {
									className: _.section,
									children: (0, n.jsx)(l.Heading, {
										variant: 'heading-lg/bold',
										children: 'Profile Effects'
									})
								}),
								(0, n.jsx)('div', {
									className: _.grid,
									children: Object.values(e).map((e) =>
										(0, n.jsx)(
											E,
											{
												effect: e,
												onClick: (e) => {
													i(e);
												}
											},
											e.id
										)
									)
								})
							]
						}),
						(0, n.jsx)('div', {
							className: r()(_.row, _.end, _.section),
							children: (0, n.jsx)(l.Button, {
								onClick: () => {
									s(u());
								},
								children: 'Create New Effect'
							})
						})
					]
				}),
			null != t &&
				(0, n.jsx)(d.Z, {
					effect: t,
					back: () => {
						i(void 0);
					}
				})
		]
	});
}
