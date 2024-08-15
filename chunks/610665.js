i.d(n, {
	GV: function () {
		return C;
	},
	iQ: function () {
		return m;
	}
}),
	i(653041),
	i(47120),
	i(411104);
var l = i(512722),
	a = i.n(l),
	t = i(333848),
	s = i(706058),
	r = i(131704),
	c = i(592125),
	o = i(430824),
	u = i(482241),
	d = i(765305),
	h = i(981631);
async function v(e, n) {
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
		l = [];
	l.push(...i);
	let a = await t.Z.createChannel({
		guildId: e.id,
		type: h.d4z.GUILD_STAGE_VOICE,
		name: n.substring(0, 100),
		permissionOverwrites: l
	});
	if (null == a || 201 !== a.status) throw Error("Can't create channel for event");
	return (0, r.q_)(a.body);
}
async function C(e, n) {
	let { entity_type: i } = e;
	if (i === d.WX.STAGE_INSTANCE) {
		let i = await (function (e, n) {
			let { guild_id: i, channel_id: l } = e,
				a = o.Z.getGuild(i);
			if (null == a) return Promise.resolve(null);
			let t = c.Z.getChannel(l);
			return null == t ? v(a, e.name, n) : Promise.resolve(t);
		})(e, n);
		a()(null != i, 'could not find or create channel');
	}
}
async function m(e) {
	let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		{ channel_id: i, entity_type: l, name: t, id: r, guild_id: c } = e;
	switch (l) {
		case d.WX.STAGE_INSTANCE:
			a()(null != i, 'channel_id is required'), await (0, s.me)(i, t, d.j8.GUILD_ONLY, n, r);
			break;
		case d.WX.VOICE:
			a()(null != i, 'channel_id is required'), await u.Z.startEvent(r, c);
			break;
		case d.WX.EXTERNAL:
			await u.Z.startEvent(r, c);
	}
}
