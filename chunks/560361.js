n.d(t, {
	Z: function () {
		return a;
	}
});
var l = n(470079);
function a(e) {
	let t = l.useRef();
	(t.current = e),
		l.useEffect(
			() => () => {
				var e;
				return null === (e = t.current) || void 0 === e ? void 0 : e.call(t);
			},
			[]
		);
}
