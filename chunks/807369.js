n.d(t, {
	a: function () {
		return a;
	}
}),
	n(47120);
var i = n(470079),
	o = n(363577);
let a = function (e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
		n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
		s = (0, o.M)(e, t, n),
		[r, u] = i.useState(void 0);
	return (
		i.useEffect(() => {
			'' === e || e === a ? u(void 0) : null != s && u(s);
		}, [s, e, a]),
		r
	);
};
