n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(470079),
	i = n(519953),
	a = n(887490);
function s(e, t, n) {
	r.useEffect(() => {
		let r = i.F3.findDocumentOrShadowRoot(e).defaultView;
		if ((null == r ? void 0 : r.ResizeObserver) == null) return;
		let s = a.bN.toDOMNode(e, e),
			o = s.offsetHeight;
		null == n || n(o);
		let l = new r.ResizeObserver(() => {
			let r = a.bN.toDOMNode(e, e).offsetHeight;
			o !== r && (null != t.current && (t.current.style.height = ''.concat(r, 'px')), (o = r), null == n || n(r));
		});
		return l.observe(s), () => l.disconnect();
	}, [t, e, n]);
}
