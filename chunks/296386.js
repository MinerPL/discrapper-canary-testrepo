t.d(n, {
	J9: function () {
		return f;
	},
	K0: function () {
		return E;
	},
	Kq: function () {
		return T;
	},
	P$: function () {
		return x;
	},
	TA: function () {
		return m;
	},
	Vv: function () {
		return g;
	},
	W1: function () {
		return C;
	},
	aC: function () {
		return d;
	},
	i3: function () {
		return u;
	},
	le: function () {
		return c;
	},
	mA: function () {
		return h;
	},
	t$: function () {
		return p;
	},
	zH: function () {
		return _;
	}
});
var a = t(544891),
	r = t(570140),
	i = t(706454),
	s = t(683301),
	o = t(150192),
	l = t(981631);
async function c() {
	let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
		n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		t = i.default.locale,
		c = n && !s.ZP.getIsReady();
	if (t === o.Z.getFetchedLocale() && !c) return;
	let d = await a.tn.get({
		url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
		query: {
			locale: t,
			primary_only: e
		},
		oldFormErrors: !0
	});
	r.Z.dispatch({
		type: 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS',
		categories: d.body,
		locale: t,
		forClanDiscovery: n
	});
}
async function d(e) {
	try {
		let {
				primary_category_id: n,
				category_ids: t,
				keywords: i,
				emoji_discoverability_enabled: s,
				partner_actioned_timestamp: o,
				partner_application_timestamp: c,
				is_published: d,
				reasons_to_join: u,
				social_links: m,
				about: _
			} = (
				await a.tn.get({
					url: l.ANM.GUILD_DISCOVERY_METADATA(e),
					oldFormErrors: !0
				})
			).body,
			f = {
				primaryCategoryId: n,
				secondaryCategoryIds: t,
				keywords: i,
				emojiDiscoverabilityEnabled: s,
				partnerActionedTimestamp: o,
				partnerApplicationTimestamp: c,
				isPublished: d,
				reasonsToJoin: u,
				socialLinks: m,
				about: _
			};
		return (
			r.Z.dispatch({
				type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
				guildId: e,
				metadata: f
			}),
			f
		);
	} catch (e) {
		r.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
	}
}
async function u(e) {
	try {
		let n = (await a.tn.get({ url: l.ANM.GUILD_DISCOVERY_SLUG(e) })).body.slug;
		r.Z.dispatch({
			type: 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS',
			slug: n
		});
	} catch {
		r.Z.dispatch({
			type: 'GUILD_DISCOVERY_SLUG_FETCH_FAIL',
			guildId: e
		});
	}
}
function m(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		primaryCategoryId: n
	});
}
function _(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		keywords: n
	});
}
function f(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		emojiDiscoverabilityEnabled: n
	});
}
function C(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		isPublished: n
	});
}
function h(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		about: n
	});
}
function x(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		reasonsToJoin: n
	});
}
function p(e, n) {
	r.Z.dispatch({
		type: 'GUILD_UPDATE_DISCOVERY_METADATA',
		guildId: e,
		socialLinks: n
	});
}
async function g(e) {
	let { guildId: n, primaryCategoryId: t, keywords: i, emojiDiscoverabilityEnabled: s, partnerActionedTimestamp: o, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: u, socialLinks: m, about: _ } = e;
	try {
		let {
			primary_category_id: e,
			category_ids: f,
			keywords: C,
			emoji_discoverability_enabled: h,
			partner_actioned_timestamp: x,
			partner_application_timestamp: p,
			is_published: g,
			reasons_to_join: T,
			social_links: E,
			about: I
		} = (
			await a.tn.patch({
				url: l.ANM.GUILD_DISCOVERY_METADATA(n),
				body: {
					primary_category_id: t,
					emoji_discoverability_enabled: s,
					partner_actioned_timestamp: o,
					partner_application_timestamp: c,
					keywords: i,
					is_published: d,
					reasons_to_join: u,
					social_links: m,
					about: _
				},
				oldFormErrors: !0
			})
		).body;
		r.Z.dispatch({
			type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
			guildId: n,
			metadata: {
				primaryCategoryId: e,
				secondaryCategoryIds: f,
				keywords: C,
				emojiDiscoverabilityEnabled: h,
				partnerActionedTimestamp: x,
				partnerApplicationTimestamp: p,
				isPublished: g,
				reasonsToJoin: T,
				socialLinks: E,
				about: I
			}
		});
	} catch (e) {
		throw (
			(r.Z.dispatch({
				type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
				guildId: n,
				errors: e.body
			}),
			e)
		);
	}
}
function T(e, n) {
	a.tn
		.put({
			url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
			oldFormErrors: !0
		})
		.then(() => {
			r.Z.dispatch({
				type: 'GUILD_DISCOVERY_CATEGORY_ADD',
				guildId: e,
				categoryId: n
			});
		})
		.catch((n) => {
			r.Z.dispatch({
				type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
				guildId: e,
				errors: n.body
			});
		});
}
function E(e, n) {
	a.tn
		.del({
			url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
			oldFormErrors: !0
		})
		.then(() => {
			r.Z.dispatch({
				type: 'GUILD_DISCOVERY_CATEGORY_DELETE',
				guildId: e,
				categoryId: n
			});
		})
		.catch((n) => {
			r.Z.dispatch({
				type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
				guildId: e,
				errors: n.body
			});
		});
}
