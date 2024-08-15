n.d(t, {
	$7: function () {
		return Y;
	},
	$e: function () {
		return B;
	},
	GJ: function () {
		return m;
	},
	Gy: function () {
		return v;
	},
	RD: function () {
		return H;
	},
	RZ: function () {
		return D;
	},
	Tj: function () {
		return j;
	},
	W: function () {
		return g;
	},
	Wx: function () {
		return C;
	},
	X0: function () {
		return T;
	},
	Yh: function () {
		return F;
	},
	Yk: function () {
		return V;
	},
	_A: function () {
		return k;
	},
	aq: function () {
		return S;
	},
	cR: function () {
		return w;
	},
	iI: function () {
		return U;
	},
	ik: function () {
		return R;
	},
	kA: function () {
		return y;
	},
	nT: function () {
		return Z;
	},
	pM: function () {
		return N;
	},
	yv: function () {
		return G;
	},
	zB: function () {
		return x;
	}
}),
	n(653041);
var r = n(149765),
	i = n(866442),
	a = n(741361),
	s = n(911969),
	o = n(131704),
	l = n(271383),
	u = n(594174),
	c = n(934415),
	d = n(823379),
	_ = n(700785),
	E = n(709054),
	f = n(51144),
	h = n(71080),
	p = n(981631),
	I = n(689938);
function m(e) {
	return r.e$(e.permissions, p.Plq.ADMINISTRATOR);
}
function T(e) {
	var t, n;
	let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	let s = ((n = e), r.e$(n.permissions, p.Plq.ADMINISTRATOR) ? h.aC.ADMINISTRATOR : h.aC.ROLE);
	return {
		rowType: s,
		colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.Rf)(p.p6O),
		name: e.name,
		id: e.id,
		disabled: m(e) || a,
		key: ''.concat(s, ':').concat(e.id),
		tags: e.tags
	};
}
function g(e, t) {
	let n = m(e) ? 0 : 1,
		r = m(t) ? 0 : 1;
	return n !== r ? n - r : t.position - e.position;
}
function S() {
	let e =
		arguments.length > 0 && void 0 !== arguments[0]
			? arguments[0]
			: I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
	return [
		{
			rowType: h.aC.EMPTY_STATE,
			colorString: (0, i.Rf)(p.p6O),
			name: e,
			disabled: !0,
			id: 'EMPTY_STATE'
		}
	];
}
function A(e, t, n, i) {
	let a = u.default.getCurrentUser();
	if (null == a) return !1;
	if (null == e) return a.id !== t;
	let s = e.permissionOverwrites[t];
	return (null == i ? void 0 : i[t]) != null && (s = i[t]), null == s || !r.e$(s.allow, n);
}
function N(e, t) {
	return E.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function v(e, t) {
	return !N(e, t);
}
function O(e, t) {
	return !N(e.id, t.id);
}
function R(e, t, n, r) {
	let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
	return Object.values(t)
		.filter((t) => !m(t) && A(n, t.id, r) && O(e, t) && i(t.name))
		.sort(g)
		.map((e) => T(e));
}
function C(e, t, n, i) {
	let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
	return Object.values(t)
		.filter((t) => !m(t) && A(n, t.id, i) && O(e, t) && a(t.name))
		.sort(g)
		.map((e) => T(e, r.e$(e.permissions, i)));
}
function y(e, t, n, r, i) {
	var a, s, o, l, u;
	let c = [];
	return 0 ===
		(c = ((a = e),
		(s = t),
		(o = n),
		(l = r),
		(u = i),
		Object.values(s).filter((e) => m(e) || (!A(o, e.id, l, u) && O(a, e))))
			.sort(g)
			.map((e) => T(e))).length
		? S(I.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES)
		: c;
}
function D(e, t, n, i, a) {
	var s, o, l, u, c;
	let d = [];
	return 0 ===
		(d = ((s = e),
		(o = t),
		(l = n),
		(u = i),
		(c = a),
		Object.values(o).filter((e) => {
			var t;
			return (
				m(e) ||
				(!A(l, e.id, u, c) && O(s, e)) ||
				r.e$(r.$e(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u)
			);
		}))
			.sort(g)
			.map((e) => T(e, r.e$(e.permissions, i)))).length
		? S(I.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES)
		: d;
}
function L(e, t) {
	var n;
	return null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : f.ZP.getName(e);
}
function b(e, t) {
	return t.isOwner(e);
}
function M(e, t) {
	var n, r, i;
	let a = ((r = e), t.isOwner(r) ? h.aC.OWNER : h.aC.MEMBER);
	return {
		rowType: a,
		name: L(e, t),
		nickname: null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : null,
		username: f.ZP.getName(e),
		id: e.id,
		avatarURL: e.getAvatarURL(t.id, 24),
		bot: e.bot,
		verifiedBot: e.isVerifiedBot(),
		disabled: ((i = e), t.isOwner(i)),
		key: ''.concat(a, ':').concat(e.id)
	};
}
function P(e, t) {
	return e.rowType !== t.rowType
		? e.rowType - t.rowType
		: e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function U(e, t, n, r) {
	let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
	return e
		.map(u.default.getUser)
		.filter(d.lm)
		.filter((e) => !n.isOwner(e) && A(t, e.id, r) && (i(L(e, n)) || i(e.username) || i(e.discriminator)))
		.map((e) => M(e, n))
		.sort(P);
}
function w(e, t, n, r, i) {
	var a, s, o, l, c;
	return ((a = e),
	(s = t),
	(o = n),
	(l = r),
	(c = i),
	a
		.map(u.default.getUser)
		.filter(d.lm)
		.filter((e) => {
			var t;
			return !A(s, e.id, l, c) || ((t = e), o.isOwner(t));
		}))
		.map((e) => M(e, n))
		.sort(P);
}
function x(e, t) {
	switch (e) {
		case h.aC.ROLE:
			return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
		case h.aC.OWNER:
			return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
		case h.aC.ADMINISTRATOR:
			return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
		case h.aC.MEMBER:
			return t ? I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
		case h.aC.USER:
			return I.Z.Messages.USER;
		case h.aC.GUILD:
			return I.Z.Messages.SERVER;
		case h.aC.EMPTY_STATE:
			return null;
	}
}
function G(e) {
	switch (e) {
		case h.aC.ROLE:
			return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
		case h.aC.OWNER:
			return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
		case h.aC.ADMINISTRATOR:
			return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
		case h.aC.MEMBER:
			return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
		case h.aC.EMPTY_STATE:
		default:
			return null;
	}
}
function k(e, t, n) {
	let i = e.permissionOverwrites[e.guild_id];
	null == i && (i = _.we(e.guild_id));
	let a = { ...i };
	return (a.deny = r.Od(a.deny, t)), (a.allow = r.Od(a.allow, t)), !n && (a.deny = r.IH(a.deny, t)), a;
}
function B(e, t, n) {
	let r = k(e, t, n);
	(0, a.kY)(e, r.id, r.allow, r.deny);
}
function F(e, t) {
	let n = u.default.getCurrentUser();
	if (null == n) return;
	let i = e.permissionOverwrites[n.id];
	if (null == i) {
		let i = {
			id: n.id,
			type: s.BN.MEMBER,
			allow: r.IH(_.Hn, t),
			deny: _.Hn
		};
		return (0, a.hw)(e.id, [i], !0);
	}
	{
		let { allow: n, deny: s } = i;
		return (n = r.IH(n, t)), (0, a.kY)(e, i.id, n, s);
	}
}
function V(e, t) {
	if (null == e) return !1;
	let n = e.permissionOverwrites[e.guild_id];
	return (
		(null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions)
	);
}
function H(e, t) {
	let n = Object.keys(t);
	return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function Z(e, t, n) {
	return e === p.d4z.GUILD_TEXT || e === p.d4z.GUILD_ANNOUNCEMENT
		? t
		: (!(0, o.bw)(e) && e !== p.d4z.GUILD_CATEGORY) || (t && n);
}
function Y(e) {
	switch (e) {
		case p.d4z.GUILD_TEXT:
		case p.d4z.GUILD_ANNOUNCEMENT:
			return I.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
		case p.d4z.GUILD_VOICE:
			return I.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
		case p.d4z.GUILD_CATEGORY:
			return I.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
		default:
			return null;
	}
}
function j(e, t) {
	let n = [];
	return (
		Object.values(e).forEach((e) => {
			let { row: r } = e;
			null != r.id &&
				'' !== r.id &&
				(r.rowType === h.aC.ROLE
					? n.push((0, c.rX)(r.id, t))
					: r.rowType === h.aC.MEMBER && n.push((0, c.jZ)(r.id, t)));
		}),
		n
	);
}
