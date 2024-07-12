t.d(n, {
  g: function() {
return S;
  },
  mI: function() {
return p;
  }
}), t(47120);
var i = t(149765),
  r = t(399606),
  o = t(581883),
  l = t(430824),
  u = t(496675),
  s = t(914010),
  a = t(594174),
  c = t(700785),
  d = t(709054),
  _ = t(154285),
  f = t(533244),
  E = t(487419),
  I = t(676770),
  g = t(981631);

function p(e) {
  let {
showAlertMode: n
  } = (0, _.sw)(null != e ? e : g.aIL), t = (0, r.e7)([
l.Z,
u.Z
  ], () => {
let n = l.Z.getGuild(e);
if (null == n)
  return !1;
let t = u.Z.getGuildPermissions(n);
return null != t && i.Db(t, I.cv);
  }), o = (0, r.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null), s = null != o && (0, f.ur)(o);
  return {
shouldShowIncidentActions: t && n,
incidentData: o,
isUnderLockdown: s
  };
}

function S() {
  var e;
  let n = function(e) {
  let n = a.default.getCurrentUser(),
    t = E.Z.getIncidentsByGuild();
  for (let r of d.default.keys(t).map(e => l.Z.getGuild(e))) {
    if (null == r)
      continue;
    let o = t[r.id];
    if (!(null == o || !(0, f.i9)(o) && !(0, f.ur)(o) || (0, f.ur)(o) && r.id !== e)) {
      if (i.Db(c.uB({
          user: n,
          context: r,
          checkElevated: !1
        }), I.cv))
        return r.id;
    }
  }
  return null;
}(s.Z.getGuildId()),
{
  showAlertMode: t
} = (0, _.jy)(null != n ? n : g.aIL),
r = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
u = null != n ? r[n] : null,
p = null != u && u.disableRaidAlertNag;
  return {
show: null != n && t && !p,
guildId: n
  };
}