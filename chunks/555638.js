t.d(n, {
	A: function () {
		return a;
	}
});
var o = t(735250);
t(470079);
var i = t(212598),
	s = t(927923),
	r = t(689938),
	l = t(283554),
	c = t(124248);
function a(e) {
	let {
			platformType: n,
			isWaitingForConnection: t,
			onWaitingForConnection: a,
			expectedCallbackState: C,
			onAuthToken: d,
			onError: u,
			onClose: _
		} = e,
		T = t
			? (0, o.jsx)('img', {
					src: c,
					width: '180',
					height: '125',
					alt: ''
				})
			: (0, o.jsx)('img', {
					src: l,
					width: '180',
					height: '111',
					alt: ''
				}),
		N = t ? r.Z.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : r.Z.Messages.PS_PRECONNECT_TITLE,
		P = t ? r.Z.Messages.PS_PRECONNECT_BODY_WAITING : r.Z.Messages.PS_PRECONNECT_BODY;
	return (0, o.jsx)(i.t, {
		platformType: n,
		isWaitingForConnection: t,
		onWaitingForConnection: a,
		expectedCallbackState: C,
		onAuthToken: d,
		onError: u,
		onClose: _,
		img: T,
		title: N,
		body: P,
		redirectDestination: s.uu
	});
}
