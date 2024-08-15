n.d(t, {
	Z: function () {
		return a;
	}
});
var r = n(53529),
	i = n(887490);
function a(e, t) {
	let { apply: n, deleteBackward: a, deleteForward: o, deleteFragment: l, insertData: u, insertText: c, onChange: d } = e;
	function _(n) {
		let i = r.T.currentEntry(e);
		if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
		e.history.index = n;
		let a = r.T.currentEntry(e);
		t({
			newValue: a.value,
			newSelection: a.selection
		});
	}
	(e.history = {
		index: 0,
		stack: []
	}),
		(e.onChange = () => {
			let { history: t } = e;
			0 === t.stack.length && ((t.stack = [s(e)]), (t.index = 0)), null != e.selection && (r.T.currentEntry(e).selection = e.selection), (f = null), d();
		}),
		(e.undo = () => {
			e.history.index > 0 && _(e.history.index - 1);
		}),
		(e.redo = () => {
			e.history.index < e.history.stack.length - 1 && _(e.history.index + 1);
		});
	let E = null,
		f = null,
		h = null;
	return (
		(e.apply = (t) => {
			let { history: a } = e;
			n(t);
			let o = i.bN.richValue(e);
			if (o !== h)
				0 === a.stack.length && ((a.stack = [s(e)]), (a.index = 0)),
					r.T.isSaving(e) &&
						((function (e, t, n) {
							let i;
							let { selection: a } = e,
								s = r.T.currentEntry(e),
								o = !0,
								l = !0;
							if (('insert_text' === t.type && 1 === t.text.length ? ((i = 'insert'), (l = !(('' === t.text || t.text.endsWith(' ')) && (null == n ? void 0 : n.type) === 'insert_text' && !('' === n.text && n.text.endsWith(' '))))) : 'split_node' === t.type ? (i = 'insert') : 'remove_text' === t.type && 1 === t.text.length ? (i = 'delete') : ((i = 'other'), (o = !1), (l = !1)), 'set_selection' === t.type && null != s)) {
								s.selection = a;
								return;
							}
							o &&
							(function (e, t) {
								return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4000) && !0;
							})(s, i)
								? r.T.insertOrMergeEntry(e, i, l)
								: r.T.insertEntry(e, i, l);
						})(e, t, E),
						(E = t)),
					(f = t),
					(h = o);
		}),
		(e.deleteBackward = (t) => {
			r.T.withSingleEntry(e, () => a(t));
		}),
		(e.deleteForward = (t) => {
			r.T.withSingleEntry(e, () => o(t));
		}),
		(e.deleteFragment = (t) => {
			r.T.withSingleEntry(e, () => l(t));
		}),
		(e.insertText = (t) => {
			1 === t.length && (null == f ? void 0 : f.type) === 'remove_text' ? r.T.withMergedEntry(e, () => c(t)) : null != e.selection && i.M8.isExpanded(e.selection) ? r.T.withSingleEntry(e, () => c(t)) : c(t);
		}),
		(e.insertData = (t) => {
			(null == f ? void 0 : f.type) === 'remove_text' ? r.T.withMergedEntry(e, () => u(t)) : r.T.withSingleEntry(e, () => u(t));
		}),
		e
	);
}
function s(e) {
	return {
		type: 'other',
		mergeable: !1,
		createdAt: Date.now(),
		value: i.bN.richValue(e),
		selection: e.selection
	};
}
