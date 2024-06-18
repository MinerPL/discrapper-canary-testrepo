"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(302463),
  r = n(981631);
class s {
  getCreateAttachmentURL(e) {
    return r.ANM.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return r.ANM.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    return i.ve
  }
  getMaxAttachmentsCount() {
    return i.pt
  }
  getMaxTotalAttachmentSize() {
    return i.S5
  }
  get shouldReactNativeCompressUploads() {
    return !1
  }
}