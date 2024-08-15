r.d(t, {
	O: function () {
		return i;
	}
});
var n = r(151122),
	a = r(642112),
	o = r(878719);
let i = (0, n._I)((e = {}) => {
	let t = e.limit || 5,
		r = e.key || 'cause';
	return {
		name: 'LinkedErrors',
		preprocessEvent(e, n, i) {
			let _ = i.getOptions();
			(0, a.Z)(o.GJ, _.stackParser, _.maxValueLength, r, t, e, n);
		}
	};
});
