t.d(n, {
  g: function() {
return g;
  },
  mI: function() {
return I;
  }
}), t(47120);
var r = t(149765),
  i = t(399606),
  o = t(581883),
  l = t(430824),
  u = t(496675),
  a = t(914010),
  s = t(594174),
  c = t(700785),
  d = t(709054),
  _ = t(533244),
  f = t(487419),
  E = t(676770);
t(981631);

function I(e) {
  let n = (0, i.e7)([
  l.Z,
  u.Z
], () => {
  let n = l.Z.getGuild(e);
  if (null == n)
    return !1;
  let t = u.Z.getGuildPermissions(n);
  return null != t && r.Db(t, E.cv);
}),
t = (0, i.e7)([f.Z], () => null != e ? f.Z.getGuildIncident(e) : null),
o = null != t && (0, _.ur)(t);
  return {
shouldShowIncidentActions: n,
incidentData: t,
isUnderLockdown: o
  };
}

function g() {
  var e;
  let n = function(e) {
  let n = s.default.getCurrentUser(),
    t = f.Z.getIncidentsByGuild();
  for (let i of d.default.keys(t).map(e => l.Z.getGuild(e))) {
    if (null == i)
      continue;
    let o = t[i.id];
    if (!(null == o || !(0, _.i9)(o) && !(0, _.ur)(o) || (0, _.ur)(o) && i.id !== e)) {
      if (r.Db(c.uB({
          user: n,
          context: i,
          checkElevated: !1
        }), E.cv))
        return i.id;
    }
  }
  return null;
}(a.Z.getGuildId()),
t = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
i = null != n ? t[n] : null,
u = null != i && i.disableRaidAlertNag;
  return {
show: null != n && !u,
guildId: n
  };
}