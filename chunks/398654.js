"use strict";
n.r(t), n.d(t, {
  useGuildIncidentsState: function() {
    return g
  },
  shouldShowRaidNotificationNagbar: function() {
    return p
  }
}), n("222007");
var i = n("316693"),
  r = n("65597"),
  l = n("374363"),
  s = n("305961"),
  u = n("957255"),
  o = n("162771"),
  a = n("697218"),
  d = n("991170"),
  c = n("299039"),
  f = n("610174"),
  S = n("311161"),
  E = n("54346"),
  h = n("421127"),
  _ = n("49111");

function g(e) {
  let {
    showAlertMode: t
  } = (0, f.useGuildAlertModeEnabled)(null != e ? e : _.ZERO_STRING_GUILD_ID), n = (0, r.useStateFromStores)([s.default, u.default], () => {
    let t = s.default.getGuild(e);
    if (null == t) return !1;
    let n = u.default.getGuildPermissions(t);
    return null != n && i.hasAny(n, h.IncidentAlertModeratorPermissions)
  }), l = (0, r.useStateFromStores)([E.default], () => null != e ? E.default.getGuildIncident(e) : null), o = null != l && (0, S.isUnderLockdown)(l);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: l,
    isUnderLockdown: o
  }
}

function p() {
  var e;
  let t = o.default.getGuildId(),
    n = function(e) {
      let t = a.default.getCurrentUser(),
        n = E.default.getIncidentsByGuild(),
        r = c.default.keys(n).map(e => s.default.getGuild(e));
      for (let l of r) {
        if (null == l) continue;
        let r = n[l.id];
        if (null == r || !(0, S.hasDetectedActivity)(r) && !(0, S.isUnderLockdown)(r) || (0, S.isUnderLockdown)(r) && l.id !== e) continue;
        let s = i.hasAny(d.computePermissions({
          user: t,
          context: l,
          checkElevated: !1
        }), h.IncidentAlertModeratorPermissions);
        if (s) return l.id
      }
      return null
    }(t),
    {
      showAlertMode: r
    } = (0, f.getGuildAlertModeEnabled)(null != n ? n : _.ZERO_STRING_GUILD_ID),
    u = null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
    g = null != n ? u[n] : null,
    p = null != g && g.disableRaidAlertNag;
  return {
    show: null != n && r && !p,
    guildId: n
  }
}