"use strict";
n.r(t), n.d(t, {
  initializeMemberSafetyStore: function() {
    return c
  },
  refreshMemberSafetyTimestamp: function() {
    return f
  },
  updateMemberSafetyTablePagination: function() {
    return S
  },
  updateSearchState: function() {
    return E
  },
  goToMemberSafetyDashboard: function() {
    return h
  },
  getMemberSupplemental: function() {
    return _
  }
});
var i = n("913144"),
  r = n("592407"),
  l = n("393414"),
  s = n("305961"),
  u = n("466818"),
  o = n("835257"),
  a = n("49111"),
  d = n("724210");
async function c(e) {
  await i.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function f(e) {
  i.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function S(e, t) {
  let {
    continuationToken: n,
    ...r
  } = t;
  i.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: r
  })
}
async function E(e, t) {
  await i.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function h(e) {
  let t = (0, u.canAccessMemberSafetyPage)(e),
    n = s.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(a.GuildFeatures.COMMUNITY) || n.hasFeature(a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.transitionTo)(a.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)), !0) : (r.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
}
async function _(e, t) {
  let n = await (0, o.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await i.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}