"use strict";
var s = n(470079),
  l = n(451478),
  a = n(830917),
  i = n(985518);
t.Z = {
  useForumChannelSeenManager: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, r = s.useRef(null), o = (0, a.UU)(), c = !l.Z.isFocused(o);
    return s.useLayoutEffect(() => (null == r.current && (r.current = new i.ZP({
      guildId: t,
      channelId: n,
      isPaused: c,
      windowId: o
    }), r.current.initialize()), () => {
      var e;
      null === (e = r.current) || void 0 === e || e.terminate(), r.current = null
    }), [n, t, c, o]), r.current
  }
}