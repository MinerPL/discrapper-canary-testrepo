"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120"), n("773603");
var a = n("470079"),
  l = n("442837"),
  s = n("693546"),
  i = n("826581"),
  r = n("937111"),
  o = n("430824"),
  u = n("496675"),
  d = n("709054"),
  c = n("981631");

function f(e) {
  let [t, n] = a.useState(!1), [f, h] = a.useState(!1), m = d.default.cast(e), {
    joinRequest: p,
    guild: E
  } = (0, l.useStateFromStoresObject)([i.default, r.default, o.default, u.default], () => {
    var e;
    let t = i.default.getRequest(m);
    if (null == t) return {
      joinRequest: null,
      isModmin: !1,
      guild: null
    };
    let n = null !== (e = o.default.getGuild(t.guildId)) && void 0 !== e ? e : r.default.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && u.default.can(c.Permissions.KICK_MEMBERS, n),
      guild: n
    }
  });
  return a.useEffect(() => {
    null == E && !f && (h(!0), s.default.fetchRequestToJoinGuilds())
  }, [E, f]), a.useEffect(() => {
    null == p && (n(!0), s.default.fetchGuildJoinRequest(m).finally(() => {
      n(!1)
    }))
  }, [p, m]), {
    loading: t,
    joinRequest: p,
    joinRequestGuild: E
  }
}