n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120);
var r = n(53529),
	i = n(436660),
	a = n(887490),
	s = n(515270);
let o = new Set(['line', 'blockQuote']);
function l(e) {
	let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: u } = e;
	(e.deleteBackward = (n) => {
		let r = a.bN.getCurrentBlock(e);
		if ((null == r ? void 0 : r[0].type) === 'blockQuote') {
			let t = a.M8.toPoint(e.selection);
			if (null != t && a.C0.isFirstChild(r[1], t.path) && 0 === t.offset) {
				i.Q.setNodes(e, { type: 'line' }, { at: r[1] });
				return;
			}
		}
		t(n);
	}),
		(e.deleteFragment = (t) => {
			if (null != e.selection) {
				let [s, o] = a.M8.edges(e.selection),
					l = [s.path[0]],
					u = a.bN.node(e, l),
					c = [o.path[0]],
					d = a.C0.equals(l, c) ? null : a.bN.node(e, c);
				r.T.withSingleEntry(e, () => {
					(null == u ? void 0 : u[0].type) === 'blockQuote' &&
						a.Jz.isAtStart(s, u) &&
						i.Q.setNodes(e, { type: 'line' }, { at: l }),
						(null == d ? void 0 : d[0].type) === 'blockQuote' &&
							a.Jz.isAtEnd(o, d) &&
							i.Q.setNodes(e, { type: 'line' }, { at: c }),
						n(t);
				});
				return;
			}
			n(t);
		}),
		(e.insertBreak = () => {
			let t = a.bN.getCurrentBlock(e);
			if ((null == t ? void 0 : t[0].type) === 'blockQuote') {
				let n = a.M8.toPoint(e.selection);
				if (null == n) return;
				!(function (e, t, n) {
					if (!a.bN.isEmpty(e, t[0])) return !1;
					let r = a.bN.previous(e, { at: t[1] });
					return (
						!!(null != r && a.aj.isType(r[0], 'blockQuote') && a.bN.isEmpty(e, r[0]) && a.Jz.isAtStart(n, t)) &&
						(i.Q.setNodes(e, { type: 'line' }, { at: t[1] }), i.Q.removeNodes(e, { at: r[1] }), !0)
					);
				})(e, t, n) &&
					i.Q.splitNodes(e, {
						at: n,
						always: !0
					});
				return;
			}
			l();
		});
	let c = null,
		d = !0;
	return (
		(e.onChange = () => {
			let t = a.bN.richValue(e);
			(t !== c || e.previewMarkdown !== d) &&
				(r.T.withMergedEntry(e, () => {
					a.bN.withoutNormalizing(e, () =>
						(function (e) {
							let t = !1;
							for (let l of a.bN.blocks(e)) {
								let [u, c] = l;
								if (!o.has(u.type)) continue;
								let d = {
									path: a.C0.child(c, 0),
									offset: 0
								};
								if ((0, s.iF)(e, d)) {
									'blockQuote' === u.type &&
										(i.Q.setNodes(e, { type: 'line' }, { at: c }), i.Q.insertText(e, '> ', { at: d }));
									continue;
								}
								if ('blockQuote' === u.type || a.bN.areStylesDisabled(e)) continue;
								let _ = u.children[0];
								if (!a.LC.isText(_)) continue;
								let E = _.text.match(/^\s*>>> /),
									f = _.text.match(/^\s*> /);
								if ((null != f || null != E || t) && (i.Q.setNodes(e, { type: 'blockQuote' }, { at: c }), !t)) {
									var n, r;
									let s =
											null !==
												(r =
													null !== (n = null == f ? void 0 : f[0].length) && void 0 !== n
														? n
														: null == E
															? void 0
															: E[0].length) && void 0 !== r
												? r
												: 0,
										o = a.C0.child(c, 0);
									i.Q.delete(e, {
										at: {
											anchor: {
												path: o,
												offset: 0
											},
											focus: {
												path: o,
												offset: s
											}
										}
									}),
										(t = null != E);
								}
							}
						})(e)
					);
				}),
				(c = t),
				(d = e.previewMarkdown)),
				u();
		}),
		e
	);
}
