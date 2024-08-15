n.d(t, {
	Z: function () {
		return c;
	}
});
var s = n(735250);
n(470079);
var a = n(442837),
	i = n(481060),
	r = n(933557),
	l = n(592125),
	o = n(689938);
function c(e) {
	let { onConfirm: t, onCancel: n, channelId: c } = e,
		d = (0, a.e7)([l.Z], () => (null != c ? l.Z.getChannel(c) : null)),
		u = (0, r.ZP)(d, !0);
	return (0, s.jsx)(i.DeclarativeConfirmModal, {
		dismissable: !0,
		header: o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
		confirmText: o.Z.Messages.REMOVE,
		cancelText: o.Z.Messages.CANCEL,
		onConfirm: t,
		onCancel: n,
		children: (0, s.jsx)(i.Text, {
			variant: 'text-sm/normal',
			children: null != d ? o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({ channelName: u }) : o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
		})
	});
}
