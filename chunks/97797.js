_.d(E, {
	i: function () {
		return t;
	}
});
var s = _(689938);
function t(e) {
	let { username: E, usernameOnClickHandler: _, productName: t } = e;
	return s.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
		username: E,
		usernameHook: _,
		productName: t
	});
}
