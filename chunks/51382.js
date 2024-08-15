var i = n(735250);
n(470079);
var a = n(82950),
	s = n(536442),
	r = n(703656),
	l = n(922482),
	o = n(981631),
	c = n(689938),
	d = n(882977);
t.Z = (e) => {
	let { channel: t, guild: n } = e;
	return (0, i.jsx)(a.Z, {
		guild: n,
		onDismissed: () => {
			(0, s.Kw)(s.v6.HUB_STUDY_ROOM_NOTICE);
		},
		onClick: () => {
			(0, s.Kw)(s.v6.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, l.Cq)(t), (0, r.XU)(t.getGuildId(), t.id));
		},
		title: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
		message: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_DESCRIPTION,
		cta: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
		image: d,
		type: o.vID.HUB_STUDY_ROOM
	});
};
