"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120"), n("653041");
var a = n("470079"),
  l = n("149765"),
  s = n("442837"),
  i = n("902704"),
  r = n("58540"),
  o = n("592125"),
  u = n("271383"),
  d = n("700785"),
  c = n("231338");
let f = [],
  h = new Set,
  m = {};

function p(e) {
  let {
    entries: t,
    channelId: n
  } = e, p = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(n)), E = null == p ? void 0 : p.guild_id, C = a.useRef(new Set), g = a.useMemo(() => {
    let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
    return !(0, i.areArraysShallowEqual)([...C.current], [...e]) && (C.current = e), C.current
  }, [t]), S = a.useMemo(() => null == E ? m : {
    [E]: Array.from(g)
  }, [g, E]);
  (0, r.useSubscribeGuildMembers)(S);
  let _ = (0, s.useStateFromStoresArray)([u.default], () => {
      if (null == E) return f;
      let e = [];
      for (let t of g) u.default.isMember(E, t) && e.push(t);
      return e
    }, [g, E]),
    T = a.useMemo(() => {
      if (null == p || 0 === _.length) return h;
      let e = new Set;
      for (let t of _) {
        let n = d.computePermissions({
          user: t,
          context: p
        });
        l.has(n, c.Permissions.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [_, p]);
  return a.useMemo(() => null == t ? void 0 : t.filter(e => T.has(e.author_id)), [t, T])
}