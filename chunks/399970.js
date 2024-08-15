t.d(s, {
	Z: function () {
		return m;
	}
}),
	t(47120);
var n,
	a,
	i = t(735250),
	r = t(470079),
	o = t(442837),
	l = t(481060),
	c = t(570140),
	d = t(401430),
	_ = t(155268),
	E = t(600164),
	u = t(313201),
	I = t(695103),
	T = t(689938),
	S = t(395571),
	N = t(224499);
let C = /^\d+$|^$/;
((a = n || (n = {})).LOCALHOST = 'localhost'), (a.PROXY = 'proxy');
function m(e) {
	let { onClose: s, transitionState: t } = e,
		{
			authorizedApplicationId: n,
			authorizationError: a,
			authorizing: m
		} = (0, o.cj)([I.Z], () => ({
			authorizedApplicationId: I.Z.testModeApplicationId,
			authorizationError: I.Z.error,
			authorizing: I.Z.isFetchingAuthorization
		})),
		[A, O] = r.useState(null != n ? n : ''),
		[g, h] = r.useState('8080'),
		[p, R] = r.useState('localhost'),
		x = (0, u.Dt)(),
		M = C.test(A);
	async function f() {
		d.q$();
		let e = (function (e, s, t) {
			if (null == e) return null;
			switch (e) {
				case 'localhost':
					return 'https://localhost:'.concat(s);
				case 'proxy':
					return (0, _.Z)(t);
			}
		})(p, g, A);
		null != (await d.Wt(A, e)) && s();
	}
	r.useEffect(() => () => c.Z.wait(() => d.q$()), []);
	let D = null != n && n === A,
		P = D
			? function () {
					d.mc(), O(''), R(null);
				}
			: f;
	return (0, i.jsxs)(l.ModalRoot, {
		'aria-labelledby': x,
		transitionState: t,
		children: [
			(0, i.jsxs)(l.ModalHeader, {
				justify: E.Z.Justify.BETWEEN,
				separator: !1,
				children: [
					(0, i.jsx)(l.FormTitle, {
						id: x,
						tag: 'h1',
						className: N.marginReset,
						children: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
					}),
					(0, i.jsx)(l.ModalCloseButton, { onClick: s })
				]
			}),
			(0, i.jsxs)(l.ModalContent, {
				className: S.modalContent,
				children: [
					(0, i.jsx)(l.FormText, {
						className: N.marginBottom20,
						type: l.FormText.Types.DESCRIPTION,
						children: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
					}),
					null == a
						? null
						: (0, i.jsx)(l.FormErrorBlock, {
								className: N.marginBottom20,
								children: a
							}),
					(0, i.jsx)('form', {
						onSubmit: (e) => {
							e.preventDefault(), P();
						},
						children: (0, i.jsxs)(E.Z, {
							direction: E.Z.Direction.VERTICAL,
							align: E.Z.Align.START,
							children: [
								(0, i.jsx)(l.FormItem, {
									className: S.inputWrapper,
									title: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
									required: !0,
									children: (0, i.jsx)(l.TextInput, {
										value: A,
										maxLength: 19,
										error: M ? null : T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
										onChange: function (e) {
											O(e);
										},
										disabled: m
									})
								}),
								(0, i.jsx)(l.FormItem, {
									className: S.inputWrapper,
									title: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
									children: (0, i.jsx)(l.SingleSelect, {
										isDisabled: !M || '' === A,
										value: p,
										options: [
											{
												value: 'localhost',
												label: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
												key: 'localhost'
											},
											{
												value: 'proxy',
												label: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
												key: 'proxy'
											}
										],
										onChange: function (e) {
											R(e);
										},
										placeholder: 'URL Origin Type'
									})
								}),
								'localhost' !== p
									? null
									: (0, i.jsx)(l.FormItem, {
											className: S.inputWrapper,
											title: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
											required: !0,
											children: (0, i.jsx)(l.TextInput, {
												value: g,
												maxLength: 5,
												onChange: (e) => h(e),
												disabled: m
											})
										}),
								(0, i.jsx)(l.Button, {
									submitting: m,
									type: 'submit',
									disabled: !M || 0 === A.length || ('localhost' === p && 0 === g.length),
									color: D ? l.Button.Colors.RED : l.Button.Colors.GREEN,
									children: D
										? T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR
										: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
								})
							]
						})
					})
				]
			})
		]
	});
}
