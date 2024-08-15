n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var a = n(6025),
	s = n(433355),
	r = n(626135),
	l = n(585483),
	o = n(545724),
	c = n(426051),
	d = n(981631);
function u(e) {
	let { index: t, className: n, channel: u, user: _, hasSingleMessageRequest: E } = e;
	return (0, i.jsx)(o.Z, {
		index: t,
		className: n,
		isFocused: !1,
		channel: u,
		user: _,
		onClick: (e) => {
			e.stopPropagation(),
				a.Z.openPrivateChannelAsSidebar({
					channelId: u.id,
					baseChannelId: s.uZ,
					hasSingleMessageRequest: E
				}),
				r.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
					is_spam: !0,
					channel_id: u.id,
					other_user_id: _.id
				}),
				setTimeout(() => {
					l.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: u.id });
				}, 0);
		},
		children: (e) =>
			(0, i.jsx)(c.Z, {
				active: e,
				user: _,
				channel: u
			})
	});
}
