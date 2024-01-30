"use strict";
n.r(t), n.d(t, {
  useContextMenuModerateRoles: function() {
    return d
  },
  useContextMenuModerateUser: function() {
    return f
  },
  useHighestRole: function() {
    return E
  },
  SearchState: function() {
    return i
  },
  getSearchState: function() {
    return h
  }
});
var l, i, r = n("884691"),
  s = n("65597"),
  o = n("685665");
n("401642");
var u = n("305961"),
  a = n("697218"),
  c = n("441823");

function d(e, t, n) {
  let {
    analyticsLocations: l
  } = (0, o.default)();
  return r.useCallback(i => {
    if (null == e) return;
    let r = a.default.getUser(e.userId);
    null != r && (i.stopPropagation(), (0, c.openModerateRoleContextMenu)(i, {
      user: r,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n
    }))
  }, [e, l, n, t])
}

function f(e, t, n) {
  let {
    analyticsLocations: l
  } = (0, o.default)();
  return r.useCallback(i => {
    if (null == e) return;
    let r = a.default.getUser(e.userId);
    null != r && (i.stopPropagation(), (0, c.openModerateUserContextMenu)(i, {
      user: r,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n,
      showTransferOwnershipItem: !0
    }))
  }, [e, n, l, t])
}

function E(e) {
  return (0, s.default)([u.default], () => {
    var t;
    if (null == e) return null;
    let n = u.default.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null !== (t = n.roles[e.highestRoleId]) && void 0 !== t ? t : null
  }, [e])
}

function h(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}
n("49111"), (l = i || (i = {}))[l.LOADING = 0] = "LOADING", l[l.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", l[l.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", l[l.SUCCESS_FULL = 3] = "SUCCESS_FULL"