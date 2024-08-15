n.d(t, {
	Z: function () {
		return i;
	}
});
var l = n(598);
function i() {
	let { step: e, stepConfigs: t } = (0, l.usePaymentContext)(),
		n = t.find((t) => t.key === e);
	return null == n ? void 0 : n.options;
}
