n.r(t),
	n.d(t, {
		default: function () {
			return c;
		}
	});
var a = n(735250);
n(470079);
var r = n(355467),
	i = n(106976),
	l = n(703656),
	s = n(914010),
	d = n(598),
	o = n(791785),
	u = n(981631);
function c(e) {
	let { onClose: t, onComplete: n, forcesTransitionToGuild: c, ...f } = e,
		{ subscriptionMetadataRequest: h } = (0, d.usePaymentContext)();
	return (0, a.jsx)(o.PaymentModal, {
		...f,
		onComplete: n,
		onClose: (e) => {
			t(e);
			let a = null == h ? void 0 : h.guild_id;
			e &&
				null != a &&
				(r.jg(),
				(0, i.i1)(a),
				null == n || n(),
				null != a && (c || s.Z.getGuildId() !== a) && (0, l.uL)(u.Z5c.CHANNEL(a)));
		},
		forceNewPaymentModal: !0
	});
}
