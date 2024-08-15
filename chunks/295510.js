t.d(n, {
	Z: function () {
		return o;
	}
});
var i = t(735250);
t(470079);
var r = t(153867),
	u = t(468026),
	l = t(394059),
	a = t(689938);
function o(e) {
	let { type: n, onConfirm: t, ...o } = e,
		d = n === l.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
		s = n === l.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
	return (0, i.jsx)(u.default, {
		confirmText: a.Z.Messages.CONFIRM,
		secondaryConfirmText: a.Z.Messages.DONT_ASK_AGAIN,
		title: d,
		cancelText: a.Z.Messages.CANCEL,
		onConfirm: t,
		onConfirmSecondary: () => {
			r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
		},
		body: s,
		...o
	});
}
