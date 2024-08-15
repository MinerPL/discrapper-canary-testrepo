n.d(t, {
	F6: function () {
		return _;
	},
	ZP: function () {
		return h;
	},
	le: function () {
		return E;
	},
	mA: function () {
		return f;
	}
}),
	n(47120),
	n(757143);
var r = n(442837),
	i = n(762914),
	a = n(353926),
	s = n(699516),
	o = n(594174),
	l = n(823379),
	u = n(51144),
	c = n(981631),
	d = n(689938);
function _(e, t, n) {
	var r, a;
	let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
	switch (e.type) {
		case c.d4z.DM:
			let [_] = e.recipients.map(t.getUser).filter(l.lm);
			if (null == _) return '???';
			let f = n.getNickname(_.id),
				h = null !== (r = null != f ? f : u.ZP.getName(_)) && void 0 !== r ? r : '???';
			return s ? '@'.concat(h) : h;
		case c.d4z.GROUP_DM:
			let p = (0, i.V1)(e.id);
			if ('' !== e.name) return e.name;
			if (p && null != e.ownerId && '' !== e.ownerId) {
				let r = t.getUser(e.ownerId),
					i = null !== (a = n.getNickname(e.ownerId)) && void 0 !== a ? a : u.ZP.getName(r);
				return d.Z.Messages.BROADCASTING_CHANNEL_NAME.format({ name: i });
			}
			let m = e.recipients
				.map(t.getUser)
				.filter(l.lm)
				.map((e) => {
					var t;
					return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : u.ZP.getName(e);
				});
			if (m.length > 0) return m.join(', ');
			return d.Z.Messages.GROUP_DM_ALONE.format({ name: u.ZP.getName(t.getCurrentUser()) });
		case c.d4z.GUILD_ANNOUNCEMENT:
		case c.d4z.GUILD_TEXT:
		case c.d4z.GUILD_FORUM:
		case c.d4z.GUILD_MEDIA:
			if (s) return '#'.concat(e.name);
			return e.name;
		case c.d4z.PUBLIC_THREAD:
		case c.d4z.PRIVATE_THREAD:
		case c.d4z.ANNOUNCEMENT_THREAD:
		case c.d4z.GUILD_VOICE:
		case c.d4z.GUILD_STAGE_VOICE:
		case c.d4z.GUILD_CATEGORY:
			if (o) return '#"'.concat(E(e.name), '"');
			if (s && e.isThread()) return '"'.concat(e.name, '"');
			return e.name;
		default:
			return e.name;
	}
}
function E(e) {
	return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function f(e) {
	return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function h(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	return (0, r.e7)([o.default, a.Z, s.Z], () => (null == e ? null : _(e, o.default, s.Z, t)));
}
