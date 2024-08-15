n.d(t, {
	B2: function () {
		return f;
	},
	Ov: function () {
		return _;
	},
	Qn: function () {
		return m;
	},
	_o: function () {
		return p;
	},
	pd: function () {
		return h;
	}
}),
	n(47120),
	n(411104),
	n(653041);
var i = n(149765),
	a = n(399606),
	s = n(271383),
	l = n(430824),
	r = n(594174),
	o = n(700785),
	c = n(981631),
	u = n(135899);
let d = [c.Plq.USE_CLYDE_AI],
	h = Object.keys(c.Plq).filter((e) => !d.includes(c.Plq[e])),
	m = Array.from(new Set([...u.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
		let t = h.find((t) => c.Plq[t] === e);
		if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
		return t;
	}),
	p = new Set(c.yYS);
function _(e, t) {
	return e === t;
}
function f(e, t, n) {
	let u = (0, a.e7)([l.Z], () => l.Z.getGuild(t), [t]);
	return (0, a.e7)(
		[s.ZP, r.default, l.Z],
		() => {
			let a = {},
				d = s.ZP.getMember(t, e),
				h = r.default.getUser(e);
			if (null == u || null == d || null == h) return a;
			let m = l.Z.getRole(u.id, u.getEveryoneRoleId()),
				p = o.uB({
					user: h,
					context: u
				});
			for (let e of n) {
				let t = c.Plq[e];
				if (!!i.e$(p, t)) {
					for (let n of ((a[e] = []), d.roles)) {
						let s = l.Z.getRole(u.id, n);
						if (null != s) (i.e$(s.permissions, c.Plq.ADMINISTRATOR) || i.Db(s.permissions, t)) && a[e].push(s.id);
					}
					null != m && (i.e$(m.permissions, c.Plq.ADMINISTRATOR) || i.Db(m.permissions, t)) && a[e].push(m.id), u.isOwner(h) && a[e].push(h.id);
				}
			}
			return a;
		},
		[u, t, n, e]
	);
}
