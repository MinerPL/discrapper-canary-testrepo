n.d(t, {
	Z: function () {
		return s;
	}
});
var i = n(981631);
let a = '<removed>';
function s(e) {
	var t, n;
	let s = { ...e };
	if ('object' == typeof (t = s).args && 'string' == typeof t.cmd)
		s = (function (e) {
			switch (e.cmd) {
				case i.Etm.AUTHENTICATE:
				case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
					return {
						...e,
						args: {
							...e.args,
							access_token: a
						}
					};
				default:
					return { ...e };
			}
		})(s);
	if ('object' == typeof (n = s).data && 'string' == typeof n.cmd)
		s = (function (e) {
			switch (e.cmd) {
				case i.Etm.AUTHENTICATE:
				case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
					return {
						...e,
						data: {
							...e.data,
							access_token: a
						}
					};
				default:
					return { ...e };
			}
		})(s);
	return s;
}
