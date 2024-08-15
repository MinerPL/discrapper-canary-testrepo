o.d(n, {
	Z: function () {
		return _;
	}
});
var t = o(735250);
o(470079);
var s = o(481060),
	r = o(63063),
	i = o(921869),
	c = o(514161),
	a = o(981631),
	l = o(689938),
	d = o(932508);
function u() {
	return (0, t.jsxs)(c.yC, {
		children: [
			(0, t.jsx)(c.Ux, {
				text: l.Z.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
				children: (0, t.jsx)(s.VoiceNormalIcon, {
					size: 'md',
					color: 'currentColor'
				})
			}),
			(0, t.jsx)(c.Ux, {
				text: l.Z.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
				children: (0, t.jsx)(s.GameControllerIcon, {
					size: 'md',
					color: 'currentColor'
				})
			})
		]
	});
}
function _(e) {
	let { onContinue: n, onClose: o } = e,
		s = r.Z.getArticleURL(a.BhN.XBOX_CONNECTION);
	return (0, t.jsx)(i.m, {
		platformType: a.ABu.XBOX,
		headerConnect: l.Z.Messages.CONNECT_XBOX_LANDING_TITLE,
		headerReconnect: l.Z.Messages.RECONNECT_XBOX_LANDING_TITLE,
		body: l.Z.Messages.CONNECT_XBOX_LANDING_BODY,
		learnMoreLink: s,
		onClose: o,
		onContinue: n,
		img: (0, t.jsx)('img', {
			src: d,
			width: 234,
			height: 152,
			alt: ''
		}),
		valueProps: (0, t.jsx)(u, {})
	});
}
