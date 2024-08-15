n.d(s, {
	Z: function () {
		return d;
	}
});
var t = n(735250);
n(470079);
var o = n(481060),
	a = n(488889),
	l = n(626135),
	r = n(981631),
	i = n(259076),
	E = n(689938),
	_ = n(759095),
	N = n(120455);
function d(e) {
	let { onNext: s, onClose: n, reason: d, onReasonChange: c } = e,
		A = i.zf.map((e) => ({
			value: e,
			name: (0, a.S)(e)
		}));
	return (0, t.jsxs)('form', {
		onSubmit: s,
		children: [
			(0, t.jsxs)(o.ModalHeader, {
				separator: !1,
				className: N.header,
				children: [
					(0, t.jsx)(o.Heading, {
						variant: 'heading-xl/extrabold',
						children: E.Z.Messages.EMAIL_CHANGE_REASONING_HEADER
					}),
					(0, t.jsx)(o.ModalCloseButton, {
						onClick: n,
						className: N.modalCloseButton
					})
				]
			}),
			(0, t.jsx)(o.ModalContent, {
				className: _.content,
				children: (0, t.jsx)(o.RadioGroup, {
					radioPosition: 'right',
					radioItemClassName: _.radioItem,
					size: o.RadioGroup.Sizes.NOT_SET,
					value: d,
					options: A,
					onChange: (e) => {
						let { value: s } = e;
						l.default.track(r.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: s }), c(s);
					}
				})
			}),
			(0, t.jsxs)(o.ModalFooter, {
				className: N.modalFooter,
				children: [
					(0, t.jsx)(o.Button, {
						color: o.Button.Colors.BRAND,
						disabled: null == d,
						size: o.Button.Sizes.MEDIUM,
						onClick: s,
						children: E.Z.Messages.CONTINUE
					}),
					(0, t.jsx)(o.Button, {
						look: o.Button.Looks.LINK,
						color: o.Button.Colors.PRIMARY,
						onClick: n,
						children: E.Z.Messages.CANCEL
					})
				]
			})
		]
	});
}
