n.d(t, {
	T: function () {
		return f;
	}
}),
	n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(346486),
	r = n(545594),
	o = n(314897),
	c = n(271383),
	u = n(322937),
	d = n(134049),
	h = n(893732),
	m = n(590433),
	p = n(689938),
	_ = n(679061);
function f(e) {
	let { guild: t, disabledUntil: n } = e,
		[f, E] = (0, d.i)(t.id),
		g = (0, a.e7)([c.ZP, o.default], () => c.ZP.getMember(t.id, o.default.getId()), [t.id]);
	return (
		(0, u.$)(g),
		(0, i.jsxs)('div', {
			children: [
				f
					? (0, i.jsx)(h.Z, {
							onClose: () => E(t.id),
							guildName: t.name
						})
					: null,
				(0, i.jsx)(r.i, {
					bannerIcon: (0, i.jsx)(s.ClockWarningIcon, {
						size: 'md',
						color: 'currentColor',
						className: _.bannerIcon
					}),
					bannerHeader: p.Z.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
					bannerSubtext: p.Z.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({ link: m.cu }),
					containerStyles: _.bannerContainer,
					headerStyles: _.bannerHeader,
					children: (0, i.jsx)(s.Text, {
						variant: 'text-sm/semibold',
						children: (0, i.jsx)(l.Z, {
							deadline: new Date(n),
							showUnits: !0,
							stopAtOneSec: !0
						})
					})
				})
			]
		})
	);
}
