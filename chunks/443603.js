n.d(t, {
	j: function () {
		return i;
	}
});
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(338545),
	c = n(481060),
	d = n(686546),
	_ = n(540059),
	E = n(855981),
	f = n(55543),
	h = n(843710);
((r = i || (i = {}))[(r.UPDATE = 0)] = 'UPDATE'), (r[(r.NEW = 1)] = 'NEW');
let p = {
	config: {
		friction: 26,
		tension: 700,
		mass: 1
	},
	initial: {
		scale: 1,
		opacity: 1
	},
	from: {
		scale: 0.6,
		opacity: 0
	},
	enter: {
		scale: 1,
		opacity: 1
	},
	leave: {
		scale: 0.6,
		opacity: 0
	}
};
t.Z = s.memo(function (e) {
	let {
			className: t,
			disabled: n = !1,
			innerClassName: r,
			childClassName: i,
			iconClassName: s,
			icon: o,
			children: I,
			onClick: m,
			isActive: T,
			onMouseEnter: g,
			onMouseLeave: S,
			onFocus: A,
			onBlur: N,
			pulse: v,
			sparkle: O,
			notification: R,
			'aria-label': C,
			'aria-expanded': y,
			'aria-haspopup': D,
			'aria-controls': L
		} = e,
		b = (0, _.Q)('ChannelTextAreaButton'),
		M = (0, c.useTransition)(null != I, {
			...p,
			keys: (e) => (e ? 'children' : 'icon')
		}),
		P = (e) => {
			let { component: t } = e;
			return null != R
				? (0, a.jsxs)('div', {
						className: h.buttonContent,
						children: [
							(0, a.jsx)(d.ZP, {
								className: h.iconMask,
								mask: d.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
								width: b ? 20 : 24,
								height: b ? 20 : 24,
								children: t
							}),
							(0, a.jsx)('span', { className: h.notificationDot })
						]
					})
				: t;
		};
	return (0, a.jsxs)(c.Button, {
		look: c.Button.Looks.BLANK,
		size: c.Button.Sizes.NONE,
		'aria-label': C,
		'aria-expanded': y,
		'aria-haspopup': D,
		'aria-controls': L,
		disabled: n,
		className: l()(t, { [h.active]: T }),
		innerClassName: l()(h.button, r, { [h.pulseButton]: v }),
		onClick: m,
		onMouseEnter: g,
		onMouseLeave: S,
		onFocus: A,
		onBlur: N,
		focusProps: {
			offset: {
				top: 4,
				bottom: 4
			}
		},
		children: [
			M((e, t, n) => {
				let { key: r } = n;
				return t
					? (0, a.jsx)(
							u.animated.div,
							{
								style: e,
								className: l()(h.buttonWrapper, i),
								children: P({ component: I })
							},
							r
						)
					: null != o
						? (0, a.jsx)(
								u.animated.div,
								{
									style: e,
									className: l()(h.buttonWrapper, i),
									children: P({
										component: (0, a.jsx)(o, {
											className: l()(h.icon, s, { [h.pulseIcon]: v }),
											color: 'currentColor'
										})
									})
								},
								r
							)
						: void 0;
			}),
			O &&
				(0, a.jsxs)('div', {
					className: h.sparkleContainer,
					children: [(0, a.jsx)(f.Z, { className: h.sparkleStar }), (0, a.jsx)(E.Z, { className: h.sparklePlus })]
				})
		]
	});
});
