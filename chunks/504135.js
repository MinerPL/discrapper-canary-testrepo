n.d(t, {
	s: function () {
		return f;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(1561),
	l = n(761224),
	u = n(898560),
	c = n(743236),
	d = n(481060),
	_ = n(939350),
	E = n(837244);
function f(e) {
	let {
			color: t = 'default',
			label: n,
			icon: a,
			showIconFirst: f = !1,
			imageUrl: h,
			showImageFirst: p = !1,
			hint: I,
			subtext: m,
			subtextLineClamp: T,
			hasSubmenu: g,
			disabled: S,
			isFocused: A,
			menuItemProps: N,
			action: v,
			onClose: O,
			onFocus: R,
			className: C,
			focusedClassName: y,
			subMenuIconClassName: D,
			dontCloseOnActionIfHoldingShiftKey: L,
			dontCloseOnAction: b,
			iconProps: M,
			imageClassName: P,
			sparkle: U
		} = e,
		w = i.useContext(u.r),
		x = i.useRef(null),
		G = i.useCallback(
			(e) => {
				if (null == v) return !1;
				!(e.shiftKey && L) && !b && O(), e.persist(), null == w || w(), requestAnimationFrame(() => v(e));
			},
			[v, O, w, L, b]
		);
	return (
		i.useEffect(() => {
			A && ((0, c.F)(x), null == R || R());
		}, [A, R]),
		(0, r.jsxs)(o.P, {
			innerRef: x,
			className: s()(E.item, E.labelContainer, _._[t], C, {
				[E.disabled]: S,
				[E.focused]: A,
				[null != y ? y : '']: A
			}),
			onClick: S ? void 0 : G,
			'aria-disabled': S,
			...N,
			'data-menu-item': 'true',
			children: [
				f &&
					null != a &&
					(0, r.jsx)('div', {
						className: E.iconContainerLeft,
						children: (0, r.jsx)(a, {
							color: 'currentColor',
							...M,
							className: s()(E.icon, null == M ? void 0 : M.className),
							isFocused: A
						})
					}),
				p &&
					null != h &&
					(0, r.jsx)('div', {
						className: E.imageContainerLeft,
						children: (0, r.jsx)('img', {
							className: s()(E.image, P),
							src: (0, l.I)(h, e),
							alt: ''
						})
					}),
				(0, r.jsxs)('div', {
					className: E.label,
					children: [
						(0, l.I)(n, e),
						null != m &&
							(0, r.jsx)(d.Text, {
								variant: 'text-xs/normal',
								className: s()(E.subtext, { [E.subtextLineClamp]: null != T }),
								lineClamp: T,
								children: m
							})
					]
				}),
				null != I &&
					(0, r.jsx)('div', {
						className: E.hintContainer,
						children: (0, l.I)(I, e)
					}),
				!f &&
					null != a &&
					(0, r.jsx)('div', {
						className: E.iconContainer,
						children: (0, r.jsx)(a, {
							color: 'currentColor',
							...M,
							className: s()(E.icon, null == M ? void 0 : M.className),
							isFocused: A
						})
					}),
				!p &&
					null != h &&
					(0, r.jsx)('div', {
						className: E.imageContainer,
						children: (0, r.jsx)('img', {
							className: s()(E.image, P),
							src: (0, l.I)(h, e),
							alt: ''
						})
					}),
				g &&
					(0, r.jsxs)('div', {
						className: E.iconContainer,
						children: [
							(0, r.jsx)(d.ChevronSmallRightIcon, {
								size: 'md',
								color: 'currentColor',
								className: s()(E.caret, D)
							}),
							U && (0, r.jsx)(d.LottieSparkle, { className: E.sparkles })
						]
					})
			]
		})
	);
}
