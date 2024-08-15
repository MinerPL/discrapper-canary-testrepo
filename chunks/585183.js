t.d(a, {
	h: function () {
		return m;
	}
}),
	t(47120);
var n = t(735250),
	r = t(470079),
	s = t(512722),
	o = t.n(s),
	l = t(481060),
	c = t(457330),
	i = t(600164),
	d = t(710845),
	u = t(69580),
	x = t(689938),
	N = t(564510);
let h = new d.Z('TwoWayLinkDiscordConsentWeb');
function m(e) {
	let { platformType: a, clientId: t, scopes: s, authToken: d, onContinue: m, onError: C, onClose: j, redirectUri: E } = e,
		[v, f] = r.useState(!1),
		p = r.useCallback(
			async (e) => {
				let t,
					n,
					{ location: r } = e,
					{ callbackCode: s, callbackState: o } = d;
				try {
					t = await c.Z.completeTwoWayLink(a, r, s, o);
				} catch (e) {
					var l;
					h.error(''.concat(a, ' link error:'), e), (n = null === (l = e.body) || void 0 === l ? void 0 : l.code);
				}
				null != t ? m() : C(n);
			},
			[a, d, m, C]
		),
		{
			header: T,
			body: O,
			appDetails: b,
			sendAuthorize: g
		} = (0, u.useOAuth2AuthorizeForm)({
			clientId: t,
			scopes: s,
			responseType: 'code',
			callback: p,
			isTrustedName: !0,
			isEmbeddedFlow: !0,
			redirectUri: E
		}),
		R = r.useCallback(() => {
			o()(null != g, 'sendAuthorize not available'), f(!0), g(!0);
		}, [g]);
	return (0, n.jsxs)('div', {
		className: N.container,
		children: [
			null != j &&
				(0, n.jsx)(l.ModalCloseButton, {
					className: N.closeButton,
					onClick: j
				}),
			(0, n.jsxs)(l.Scroller, {
				children: [
					(0, n.jsx)(l.ModalHeader, {
						direction: i.Z.Direction.VERTICAL,
						className: N.header,
						separator: !1,
						children: (0, n.jsx)(l.Text, {
							className: N.stepHeader,
							variant: 'text-xs/bold',
							color: 'header-secondary',
							children: x.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
								number: 2,
								total: 2
							})
						})
					}),
					(0, n.jsxs)('div', {
						className: N.discordConsentBody,
						children: [T, O, b]
					}),
					(0, n.jsx)(l.ModalFooter, {
						className: N.footer,
						children: (0, n.jsx)(l.Button, {
							className: N.footerButton,
							color: l.Button.Colors.BRAND,
							submitting: v,
							onClick: R,
							children: x.Z.Messages.AUTHORIZE_AND_CONTINUE
						})
					})
				]
			})
		]
	});
}
