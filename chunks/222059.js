n.d(t, {
	u: function () {
		return V;
	}
}),
	n(47120);
var i = n(735250),
	l = n(470079),
	r = n(91192),
	a = n(442837),
	s = n(433517),
	o = n(481060),
	c = n(339149),
	u = n(327943),
	d = n(864682),
	h = n(67212),
	p = n(770471),
	_ = n(292584),
	f = n(835865),
	g = n(456541),
	m = n(143614),
	C = n(544803),
	I = n(899740),
	E = n(155409),
	N = n(699516),
	x = n(944486),
	S = n(594174),
	v = n(295226),
	Z = n(774343),
	T = n(417363),
	L = n(941128),
	A = n(436088),
	b = n(780570),
	M = n(557177),
	R = n(278464),
	O = n(276952),
	P = n(682662),
	y = n(662146),
	j = n(674552),
	D = n(981631),
	w = n(474936),
	U = n(871465),
	G = n(689938),
	k = n(60798);
let B = {
	origin: {
		x: -16,
		y: 0
	},
	targetWidth: 48,
	targetHeight: 48,
	offset: {
		x: 0,
		y: 0
	}
};
function H(e) {
	let { selected: t, user: n, badge: h, link: _, showProgressBadge: f } = e,
		I = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
		[N, x] = l.useState(!1),
		[S, v] = l.useState(!1),
		[Z, T] = l.useState(null),
		[L, b] = l.useState(0),
		[R, w] = l.useState(!1),
		{ canViewBroadcasts: H } = p.Z.useExperiment({ location: 'home_button_no_track' }, { autoTrackExposure: !1 }),
		V = (0, m.Z)(),
		F = V.length > 0 && H;
	(0, g.P)();
	let W = (0, r.Ie)('home'),
		z = () => {
			T(null), b(0), clearTimeout(Z);
		};
	if (null == n) return null;
	let Y = G.Z.Messages.DIRECT_MESSAGES;
	S && (Y = s.K.get(D.wli) ? G.Z.Messages.DISCODO_ENABLED : G.Z.Messages.DISCODO_DISABLED), V.length > 0 && p.Z.trackExposure({ location: 'home_button' });
	let K = null;
	!t && f
		? (K = (0, i.jsx)(c.Z, {
				className: k.downloadProgress,
				determineOwnVisibility: !1
			}))
		: F && (K = (0, i.jsx)(A.Z, { className: k.broadcastBadge }));
	let q = t || N || I,
		Q = (0, i.jsx)(o.BlobMask, {
			highlight: F,
			selected: q,
			lowerBadge: h > 0 ? (0, j.Ne)(h) : null,
			upperBadge: K,
			lowerBadgeSize: { width: (0, o.getBadgeWidthForValue)(h) },
			children: (0, i.jsx)(o.NavItem, {
				onMouseEnter: () => x(!0),
				onMouseLeave: () => x(!1),
				onClick: () => {
					if (!__OVERLAY__ && (null != Z && clearTimeout(Z), T(setTimeout(z, 500)), b(L + 1), 15 === L)) {
						z();
						let e = !s.K.get(D.wli);
						s.K.set(D.wli, e),
							e && s.K.set(U.O5, !0),
							e ? (0, M.GN)('discodo') : (0, M.GN)('user_leave'),
							v(!0),
							setTimeout(() => {
								v(!1);
							}, 1000);
					}
				},
				selected: q,
				ariaLabel: G.Z.Messages.DIRECT_MESSAGES,
				...W,
				to: {
					pathname: _,
					state: {
						analyticsSource: {
							page: D.ZY5.GUILD_CHANNEL,
							section: D.jXE.NAVIGATION,
							object: D.qAy.BUTTON_HOME
						}
					}
				},
				children: (0, i.jsx)(d.Z, {})
			})
		}),
		X = F
			? (0, i.jsx)(o.Popout, {
					position: 'right',
					renderPopout: (e) => {
						let { closePopout: t } = e;
						return (0, i.jsx)(C.Z, { closePopout: t });
					},
					onRequestClose: () => {
						w(!1);
					},
					spacing: 8,
					shouldShow: R,
					children: () => Q
				})
			: null;
	return (0, i.jsx)('div', {
		className: k.tutorialContainer,
		onMouseEnter: () => {
			w(!0);
		},
		onMouseLeave: () => {
			setTimeout(() => {
				w(!1);
			}, 250);
		},
		children: (0, i.jsx)(E.Z, {
			inlineSpecs: B,
			tutorialId: 'friends-list',
			position: 'right',
			children: (0, i.jsxs)(P.H, {
				children: [
					(0, i.jsx)(O.Z, {
						selected: t,
						hovered: N,
						className: k.pill
					}),
					null != X
						? X
						: (0, i.jsx)(y.Z, {
								color: o.Tooltip.Colors.PRIMARY,
								hideOnClick: !0,
								text: Y,
								selected: t,
								children: Q
							})
				]
			})
		})
	});
}
function V() {
	let e = (0, R.n)(),
		t = (0, a.e7)([L.Z, T.Z], () => {
			let e = (0, c.E)(L.Z.activeItems, T.Z),
				{ total: t, progress: n } = b.lK(e),
				i = b.xI(n, t);
			return i > 0 && i < 100;
		}),
		n = (0, a.e7)([_.Z], () => _.Z.getUserIdsToValidate()),
		r = (0, a.e7)([N.Z], () => N.Z.getPendingCount()),
		s = Object.keys(w.nG),
		{ unviewedTrialCount: o, unviewedDiscountCount: u } = (0, a.cj)([v.Z], () => ({
			unviewedTrialCount: v.Z.getUnacknowledgedOffers(s).length,
			unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length
		})),
		d = o + u,
		p = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
		g = (0, I.T)(),
		m = r + d + g,
		C = m === d && d > 0 && r + g === 0;
	l.useEffect(() => {
		n.length > 0 && (0, h.E7)();
	}, [n]),
		(0, f.Z)();
	let E = Z.Z.getHomeLink();
	return (
		C && (E = D.Z5c.APPLICATION_STORE),
		(0, i.jsx)(H, {
			selected: e,
			user: p,
			selectedChannelId: x.Z.getChannelId(D.ME),
			badge: m,
			link: E,
			showProgressBadge: t
		})
	);
}
