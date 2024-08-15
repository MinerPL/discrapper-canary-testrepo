n(47120);
var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140);
let c = {
		guilds: [],
		total: 0,
		loading: !1,
		initialized: !1
	},
	d = {};
function u(e) {
	return {
		id: e.id,
		name: e.name,
		description: e.description,
		splash: e.splash,
		banner: e.banner,
		icon: e.icon,
		features: new Set(e.features),
		presenceCount: e.approximate_presence_count,
		memberCount: e.approximate_member_count,
		premiumSubscriptionCount: e.premium_subscription_count,
		preferredLocale: e.preferred_locale,
		discoverySplash: e.discovery_splash,
		emojis: e.emojis,
		emojiCount: e.emoji_count
	};
}
class _ extends (i = l.ZP.Store) {
	getResults(e, t) {
		var n, i;
		return null !== (i = null === (n = d[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : c;
	}
}
(r = 'GuildDiscoveryInfiniteSearchStore'),
	(s = 'displayName') in (a = _)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new _(o.Z, {
		GUILD_DISCOVERY_SEARCH_FETCH_START: function (e) {
			var t, n;
			let { section: i, query: a, categoryId: s } = e;
			if ('search' !== i) return !1;
			let r = null !== (n = null === (t = d[a]) || void 0 === t ? void 0 : t[s]) && void 0 !== n ? n : c;
			d = {
				...d,
				[a]: {
					...d[a],
					[s]: {
						...r,
						loading: !0,
						initialized: !0
					}
				}
			};
		},
		GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function (e) {
			var t, n;
			let { section: i, guilds: a, total: s, offset: r, query: l, categoryId: o } = e;
			if ('search' !== i) return !1;
			let c = a.map(u),
				_ = null === (n = d[l]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t.guilds;
			(null == _ || _.length !== r) && (_ = []),
				(d = {
					...d,
					[l]: {
						...d[l],
						[o]: {
							guilds: _.concat(c),
							total: s,
							loading: !1,
							initialized: !0
						}
					}
				});
		},
		GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function (e) {
			var t;
			let { section: n, query: i, categoryId: a } = e;
			if ('search' !== n) return !1;
			d = {
				...d,
				[i]: {
					...d[i],
					[a]: {
						...(null === (t = d[i]) || void 0 === t ? void 0 : t[a]),
						loading: !1,
						initialized: !0
					}
				}
			};
		}
	}));
