"use strict";
n.r(t), n.d(t, {
  getMemberSupplemental: function() {
    return E
  },
  goToMemberSafetyDashboard: function() {
    return h
  },
  initializeMemberSafetyStore: function() {
    return d
  },
  refreshMemberSafetyTimestamp: function() {
    return f
  },
  updateMemberSafetyTablePagination: function() {
    return S
  },
  updateSearchState: function() {
    return g
  }
});
var r = n("570140"),
  i = n("434404"),
  l = n("703656"),
  s = n("430824"),
  o = n("241559"),
  u = n("327999"),
  a = n("981631"),
  c = n("176505");
async function d(e) {
  await r.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function f(e) {
  r.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function S(e, t) {
  let {
    continuationToken: n,
    ...i
  } = t;
  r.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: i
  })
}
async function g(e, t) {
  await r.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function h(e) {
  let t = (0, o.canAccessMemberSafetyPage)(e),
    n = s.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(a.GuildFeatures.COMMUNITY) || n.hasFeature(a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.transitionTo)(a.Routes.CHANNEL(e, c.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
}
async function E(e, t) {
  let n = await (0, u.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await r.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}