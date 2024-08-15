n.d(t, {
	Hs: function () {
		return I;
	},
	Vh: function () {
		return g;
	},
	k: function () {
		return p;
	},
	ny: function () {
		return S;
	}
});
var r = n(470079),
	i = n(149765),
	a = n(442837),
	s = n(911969),
	o = n(160404),
	l = n(695346),
	u = n(131704),
	c = n(314897),
	d = n(592125),
	_ = n(271383),
	E = n(496675),
	f = n(594174),
	h = n(981631);
function p(e, t) {
	var n, r, i, a, s;
	let E;
	let h = S(
			(E = e instanceof u.Sf && e.isThread() ? (null !== (i = d.Z.getChannel(e.parent_id)) && void 0 !== i ? i : e) : e)
		),
		p = l.xM.getSetting(),
		I = c.default.getId(),
		g =
			null !== (a = null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) &&
			void 0 !== a &&
			a,
		A =
			null != h && null !== (s = null === (r = _.ZP.getMember(h, I)) || void 0 === r ? void 0 : r.roles) && void 0 !== s
				? s
				: [],
		N = o.Z.isViewingRoles(h),
		{
			computedPermissions: v,
			hasBaseAccessPermissions: O,
			hasSendMessagesPermission: R
		} = T(E, e instanceof u.Sf && e.isThread());
	return {
		context: E,
		userId: I,
		roleIds: A,
		isImpersonating: N,
		commandTypes: t,
		computedPermissions: v,
		hasBaseAccessPermissions: O,
		hasSendMessagesPermission: R,
		allowNsfw: m(E, g, p)
	};
}
function I(e, t) {
	let n = r.useMemo(() => {
			if (e instanceof u.Sf && e.isThread()) {
				var t;
				return null !== (t = d.Z.getChannel(e.parent_id)) && void 0 !== t ? t : e;
			}
			return e;
		}, [e]),
		i = S(n),
		s = l.xM.useSetting(),
		E = (0, a.e7)([c.default], () => c.default.getId()),
		h = (0, a.e7)([f.default], () => {
			var e, t;
			return (
				null !== (t = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) &&
				void 0 !== t &&
				t
			);
		}),
		p = (0, a.Wu)([_.ZP], () => {
			var e, t;
			return null != i &&
				null !== (t = null === (e = _.ZP.getMember(i, E)) || void 0 === e ? void 0 : e.roles) &&
				void 0 !== t
				? t
				: [];
		}),
		I = (0, a.e7)([o.Z], () => o.Z.isViewingRoles(i));
	return r.useMemo(() => {
		let {
			computedPermissions: r,
			hasBaseAccessPermissions: i,
			hasSendMessagesPermission: a
		} = T(n, e instanceof u.Sf && e.isThread());
		return {
			context: n,
			userId: E,
			roleIds: p,
			commandTypes: t,
			isImpersonating: I,
			computedPermissions: r,
			hasBaseAccessPermissions: i,
			hasSendMessagesPermission: a,
			allowNsfw: m(n, h, s)
		};
	}, [t, n, I, p, E, h, s, e]);
}
function m(e, t, n) {
	return !!t && (!(e instanceof u.Sf) || (null != e.guild_id ? e.nsfw : n));
}
function T(e, t) {
	let n, r;
	if (e instanceof u.Sf && e.isPrivate())
		return {
			computedPermissions: i.vB(0),
			hasBaseAccessPermissions: !0,
			hasSendMessagesPermission: !0
		};
	let a = E.Z.computePermissions(e);
	return (
		i.e$(a, h.Plq.ADMINISTRATOR)
			? ((n = !0), (r = !0))
			: e instanceof u.Sf
				? ((n = i.e$(a, h.Plq.VIEW_CHANNEL) && i.e$(a, h.Plq.USE_APPLICATION_COMMANDS)),
					(r = t ? i.e$(a, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(a, h.Plq.SEND_MESSAGES)))
				: ((n = i.e$(a, h.Plq.VIEW_CHANNEL)), (r = !0)),
		{
			computedPermissions: a,
			hasBaseAccessPermissions: n,
			hasSendMessagesPermission: r
		}
	);
}
function g(e, t) {
	return e instanceof u.Sf && null == e.guild_id
		? e.type === h.d4z.DM && e.getRecipientId() === t
			? s.D.BOT_DM
			: s.D.PRIVATE_CHANNEL
		: s.D.GUILD;
}
function S(e) {
	return e instanceof u.Sf ? e.guild_id : e.id;
}
