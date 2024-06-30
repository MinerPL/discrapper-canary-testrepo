n.d(t, {
    F: function () {
        return d;
    },
    e: function () {
        return i;
    }
});
var r, i, a = n(277985), o = n(592125), s = n(403182), l = n(861990), u = n(981631);
class c {
    getCreateAttachmentURL(e) {
        return u.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return u.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = o.Z.getBasicChannel(e);
        return s.dg(null == t ? void 0 : t.guild_id);
    }
    getMaxAttachmentsCount() {
        return u.dN1;
    }
    getMaxTotalAttachmentSize() {
        return l.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
function d(e) {
    if (1 === e)
        return new a.Z();
    return new c();
}
(r = i || (i = {}))[r.MESSAGE_ATTACHMENT = 0] = 'MESSAGE_ATTACHMENT', r[r.GUILD_PRODUCT_ATTACHMENT = 1] = 'GUILD_PRODUCT_ATTACHMENT';
