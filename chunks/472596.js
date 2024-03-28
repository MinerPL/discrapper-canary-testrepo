"use strict";
s.r(t), s.d(t, {
  SearchState: function() {
    return _
  },
  getSearchState: function() {
    return N
  },
  openMemberProfile: function() {
    return r
  },
  useContextMenuModerateRoles: function() {
    return o
  },
  useContextMenuModerateUser: function() {
    return L
  },
  useHighestRole: function() {
    return d
  }
});
var E, _, a = s("470079"),
  n = s("399606"),
  T = s("906732"),
  i = s("171368"),
  u = s("430824"),
  A = s("594174"),
  l = s("91047"),
  I = s("981631");
let r = (e, t) => {
  let {
    guildId: s,
    userId: E,
    colorRoleId: _
  } = e;
  (0, i.openUserProfileModal)({
    userId: E,
    guildId: s,
    sourceAnalyticsLocations: t,
    roleId: _,
    analyticsLocation: {
      section: I.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: I.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function o(e, t, s) {
  let {
    analyticsLocations: E
  } = (0, T.default)();
  return a.useCallback(_ => {
    if (null == e) return;
    let a = A.default.getUser(e.userId);
    null != a && (_.stopPropagation(), (0, l.openModerateRoleContextMenu)(_, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : E,
      onCloseContextMenu: s
    }))
  }, [e, E, s, t])
}

function L(e, t, s) {
  let {
    analyticsLocations: E
  } = (0, T.default)();
  return a.useCallback(_ => {
    if (null == e) return;
    let a = A.default.getUser(e.userId);
    null != a && (_.stopPropagation(), (0, l.openModerateUserContextMenu)(_, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : E,
      onCloseContextMenu: s,
      showTransferOwnershipItem: !0
    }))
  }, [e, s, E, t])
}

function d(e) {
  return (0, n.useStateFromStores)([u.default], () => {
    var t;
    if (null == e) return null;
    let s = u.default.getGuild(e.guildId);
    return null == s || null == e.highestRoleId ? null : null !== (t = u.default.getRole(s.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}

function N(e, t, s) {
  return t ? 0 : e ? 1 : s <= 0 ? 2 : 3
}(E = _ || (_ = {}))[E.LOADING = 0] = "LOADING", E[E.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", E[E.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", E[E.SUCCESS_FULL = 3] = "SUCCESS_FULL"