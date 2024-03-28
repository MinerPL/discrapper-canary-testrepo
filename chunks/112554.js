"use strict";
n.r(t), n.d(t, {
  useExplicitMediaAttachmentsForMessage: function() {
    return s
  },
  useExplicitMediaEmbedsForMessage: function() {
    return u
  }
});
var a = n("399606"),
  i = n("375954"),
  l = n("163268");
let s = (e, t, n) => {
    var s, u;
    let r = (0, a.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == r) return [];
    let o = void 0 !== n ? e => e.id === n : e => (0, l.isMediaObscured)({
      type: l.ObscuredMediaTypes.Attachment,
      media: e
    }, (0, l.shouldRedactExplicitContent)(r));
    return null !== (u = null == r ? void 0 : null === (s = r.attachments) || void 0 === s ? void 0 : s.filter(o)) && void 0 !== u ? u : []
  },
  u = (e, t, n) => {
    var s, u;
    let r = (0, a.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == r) return [];
    let o = void 0 !== n ? e => e.id === n : e => (0, l.isMediaObscured)({
      type: l.ObscuredMediaTypes.Embed,
      media: e
    }, (0, l.shouldRedactExplicitContent)(r));
    return null !== (u = null == r ? void 0 : null === (s = r.embeds) || void 0 === s ? void 0 : s.filter(o)) && void 0 !== u ? u : []
  }