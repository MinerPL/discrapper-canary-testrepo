"use strict";
n.d(t, {
  Az: function() {
    return A
  },
  Eg: function() {
    return g
  },
  IZ: function() {
    return m
  },
  Lq: function() {
    return S
  },
  P1: function() {
    return i
  },
  PP: function() {
    return f
  },
  Ub: function() {
    return h
  },
  Zt: function() {
    return N
  },
  c6: function() {
    return C
  },
  j$: function() {
    return R
  },
  mT: function() {
    return p
  },
  sq: function() {
    return T
  },
  tI: function() {
    return O
  }
}), n(47120);
var i, r, s = n(664751),
  o = n(544891),
  a = n(749210),
  l = n(41776),
  u = n(703656),
  _ = n(769654),
  d = n(650774),
  c = n(430824),
  E = n(626135),
  I = n(981631);
(r = i || (i = {})).SEARCH = "Search", r.RECOMMENDED = "Recommended", r.POPULAR = "Popular", r.RECOMMENDED_E3 = "Recommended - E3", r.HEADER = "Header";
let T = ">200";
async function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      channelId: i,
      onSuccess: r,
      joinSource: s,
      loadId: o,
      setsHistorySnapshot: d = !0
    } = n,
    E = (0, u.s1)();
  d && l.Z.setHistorySnapshot({
    ...E
  });
  let I = c.Z.getGuild(e),
    T = {
      state: {
        analyticsSource: t
      }
    };
  null != I && null != I.joinedAt ? (0, _.X)(e, T) : (await a.Z.joinGuild(e, {
    lurker: !0,
    source: s,
    loadId: o,
    lurkLocation: null == t ? void 0 : t.page
  }), await a.Z.transitionToGuildSync(e, {
    ...T,
    welcomeModalChannelId: i,
    search: E.location.search
  }, i)), null == r || r()
}
async function S(e) {
  let t, {
    loadId: n,
    guildId: r,
    index: s,
    analyticsContext: o,
    categoryId: a
  } = e;
  "string" == typeof o && o in i && (t = o);
  let l = {
    page: I.ZY5.GUILD_DISCOVERY,
    object: I.qAy.CARD,
    section: t
  };
  await h(r, l, {
      loadId: n
    }),
    function(e) {
      let {
        loadId: t,
        guildId: n,
        index: i,
        analyticsContext: r,
        categoryId: s
      } = e, o = {
        page: I.ZY5.GUILD_DISCOVERY,
        section: r
      };
      "string" != typeof r && null != r.location && (o = r.location), E.default.track(I.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
        location: o,
        guild_id: n,
        load_id: t,
        card_index: i,
        location_object: I.qAy.CARD,
        category_id: s
      })
    }({
      loadId: n,
      guildId: r,
      index: s,
      analyticsContext: o,
      categoryId: a
    })
}

function f(e) {
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
    emojiCount: e.emoji_count,
    stickers: e.stickers,
    stickerCount: e.sticker_count,
    keywords: e.keywords
  }
}

function N(e) {
  let {
    loadId: t,
    gamesYouPlayGuilds: n,
    allGuilds: i,
    categoryId: r,
    recommendationsSource: s = null
  } = e, o = n.length, a = i.length;
  E.default.track(I.rMx.GUILD_DISCOVERY_VIEWED, {
    load_id: t,
    num_guilds: o + a,
    num_guilds_recommended: o,
    num_guilds_popular: a,
    recommended_guild_ids: n.map(e => e.id),
    category_id: r,
    recommendations_source: s
  })
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  E.default.track(I.rMx.GUILD_DISCOVERY_EXITED, {
    load_id: e,
    guild_ids_viewed: t,
    recommendations_source: n
  })
}

function m(e) {
  E.default.track(I.rMx.SEARCH_CLOSED, {
    load_id: e
  })
}

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  E.default.track(I.rMx.SEARCH_STARTED, {
    search_type: I.aib.GUILD_DISCOVERY,
    load_id: e,
    location: n.location,
    category_id: t
  })
}

function R(e, t, n, i) {
  E.default.track(I.rMx.SEARCH_STARTED, {
    search_type: I.aib.GUILD_DISCOVERY_TAG,
    load_id: e,
    location: {
      page: I.ZY5.GUILD_DISCOVERY,
      section: n
    },
    category_id: t,
    guild_id: i
  })
}

function C(e) {
  let {
    loadId: t,
    searchId: n,
    query: i,
    guildResults: r,
    analyticsContext: s,
    categoryId: o,
    isTagSearch: a
  } = e;
  E.default.track(I.rMx.SEARCH_RESULT_VIEWED, {
    search_type: a ? I.aib.GUILD_DISCOVERY_TAG : I.aib.GUILD_DISCOVERY,
    load_id: t,
    search_id: n,
    total_results: void 0 !== r ? r.length : null,
    guild_ids: void 0 !== r ? r.map(e => e.id) : null,
    query: i,
    location: s.location,
    category_id: o
  })
}

function p(e) {
  let t = l.Z.getLoadId(e);
  E.default.track(I.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
    guild_id: e,
    load_id: t,
    guild_size: d.Z.getMemberCount(e)
  })
}
async function g(e) {
  try {
    var t, n;
    let i = await o.tn.get({
        url: I.ANM.GUILD_DISCOVERY,
        query: s.stringify({
          guild_ids: e
        }),
        oldFormErrors: !0
      }),
      r = null === (n = i.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
    if (null == r) return r;
    return f(r)
  } catch (e) {
    return null
  }
}