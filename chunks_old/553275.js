"use strict";
E.r(t), E.d(t, {
  openMemberProfile: function() {
    return L
  },
  useContextMenuModerateRoles: function() {
    return o
  },
  useContextMenuModerateUser: function() {
    return r
  },
  useHighestRole: function() {
    return d
  },
  SearchState: function() {
    return s
  },
  getSearchState: function() {
    return N
  }
});
var _, s, T = E("884691"),
  a = E("65597"),
  n = E("685665"),
  A = E("401642"),
  u = E("305961"),
  I = E("697218"),
  i = E("441823"),
  l = E("49111");
let L = (e, t) => {
  let {
    guildId: E,
    userId: _,
    colorRoleId: s
  } = e;
  (0, A.openUserProfileModal)({
    userId: _,
    guildId: E,
    sourceAnalyticsLocations: t,
    roleId: s,
    analyticsLocation: {
      section: l.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: l.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function o(e, t, E) {
  let {
    analyticsLocations: _
  } = (0, n.default)();
  return T.useCallback(s => {
    if (null == e) return;
    let T = I.default.getUser(e.userId);
    null != T && (s.stopPropagation(), (0, i.openModerateRoleContextMenu)(s, {
      user: T,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : _,
      onCloseContextMenu: E
    }))
  }, [e, _, E, t])
}

function r(e, t, E) {
  let {
    analyticsLocations: _
  } = (0, n.default)();
  return T.useCallback(s => {
    if (null == e) return;
    let T = I.default.getUser(e.userId);
    null != T && (s.stopPropagation(), (0, i.openModerateUserContextMenu)(s, {
      user: T,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : _,
      onCloseContextMenu: E,
      showTransferOwnershipItem: !0
    }))
  }, [e, E, _, t])
}

function d(e) {
  return (0, a.useStateFromStores)([u.default], () => {
    var t;
    if (null == e) return null;
    let E = u.default.getGuild(e.guildId);
    return null == E || null == e.highestRoleId ? null : null !== (t = u.default.getRole(E.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}

function N(e, t, E) {
  return t ? 0 : e ? 1 : E <= 0 ? 2 : 3
}(_ = s || (s = {}))[_.LOADING = 0] = "LOADING", _[_.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", _[_.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", _[_.SUCCESS_FULL = 3] = "SUCCESS_FULL"