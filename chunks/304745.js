n.d(t, {
	M: function () {
		return Z;
	}
}),
	n(653041);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	l = n(704215),
	r = n(481060),
	o = n(2052),
	c = n(40851),
	u = n(317381),
	d = n(683921),
	h = n(588580),
	m = n(374065),
	p = n(451576),
	_ = n(526846),
	f = n(938655),
	E = n(403404),
	C = n(906732),
	g = n(424602),
	I = n(243778),
	x = n(579185),
	T = n(301076),
	N = n(981631),
	v = n(921944),
	S = n(177480);
function Z(e) {
	let { channel: t } = e,
		n = (0, s.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
		Z = (0, m.KF)(t.id),
		A = (0, m.g5)(Z),
		M = Z !== m.jy.CAN_LAUNCH || n,
		{ isHovered: b, setIsHovered: R, onMouseEnter: j, onMouseLeave: L } = (0, x.Z)(200, 300),
		P = (0, h.a)(),
		O = (0, d.Z)({ channelId: t.id }),
		y = !M,
		D = a.useCallback(
			(e) => {
				'focus' !== e.type && j();
			},
			[j]
		),
		k = (0, o.O)(),
		U = (0, c.bp)() === N.IlC.POPOUT,
		{ analyticsLocations: w } = (0, C.ZP)(),
		B = w.length > 0 ? w[w.length - 1] : 'open-activity-shelf';
	g.m1.useExperiment({ location: B }, { autoTrackExposure: !0 });
	let H = a.useCallback(() => {
			(0, E.Z)({
				channel: t,
				guildId: t.guild_id,
				locationObject: k.location,
				openInPopout: U,
				analyticsLocations: w,
				opensAppLauncherModal: !0
			});
		}, [k.location, w, t, U]),
		G = [];
	return (
		!M && G.push(l.z.ACTIVITIES_MINI_SHELF_SPARKLES),
		(0, p.Z)(t.id) && !M && G.push(l.z.ACTIVITY_GDM_ROCKET_SPARKLE),
		(0, i.jsx)(I.ZP, {
			contentTypes: G,
			children: (e) => {
				let { visibleContent: n, markAsDismissed: a } = e;
				return (0, i.jsx)(r.Popout, {
					fixed: !0,
					shouldShow: b,
					animationPosition: 'bottom',
					position: 'bottom',
					align: 'center',
					spacing: 16,
					onRequestClose: () => {
						R(!1);
					},
					renderPopout: (e) => {
						let { closePopout: n, setPopoutRef: s } = e;
						return y
							? (0, i.jsx)(_.m, {
									ref: s,
									channel: t,
									closePopout: n,
									onMouseEnter: j,
									onMouseLeave: L,
									isHovered: b,
									onClick: () => a(v.L.UNKNOWN)
								})
							: (0, i.jsx)(i.Fragment, {});
					},
					children: () =>
						(0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(T.Z, {
									disabled: M,
									'aria-label': A,
									label: y ? void 0 : A,
									isActivityActive: O || b,
									className: S.controlButton,
									onClick: () => {
										H(), (n === l.z.ACTIVITIES_MINI_SHELF_SPARKLES || n === l.z.ACTIVITY_GDM_ROCKET_SPARKLE || n === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && a(v.L.UNKNOWN);
									},
									onMouseEnter: D,
									onMouseLeave: L
								}),
								P
									? (0, i.jsx)(f.A, {
											top: 4,
											right: 10,
											size: 12,
											maskColor: f.T.BLACK
										})
									: null
							]
						})
				});
			}
		})
	);
}
