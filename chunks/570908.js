n.d(t, {
	Z: function () {
		return s;
	}
});
var i = n(735250);
n(470079);
var l = n(120356),
	r = n.n(l),
	a = n(296684);
function s(e) {
	let {
		selected: t,
		muted: n = !1,
		highlighted: l = !1,
		wrapContent: s = !1,
		avatar: o,
		decorators: c,
		name: u,
		subText: d,
		avatarClassName: h,
		innerClassName: p
	} = e;
	return (0, i.jsxs)('div', {
		className: r()(p, a.layout, {
			[a.muted]: !t && n,
			[a.highlighted]: l,
			[a.wrappedLayout]: s
		}),
		children: [
			(0, i.jsx)('div', {
				className: r()(a.avatar, h),
				children: o
			}),
			(0, i.jsxs)('div', {
				className: a.content,
				children: [
					(0, i.jsxs)('div', {
						className: a.nameAndDecorators,
						children: [
							(0, i.jsx)('div', {
								className: r()(a.name, { [a.wrappedName]: s }),
								children: u
							}),
							c
						]
					}),
					null != d
						? (0, i.jsx)('div', {
								className: a.subText,
								children: d
							})
						: null
				]
			})
		]
	});
}
