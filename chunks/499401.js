_.d(E, {
	Y: function () {
		return t;
	}
});
var s = _(689938);
function t(e) {
	let { application: E, username: _, usernameOnClick: t, medium: n } = e;
	return null != E
		? s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
				username: _,
				applicationName: E.name,
				usernameOnClick: t,
				medium: n
			})
		: s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
				username: _,
				usernameOnClick: t,
				medium: n
			});
}
