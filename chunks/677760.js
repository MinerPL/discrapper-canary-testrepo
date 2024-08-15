n.d(t, {
	Z: function () {
		return P;
	}
}),
	n(47120);
var s,
	r,
	i = n(735250),
	a = n(470079),
	l = n(338545),
	o = n(442837),
	c = n(481060),
	u = n(447543),
	d = n(587444),
	_ = n(393238),
	h = n(388905),
	E = n(108427),
	g = n(314897),
	p = n(701190),
	I = n(626135),
	m = n(768581),
	f = n(823379),
	N = n(264229),
	T = n(230224),
	x = n(617730),
	A = n(258356),
	C = n(981631),
	v = n(689938),
	Z = n(318684);
function S() {
	return (0, i.jsx)('div', {
		className: Z.centerFlex,
		children: (0, i.jsx)(c.Spinner, {})
	});
}
((r = s || (s = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.DETAILS = 1)] = 'DETAILS'), (r[(r.ERROR = 2)] = 'ERROR');
let R = (e) => {
	let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
	if (null == e || null == e.state || t) return 0;
	let n = e.state;
	switch (n) {
		case C.r2o.RESOLVED:
		case C.r2o.ACCEPTED:
		case C.r2o.APP_NOT_OPENED:
		case C.r2o.APP_OPENED:
		case C.r2o.ACCEPTING:
		case C.r2o.APP_OPENING:
			return 1;
		case C.r2o.EXPIRED:
		case C.r2o.BANNED:
		case C.r2o.ERROR:
			return 2;
		case C.r2o.RESOLVING:
			return 0;
		default:
			(0, f.vE)(n);
	}
};
function O(e) {
	let { invite: t, onAcceptInvite: n } = e;
	if ((null == t ? void 0 : t.state) === C.r2o.BANNED)
		return (0, i.jsx)(d.u, {
			text: v.Z.Messages.AUTH_BANNED_INVITE_BODY,
			buttonCta: v.Z.Messages.INVITE_INVALID_CTA,
			onClick: n
		});
	return (0, i.jsx)(d.u, {
		text: v.Z.Messages.INVITE_INVALID_ERROR,
		buttonCta: v.Z.Messages.INVITE_INVALID_CTA,
		onClick: n
	});
}
function b(e) {
	let { children: t, cardChildren: n, startAnimHeightPx: s, innerStyle: r, ...o } = e,
		{ invite: u } = o,
		[d, h] = a.useState(R(u)),
		{ ref: E, height: g } = (0, _.Z)(),
		p = (0, c.useSpring)({
			height: null != g && 0 !== g ? ''.concat(g, 'px') : ''.concat(s, 'px'),
			config: l.config.stiff
		});
	return (
		a.useEffect(() => {
			let e = R(u);
			e !== d && h(e);
		}, [u, d]),
		(0, i.jsxs)(l.animated.div, {
			className: Z.inviteCard,
			style: p,
			children: [
				(0, i.jsx)(l.animated.div, {
					className: Z.inviteChildContainer,
					style: p,
					children: (0, i.jsx)('section', {
						ref: E,
						className: null == r ? void 0 : r(d),
						children: t(d)
					})
				}),
				n
			]
		})
	);
}
function D(e) {
	let { invite: t } = e;
	if (null == t || !(0, T.JI)(t)) return null;
	let n = (e) => {
		if (null == t) return null;
		if (1 === e) return (0, i.jsx)(A.X, { invite: t });
		return null;
	};
	return (0, i.jsx)(b, {
		startAnimHeightPx: 0,
		innerStyle: () => Z.guildInfoInner,
		...e,
		children: (e) => n(e)
	});
}
function L(e) {
	let { invite: t } = e,
		n = (n) => {
			if (null == t) return (0, i.jsx)(S, {});
			switch (n) {
				case 1:
					return (0, i.jsx)(x.Z, {
						...e,
						invite: t
					});
				case 2:
					return (0, i.jsx)(O, {
						...e,
						invite: t
					});
				default:
					return (0, i.jsx)(S, {});
			}
		},
		s = {
			1: Z.inviteCardInner,
			2: Z.inviteCardInnerError,
			0: Z.inviteCardInnerLoading
		};
	return (0, i.jsx)(b, {
		startAnimHeightPx: 200,
		innerStyle: (e) => s[e],
		...e,
		children: (e) => n(e)
	});
}
function M(e) {
	let { invite: t, onAcceptInvite: n } = e,
		{ guild: s } = null != t ? t : {},
		r = {};
	if ((null == s ? void 0 : s.splash) != null) {
		let e = m.ZP.getGuildSplashURL({
			id: s.id,
			splash: s.splash
		});
		null != e && ((r.backgroundImage = 'url('.concat(e, ')')), (r.backgroundSize = 'cover'));
	}
	return (0, i.jsxs)(h.ZP, {
		theme: C.BRd.DARK,
		className: Z.splashBackground,
		style: r,
		contentClassName: Z.centerAuthBoxContent,
		children: [
			(0, i.jsx)(L, {
				...e,
				onAcceptInvite: n
			}),
			(0, i.jsx)(D, { ...e })
		]
	});
}
function P(e) {
	let { inviteKey: t, transitionTo: n } = e,
		s = (0, o.e7)([p.Z], () => p.Z.getInvite(t));
	return (
		a.useEffect(() => {
			(0, E.e)('invite_mobile');
		}, []),
		a.useEffect(() => {
			null != s &&
				s.state === C.r2o.RESOLVED &&
				I.default.track(
					C.rMx.INVITE_VIEWED,
					{
						invite_code: t,
						friends_count: null == s ? void 0 : s.friends_count
					},
					{ flush: !0 }
				);
		}, [s, t]),
		(0, i.jsx)(M, {
			invite: s,
			onAcceptInvite: (e) => {
				!(function (e, t, n) {
					var s, r, i;
					null == e || e.preventDefault(),
						I.default.track(C.rMx.INVITE_APP_OPENED, {
							invite_code: (0, N.jX)(t),
							guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
							channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
							inviter_id: null == n ? void 0 : null === (i = n.inviter) || void 0 === i ? void 0 : i.id
						});
					let a = null != n && n.state !== C.r2o.EXPIRED && n.state !== C.r2o.BANNED ? t : void 0,
						l = g.default.getFingerprint(),
						o = null != l ? l : g.default.getId(),
						c = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
					u.Z.openApp(a, void 0, o, void 0, c);
				})(e, t, s);
			},
			transitionTo: n
		})
	);
}
