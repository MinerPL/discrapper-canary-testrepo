a.r(s),
	a.d(s, {
		default: function () {
			return l;
		}
	});
var t = a(735250);
a(470079);
var n = a(481060),
	r = a(600164),
	d = a(689938),
	i = a(728469);
function l(e) {
	let { transitionState: s, onClose: a } = e;
	return (0, t.jsxs)(n.ModalRoot, {
		size: n.ModalSize.DYNAMIC,
		transitionState: s,
		'aria-label': d.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER,
		children: [
			(0, t.jsxs)(n.ModalHeader, {
				justify: r.Z.Justify.BETWEEN,
				separator: !1,
				children: [
					(0, t.jsx)(n.Heading, {
						variant: 'heading-md/semibold',
						className: i.header,
						children: d.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER
					}),
					(0, t.jsx)(n.ModalCloseButton, { onClick: a })
				]
			}),
			(0, t.jsxs)(n.ModalContent, {
				children: [
					(0, t.jsx)(n.Text, {
						variant: 'text-sm/normal',
						children: d.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_BODY
					}),
					(0, t.jsx)('div', { className: i.fullArt })
				]
			}),
			(0, t.jsx)(n.ModalFooter, {
				children: (0, t.jsx)(n.Button, {
					onClick: a,
					children: d.Z.Messages.OKAY
				})
			})
		]
	});
}
