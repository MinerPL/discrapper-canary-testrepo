"use strict";
a.r(t);
var s = a("470079"),
  n = a("451478"),
  l = a("830917"),
  r = a("985518");
t.default = {
  useForumChannelSeenManager: function(e) {
    let {
      guildId: t,
      channelId: a
    } = e, i = s.useRef(null), o = (0, l.getMainWindowId)(), d = !n.default.isFocused(o);
    return s.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
      guildId: t,
      channelId: a,
      isPaused: d,
      windowId: o
    }), i.current.initialize()), () => {
      var e;
      null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
    }), [a, t, d, o]), i.current
  }
}