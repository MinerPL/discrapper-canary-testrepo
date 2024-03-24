"use strict";
a.r(t), a.d(t, {
  useExplicitMediaAttachmentsForMessage: function() {
    return d
  },
  useExplicitMediaEmbedsForMessage: function() {
    return o
  }
});
var s = a("65597"),
  i = a("377253"),
  n = a("447435");
let d = (e, t, a) => {
    var d, o;
    let l = (0, s.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == l) return [];
    let r = void 0 !== a ? e => e.id === a : e => (0, n.isMediaObscured)({
      type: n.ObscuredMediaTypes.Attachment,
      media: e
    }, (0, n.shouldRedactExplicitContent)(l));
    return null !== (o = null == l ? void 0 : null === (d = l.attachments) || void 0 === d ? void 0 : d.filter(r)) && void 0 !== o ? o : []
  },
  o = (e, t, a) => {
    var d, o;
    let l = (0, s.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == l) return [];
    let r = void 0 !== a ? e => e.id === a : e => (0, n.isMediaObscured)({
      type: n.ObscuredMediaTypes.Embed,
      media: e
    }, (0, n.shouldRedactExplicitContent)(l));
    return null !== (o = null == l ? void 0 : null === (d = l.embeds) || void 0 === d ? void 0 : d.filter(r)) && void 0 !== o ? o : []
  }