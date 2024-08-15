n(47120);
var r,
	i = n(442837),
	a = n(570140),
	s = n(823379),
	o = n(592125),
	l = n(486472),
	u = n(984933),
	c = n(981631);
function d(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let _ = {},
	E = 0;
function f() {
	E += 1;
}
function h(e) {
	if (null == _[e]) return !1;
	delete _[e];
}
class p extends (r = i.ZP.PersistedStore) {
	initialize(e) {
		this.waitFor(o.Z, l.Z), this.removeChangeListener(f), this.addChangeListener(f), (_ = null != e ? e : {});
	}
	getState() {
		return _;
	}
	isCollapsed(e) {
		return null != e && 'null' !== e && !!_[e] && _[e];
	}
	getCollapsedCategories() {
		return _;
	}
	get version() {
		return E;
	}
}
d(p, 'displayName', 'CategoryCollapseStore'),
	d(p, 'persistKey', 'collapsedCategories'),
	(t.Z = new p(a.Z, {
		CONNECTION_OPEN: function (e) {
			for (let t of (!e.userGuildSettings.partial && (_ = {}), e.userGuildSettings.entries))
				if (null != t.channel_overrides)
					for (let e of t.channel_overrides) e.collapsed ? (_[e.channel_id] = !0) : delete _[e.channel_id];
		},
		USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
			let { userGuildSettings: t } = e,
				n = new Set(t.map((e) => e.guild_id).filter(s.lm));
			for (let e in _) {
				let t = o.Z.getChannel(e);
				null != t && null != t.guild_id && n.has(t.guild_id) && delete _[t.id];
			}
			for (let e of t) for (let t of e.channel_overrides) t.collapsed && (_[t.channel_id] = !0);
		},
		CATEGORY_COLLAPSE: function (e) {
			let { id: t } = e;
			if (_[t]) return !1;
			_[t] = !0;
		},
		CATEGORY_EXPAND: function (e) {
			let { id: t } = e;
			return h(t);
		},
		CATEGORY_COLLAPSE_ALL: function (e) {
			let { guildId: t } = e;
			u.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((e) => {
				let { channel: t } = e;
				'null' !== t.id && (_[t.id] = !0);
			});
		},
		CATEGORY_EXPAND_ALL: function (e) {
			let { guildId: t } = e;
			u.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((e) => {
				let { channel: t } = e;
				delete _[t.id];
			});
		},
		CHANNEL_DELETE: function (e) {
			let {
				channel: { id: t }
			} = e;
			return h(t);
		}
	}));
