n.d(t, {
	O: function () {
		return R;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(873546),
	l = n(442837),
	o = n(100527),
	c = n(906732),
	u = n(320007),
	d = n(141321),
	_ = n(121254),
	E = n(954551),
	I = n(208450),
	m = n(594174),
	T = n(358085),
	h = n(998502),
	N = n(665149),
	f = n(300986),
	C = n(314451),
	p = n(35583),
	g = n(981631),
	S = n(176505),
	A = n(659119);
async function R() {
	if ((0, T.isMac)() && T.isPlatformEmbedded) {
		var e, t, n;
		let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
		'Minimize' === i ? h.ZP.minimize() : 'Maximize' === i && h.ZP.maximize();
	}
}
function x(e) {
	let { children: t, className: n, channelId: a, guildId: s, innerClassname: o, transparent: c = !1, toolbar: T, mobileToolbar: h, 'aria-label': g, 'aria-labelledby': S, scrollable: x, role: O, hideSearch: M, showDivider: v } = e,
		L = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
		Z = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
		{ enabled: P } = _.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
	return (0, i.jsx)(N.ZP, {
		className: n,
		innerClassName: o,
		toolbar: (function () {
			if (null == T) return null;
			let e = null != a && !M;
			return r.tq
				? h
				: (0, i.jsxs)(i.Fragment, {
						children: [T, e ? (0, i.jsx)(I.Z, { className: A.search }, null != s ? s : a) : null, v && (0, i.jsx)(N.ZP.Divider, {}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), (0, i.jsx)(d.Z, {}), P ? (0, i.jsx)(E.Z, {}) : null, Z ? (0, i.jsx)(C.Z, {}) : (0, i.jsx)(f.Z, {})]
					});
		})(),
		transparent: c,
		onDoubleClick: R,
		'aria-label': g,
		'aria-labelledby': S,
		role: O,
		scrollable: x,
		children: t
	});
}
function O(e) {
	let { children: t, className: n, 'aria-label': a, 'aria-labelledby': s, role: r } = e;
	return (0, i.jsx)(N.ZP, {
		className: n,
		onDoubleClick: R,
		'aria-label': a,
		'aria-labelledby': s,
		role: r,
		children: t
	});
}
function M(e) {
	let { isAuthenticated: t = !0, ...n } = e,
		{ analyticsLocations: a } = (0, c.ZP)(o.Z.HEADER_BAR),
		r = s()(n.className, { [A.forumOrHome]: (null != n.channelType && g.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === S.oC.GUILD_HOME });
	return (0, i.jsx)(c.Gt, {
		value: a,
		children: t
			? (0, i.jsx)(x, {
					...n,
					className: r
				})
			: (0, i.jsx)(O, {
					...n,
					className: r
				})
	});
}
(M.Title = N.ZP.Title), (M.Icon = N.ZP.Icon), (M.Divider = N.ZP.Divider), (M.Caret = N.ZP.Caret), (t.Z = M);
