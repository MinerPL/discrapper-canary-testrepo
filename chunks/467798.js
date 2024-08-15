n.d(t, {
	Z: function () {
		return a;
	},
	v: function () {
		return i;
	}
});
let r = '@silent',
	i = new RegExp('^'.concat(r, '(\\s|$)'));
function a(e) {
	return null == e ? [!1, ''] : null == e.match(i) ? [!1, e] : [!0, e.substring(r.length).trim()];
}
