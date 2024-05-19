"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("470079"),
  r = n("626135"),
  a = n("937889"),
  s = n("761910"),
  o = n("981631"),
  l = n("689938"),
  u = n("354088");

function d(e, t) {
  let {
    hideSimpleEmbedContent: n,
    formatInline: d = !1,
    noStyleAndInteraction: _ = !1,
    isInteracting: c = !1,
    allowHeading: E = !1,
    allowList: I = !1,
    allowLinks: T = !1,
    allowDevLinks: f = !1,
    allowSubtext: S = !1,
    previewLinkTarget: h = !1
  } = t;
  return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isUnsupported ? {
    content: l.default.Messages.MESSAGE_UNSUPPORTED,
    hasSpoilerEmbeds: !1
  } : e.isCommandType() && 0 === e.content.length || e.hasFlag(o.MessageFlags.LOADING) ? (0, s.default)(e) : e.type === o.MessageTypes.CHANGELOG ? (0, a.renderChangelogMessageMarkup)(e, u, {
    track: (e, t) => {
      r.default.track(e, t)
    }
  }) : (0, a.default)(e, {
    hideSimpleEmbedContent: n,
    formatInline: d,
    noStyleAndInteraction: _,
    isInteracting: c,
    allowHeading: E,
    allowList: I,
    allowLinks: T,
    allowSubtext: S,
    allowDevLinks: f,
    previewLinkTarget: h
  }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, d, _, c, E, I, T, h, S])
}