n.d(t, {
  Z: function() {
return h;
  }
}), n(47120), n(773603);
var i = n(470079),
  a = n(442837),
  l = n(693546),
  s = n(826581),
  r = n(937111),
  o = n(430824),
  c = n(496675),
  d = n(709054),
  u = n(981631);

function h(e) {
  let [t, n] = i.useState(!1), [h, p] = i.useState(!1), m = d.default.cast(e), {
joinRequest: _,
guild: f
  } = (0, a.cj)([
s.Z,
r.Z,
o.Z,
c.Z
  ], () => {
var e;
let t = s.Z.getRequest(m);
if (null == t)
  return {
    joinRequest: null,
    isModmin: !1,
    guild: null
  };
let n = null !== (e = o.Z.getGuild(t.guildId)) && void 0 !== e ? e : r.Z.getJoinRequestGuild(t.guildId);
return {
  joinRequest: t,
  isModmin: null != n && c.Z.can(u.Plq.KICK_MEMBERS, n),
  guild: n
};
  });
  return i.useEffect(() => {
null == f && !h && (p(!0), l.Z.fetchRequestToJoinGuilds());
  }, [
f,
h
  ]), i.useEffect(() => {
null == _ && (n(!0), l.Z.fetchGuildJoinRequest(m).finally(() => {
  n(!1);
}));
  }, [
_,
m
  ]), {
loading: t,
joinRequest: _,
joinRequestGuild: f
  };
}