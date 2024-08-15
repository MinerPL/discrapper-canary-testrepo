n(47120);
var r = n(735250),
	i = n(470079),
	a = n(481060),
	s = n(904245),
	o = n(367907),
	l = n(138201),
	u = n(592125),
	c = n(496675),
	d = n(981631),
	_ = n(689938);
t.Z = (e) => {
	let { message: t, reportId: n } = e,
		[E, f] = i.useState(!1),
		h = i.useCallback(() => {
			f(!0), o.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), s.Z.deleteMessage(t.getChannelId(), t.id);
		}, [t, n]),
		p = i.useMemo(() => {
			let e = u.Z.getChannel(t.getChannelId());
			return null != e && e.type !== d.d4z.DM && e.type !== d.d4z.GROUP_DM && c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id });
		}, [t]);
	return null != t && p
		? (0, r.jsx)(l.Z, {
				title: _.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_TITLE,
				description: _.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_DESCRIPTION,
				buttonText: E ? _.Z.Messages.IAR_UPSELLS_DELETED_MESSAGE_BUTTON : _.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_BUTTON,
				buttonDisabled: E,
				buttonColor: a.Button.Colors.RED,
				onButtonPress: h
			})
		: null;
};
