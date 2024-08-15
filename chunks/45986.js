n.d(t, {
	o: function () {
		return i;
	},
	u: function () {
		return a;
	}
});
var r = n(570140);
function i(e) {
	r.Z.dispatch({
		type: 'MASKED_LINK_ADD_TRUSTED_DOMAIN',
		url: e
	});
}
function a(e) {
	r.Z.dispatch({
		type: 'MASKED_LINK_ADD_TRUSTED_PROTOCOL',
		url: e
	});
}
