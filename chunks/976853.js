l.d(e, {
	Z: function () {
		return r;
	}
});
var t = l(399606),
	u = l(592125),
	i = l(176505);
function r(n) {
	let e = (0, t.e7)([u.Z], () => {
		let e = u.Z.getChannel(n);
		return (null == e ? void 0 : e.parent_id) != null && e.isForumPost()
			? u.Z.getChannel(null == e ? void 0 : e.parent_id)
			: null;
	});
	return (null == e ? void 0 : e.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
