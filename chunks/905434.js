var r = n(735250);
n(470079);
var i = n(481060),
	a = n(565138),
	s = n(430824),
	o = n(689938),
	l = n(203529);
t.Z = (e) => {
	let { stageInstance: t } = e,
		n = s.Z.getGuild(t.guild_id);
	return null == n
		? null
		: (0, r.jsxs)('div', {
				className: l.container,
				children: [
					(0, r.jsx)(i.Heading, {
						className: l.header,
						variant: 'heading-sm/semibold',
						children: o.Z.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
					}),
					(0, r.jsxs)('div', {
						className: l.guildContainer,
						children: [
							(0, r.jsxs)('div', {
								className: l.guildInfo,
								children: [
									(0, r.jsx)(a.Z, {
										guild: n,
										size: a.Z.Sizes.MINI,
										className: l.guildIcon
									}),
									(0, r.jsx)(i.Text, {
										color: 'header-secondary',
										variant: 'text-sm/normal',
										children: n.name
									})
								]
							}),
							(0, r.jsx)(i.Text, {
								variant: 'text-md/semibold',
								color: 'header-primary',
								children: t.topic
							})
						]
					})
				]
			});
};
