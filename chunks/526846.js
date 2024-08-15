n.d(t, {
	m: function () {
		return y;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(613828),
	o = n(772848),
	c = n(442837),
	u = n(481060),
	d = n(2052),
	h = n(40851),
	m = n(607070),
	p = n(100527),
	_ = n(906732),
	f = n(703656),
	E = n(210887),
	g = n(390322),
	C = n(626135),
	I = n(348600),
	x = n(566620),
	T = n(520599),
	N = n(127255),
	v = n(5200),
	S = n(558317),
	Z = n(403404),
	A = n(701488),
	M = n(981631),
	b = n(689938),
	R = n(57241),
	j = n(587952),
	L = n(736733),
	P = n(932463);
let O = 'vc-activities-'.concat((0, o.Z)()),
	y = a.forwardRef(function (e, t) {
		let { channel: n, isHovered: s, closePopout: o, onMouseEnter: y, onMouseLeave: D, onClick: k, className: U } = e,
			{ enabled: w } = I.Z.useExperiment({ location: '8009ca_3' }),
			{ enableAmazonMusicShelfPoster: B } = T.p.useExperiment(
				{ location: 'ActivitiesMiniShelf' },
				{ autoTrackExposure: !0 }
			),
			H = (0, c.e7)([E.Z], () => E.Z.getState().theme),
			G = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
			{ id: V, guild_id: F } = n;
		a.useEffect(() => {
			C.default.track(M.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
				channel_id: V,
				guild_id: F
			});
		}, [V, F]),
			a.useEffect(() => {
				!s && o();
			}, [o, s]);
		let W = (0, h.bp)(),
			{ analyticsLocations: z } = (0, _.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
			{ analyticsLocations: Y } = (0, _.ZP)([...z, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
			K = W === M.IlC.POPOUT,
			q = (0, d.O)(),
			X = (function (e) {
				return (0, N.Z)({ guildId: e }).slice(0, 5);
			})(n.getGuildId());
		a.useEffect(() => {
			let e = setTimeout(() => x.ux(), 1000);
			return () => clearTimeout(e);
		}, []);
		let Q = a.useCallback(() => {
				var e;
				(0, Z.Z)({
					channel: n,
					guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
					locationObject: q.location,
					openInPopout: K,
					analyticsLocations: z,
					opensAppLauncherModal: !0
				}),
					D(),
					k();
			}, [q, z, n, k, D, K]),
			J = a.useCallback(
				(e) => {
					y(),
						C.default.track(M.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
							channel_id: n.id,
							guild_id: n.getGuildId()
						});
				},
				[y, n]
			),
			$ = w
				? (0, i.jsxs)(r.rU, {
						to: M.Z5c.ACTIVITIES,
						children: [
							(0, i.jsx)('img', {
								alt: b.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
								src: 'light' === H ? j : L,
								className: R.poster
							}),
							(0, i.jsx)('div', { className: R.posterDivider })
						]
					})
				: B
					? (0, i.jsxs)(u.Clickable, {
							className: l()(R.clickableBanner),
							onClick: () => {
								k(), o(), (0, f.uL)(M.Z5c.ACTIVITY_DETAILS(A.Fu), { sourceLocationStack: Y });
							},
							children: [
								(0, i.jsx)('img', {
									alt: b.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT,
									src: P,
									className: R.poster
								}),
								(0, i.jsx)('div', { className: R.posterDivider })
							]
						})
					: null;
		return (0, i.jsx)(_.Gt, {
			value: z,
			children: (0, i.jsx)(g.Z, {
				children: (0, i.jsxs)(u.Dialog, {
					ref: t,
					'aria-labelledby': O,
					className: U,
					children: [
						(0, i.jsx)(u.HeadingLevel, {
							forceLevel: 2,
							children: (0, i.jsx)(u.HiddenVisually, {
								children: (0, i.jsx)(u.H, {
									id: O,
									children: b.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
								})
							})
						}),
						(0, i.jsxs)('div', {
							className: R.container,
							onMouseEnter: J,
							onMouseLeave: D,
							children: [
								(0, i.jsxs)('div', {
									className: R.titleContainer,
									children: [
										(0, i.jsxs)('div', {
											className: R.titleLeft,
											children: [
												(0, i.jsx)(u.ActivitiesIcon, {
													size: 'md',
													className: R.titleLeftIcon,
													color: 'var(--interactive-active)'
												}),
												(0, i.jsx)(u.Text, {
													variant: 'eyebrow',
													children: b.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
												})
											]
										}),
										(0, i.jsxs)(u.Clickable, {
											className: R.titleRight,
											onClick: Q,
											children: [
												(0, i.jsx)(u.Text, {
													variant: 'eyebrow',
													children: b.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
												}),
												(0, i.jsx)(u.ChevronSmallRightIcon, {
													size: 'custom',
													width: 12,
													height: 12,
													color: 'var(--interactive-active)',
													className: R.titleRightIcon
												})
											]
										})
									]
								}),
								(0, i.jsx)(_.Gt, {
									value: Y,
									children: $
								}),
								(0, i.jsxs)('div', {
									className: R.activityContainer,
									children: [
										X.map((e) =>
											(0, i.jsx)(
												v.Y,
												{
													channel: n,
													activityItem: e,
													onClick: () => {
														o(), k();
													},
													aspectRatio: v.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
													animatedDivClass: R.activitySuggestion
												},
												e.application.id
											)
										),
										(0, i.jsx)('div', {
											className: l()(R.wumpusRocketOuterContainer, { [R.wumpusReducedMotion]: G }),
											children: (0, i.jsx)('div', {
												className: R.wumpusRocketInnerContainer,
												children: (0, i.jsx)(S.Z, { className: R.wumpusRocket })
											})
										})
									]
								})
							]
						})
					]
				})
			})
		});
	});
