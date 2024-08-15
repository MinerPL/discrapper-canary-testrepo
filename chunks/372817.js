function r(e) {
	let { getFocusableElements: t, getActiveElement: n, scrollToStart: r, scrollToEnd: i } = e;
	async function a(e) {
		var i, a;
		let o = (null == e ? void 0 : e.from) || n();
		if (null == o) return null;
		let l =
			((i = o),
			null !==
				(a = t().find(
					(e) =>
						!!(i.compareDocumentPosition(e) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY))
				)) && void 0 !== a
				? a
				: null);
		return null == l && (null == e ? void 0 : e.wrap) ? (await (null == r ? void 0 : r()), s()) : l;
	}
	function s() {
		var e;
		return null !== (e = t()[0]) && void 0 !== e ? e : null;
	}
	function o() {
		var e;
		let n = t();
		return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null;
	}
	return {
		getNextFocusableElement: a,
		getPreviousFocusableElement: async function e(e) {
			let r = (null == e ? void 0 : e.from) || n();
			if (null == r) return null;
			let a = (function (e) {
				let n = t();
				for (let t = n.length - 1; t >= 0; t--) {
					let r = n[t];
					if (e.compareDocumentPosition(r) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY))
						return r;
				}
				return null;
			})(r);
			return null == a && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), o()) : a;
		},
		getFirstFocusableElement: s,
		getLastFocusableElement: o
	};
}
n.d(t, {
	E: function () {
		return r;
	}
});
