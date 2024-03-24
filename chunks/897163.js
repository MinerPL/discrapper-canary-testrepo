"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("424973");
var a = n("884691"),
  l = n("316693"),
  s = n("446674"),
  i = n("233736"),
  r = n("750560"),
  u = n("42203"),
  o = n("26989"),
  d = n("991170"),
  c = n("843455");
let f = [],
  h = new Set,
  m = {};

function p(e) {
  let {
    entries: t,
    channelId: n
  } = e, p = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(n)), E = null == p ? void 0 : p.guild_id, g = a.useRef(new Set), S = a.useMemo(() => {
    let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
    return !(0, i.areArraysShallowEqual)([...g.current], [...e]) && (g.current = e), g.current
  }, [t]), C = a.useMemo(() => null == E ? m : {
    [E]: Array.from(S)
  }, [S, E]);
  (0, r.useSubscribeGuildMembers)(C);
  let _ = (0, s.useStateFromStoresArray)([o.default], () => {
      if (null == E) return f;
      let e = [];
      for (let t of S) o.default.isMember(E, t) && e.push(t);
      return e
    }, [S, E]),
    I = a.useMemo(() => {
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
    }, [_, p]),
    T = a.useMemo(() => null == t ? void 0 : t.filter(e => I.has(e.author_id)), [t, I]);
  return T
}