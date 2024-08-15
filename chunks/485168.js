n.d(a, {
	l: function () {
		return s;
	}
});
var t = n(470079),
	r = n(367907),
	l = n(981631);
function s(e, a, n) {
	return {
		trackPollCreationCancelled: t.useCallback(() => {
			let t = 0,
				s = 0,
				o = 0;
			e.forEach((e) => {
				let a = e.image;
				null != a &&
					(null != a.emoji ? (s += 1) : null != a.stickerId ? (o += 1) : null != a.mediaAttachmentState && (t += 1));
			}),
				r.ZP.trackWithMetadata(l.rMx.POLL_CREATION_CANCELLED, {
					answers_count: e.length,
					attachments_count: t,
					emojis_count: s,
					stickers_count: o,
					allow_multiselect: a,
					layout_type: n
				});
		}, [e, a, n])
	};
}
