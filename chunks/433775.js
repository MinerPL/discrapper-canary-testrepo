"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("47120");
var a = l("470079"),
  n = l("442837"),
  s = l("951539"),
  r = l("592125"),
  i = l("356685"),
  d = l("486527"),
  u = l("981631");
let o = {
  can_broadcast: !1
};

function c(e, t, l) {
  let [c, E] = a.useState(o), [_, f] = a.useState(!1), T = a.useRef(!1), h = null == e ? void 0 : e.id, I = null == e ? void 0 : e.hasFeature(u.GuildFeatures.HAS_DIRECTORY_ENTRY);
  a.useEffect(() => {
    if (!I) {
      E(o);
      return
    }
    if (!T.current && null != h)(async () => {
      T.current = !0;
      try {
        let e = await (0, i.getDirectoryEntryBroadcastInfo)(h, d.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        E(e)
      } catch (e) {
        E(o)
      }
      T.current = !1
    })()
  }, [h, I, t]), a.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      f(!1);
      return
    }
    f(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let N = (0, n.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(l, [r.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: N && _,
    setBroadcastToDirectoryChannels: f,
    canEveryoneRoleViewEvent: N
  }
}