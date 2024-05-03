"use strict";
s.r(t), s.d(t, {
  useUserSelectedClan: function() {
    return d
  }
});
var a = s("470079"),
  n = s("442837"),
  l = s("430824"),
  i = s("594174"),
  r = s("645896"),
  o = s("353093");

function d(e) {
  var t, s;
  let {
    userId: d
  } = e, u = (0, n.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getUser(d)) || void 0 === e ? void 0 : e.clan
  }), {
    tag: c,
    badge: S,
    guildId: E
  } = (0, o.getUserClanData)(u);
  a.useEffect(() => {
    (0, r.fetchClanInfo)(E)
  }, [E]);
  let T = (0, r.useClanInfo)(null == u ? void 0 : u.identityGuildId),
    f = (0, n.useStateFromStores)([l.default], () => l.default.getGuild(null == u ? void 0 : u.identityGuildId));
  return {
    userClanTag: c,
    userClanBadge: S,
    guildId: E,
    guildName: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : null == T ? void 0 : T.name,
    guildIcon: null !== (s = null == f ? void 0 : f.icon) && void 0 !== s ? s : null == T ? void 0 : T.icon,
    clan: T
  }
}