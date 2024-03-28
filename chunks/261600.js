"use strict";
n.r(t), n.d(t, {
  StageChannelNowPlayingDelegate: function() {
    return h
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("399606"),
  i = n("481060"),
  r = n("592125"),
  o = n("922482"),
  u = n("750154"),
  d = n("427679"),
  c = n("689938");

function f(e) {
  var t, n;
  let {
    activity: f
  } = e, {
    channelId: h
  } = null !== (t = (0, u.unpackStageChannelParty)(f)) && void 0 !== t ? t : {}, C = (0, s.useStateFromStores)([d.default], () => d.default.getStageInstanceByChannel(h), [h]), p = a.useRef(null), m = a.useCallback(() => {
    let e = r.default.getChannel(h);
    null != e && o.connectAndOpen(e)
  }, [h]), g = null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : f.name, E = c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({
    channel: g
  });
  return (0, l.jsx)("div", {
    ref: p,
    children: (0, l.jsx)(i.Clickable, {
      onClick: m,
      focusProps: {
        ringTarget: p
      },
      children: (0, l.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: E
      })
    })
  })
}
class h {
  shouldShow(e) {
    return (0, u.shouldShowActivity)(e)
  }
  createHeader(e) {
    return {
      subtitle: c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
      icon: null
    }
  }
  constructor() {
    var e, t, n;
    e = this, t = "body", n = f, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}