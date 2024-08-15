var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(704215),
	c = n(749280),
	u = n(481060),
	d = n(367907),
	h = n(499254),
	m = n(424602),
	p = n(541099),
	_ = n(827498),
	f = n(663924),
	E = n(998698),
	C = n(873387),
	g = n(605236),
	I = n(291407),
	x = n(981631),
	T = n(314734),
	N = n(921944),
	v = n(689938),
	S = n(664179);
let Z = a.forwardRef(function (e, t) {
	let { type: n, animateRef: s } = e,
		m = (0, r.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
		{ Component: f, events: E, play: C } = (0, c.w)();
	a.useImperativeHandle(
		s,
		() => ({
			animate: () => {
				E.onMouseEnter();
			}
		}),
		[E]
	);
	let I = a.useCallback(() => {
		(0, d.yw)(x.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), m ? h.y(_.ti.DISMISSED) : ((0, g.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: N.L.TAKE_ACTION }), h._(_._b.TEXT, n)), C();
	}, [m, n, C]);
	return (0, i.jsx)('div', {
		className: l()(S.buttonContainer, T.t4),
		ref: t,
		children: (0, i.jsx)(u.Button, {
			look: u.Button.Looks.BLANK,
			size: u.Button.Sizes.NONE,
			tabIndex: 0,
			className: l()(S.button, { [S.buttonActive]: m }),
			onClick: I,
			'aria-label': v.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
			focusProps: {
				offset: {
					top: 4,
					bottom: 4,
					left: -4,
					right: -4
				}
			},
			innerClassName: S.buttonContents,
			...E,
			children: (0, i.jsx)(f, { color: 'currentColor' })
		})
	});
});
t.Z = a.memo(
	a.forwardRef(function (e) {
		let { channel: t, type: n, animateRef: s } = e,
			l = a.useRef(null),
			o = (0, C.g)(t),
			{ activeCommand: c } = (0, r.cj)([E.Z], () => {
				var e;
				return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? E.Z.getActiveCommand(t.id) : null };
			}),
			u = m.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
			d = (0, r.e7)(
				[p.Z],
				() => {
					let e = p.Z.activeViewType();
					return null != e && e === n && p.Z.shouldShowPopup();
				},
				[n]
			);
		return u && null == c && o
			? (0, i.jsxs)('div', {
					className: S.channelAppLauncher,
					children: [
						(0, i.jsx)(I.Z, {
							channel: t,
							animationContainerClassName: S.entrypointAnimation,
							glowClassName: S.animationGlow,
							trinketsClassName: S.animationTrinkets,
							children: (0, i.jsx)(Z, {
								type: n,
								ref: l,
								animateRef: s
							})
						}),
						d
							? (0, i.jsx)(f.Z, {
									positionTargetRef: l,
									channel: t
								})
							: null
					]
				})
			: null;
	})
);
