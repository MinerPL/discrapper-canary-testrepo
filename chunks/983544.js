n.d(t, {
	F: function () {
		return _;
	},
	e: function () {
		return i;
	}
});
var r,
	i,
	a = n(277985),
	s = n(592125),
	o = n(403182),
	l = n(380684),
	u = n(861990),
	c = n(981631);
class d {
	getCreateAttachmentURL(e) {
		return c.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
	}
	getDeleteUploadURL(e) {
		return c.ANM.MESSAGE_DELETE_UPLOAD(e);
	}
	getMaxFileSize(e) {
		let t = s.Z.getBasicChannel(e);
		return o.dg(null == t ? void 0 : t.guild_id);
	}
	getMaxAttachmentsCount() {
		return c.dN1;
	}
	getMaxTotalAttachmentSize() {
		return (0, l.Xv)() ? u.Ld : u.zz;
	}
	get shouldReactNativeCompressUploads() {
		return !0;
	}
}
function _(e) {
	if (1 === e) return new a.Z();
	return new d();
}
((r = i || (i = {}))[(r.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (r[(r.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT');
