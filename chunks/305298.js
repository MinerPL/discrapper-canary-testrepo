i.d(n, {
	Z: function () {
		return c;
	}
}),
	i(47120);
var l = i(470079),
	a = i(881052),
	t = i(430927),
	s = i(610665);
let r = {
	onSuccess: () => {},
	permissionOverwrites: []
};
function c() {
	let [e, n] = l.useState(!1),
		[i, c] = l.useState(null);
	return [
		async function e(e, i) {
			let { onSuccess: l = r.onSuccess, permissionOverwrites: o = r.permissionOverwrites } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
			n(!0);
			try {
				await s.GV(e, o), await s.iQ(e, i), await (0, t.o)(e, l), await (0, t.T)(e, l), n(!1);
			} catch (e) {
				c(new a.Hx(e)), n(!1);
			}
			n(!1);
		},
		{
			loading: e,
			error: i
		}
	];
}
