n.d(t, {
	Z: function () {
		return G;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(876215),
	o = n(481060),
	l = n(100527),
	u = n(906732),
	c = n(26033),
	d = n(91140),
	_ = n(551228),
	E = n(278399),
	f = n(555672),
	h = n(335326),
	p = n(297781),
	m = n(797342),
	I = n(810568),
	T = n(168524),
	g = n(502762),
	S = n(652853),
	A = n(194811),
	N = n(60241),
	v = n(373826),
	O = n(582123),
	R = n(622058),
	C = n(290274),
	y = n(318134),
	D = n(228168),
	L = n(689938),
	b = n(139665);
let { getAssetImage: M } = n(81063);
function P(e) {
	let { user: t, entry: n, header: i, className: l, onClose: c } = e,
		{ profileType: _ } = (0, S.z)(),
		E = { [b.fullSize]: _ === D.y0.FULL_SIZE },
		{ iconUrl: h, appName: A } = (0, m.n)(n),
		O = (0, T.Z)({
			location: 'UserProfileRecentActivityCard',
			applicationId: n.extra.application_id,
			source: I.m1.UserProfile,
			sourceUserId: t.id,
			trackEntryPointImpression: !0
		}),
		{ analyticsLocations: R } = (0, u.ZP)(),
		{ onAction: C, trackViewRef: L } = (0, y.Z)({
			display: 'recent',
			user: t,
			entry: n,
			analyticsLocations: R
		}),
		M = () => (n.content_type === s.s.TOP_GAME ? f.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : d.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
	return null == O
		? (0, r.jsxs)(g.Z.Overlay, {
				className: a()(b.card, l),
				ref: L,
				children: [
					i,
					(0, r.jsx)('div', {
						className: b.body,
						children: (0, r.jsxs)('div', {
							className: a()(b.content, E),
							children: [
								(0, r.jsx)(N.ZP, {
									image: {
										src: h,
										alt: A
									}
								}),
								(0, r.jsxs)('div', {
									className: b.details,
									children: [
										(0, r.jsx)('div', {
											children: (0, r.jsx)(v.Z, {
												variant: 'heading-sm/semibold',
												text: A
											})
										}),
										(0, r.jsx)(p.Gk, {
											location: p.Gt.USER_PROFILE,
											className: b.badges,
											children: M()
										})
									]
								})
							]
						})
					})
				]
			})
		: (0, r.jsxs)(g.Z.Overlay, {
				className: a()(b.card, l),
				ref: L,
				children: [
					i,
					(0, r.jsx)('div', {
						className: b.body,
						children: (0, r.jsxs)('div', {
							className: a()(b.content, E),
							children: [
								(0, r.jsx)(N.ZP, {
									image: {
										src: h,
										alt: A
									},
									onClick: () => {
										C({ action: 'PRESS_GAME_IMAGE' }), O();
									}
								}),
								(0, r.jsxs)('div', {
									className: b.details,
									children: [
										(0, r.jsx)(o.Clickable, {
											className: b.clickable,
											onClick: () => {
												C({ action: 'OPEN_GAME_PROFILE' }), O(), null == c || c();
											},
											children: (0, r.jsx)(v.Z, {
												variant: 'heading-sm/semibold',
												text: A
											})
										}),
										(0, r.jsx)(p.Gk, {
											location: p.Gt.USER_PROFILE,
											className: b.badges,
											children: M()
										})
									]
								})
							]
						})
					})
				]
			});
}
function U(e) {
	let { user: t, entry: n, header: i, className: s } = e,
		{ profileType: o } = (0, S.z)(),
		l = { [b.fullSize]: o === D.y0.FULL_SIZE },
		{ analyticsLocations: c } = (0, u.ZP)(),
		{ trackViewRef: d } = (0, y.Z)({
			display: 'recent',
			user: t,
			entry: n,
			analyticsLocations: c
		});
	return (0, r.jsxs)(g.Z.Overlay, {
		className: a()(b.card, s),
		ref: d,
		children: [
			i,
			(0, r.jsx)('div', {
				className: b.body,
				children: (0, r.jsxs)('div', {
					className: a()(b.content, l),
					children: [
						(0, r.jsx)(N.ZP, {
							aspectRatio: 'crunchyroll',
							image: {
								src: M(n.extra.application_id, n.extra.media_assets_large_image, N.WQ),
								alt: n.extra.media_title
							}
						}),
						(0, r.jsxs)('div', {
							className: b.details,
							children: [
								(0, r.jsxs)('div', {
									children: [
										(0, r.jsx)(v.Z, {
											variant: 'heading-sm/semibold',
											text: n.extra.media_title
										}),
										(0, r.jsx)(v.Z, {
											variant: 'text-xs/normal',
											text: n.extra.media_subtitle
										})
									]
								}),
								(0, r.jsx)(p.Gk, {
									location: p.Gt.USER_PROFILE,
									className: b.badges,
									children: h.td.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
								})
							]
						})
					]
				})
			})
		]
	});
}
function w(e) {
	var t, n, i;
	let { user: s, entry: o, header: l, className: c } = e,
		{ profileType: d } = (0, S.z)(),
		E = { [b.fullSize]: d === D.y0.FULL_SIZE },
		{ analyticsLocations: f } = (0, u.ZP)(),
		{ trackViewRef: h } = (0, y.Z)({
			display: 'recent',
			user: s,
			entry: o,
			analyticsLocations: f
		}),
		m = null === (t = o.extra.entries[0]) || void 0 === t ? void 0 : t.media;
	if (null == m) return null;
	let I = null !== (i = null === (n = m.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : m.title;
	return (0, r.jsxs)(g.Z.Overlay, {
		className: a()(b.card, c),
		ref: h,
		children: [
			l,
			(0, r.jsx)('div', {
				className: b.body,
				children: (0, r.jsxs)('div', {
					className: a()(b.content, E),
					children: [
						(0, r.jsx)(N.ZP, {
							image: {
								src: m.image_url,
								alt: I
							}
						}),
						(0, r.jsxs)('div', {
							className: b.details,
							children: [
								(0, r.jsx)('div', {
									children: (0, r.jsx)(v.Z, {
										variant: 'heading-sm/semibold',
										text: I
									})
								}),
								(0, r.jsx)(p.Gk, {
									location: p.Gt.USER_PROFILE,
									className: b.badges,
									children: _.te.map((e, t) => (0, r.jsx)(e, { entry: o }, 'entry-'.concat(t)))
								})
							]
						})
					]
				})
			})
		]
	});
}
function x(e) {
	let { user: t, entry: n, header: i, className: s } = e,
		{ profileType: o } = (0, S.z)(),
		l = { [b.fullSize]: o === D.y0.FULL_SIZE },
		{ analyticsLocations: c } = (0, u.ZP)(),
		{ trackViewRef: d } = (0, y.Z)({
			display: 'recent',
			user: t,
			entry: n,
			analyticsLocations: c
		});
	return (0, r.jsxs)(g.Z.Overlay, {
		className: a()(b.card, s),
		ref: d,
		children: [
			i,
			(0, r.jsx)('div', {
				className: b.body,
				children: (0, r.jsxs)('div', {
					className: a()(b.content, l),
					children: [
						(0, r.jsx)(N.ZP, {
							image: {
								src: n.extra.media.image_url,
								alt: n.extra.media.title
							}
						}),
						(0, r.jsxs)('div', {
							className: b.details,
							children: [
								(0, r.jsxs)('div', {
									children: [
										(0, r.jsx)(v.Z, {
											variant: 'heading-sm/semibold',
											text: n.extra.media.title
										}),
										(0, r.jsx)(v.Z, {
											variant: 'text-xs/normal',
											text: n.extra.artist.name
										})
									]
								}),
								(0, r.jsx)(p.Gk, {
									location: p.Gt.USER_PROFILE,
									className: b.badges,
									children: E.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
								})
							]
						})
					]
				})
			})
		]
	});
}
function G(e) {
	let { user: t, entry: n, className: i, onClose: a, hideContextMenu: s = !1 } = e,
		{ analyticsLocations: o } = (0, u.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
		{ profileType: d } = (0, S.z)();
	return (0, R.R)(n)
		? (0, r.jsx)(u.Gt, {
				value: o,
				children: (0, r.jsx)(O.Z, {
					user: t,
					onClose: a,
					children: (e) => {
						let { onAutoDismiss: o } = e,
							l = (e) =>
								(0, r.jsx)(A.Z, {
									text: d === D.y0.FULL_SIZE ? null : e,
									tags: s
										? null
										: (0, r.jsx)(C.Z, {
												display: 'recent',
												entry: n,
												user: t,
												onClose: a,
												onRequestOpen: o
											})
								});
						return (0, c.dX)(n)
							? (0, r.jsx)(P, {
									header: l(L.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
									user: t,
									entry: n,
									className: i
								})
							: (0, c.y0)(n)
								? (0, r.jsx)(U, {
										header: l(L.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
										user: t,
										entry: n,
										className: i
									})
								: (0, c.dU)(n)
									? (0, r.jsx)(w, {
											header: l(L.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
											user: t,
											entry: n,
											className: i
										})
									: (0, c.KF)(n)
										? (0, r.jsx)(x, {
												header: l(L.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
												user: t,
												entry: n,
												className: i
											})
										: null;
					}
				})
			})
		: null;
}
