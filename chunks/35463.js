"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
}), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var l = a("470079"),
  n = a("442837"),
  s = a("703558"),
  r = a("117530"),
  o = a("524100");

function i(e) {
  var t, a;
  let {
    channelId: i,
    localCreationAnswerId: u,
    image: d
  } = e, c = null == d ? void 0 : d.emoji, E = (null == d ? void 0 : null === (t = d.mediaAttachmentState) || void 0 === t ? void 0 : t.status) === o.PollMediaUploadAttachmentStatus.PREPARING, _ = (0, n.useStateFromStores)([r.default], () => r.default.getUpload(i, u, s.DraftType.Poll)), [A, m] = l.useState(), [f, L] = l.useState("");
  return l.useEffect(() => {
    var e;
    if ((null == _ ? void 0 : null === (e = _.item) || void 0 === e ? void 0 : e.file) == null) return;
    let t = URL.createObjectURL(_.item.file);
    return m(t), L(_.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == _ ? void 0 : null === (a = _.item) || void 0 === a ? void 0 : a.file]), {
    emoji: c,
    isLoadingMedia: E,
    hasUpload: null != _,
    upload: _,
    mediaUrl: A,
    mediaFilename: f
  }
}