"use strict";
n.d(t, {
  DM: function() {
    return u
  },
  r1: function() {
    return _
  },
  te: function() {
    return d
  }
});
var i = n(442837),
  r = n(430824),
  s = n(496675),
  o = n(9156),
  a = n(594174),
  l = n(981631);

function u(e) {
  return (0, i.e7)([o.ZP, r.Z, a.default], () => {
    var t, n, i, s;
    let u = o.ZP.isOptInEnabled(e),
      _ = null !== (i = null === (t = r.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.oNc.COMMUNITY)) && void 0 !== i && i,
      d = null !== (s = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) && void 0 !== s && s;
    return u && (_ || d)
  })
}

function _(e) {
  let t = r.Z.getGuild(e),
    n = a.default.getCurrentUser();
  return null != e && null != t && null != n && (t.hasFeature(l.oNc.COMMUNITY) || n.isStaff()) && o.ZP.isOptInEnabled(e)
}

function d(e) {
  return (0, i.e7)([r.Z, s.Z], () => {
    var t;
    let n = r.Z.getGuild(e),
      i = s.Z.can(l.Plq.MANAGE_GUILD, n),
      o = s.Z.can(l.Plq.MANAGE_ROLES, n),
      a = null !== (t = null == n ? void 0 : n.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)) && void 0 !== t && t;
    return null != n && i && o && !a
  })
}