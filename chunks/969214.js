s.r(t),
	s.d(t, {
		default: function () {
			return c;
		}
	});
var a = s(735250);
s(470079);
var o = s(481060),
	n = s(689938),
	r = s(33923);
function c(e) {
	let { transitionState: t, onClose: c } = e;
	return (0, a.jsxs)(o.ModalRoot, {
		className: r.modal,
		transitionState: t,
		size: o.ModalSize.SMALL,
		children: [
			(0, a.jsx)('img', {
				'aria-hidden': !0,
				alt: '',
				src: s(762528),
				className: r.image
			}),
			(0, a.jsxs)(o.ModalContent, {
				className: r.content,
				children: [
					(0, a.jsx)(o.Heading, {
						variant: 'heading-xl/bold',
						color: 'header-primary',
						className: r.text,
						children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_TITLE
					}),
					(0, a.jsx)(o.Text, {
						variant: 'text-sm/normal',
						color: 'header-secondary',
						className: r.text,
						children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_SUBTITLE
					}),
					(0, a.jsx)(o.Button, {
						onClick: c,
						color: o.Button.Colors.BRAND,
						look: o.Button.Looks.FILLED,
						children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_CTA
					})
				]
			})
		]
	});
}
