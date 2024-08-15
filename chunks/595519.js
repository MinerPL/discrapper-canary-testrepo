n.d(t, {
	NX: function () {
		return d;
	},
	WS: function () {
		return c;
	},
	l5: function () {
		return u;
	},
	qB: function () {
		return _;
	}
});
var r = n(106351),
	i = n(442837),
	a = n(424602),
	s = n(592125),
	o = n(496675),
	l = n(231338);
function u(e) {
	var t;
	if (null == e || void 0 === e) return !1;
	let n = s.Z.getChannel(e.parent_id);
	if (null != n && (null == n ? void 0 : n.type) !== r.d.GUILD_CATEGORY) return !1;
	return (t = e.type), [r.d.GUILD_TEXT, r.d.GROUP_DM, r.d.DM].includes(t);
}
function c(e, t) {
	if (null == e) return !1;
	let n = u(e),
		r = o.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e),
		i = r && o.Z.can(l.Pl.SEND_MESSAGES | l.Pl.USE_APPLICATION_COMMANDS, e);
	return (null == e ? void 0 : e.guild_id) == null ? n : t ? i && n : r && n;
}
function d(e, t) {
	let {
		isActivitiesInTextEnabledForChannelType: n,
		channelGuildId: r,
		hasPermission: a
	} = (0, i.cj)([s.Z, o.Z], () => {
		let n = s.Z.getChannel(e),
			r = o.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n),
			i = r && o.Z.can(l.Pl.SEND_MESSAGES | l.Pl.USE_APPLICATION_COMMANDS, n);
		return {
			isActivitiesInTextEnabledForChannelType: u(n),
			channelGuildId: null == n ? void 0 : n.guild_id,
			hasPermission: t ? i : r
		};
	});
	return null != r ? a && n : n;
}
function _(e, t) {
	let n = (0, i.e7)([s.Z], () => s.Z.getChannel(e)),
		r = (0, i.e7)([o.Z], () => o.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)),
		c = u(n),
		d = null == n ? void 0 : n.guild_id;
	return !a.T.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && (null != d ? r && c : c);
}
