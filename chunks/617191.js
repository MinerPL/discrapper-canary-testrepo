var r = n(524437),
	i = n(163268),
	a = n(82554),
	s = n(689938);
let o = {
	getTitle: () => s.Z.Messages.IAR_UPSELLS_SENSITIVE_MEDIA_TITLE,
	getDescription: () => s.Z.Messages.IAR_UPSELLS_SENSITIVE_MEDIA_DESCRIPTION,
	eligibleReportSubtypes: [
		a.i5.SUB_CSAM,
		a.i5.SUB_LOLI,
		a.i5.SUB_NCP,
		a.i5.SUB_SEXUALLY_DEGRADING_CONTENT,
		a.i5.SUB_UNSOLICITED_PORN
	],
	onApply: () =>
		(0, i.zj)(
			(function () {
				let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.l4)(),
					a = {};
				return (
					e === r.Q4.SHOW && (a.explicitContentGuilds = r.Q4.BLUR),
					t === r.Q4.SHOW && (a.explicitContentFriendDm = r.Q4.BLUR),
					n === r.Q4.SHOW && (a.explicitContentNonFriendDm = r.Q4.BLUR),
					a
				);
			})()
		),
	predicate: () => {
		let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.l4)();
		return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
	}
};
t.Z = o;
