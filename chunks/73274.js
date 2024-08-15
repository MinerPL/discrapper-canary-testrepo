n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(470079),
	a = n(924826),
	s = n(459273),
	l = n(585483),
	r = n(534091),
	o = n(959517),
	c = n(981631);
function u(e) {
	let { scrollerRef: t, ...n } = e,
		u = i.useCallback(() => {
			let e = t.current;
			return null == e
				? Promise.resolve()
				: new Promise((t) => {
						e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
					});
		}, []),
		d = i.useCallback(() => {
			let e = t.current;
			return null == e
				? Promise.resolve()
				: new Promise((t) => {
						e.scrollToTop({ callback: () => requestAnimationFrame(t) });
					});
		}, []),
		h = i.useCallback(
			(e) => {
				var i, a, s;
				if (!n.keyboardModeEnabled) return;
				let l = null === (a = t.current) || void 0 === a ? void 0 : null === (i = a.getScrollerNode()) || void 0 === i ? void 0 : i.ownerDocument,
					r = null == l ? void 0 : l.querySelector(e);
				null != r &&
					(null === (s = t.current) ||
						void 0 === s ||
						s.scrollIntoViewNode({
							node: r,
							padding: 4 * o.kQ,
							callback: () => (null == r ? void 0 : r.focus())
						}));
			},
			[n.keyboardModeEnabled]
		),
		m = i.useCallback(() => {
			!n.hasMoreAfter && l.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS);
		}, [n.hasMoreAfter]),
		p = (0, a.ZP)({
			id: r.W,
			preserveFocusPosition: !1,
			setFocus: h,
			isEnabled: n.keyboardModeEnabled && !n.isEditing,
			scrollToStart: d,
			scrollToEnd: u,
			onNavigateNextAtEnd: m
		}),
		_ = i.useCallback(
			(e) => {
				let { atEnd: t = !1 } = e;
				t ? p.focusLastVisibleItem() : p.focusFirstVisibleItem();
			},
			[p]
		);
	return (
		(0, s.yp)({
			event: c.CkL.FOCUS_MESSAGES,
			handler: _
		}),
		p
	);
}
