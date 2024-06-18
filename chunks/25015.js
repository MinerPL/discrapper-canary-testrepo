"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(470079),
  r = n(200120),
  s = n(626135),
  o = n(937889),
  a = n(761910),
  l = n(981631),
  u = n(689938),
  _ = n(354088);

function d(e, t) {
  let {
    hideSimpleEmbedContent: n,
    formatInline: d = !1,
    noStyleAndInteraction: c = !1,
    isInteracting: E = !1,
    allowHeading: I = !1,
    allowList: T = !1,
    allowLinks: h = !1,
    allowDevLinks: S = !1,
    allowSubtext: f = !1,
    previewLinkTarget: N = !1,
    viewingChannelId: A
  } = t, m = (0, r.B)();
  return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isUnsupported ? {
    content: u.Z.Messages.MESSAGE_UNSUPPORTED,
    hasSpoilerEmbeds: !1
  } : e.isCommandType() && 0 === e.content.length || e.hasFlag(l.iLy.LOADING) ? (0, a.Z)(e) : e.type === l.uaV.CHANGELOG ? (0, o.n0)(e, _, {
    track: (e, t) => {
      s.default.track(e, t)
    }
  }) : (0, o.ZP)(e, {
    hideSimpleEmbedContent: n,
    formatInline: d,
    noStyleAndInteraction: c,
    isInteracting: E,
    allowHeading: I,
    allowList: T,
    allowLinks: h,
    allowSubtext: f,
    allowDevLinks: S,
    previewLinkTarget: N,
    shouldFilterKeywords: null != m,
    viewingChannelId: A
  }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, d, c, E, I, T, h, N, f, m])
}