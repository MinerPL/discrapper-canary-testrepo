n.d(t, {
	Z: function () {
		return f;
	},
	d: function () {
		return p;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(131388),
	l = n(686546),
	u = n(259580),
	c = n(618158),
	d = n(362267),
	_ = n(689938),
	E = n(239527);
function f(e) {
	let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: l, onContextMenu: u, className: d, wrapperClassName: _, iconClassName: f, iconComponent: h, themeable: p = !1, disabled: m = !1, isActive: I = !1, tooltipPosition: T = 'top', shouldShowTooltip: g = !0, forceTooltipOpen: S = !1, buttonRef: A, grow: N, 'aria-label': v } = e;
	return (0, r.jsx)(c.Z, {
		children: (0, r.jsx)(s.Tooltip, {
			position: T,
			text: t,
			'aria-label': v,
			shouldShow: g,
			forceOpen: S,
			children: (e) => {
				let { onClick: t, onContextMenu: c, onMouseEnter: T, onMouseLeave: g, ...S } = e;
				return (0, r.jsx)(s.Button, {
					look: s.Button.Looks.BLANK,
					size: s.Button.Sizes.NONE,
					onKeyDown: (e) => {
						null == i || i(e);
					},
					onClick: (e) => {
						null == t || t(), null == n || n(e);
					},
					onMouseEnter: (e) => {
						null == T || T(), null == o || o(e);
					},
					onMouseLeave: (e) => {
						null == g || g(), null == l || l(e);
					},
					onContextMenu: (e) => {
						null == c || c(), null == u || u(e);
					},
					onFocus: (e) => {
						null == T || T(), null == o || o(e);
					},
					onBlur: (e) => {
						null == g || g(), null == l || l(e);
					},
					disabled: m,
					innerClassName: E.lineHeightReset,
					className: a()({ [E.active]: I }, d),
					wrapperClassName: _,
					buttonRef: A,
					grow: N,
					'aria-label': v,
					...S,
					children: (0, r.jsx)(h, {
						className: a()(E.controlIcon, f, {
							[E.themeable]: p,
							[E.active]: I
						}),
						color: 'currentColor'
					})
				});
			}
		})
	});
}
let h = {
	red: E.red,
	white: E.white,
	green: E.green,
	yellow: E.yellow,
	primaryDark: E.primaryDark,
	primaryLight: E.primaryLight,
	activeLight: E.activeLight
};
function p(e) {
	let { color: t, isActive: n = !1, className: i, iconClassName: p, onPopoutClick: m, popoutOpen: I = !1, premiumGlow: T = !1, ...g } = e,
		S = (0, d.Z)(t, n),
		A = (0, o.Z)('(max-width: 456px)'),
		N = (0, r.jsx)(f, {
			...g,
			grow: !1,
			onContextMenu: m,
			iconClassName: a()(p, E.centerIcon),
			className: a()(A ? i : null, E.staticButton, E.centerButton, h[S])
		});
	return A
		? N
		: (0, r.jsxs)('div', {
				className: a()(i, E.contextMenuContainer),
				children: [
					(0, r.jsx)(l.ZP, {
						className: a()(E.buttonMask, { [E.buttonPremiumGlow]: T }),
						mask: null == m ? null : l.QS.CHANNEL_CALL_CONTROL_BUTTON,
						width: 56,
						height: 56,
						children: N
					}),
					null != m
						? (0, r.jsx)(c.Z, {
								children: (0, r.jsx)(s.Clickable, {
									'aria-label': _.Z.Messages.MORE_OPTIONS,
									onClick: m,
									onContextMenu: m,
									className: a()(E.contextMenuNub, h[S], { [E.active]: I }),
									children: (0, r.jsx)(u.Z, { className: a()(E.contextMenuCaret, { [E.open]: I }) })
								})
							})
						: null
				]
			});
}
