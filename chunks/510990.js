n.d(t, {
	J: function () {
		return o;
	},
	V: function () {
		return l;
	}
});
var r = n(512722),
	i = n.n(r),
	a = n(476326),
	s = n(861990);
function o(e, t) {
	var n;
	i()(e.item.platform === a.ow.WEB, 'Upload must be in the Web format');
	let r = (0, s.B)(e, t);
	return Promise.resolve({
		file: e.item.file,
		name: null !== (n = r.filename) && void 0 !== n ? n : ''
	});
}
async function l(e) {}
