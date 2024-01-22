"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("884691"),
  n = s("471671"),
  l = s("816454"),
  r = s("250850"),
  i = {
    useForumChannelSeenManager: function(e) {
      let {
        guildId: t,
        channelId: s
      } = e, i = a.useRef(null), o = (0, l.getMainWindowId)(), u = !n.default.isFocused(o);
      return a.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
        guildId: t,
        channelId: s,
        isPaused: u,
        windowId: o
      }), i.current.initialize()), () => {
        var e;
        null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
      }), [s, t, u, o]), i.current
    }
  }