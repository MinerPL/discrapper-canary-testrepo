"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("724458"), n("47120"), n("653041");
var l = n("470079"),
  i = n("442837"),
  a = n("924301"),
  r = n("765305");

function s(e, t) {
  let n = (0, i.useStateFromStoresArray)([a.default], () => Object.values(a.default.getUsersForGuildEvent(e, null)), [e]),
    s = (0, i.useStateFromStoresArray)([a.default], () => Object.values(a.default.getUsersForGuildEvent(e, t)), [e, t]);
  return (0, l.useMemo)(() => {
    let e = s.reduce((e, t) => (e[t.user_id] = t, e), {}),
      t = n.filter(t => {
        let n = e[t.user_id];
        return null == n || n.response === r.GuildScheduledEventUserResponses.INTERESTED
      }),
      l = s.filter(e => e.response === r.GuildScheduledEventUserResponses.INTERESTED),
      i = new Set,
      a = [],
      u = e => {
        !i.has(e.user_id) && (a.push(e), i.add(e.user_id))
      };
    return t.forEach(u), l.forEach(u), a
  }, [n, s])
}