n.d(a, {
	Z: function () {
		return l;
	}
});
var t = n(470079),
	r = n(358085);
function l(e) {
	let a = t.useRef(e);
	return (
		t.useEffect(() => {
			a.current = e;
		}, [e]),
		t.useCallback((e) => {
			let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
				t = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
				{ disabled: l = !1, onSubmit: s } = a.current;
			if ('enter' === e.key.toLowerCase()) ('macos' === (0, r.getOS)() ? t : n) && !l && (e.preventDefault(), s());
		}, [])
	);
}
