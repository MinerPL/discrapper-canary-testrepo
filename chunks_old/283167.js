"use strict";
n.r(t), n.d(t, {
  maybeFetchGuildDiscoveryCategories: function() {
    return o
  },
  fetchMetadataForGuild: function() {
    return u
  },
  fetchSlugForGuild: function() {
    return c
  },
  updateGuildPrimaryCategory: function() {
    return d
  },
  updateGuildKeywords: function() {
    return f
  },
  updateGuildEmojiDiscoverabilityEnabled: function() {
    return p
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return _
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return E
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return m
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return T
  },
  saveGuildMetadata: function() {
    return I
  },
  addGuildCategory: function() {
    return h
  },
  deleteGuildCategory: function() {
    return g
  }
});
var r = n("872717"),
  i = n("913144"),
  s = n("915639"),
  a = n("868246"),
  l = n("49111");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = s.default.locale;
  if (t === a.default.getFetchedLocale()) return;
  let n = await r.HTTP.get({
    url: l.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: t,
      primary_only: e
    },
    oldFormErrors: !0
  });
  i.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: n.body,
    locale: t
  })
}
async function u(e) {
  try {
    let t = await r.HTTP.get({
        url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
        oldFormErrors: !0
      }),
      {
        primary_category_id: n,
        category_ids: s,
        keywords: a,
        emoji_discoverability_enabled: o,
        partner_actioned_timestamp: u,
        partner_application_timestamp: c,
        is_published: d,
        reasons_to_join: f,
        social_links: p,
        about: _
      } = t.body,
      E = {
        primaryCategoryId: n,
        secondaryCategoryIds: s,
        keywords: a,
        emojiDiscoverabilityEnabled: o,
        partnerActionedTimestamp: u,
        partnerApplicationTimestamp: c,
        isPublished: d,
        reasonsToJoin: f,
        socialLinks: p,
        about: _
      };
    return i.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: E
    }), E
  } catch (e) {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function c(e) {
  try {
    let t = await r.HTTP.get({
        url: l.Endpoints.GUILD_DISCOVERY_SLUG(e)
      }),
      n = t.body.slug;
    i.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
      slug: n
    })
  } catch {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
      guildId: e
    })
  }
}

function d(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: t
  })
}

function f(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: t
  })
}

function p(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: t
  })
}

function _(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: t
  })
}

function E(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function m(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function T(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function I(e) {
  let {
    guildId: t,
    primaryCategoryId: n,
    keywords: s,
    emojiDiscoverabilityEnabled: a,
    partnerActionedTimestamp: o,
    partnerApplicationTimestamp: u,
    isPublished: c,
    reasonsToJoin: d,
    socialLinks: f,
    about: p
  } = e;
  try {
    let e = await r.HTTP.patch({
        url: l.Endpoints.GUILD_DISCOVERY_METADATA(t),
        body: {
          primary_category_id: n,
          emoji_discoverability_enabled: a,
          partner_actioned_timestamp: o,
          partner_application_timestamp: u,
          keywords: s,
          is_published: c,
          reasons_to_join: d,
          social_links: f,
          about: p
        },
        oldFormErrors: !0
      }),
      {
        primary_category_id: _,
        category_ids: E,
        keywords: m,
        emoji_discoverability_enabled: T,
        partner_actioned_timestamp: I,
        partner_application_timestamp: h,
        is_published: g,
        reasons_to_join: C,
        social_links: S,
        about: A
      } = e.body;
    i.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: t,
      metadata: {
        primaryCategoryId: _,
        secondaryCategoryIds: E,
        keywords: m,
        emojiDiscoverabilityEnabled: T,
        partnerActionedTimestamp: I,
        partnerApplicationTimestamp: h,
        isPublished: g,
        reasonsToJoin: C,
        socialLinks: S,
        about: A
      }
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: t,
      errors: e.body
    }), e
  }
}

function h(e, t) {
  r.HTTP.put({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_ADD",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}

function g(e, t) {
  r.HTTP.del({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_DELETE",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}