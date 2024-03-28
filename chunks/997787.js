"use strict";
let i;
n.r(t), n("47120"), n("653041");
var r, s = n("442837"),
  a = n("570140");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {
    guildNoticeDismissed: []
  },
  u = new Map,
  c = new Set;
class d extends(r = s.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    i = e
  }
  getState() {
    return i
  }
  shouldShowChannelNotice(e) {
    var t, n;
    return !i.guildNoticeDismissed.includes(e) && (null !== (n = null === (t = u.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0
  }
  canShowOverviewTooltip(e, t) {
    var n;
    return (null === (n = u.get(e)) || void 0 === n ? void 0 : n.has(t)) === !0
  }
  canShowToggleTooltip(e) {
    return c.has(e)
  }
}
l(d, "displayName", "CommandsMigrationStore"), l(d, "persistKey", "CommandsMigrationStore"), t.default = new d(a.default, {
  COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
    let {
      guildId: t,
      integrationIdsWithAppCommands: n
    } = e;
    return u.set(t, new Set(n)), !0
  },
  COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    i.guildNoticeDismissed.push(t)
  },
  COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
    var t;
    let {
      guildId: n,
      integrationId: i
    } = e;
    null === (t = u.get(n)) || void 0 === t || t.clear(), c.add(i)
  },
  COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
    let {
      integrationId: t
    } = e;
    c.delete(t)
  }
})