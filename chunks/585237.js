var i,
	a,
	s = n(735250);
n(470079);
var r = n(481060),
	l = n(600164),
	o = n(640814);
((i = a || (a = {})).SMALL = 'SMALL'), (i.MEDIUM = 'MEDIUM'), (i.LARGE = 'LARGE');
let c = {
		SMALL: o.dropdownSmall,
		MEDIUM: o.dropdownMedium,
		LARGE: o.dropdownLarge
	},
	u = (e) => {
		let { onDropdownClick: t, children: n, contentClassName: i, dropdownSize: a = 'MEDIUM', ...u } = e;
		return (0, s.jsx)(r.Button, {
			...u,
			children: (0, s.jsxs)(l.Z, {
				align: l.Z.Align.CENTER,
				children: [
					(0, s.jsx)(l.Z.Child, {
						className: i,
						children: n
					}),
					null != t
						? (0, s.jsxs)(r.Clickable, {
								className: c[a],
								onClick: (e) => {
									e.stopPropagation(), null != t && t(e);
								},
								children: [
									(0, s.jsx)('div', { className: o.arrowSeparator }),
									(0, s.jsx)(r.ChevronSmallDownIcon, {
										size: 'md',
										color: 'currentColor',
										className: o.dropdownArrow
									})
								]
							})
						: null
				]
			})
		});
	};
(u.DropdownSizes = a), (u.Sizes = r.Button.Sizes), (u.Colors = r.Button.Colors), (u.Looks = r.Button.Looks), (t.Z = u);
