n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(470079),
	i = n(924826),
	a = n(536895),
	s = n(40851),
	o = n(590921);
function l(e) {
	var t, n, l;
	let { navId: u, scrollerRef: c, state: d, onFocus: _ } = e,
		{ renderWindow: E } = r.useContext(s.ZP),
		f = (e, t) => {
			var n;
			if ((null === (n = c.current) || void 0 === n || n.scrollToTop(), e && null != d.query)) {
				let e = d.query.typeInfo.focusMode,
					n = !(e === o.QZ.MANUAL || (e === o.QZ.AUTO_WHEN_FILTERED && 0 === d.query.queryText.length));
				d.isVisible && (!0 !== t || !1 !== n) ? (p.setFocus('0'), null == _ || _(0)) : (p.setFocus(null), null == _ || _(null));
			}
		},
		h = (e) => {
			var t;
			if ((null === (t = c.current) || void 0 === t || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0)) {
				let e = d.query.resultCount - 1;
				p.setFocus(e.toString()), null == _ || _(e);
			}
		},
		p = (0, i.ZP)({
			id: u,
			isEnabled: d.isVisible,
			orientation: a.hy.VERTICAL,
			useVirtualFocus: !0,
			setFocus: (e, t) => {
				let n = E.document.querySelector(e);
				if (null != n) {
					var r;
					null === (r = c.current) || void 0 === r || r.scrollIntoViewNode({ node: n });
				}
				null == _ || _(+t);
			},
			onNavigateNextAtEnd: () => f(!0),
			onNavigatePreviousAtStart: () => h(!0),
			scrollToStart: () => (f(!1, !1), Promise.resolve()),
			scrollToEnd: () => (h(!1), Promise.resolve())
		});
	return (
		r.useEffect(() => {
			f(!0, !0);
		}, [null === (t = d.query) || void 0 === t ? void 0 : t.type, null === (n = d.query) || void 0 === n ? void 0 : n.queryText, null === (l = d.query) || void 0 === l ? void 0 : l.isLoading, d.isVisible]),
		p
	);
}
