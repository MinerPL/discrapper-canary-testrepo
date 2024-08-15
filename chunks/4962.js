n(411104);
var i,
	a,
	s = n(735250);
n(470079);
var r = n(120356),
	l = n.n(r),
	o = n(442837),
	c = n(481060),
	d = n(700582),
	u = n(451478),
	_ = n(689938),
	E = n(605366);
(a = i || (i = {}))[(a.STAFF_NOTES = 1)] = 'STAFF_NOTES';
let h = o.ZP.connectStores([u.Z], () => ({ animate: u.Z.isFocused() }))((e) => {
		let { user: t, className: n, animate: i } = e;
		return (0, s.jsxs)('div', {
			className: l()(E.staffReviewHeader, n),
			children: [
				(0, s.jsx)(d.Z, {
					size: c.AvatarSizes.SIZE_32,
					user: t,
					animate: i
				}),
				(0, s.jsxs)('div', {
					className: E.headerText,
					children: [
						(0, s.jsx)('div', {
							className: E.label,
							children: _.Z.Messages.APPLICATION_STORE_STAFF_PICK
						}),
						(0, s.jsx)('div', {
							className: E.username,
							children: t.username
						})
					]
				})
			]
		});
	}),
	m = (e) => {
		let { data: t, className: n } = e;
		if (1 === t.type) {
			if (null == t.staffNotes) return null;
			let { user: e, content: i } = t.staffNotes;
			return null == e
				? null
				: (0, s.jsxs)('div', {
						className: n,
						children: [
							(0, s.jsx)(h, {
								user: e,
								className: E.header
							}),
							(0, s.jsx)('div', {
								className: E.notes,
								children: i
							})
						]
					});
		}
		throw Error('Unknown type');
	};
(m.Types = i), (t.Z = m);
