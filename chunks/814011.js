n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(47120);
var r = n(772096),
	i = n(925994),
	a = n(436660),
	s = n(887490);
function o(e) {
	return (
		(e.setFragmentData = (t) => {
			if (null != e.selection) {
				let n = (0, i.sk)(s.bN.richValue(e), {
					mode: 'plain',
					range: e.selection,
					preventEmojiSurrogates: !0
				});
				t.setData('text/plain', n);
			}
		}),
		(e.insertData = (t) => {
			e.insertTextData(t);
		}),
		(e.insertFragmentData = (e) => !1),
		(e.insertTextData = (t) => {
			let n = t.getData('text/plain');
			if (0 === n.length) return !1;
			if (null != e.selection && s.M8.isExpanded(e.selection)) {
				let t = (0, r.yw)(n);
				if (null != t) {
					let [n, r] = s.M8.edges(e.selection);
					return (
						s.bN.withoutNormalizing(e, () => {
							a.Q.select(e, n), e.insertText('['), a.Q.select(e, r), 0 === s.C0.compare(n.path, r.path) && a.Q.move(e, { distance: 1 }), e.insertText(']('.concat(t.target, ')'));
						}),
						!0
					);
				}
				a.Q.delete(e, { at: e.selection });
			}
			return e.insertText(n), !0;
		}),
		e
	);
}
