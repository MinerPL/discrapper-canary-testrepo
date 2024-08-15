n.d(t, {
	$U: function () {
		return f;
	},
	Jw: function () {
		return m;
	},
	Kg: function () {
		return h;
	},
	PO: function () {
		return T;
	},
	Wx: function () {
		return S;
	},
	bd: function () {
		return p;
	},
	f$: function () {
		return N;
	},
	gc: function () {
		return E;
	},
	gd: function () {
		return A;
	},
	s6: function () {
		return g;
	},
	xQ: function () {
		return I;
	}
}),
	n(653041);
var r = n(470079),
	i = n(442837),
	a = n(809206),
	s = n(676742),
	o = n(18438),
	l = n(778825),
	u = n(350327),
	c = n(621853),
	d = n(271383),
	_ = n(25990);
function E(e) {
	return r.useMemo(() => {
		let t = d.ZP.getMutableAllGuildsAndMembers(),
			n = {};
		for (let i in t) {
			var r;
			let a = null === (r = t[i][e]) || void 0 === r ? void 0 : r.avatar;
			if (null != a) null == n[a] && (n[a] = []), n[a].push(i);
		}
		return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
	}, [e]);
}
function f(e, t) {
	let n = (0, i.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t.id, e.id))),
		r = (0, s.Z)(e.avatarDecoration),
		{ pendingUserAvatarDecoration: a, userErrors: o } = (0, i.cj)([_.Z], () => ({
			pendingUserAvatarDecoration: _.Z.getPendingAvatarDecoration(),
			userErrors: _.Z.getErrors().avatarDecoration
		})),
		{ pendingGuildAvatarDecoration: u, guildErrors: c } = (0, i.cj)([l.Z], () => ({
			pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
			guildErrors: l.Z.getErrors().avatarDecoration
		}));
	return {
		userAvatarDecoration: r,
		guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
		pendingAvatarDecoration: null != t ? u : a,
		pendingErrors: null != t ? c : o
	};
}
function h(e, t) {
	return (0, i.e7)(
		[c.Z],
		() => {
			var n, r;
			return null == t
				? null === (n = c.Z.getUserProfile(e.id)) || void 0 === n
					? void 0
					: n.profileEffectId
				: null === (r = c.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === r
					? void 0
					: r.profileEffectId;
		},
		[e, t]
	);
}
function p(e) {
	return (0, i.cj)(
		[_.Z, l.Z],
		() =>
			null == e
				? {
						pendingProfileEffectId: _.Z.getPendingProfileEffectId(),
						errors: _.Z.getErrors().profileEffect
					}
				: {
						pendingProfileEffectId: l.Z.getPendingProfileEffectId(),
						errors: l.Z.getErrors().profileEffect
					},
		[e]
	);
}
function I(e, t) {
	(0, u.Cf)(e === t ? void 0 : e);
}
function m(e, t) {
	(0, a.I5)(e === t ? void 0 : e);
}
function T(e, t) {
	(null != e ? o.cV : a.cV)(t);
}
function g(e, t, n) {
	if (e === t) {
		null == n ? (0, a.xn)(void 0) : (0, o.xn)(void 0);
		return;
	}
	null == n ? (0, a.xn)(e) : (0, o.xn)(e);
}
function S(e, t, n) {
	let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (null != e)
		return '' === e
			? {
					value: r ? n : null,
					isUsingGuildValue: !1
				}
			: {
					value: e,
					isUsingGuildValue: r
				};
	return null != t && '' !== t
		? {
				value: t,
				isUsingGuildValue: !0
			}
		: {
				value: n,
				isUsingGuildValue: !1
			};
}
function A(e, t) {
	return void 0 === e ? null != t : null != e;
}
function N(e, t) {
	return void 0 === e ? null != t : null != e;
}
