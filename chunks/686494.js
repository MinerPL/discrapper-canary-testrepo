o.d(n, {
	Z: function () {
		return C;
	}
});
var t = o(735250);
o(470079);
var i = o(212598),
	r = o(728151),
	s = o(981631),
	c = o(689938),
	l = o(344595),
	a = o(322539);
function C(e) {
	let { isWaitingForConnection: n, onWaitingForConnection: o, expectedCallbackState: C, onAuthToken: u, onError: d, onClose: _ } = e,
		N = n
			? (0, t.jsx)('img', {
					src: a,
					width: '168',
					height: '124',
					alt: ''
				})
			: (0, t.jsx)('img', {
					src: l,
					width: '152',
					height: '123',
					alt: ''
				}),
		L = n ? c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE,
		R = n ? c.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : c.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
	return (0, t.jsx)(i.t, {
		platformType: s.ABu.CRUNCHYROLL,
		isWaitingForConnection: n,
		onWaitingForConnection: o,
		expectedCallbackState: C,
		onAuthToken: u,
		onError: d,
		onClose: _,
		img: N,
		title: L,
		body: R,
		redirectDestination: r.pY
	});
}
