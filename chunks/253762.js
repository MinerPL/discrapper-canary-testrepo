t.r(n),
	t.d(n, {
		default: function () {
			return _;
		}
	});
var o = t(735250);
t(470079);
var i = t(481060),
	s = t(864762),
	r = t(428681),
	l = t(42338),
	c = t(569932),
	a = t(555638),
	C = t(42011),
	d = t(798930),
	u = t(564510);
function _(e) {
	let { transitionState: n, onClose: t, analyticsLocation: _, platformType: T } = e,
		{
			slide: N,
			gotoNext: P,
			gotoError: A,
			handleWaitingForConnection: I,
			handleAuthToken: f,
			expectedCallbackState: S,
			callbackData: h,
			errorCode: O
		} = (0, s.k)(_, T);
	return (0, o.jsx)(i.ModalRoot, {
		className: u.modal,
		transitionState: n,
		disableTrack: !0,
		children: (0, o.jsxs)(i.Slides, {
			activeSlide: N,
			width: 408,
			children: [
				(0, o.jsx)(i.Slide, {
					id: d.O.LANDING,
					children: (0, o.jsx)(c.A, {
						platformType: T,
						onContinue: P,
						onClose: t
					})
				}),
				(0, o.jsx)(i.Slide, {
					id: d.O.PRE_CONNECT,
					children: (0, o.jsx)(a.A, {
						platformType: T,
						isWaitingForConnection: !1,
						onWaitingForConnection: I,
						onAuthToken: f,
						onError: A,
						onClose: t
					})
				}),
				(0, o.jsx)(i.Slide, {
					id: d.O.PRE_CONNECT_WAITING,
					children: (0, o.jsx)(a.A, {
						platformType: T,
						isWaitingForConnection: !0,
						expectedCallbackState: S,
						onAuthToken: f,
						onError: A,
						onClose: t
					})
				}),
				(0, o.jsx)(i.Slide, {
					id: d.O.DISCORD_CONSENT,
					children: (0, o.jsx)(r.E, {
						platformType: T,
						authToken: h,
						onContinue: P,
						onError: A,
						onClose: t
					})
				}),
				(0, o.jsx)(i.Slide, {
					id: d.O.ERROR,
					children: (0, o.jsx)(l.X, {
						onContinue: P,
						onClose: t,
						errorCode: O
					})
				}),
				(0, o.jsx)(i.Slide, {
					id: d.O.SUCCESS,
					children: (0, o.jsx)(C.W, { onClose: t })
				})
			]
		})
	});
}
