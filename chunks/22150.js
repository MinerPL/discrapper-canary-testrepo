n.d(s, {
	Z: function () {
		return d;
	}
}),
	n(47120);
var t = n(735250),
	o = n(470079),
	a = n(442837),
	l = n(481060),
	r = n(479531),
	i = n(393869),
	E = n(594174),
	_ = n(689938),
	N = n(120455);
function d(e) {
	let { onNext: s, onClose: n } = e,
		[d, c] = o.useState(!1),
		A = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
		u = async (e) => {
			e.preventDefault(), c(!0);
			try {
				await (0, i.i)(), s();
			} catch (s) {
				let e = new r.Z(s).getAnyErrorMessage();
				null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
			} finally {
				c(!1);
			}
		};
	return (0, t.jsxs)('form', {
		onSubmit: u,
		children: [
			(0, t.jsxs)(l.ModalHeader, {
				separator: !1,
				className: N.header,
				children: [
					(0, t.jsx)(l.Heading, {
						className: N.title,
						variant: 'heading-xl/extrabold',
						children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
					}),
					(0, t.jsx)(l.ModalCloseButton, {
						onClick: n,
						className: N.modalCloseButton
					})
				]
			}),
			(0, t.jsx)(l.ModalContent, {
				className: N.content,
				children: (0, t.jsx)(l.Text, {
					className: N.description,
					variant: 'text-md/normal',
					children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
						oldEmail: null == A ? void 0 : A.email
					})
				})
			}),
			(0, t.jsxs)(l.ModalFooter, {
				className: N.modalFooter,
				children: [
					(0, t.jsx)(l.Button, {
						type: 'submit',
						color: l.Button.Colors.BRAND,
						size: l.Button.Sizes.MEDIUM,
						submitting: d,
						className: N.__invalid_submit,
						children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
					}),
					(0, t.jsx)(l.Button, {
						className: N.__invalid_cancel,
						look: l.Button.Looks.LINK,
						color: l.Button.Colors.PRIMARY,
						onClick: n,
						children: _.Z.Messages.CANCEL
					})
				]
			})
		]
	});
}
