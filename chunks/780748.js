n.d(t, {
	Z: function () {
		return u;
	}
});
var r = n(470079),
	i = n(998698),
	a = n(436660),
	s = n(515270),
	o = n(417662),
	l = n(981631);
function u(e) {
	let { editor: t, channel: n, disableEnterToSubmit: u, onKeyDown: c, onKeyUp: d, onTab: _, onEnter: E, allowNewLines: f, submit: h, hideAutocomplete: p, moveSelection: m } = e,
		I = r.useCallback(
			(e) => {
				var r;
				switch (e.which) {
					case l.yXg.ARROW_UP:
						if (m(-1)) {
							e.preventDefault();
							return;
						}
						break;
					case l.yXg.ARROW_DOWN:
						if (m(1)) {
							e.preventDefault();
							return;
						}
						break;
					case l.yXg.P:
						if ((0, o.E)(e, { ctrl: !0 }) && m(-1)) {
							e.preventDefault();
							return;
						}
						break;
					case l.yXg.N:
						if ((0, o.E)(e, { ctrl: !0 }) && m(1)) {
							e.preventDefault();
							return;
						}
						break;
					case l.yXg.ESCAPE:
						null == p || p();
						break;
					case l.yXg.TAB:
						if ((0, o.E)(e, {}) && (null == _ ? void 0 : _())) {
							e.preventDefault(), e.stopPropagation();
							return;
						}
						if (null != i.Z.getActiveCommand(n.id)) {
							e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.Q.selectPreviousCommandOption(t) : a.Q.selectNextCommandOption(t);
							return;
						}
						break;
					case l.yXg.ENTER:
						if ((0, o.E)(e, {}) && (null == E ? void 0 : E(e))) {
							e.preventDefault(), e.stopPropagation();
							return;
						}
				}
				if ((null === (r = t.onKeyDown) || void 0 === r ? void 0 : r.call(t, e)) === !0) {
					e.preventDefault(), e.stopPropagation();
					return;
				}
				e.which === l.yXg.ENTER && ((!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, s.L6)(t)) || !f) && (e.preventDefault(), e.stopPropagation(), h()), null == c || c(e);
			},
			[f, n.id, u, t, p, m, E, c, _, h]
		);
	return {
		handleKeyDown: I,
		handleKeyUp: r.useCallback(
			(e) => {
				null == d || d(e);
			},
			[d]
		)
	};
}
