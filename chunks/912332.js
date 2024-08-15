n.d(t, {
	Np: function () {
		return c;
	},
	l8: function () {
		return l;
	},
	mc: function () {
		return o;
	},
	so: function () {
		return r;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(822869);
let r = 'forward-modal';
function l(e) {
	let { messageId: t, channelId: l, source: o, initialSelectedDestinations: c = [], forwardOptions: u, onRequestSent: d } = e;
	(0, s.Lb)(l, t, o),
		(0, a.openModalLazy)(
			async () => {
				let { ForwardModal: e } = await Promise.all([n.e('6380'), n.e('18499')]).then(n.bind(n, 930864));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						channelId: l,
						messageId: t,
						initialSelectedDestinations: c,
						forwardOptions: u,
						onRequestSent: d
					});
			},
			{ modalKey: r }
		);
}
function o() {
	(0, a.closeModal)(r);
}
function c(e) {
	let { messageId: t, channelId: s, failedDestinations: r, forwardOptions: l } = e;
	(0, a.openModalLazy)(async () => {
		let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
		return (n) =>
			(0, i.jsx)(e, {
				...n,
				messageId: t,
				channelId: s,
				failedDestinations: r,
				forwardOptions: l
			});
	});
}
