o.r(n),
	o.d(n, {
		default: function () {
			return N;
		}
	});
var t = o(735250);
o(470079);
var i = o(481060),
	r = o(864762),
	s = o(779341),
	c = o(642566),
	l = o(742699),
	a = o(686494),
	C = o(573703),
	u = o(798930),
	d = o(981631),
	_ = o(564510);
function N(e) {
	let { transitionState: n, onClose: o, analyticsLocation: N } = e,
		{
			slide: L,
			gotoNext: R,
			gotoError: h,
			handleWaitingForConnection: O,
			handleAuthToken: x,
			expectedCallbackState: p,
			callbackData: T
		} = (0, r.k)(N, d.ABu.CRUNCHYROLL);
	return (0, t.jsx)(i.ModalRoot, {
		className: _.modal,
		transitionState: n,
		disableTrack: !0,
		children: (0, t.jsxs)(i.Slides, {
			activeSlide: L,
			width: 408,
			children: [
				(0, t.jsx)(i.Slide, {
					id: u.O.LANDING,
					children: (0, t.jsx)(l.Z, {
						onContinue: R,
						onClose: o
					})
				}),
				(0, t.jsx)(i.Slide, {
					id: u.O.PRE_CONNECT,
					children: (0, t.jsx)(a.Z, {
						isWaitingForConnection: !1,
						onWaitingForConnection: O,
						onAuthToken: x,
						onError: h,
						onClose: o
					})
				}),
				(0, t.jsx)(i.Slide, {
					id: u.O.PRE_CONNECT_WAITING,
					children: (0, t.jsx)(a.Z, {
						isWaitingForConnection: !0,
						expectedCallbackState: p,
						onAuthToken: x,
						onError: h,
						onClose: o
					})
				}),
				(0, t.jsx)(i.Slide, {
					id: u.O.DISCORD_CONSENT,
					children: (0, t.jsx)(s.Z, {
						authToken: T,
						onContinue: R,
						onError: h,
						onClose: o
					})
				}),
				(0, t.jsx)(i.Slide, {
					id: u.O.ERROR,
					children: (0, t.jsx)(c.Z, {
						onContinue: R,
						onClose: o
					})
				}),
				(0, t.jsx)(i.Slide, {
					id: u.O.SUCCESS,
					children: (0, t.jsx)(C.Z, { onClose: o })
				})
			]
		})
	});
}
