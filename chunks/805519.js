n.d(t, {
  Z: function() {
return h;
  }
}), n(47120), n(773603);
var i = n(470079),
  a = n(442837),
  s = n(693546),
  l = n(826581),
  r = n(937111),
  o = n(430824),
  c = n(496675),
  u = n(709054),
  d = n(981631);

function h(e) {
  let [t, n] = i.useState(!1), [h, m] = i.useState(!1), p = u.default.cast(e), {
joinRequest: _,
guild: f
  } = (0, a.cj)([
l.Z,
r.Z,
o.Z,
c.Z
  ], () => {
var e;
let t = l.Z.getRequest(p);
if (null == t)
  return {
    joinRequest: null,
    isModmin: !1,
    guild: null
  };
let n = null !== (e = o.Z.getGuild(t.guildId)) && void 0 !== e ? e : r.Z.getJoinRequestGuild(t.guildId);
return {
  joinRequest: t,
  isModmin: null != n && c.Z.can(d.Plq.KICK_MEMBERS, n),
  guild: n
};
  });
  return i.useEffect(() => {
null == f && !h && (m(!0), s.Z.fetchRequestToJoinGuilds());
  }, [
f,
h
  ]), i.useEffect(() => {
null == _ && (n(!0), s.Z.fetchGuildJoinRequest(p).finally(() => {
  n(!1);
}));
  }, [
_,
p
  ]), {
loading: t,
joinRequest: _,
joinRequestGuild: f
  };
}