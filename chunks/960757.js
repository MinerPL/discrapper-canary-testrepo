"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("152475"),
  i = n("42203"),
  r = n("501030"),
  u = n("730647"),
  o = n("49111");
let d = {
  can_broadcast: !1
};

function c(e, t, n) {
  let [c, E] = l.useState(d), [f, h] = l.useState(!1), v = l.useRef(!1), m = null == e ? void 0 : e.id, N = null == e ? void 0 : e.hasFeature(o.GuildFeatures.HAS_DIRECTORY_ENTRY);
  l.useEffect(() => {
    if (!N) {
      E(d);
      return
    }
    if (v.current || null == m) return;
    let e = async () => {
      v.current = !0;
      try {
        let e = await (0, r.getDirectoryEntryBroadcastInfo)(m, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        E(e)
      } catch (e) {
        E(d)
      }
      v.current = !1
    };
    e()
  }, [m, N, t]), l.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      h(!1);
      return
    }
    h(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let _ = (0, a.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(n, [i.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: _ && f,
    setBroadcastToDirectoryChannels: h,
    canEveryoneRoleViewEvent: _
  }
}