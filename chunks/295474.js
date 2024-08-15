n.d(t, {
	Ux: function () {
		return N;
	},
	gS: function () {
		return f;
	},
	ww: function () {
		return C;
	}
}),
	n(789020);
var i = n(470079),
	a = n(399606),
	s = n(230711),
	r = n(906732),
	l = n(18438),
	o = n(314897),
	c = n(271383),
	u = n(430824),
	d = n(496675),
	_ = n(914010),
	E = n(715903),
	I = n(981631),
	m = n(372897),
	T = n(526761),
	h = n(689938);
function N(e) {
	return (0, a.e7)(
		[o.default, c.ZP],
		() => {
			if (null == e) return !1;
			let t = o.default.getId();
			return (0, E.EY)(c.ZP.getMember(e, t));
		},
		[e]
	);
}
function f(e) {
	return (0, a.cj)(
		[o.default, c.ZP, _.Z, u.Z],
		() => {
			let t = {
					nick: void 0,
					bio: void 0
				},
				n = _.Z.getGuildId(),
				i = null != e ? e : n,
				a = u.Z.getGuild(i);
			if (null == a || null == i) return t;
			let s = o.default.getId(),
				r = c.ZP.getMember(i, s),
				l = (0, E.Ow)(null == r ? void 0 : r.flags);
			if (0 === l.size) return t;
			if (l.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
				if (null == e) {
					var d;
					t.nick = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({ guildName: null !== (d = a.name) && void 0 !== d ? d : '' })];
				} else t.nick = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
			}
			return l.has(m.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t;
		},
		[e]
	);
}
function C(e) {
	let { guildId: t, scrollPosition: n, analyticsLocation: o, analyticsLocations: c, openWithoutBackstack: _ } = e,
		{ analyticsLocations: E } = (0, r.ZP)(),
		m = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]),
		h = (0, a.e7)([d.Z], () => null != m && d.Z.can(I.Plq.CHANGE_NICKNAME, m), [m]);
	return [
		i.useCallback(() => {
			if (null == m) return;
			let e = I.oAB.PROFILE_CUSTOMIZATION,
				t = T.NB.GUILD;
			h ? (0, l.Fq)(m, null != c ? c : E) : (t = T.NB.USER_PROFILE);
			s.Z.open(e, t, {
				scrollPosition: n,
				analyticsLocation: o,
				analyticsLocations: c,
				openWithoutBackstack: _
			});
		}, [h, n, o, c, _, m, E]),
		h
	];
}
