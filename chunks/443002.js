n(47120);
var r = n(735250),
	i = n(470079),
	a = n(77866),
	s = n(622535),
	o = n(481060),
	l = n(425493),
	u = n(906732),
	c = n(626135),
	d = n(724884),
	_ = n(355045),
	E = n(290799),
	f = n(394769),
	h = n(555932),
	p = n(808189),
	m = n(362948),
	I = n(245004),
	T = n(383881),
	g = n(981631),
	S = n(689938),
	A = n(827842);
t.Z = function (e) {
	let { analyticsLocation: t, guild: n, onClose: N } = e,
		[v, O] = i.useState(!0),
		R = i.useRef(!1),
		C = (0, a.Z)(() => Date.now()),
		{ analyticsLocations: y } = (0, u.ZP)(),
		D = i.useCallback(() => {
			N(),
				c.default.track(g.rMx.MODAL_DISMISSED, {
					type: g.ZY5.PREMIUM_GUILD_USER_MODAL,
					location_stack: y,
					location_section: t.section,
					location_object: t.object,
					guild_id: n.id,
					duration_open_ms: Date.now() - C
				});
		}, [N, t, y, C, n.id]),
		L = i.useCallback(
			(e) => {
				e &&
					!R.current &&
					(c.default.track(g.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
						type: g.ZY5.PREMIUM_GUILD_USER_MODAL,
						location_stack: y,
						location_section: t.section,
						location_object: t.object,
						guild_id: n.id
					}),
					(R.current = !0));
			},
			[t, y, n.id]
		);
	return (
		i.useEffect(() => {
			c.default.track(g.rMx.OPEN_MODAL, {
				type: g.ZY5.PREMIUM_GUILD_USER_MODAL,
				location_stack: y,
				location_section: t.section,
				location_object: t.object,
				guild_id: n.id
			});
		}, [n.id, t, y]),
		i.useEffect(() => {
			function e(e) {
				'Escape' === e.key && D();
			}
			return (
				window.addEventListener('keydown', e),
				() => {
					window.removeEventListener('keydown', e);
				}
			);
		}, [D]),
		(0, r.jsxs)(r.Fragment, {
			children: [
				(0, r.jsx)('div', {
					className: A.closeIconWrapper,
					children: (0, r.jsx)(l.Z, {
						className: A.closeIcon,
						closeAction: D,
						keybind: 'ESC',
						variant: l.Z.Variants.SOLID
					})
				}),
				(0, r.jsxs)(o.AdvancedScrollerAuto, {
					className: A.scroller,
					children: [
						(0, r.jsxs)('div', {
							className: A.header,
							children: [
								(0, r.jsxs)('div', {
									className: A.headerContentWrapper,
									children: [
										(0, r.jsx)(o.Heading, {
											className: A.heading,
											color: 'always-white',
											variant: 'display-lg',
											children: S.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
										}),
										(0, r.jsx)(_.Z, {
											guild: n,
											closeLayer: D,
											onCtaVisibilityChange: O
										}),
										(0, r.jsx)(h.Z, { guild: n }),
										(0, r.jsx)(p.Z, { guild: n })
									]
								}),
								(0, r.jsx)(T.O, {})
							]
						}),
						(0, r.jsx)('div', {
							className: A.middleBodyContentWrapper,
							children: (0, r.jsx)(I.Z, {})
						}),
						(0, r.jsxs)('div', {
							className: A.lowerBody,
							children: [
								(0, r.jsxs)('div', {
									className: A.lowerBodyContentWrapper,
									children: [
										(0, r.jsx)(m.Z, {
											className: A.tierComparisonTable,
											guild: n
										}),
										(0, r.jsx)(d.Z, {}),
										(0, r.jsx)(E.Z, {})
									]
								}),
								(0, r.jsx)(T.A, {}),
								(0, r.jsx)('div', { className: A.lowerBodyBackgroundImage })
							]
						}),
						(0, r.jsx)(s.$, {
							onChange: L,
							children: (0, r.jsx)('div', { className: A.persistentCtaSpacer })
						})
					]
				}),
				(0, r.jsx)(f.Z, {
					guild: n,
					isVisible: !v,
					closeLayer: D
				})
			]
		})
	);
};
