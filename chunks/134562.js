n.d(s, {
	Z: function () {
		return i;
	}
});
var t = n(735250);
n(470079);
var o = n(481060),
	a = n(259076),
	l = n(689938),
	r = n(120455);
function i(e) {
	let { onNext: s, onClose: n } = e;
	return (0, t.jsxs)('form', {
		onSubmit: s,
		children: [
			(0, t.jsxs)(o.ModalHeader, {
				separator: !1,
				className: r.header,
				children: [
					(0, t.jsx)(o.Heading, {
						variant: 'heading-xl/extrabold',
						children: l.Z.Messages.EMAIL_CHANGE_REASONING_WARNING_HEADER
					}),
					(0, t.jsx)(o.ModalCloseButton, {
						onClick: n,
						className: r.modalCloseButton
					})
				]
			}),
			(0, t.jsxs)(o.ModalContent, {
				className: r.content,
				children: [
					(0, t.jsx)(o.Text, {
						className: r.description,
						variant: 'text-md/normal',
						children: l.Z.Messages.EMAIL_CHANGE_REASONING_IMPERSONATION_EDUCATION.format({ hcArticle: a.j1 })
					}),
					(0, t.jsx)(o.Text, {
						className: r.description,
						variant: 'text-md/normal',
						children: l.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_NEVER_ASKS_FOR_EMAIL_CHANGE
					})
				]
			}),
			(0, t.jsxs)(o.ModalFooter, {
				className: r.modalFooter,
				children: [
					(0, t.jsx)(o.Button, {
						color: o.Button.Colors.BRAND,
						onClick: n,
						children: l.Z.Messages.CANCEL
					}),
					(0, t.jsx)(o.Button, {
						color: o.Button.Colors.PRIMARY,
						look: o.Button.Looks.LINK,
						onClick: s,
						children: l.Z.Messages.EMAIL_CHANGE_REASONING_CONTINUE
					})
				]
			})
		]
	});
}
