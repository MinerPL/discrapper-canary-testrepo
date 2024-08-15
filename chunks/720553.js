n.r(e),
	n.d(e, {
		default: function () {
			return c;
		}
	}),
	n(757143);
var o = n(735250);
n(470079);
var a = n(481060),
	s = n(313201),
	l = n(988158),
	r = n(689938),
	i = n(836229);
function c(t) {
	let { url: e, trustUrl: n, isProtocol: c, onConfirm: d, onClose: _, transitionState: u } = t,
		x = (0, s.Dt)(),
		{
			protocol: h,
			hostname: m,
			theRestOfTheUrl: M,
			shouldTrustUrl: T,
			setShouldTrustUrl: E,
			handleConfirm: C
		} = (0, l.X)({
			url: e,
			trustUrl: n,
			onConfirm: d,
			onClose: _
		});
	return (0, o.jsxs)(a.ModalRoot, {
		size: a.ModalSize.DYNAMIC,
		transitionState: u,
		'aria-labelledby': x,
		children: [
			(0, o.jsxs)(a.ModalContent, {
				children: [
					(0, o.jsx)(a.Heading, {
						id: x,
						variant: 'heading-xl/bold',
						className: i.title,
						children: r.Z.Messages.MASKED_LINK_ALERT_V2_HEADER
					}),
					(0, o.jsx)(a.Text, {
						className: i.warningText,
						variant: 'text-md/normal',
						children: c ? r.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : r.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
					}),
					(0, o.jsxs)(a.Scroller, {
						className: i.linkCalloutContainer,
						children: [
							(0, o.jsxs)(a.Text, {
								tag: 'span',
								variant: c ? 'text-md/semibold' : 'text-md/normal',
								color: c ? 'text-normal' : 'text-muted',
								children: [h, '//']
							}),
							(0, o.jsx)(a.Text, {
								tag: 'span',
								variant: c ? 'text-md/normal' : 'text-md/semibold',
								color: c ? 'text-muted' : 'text-normal',
								children: m
							}),
							(0, o.jsx)(a.Text, {
								tag: 'span',
								variant: 'text-md/normal',
								color: 'text-muted',
								children: M
							})
						]
					}),
					(0, o.jsx)(a.Checkbox, {
						className: i.checkbox,
						type: a.Checkbox.Types.INVERTED,
						value: T,
						onChange: (t, e) => E(e),
						children: (0, o.jsx)(a.Text, {
							variant: 'text-sm/normal',
							children: c ? r.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({ protocol: h.replace(':', '') }) : r.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({ domain: m })
						})
					})
				]
			}),
			(0, o.jsxs)(a.ModalFooter, {
				children: [
					(0, o.jsx)(a.Button, {
						type: 'button',
						size: a.Button.Sizes.MEDIUM,
						color: a.Button.Colors.BRAND,
						onClick: C,
						children: c ? r.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : r.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
					}),
					(0, o.jsx)(a.Button, {
						type: 'button',
						size: a.Button.Sizes.MEDIUM,
						color: a.Button.Colors.PRIMARY,
						onClick: _,
						look: a.ButtonLooks.LINK,
						children: r.Z.Messages.GO_BACK
					})
				]
			})
		]
	});
}
