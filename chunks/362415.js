"use strict";
a.r(t), a.d(t, {
  useTrackPollCreationEvents: function() {
    return r
  }
});
var l = a("884691"),
  n = a("716241"),
  s = a("49111");

function r(e, t, a) {
  let r = l.useCallback(() => {
    let l = 0,
      r = 0,
      o = 0;
    e.forEach(e => {
      let t = e.image;
      null != t && (null != t.emoji ? r += 1 : null != t.stickerId ? o += 1 : null != t.mediaAttachmentState && (l += 1))
    }), n.default.trackWithMetadata(s.AnalyticEvents.POLL_CREATION_CANCELLED, {
      answers_count: e.length,
      attachments_count: l,
      emojis_count: r,
      stickers_count: o,
      allow_multiselect: t,
      layout_type: a
    })
  }, [e, t, a]);
  return {
    trackPollCreationCancelled: r
  }
}