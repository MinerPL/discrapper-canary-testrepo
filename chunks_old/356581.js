"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  n = a("446674"),
  s = a("474643"),
  r = a("585722"),
  o = a("172402");

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