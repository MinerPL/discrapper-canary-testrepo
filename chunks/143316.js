n.d(t, {
	Z: function () {
		return u;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(481060),
	r = n(626135),
	l = n(288552),
	o = n(981631),
	c = n(689938);
function u(e) {
	let { type: t, onClick: n } = e,
		[u, _] = a.useState(!1),
		E = () => {
			n(),
				r.default.track(o.rMx.INBOX_CHANNEL_ACKED, {
					marked_all_channels_as_read: !0,
					num_unread_channels_remaining: 0
				});
		},
		I = (e) => {
			e.shiftKey ? E() : _(!0);
		};
	return (0, i.jsxs)(i.Fragment, {
		children: [
			u
				? (0, i.jsx)(d, {
						confirm: E,
						cancel: () => _(!1)
					})
				: null,
			'bottom-floating' === t
				? (0, i.jsx)(l.a, {
						text: c.Z.Messages.MARK_ALL_AS_READ,
						icon: s.DoubleCheckmarkIcon,
						onClick: I
					})
				: (0, i.jsx)(s.CircleIconButton, {
						tooltip: c.Z.Messages.MARK_ALL_AS_READ,
						color: s.CircleIconButtonColors.SECONDARY,
						icon: (0, i.jsx)(s.DoubleCheckmarkIcon, {
							size: 'xs',
							color: 'currentColor'
						}),
						onClick: I
					})
		]
	});
}
function d(e) {
	let { cancel: t, confirm: n } = e;
	return (0, i.jsx)(s.DeclarativeConfirmModal, {
		dismissable: !0,
		header: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
		confirmText: c.Z.Messages.MARK_AS_READ,
		cancelText: c.Z.Messages.CANCEL,
		confirmButtonColor: s.Button.Colors.BRAND,
		onCancel: t,
		onConfirm: n,
		children: (0, i.jsx)(s.Text, {
			color: 'text-normal',
			variant: 'text-sm/normal',
			children: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
		})
	});
}
