"use strict";
n.d(t, {
  F: function() {
    return d
  },
  e: function() {
    return r
  }
});
var i, r, s = n(277985),
  o = n(592125),
  a = n(403182),
  l = n(861990),
  u = n(981631);
class _ {
  getCreateAttachmentURL(e) {
    return u.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return u.ANM.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    let t = o.Z.getBasicChannel(e);
    return a.dg(null == t ? void 0 : t.guild_id)
  }
  getMaxAttachmentsCount() {
    return u.dN1
  }
  getMaxTotalAttachmentSize() {
    return l.zz
  }
  get shouldReactNativeCompressUploads() {
    return !0
  }
}

function d(e) {
  if (1 === e) return new s.Z;
  return new _
}(i = r || (r = {}))[i.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", i[i.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"