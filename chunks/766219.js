n.d(t, {
	Mf: function () {
		return c;
	},
	QW: function () {
		return u;
	},
	a$: function () {
		return d;
	},
	lg: function () {
		return _;
	},
	sm: function () {
		return l;
	},
	vb: function () {
		return o;
	}
}),
	n(411104);
var i = n(823379),
	a = n(49898),
	s = n(731455),
	r = n(689938);
function l(e) {
	switch (e) {
		case a.F$.SERVERS:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
		case a.F$.QUESTS:
			return r.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
		default:
			(0, i.vE)(e);
	}
}
function o(e) {
	switch (e) {
		case a.vf.FEATURED:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_FEATURED_CATEGORY;
		case a.vf.GUILDS:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_CATEGORY;
		case a.vf.GAMING:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
		case a.vf.MUSIC:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
		case a.vf.ENTERTAINMENT:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
		case a.vf.TECH:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
		case a.vf.EDUCATION:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
		case a.vf.HUBS:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY;
	}
}
function c(e) {
	switch (e) {
		case a.vf.FEATURED:
			return r.Z.Messages.GUILD_DISCOVERY_HOME_TITLE;
		case a.vf.GAMING:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_TITLE;
		case a.vf.MUSIC:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_TITLE;
		case a.vf.ENTERTAINMENT:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_TITLE;
		case a.vf.TECH:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_TITLE;
		case a.vf.EDUCATION:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_TITLE;
		case a.vf.HUBS:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE;
		default:
			throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
	}
}
function d(e) {
	switch (e) {
		case a.vf.FEATURED:
			return r.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE;
		case a.vf.GAMING:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION;
		case a.vf.MUSIC:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION;
		case a.vf.ENTERTAINMENT:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION;
		case a.vf.TECH:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION;
		case a.vf.EDUCATION:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION;
		case a.vf.HUBS:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION;
		default:
			throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
	}
}
function u(e) {
	switch (e) {
		case a.vf.FEATURED:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_FEATURED;
		case a.vf.GAMING:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_GAMING;
		case a.vf.MUSIC:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_MUSIC;
		case a.vf.ENTERTAINMENT:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_ENTERTAINMENT;
		case a.vf.TECH:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_TECH;
		case a.vf.EDUCATION:
			return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_EDUCATION;
		default:
			return null;
	}
}
function _(e) {
	if (null == e) return s.Hk;
	switch (e) {
		case a.vf.FEATURED:
		case a.vf.GUILDS:
		case a.vf.HUBS:
			return s.Hk;
		case a.vf.GAMING:
			return s.Gj.Activity;
		case a.vf.MUSIC:
			return s.Gj.Music;
		case a.vf.ENTERTAINMENT:
			return s.Gj.Television;
		case a.vf.TECH:
			return s.Gj.Science;
		case a.vf.EDUCATION:
			return s.Gj.Education;
		default:
			(0, i.vE)(e);
	}
}
