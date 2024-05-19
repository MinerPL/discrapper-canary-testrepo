"use strict";
a.r(t), a.d(t, {
  addGuildCategory: function() {
    return _
  },
  deleteGuildCategory: function() {
    return g
  },
  fetchMetadataForGuild: function() {
    return d
  },
  fetchSlugForGuild: function() {
    return u
  },
  maybeFetchGuildDiscoveryCategories: function() {
    return c
  },
  saveGuildMetadata: function() {
    return x
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return E
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return p
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return T
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return C
  },
  updateGuildEmojiDiscoverabilityEnabled: function() {
    return h
  },
  updateGuildKeywords: function() {
    return m
  },
  updateGuildPrimaryCategory: function() {
    return f
  }
});
var n = a("544891"),
  r = a("570140"),
  s = a("706454"),
  i = a("683301"),
  l = a("150192"),
  o = a("981631");
async function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = s.default.locale,
    c = t && !i.default.getIsReady();
  if (a === l.default.getFetchedLocale() && !c) return;
  let d = await n.HTTP.get({
    url: o.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: a,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: d.body,
    locale: a,
    forClanDiscovery: t
  })
}
async function d(e) {
  try {
    let {
      primary_category_id: t,
      category_ids: a,
      keywords: s,
      emoji_discoverability_enabled: i,
      partner_actioned_timestamp: l,
      partner_application_timestamp: c,
      is_published: d,
      reasons_to_join: u,
      social_links: f,
      about: m
    } = (await n.HTTP.get({
      url: o.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, h = {
      primaryCategoryId: t,
      secondaryCategoryIds: a,
      keywords: s,
      emojiDiscoverabilityEnabled: i,
      partnerActionedTimestamp: l,
      partnerApplicationTimestamp: c,
      isPublished: d,
      reasonsToJoin: u,
      socialLinks: f,
      about: m
    };
    return r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: h
    }), h
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function u(e) {
  try {
    let t = (await n.HTTP.get({
      url: o.Endpoints.GUILD_DISCOVERY_SLUG(e)
    })).body.slug;
    r.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
      slug: t
    })
  } catch {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
      guildId: e
    })
  }
}

function f(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: t
  })
}

function m(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: t
  })
}

function h(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: t
  })
}

function p(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: t
  })
}

function E(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function T(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function C(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function x(e) {
  let {
    guildId: t,
    primaryCategoryId: a,
    keywords: s,
    emojiDiscoverabilityEnabled: i,
    partnerActionedTimestamp: l,
    partnerApplicationTimestamp: c,
    isPublished: d,
    reasonsToJoin: u,
    socialLinks: f,
    about: m
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: h,
      keywords: p,
      emoji_discoverability_enabled: E,
      partner_actioned_timestamp: T,
      partner_application_timestamp: C,
      is_published: x,
      reasons_to_join: _,
      social_links: g,
      about: I
    } = (await n.HTTP.patch({
      url: o.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: a,
        emoji_discoverability_enabled: i,
        partner_actioned_timestamp: l,
        partner_application_timestamp: c,
        keywords: s,
        is_published: d,
        reasons_to_join: u,
        social_links: f,
        about: m
      },
      oldFormErrors: !0
    })).body;
    r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: t,
      metadata: {
        primaryCategoryId: e,
        secondaryCategoryIds: h,
        keywords: p,
        emojiDiscoverabilityEnabled: E,
        partnerActionedTimestamp: T,
        partnerApplicationTimestamp: C,
        isPublished: x,
        reasonsToJoin: _,
        socialLinks: g,
        about: I
      }
    })
  } catch (e) {
    throw r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: t,
      errors: e.body
    }), e
  }
}

function _(e, t) {
  n.HTTP.put({
    url: o.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_ADD",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}

function g(e, t) {
  n.HTTP.del({
    url: o.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_DELETE",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}