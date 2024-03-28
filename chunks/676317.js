"use strict";
n.r(t), n.d(t, {
  canCurrentUserManageAutomod: function() {
    return s
  },
  canCurrentUserManageMessageFilters: function() {
    return l
  },
  useCanCurrentUserManageAutomod: function() {
    return d
  },
  useIsUserProfileRuleEnabled: function() {
    return T
  }
});
var r = n("442837"),
  o = n("430824"),
  i = n("496675"),
  u = n("981631");
let a = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
    r = t.getGuild(e);
  return null != r && n.can(u.Permissions.MANAGE_GUILD, r)
};

function l(e) {
  return null != e && a(e)
}

function s(e) {
  return a(e)
}

function d(e) {
  return (0, r.useStateFromStores)([o.default, i.default], () => a(e, o.default, i.default), [e])
}

function T(e) {
  return (0, r.useStateFromStores)([o.default], () => {
    let t = o.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(u.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}