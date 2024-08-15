n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var l = n(120356),
	r = n.n(l),
	a = n(481060),
	s = n(686546),
	o = n(81216);
function c(e) {
	let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: u, icon: d, iconForeground: h, innerClassName: p, tooltipClassName: _, onMouseEnter: f, onMouseLeave: g, 'aria-label': m, 'aria-checked': C, role: I, tooltipColor: E, tooltipForceOpen: N } = e,
		x =
			'function' == typeof d
				? (0, i.jsx)(d, {
						width: 20,
						height: 20,
						size: 'custom',
						color: null != h ? h : 'currentColor'
					})
				: d;
	return (0, i.jsx)(a.Tooltip, {
		tooltipClassName: _,
		text: t,
		'aria-label': m,
		color: E,
		forceOpen: N,
		children: (e) => {
			let { onClick: t, onMouseEnter: d, onMouseLeave: h, ..._ } = e;
			return (0, i.jsxs)(a.Button, {
				..._,
				look: a.Button.Looks.BLANK,
				size: a.Button.Sizes.NONE,
				disabled: u,
				innerClassName: p,
				wrapperClassName: o.button,
				className: r()(o.button, {
					[o.disabled]: u,
					[o.enabled]: !u
				}),
				onClick: (e) => {
					null != t && t(), null != c && c(e);
				},
				onMouseEnter: () => {
					null == d || d(), null == f || f();
				},
				onMouseLeave: () => {
					null == h || h(), null == g || g();
				},
				onContextMenu: l,
				role: I,
				'aria-checked': C,
				children: [
					null != n
						? (0, i.jsx)(s.ZP, {
								width: 20,
								height: 20,
								mask: s.ZP.Masks.PANEL_BUTTON,
								children: x
							})
						: x,
					n
				]
			});
		}
	});
}
