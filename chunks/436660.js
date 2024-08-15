n.d(t, {
	Q: function () {
		return o;
	}
}),
	n(571269),
	n(298267),
	n(47120);
var r = n(327432),
	i = n(91313),
	a = n(887490),
	s = n(42530);
let o = {
	...r.YR,
	resetSelectionToStart(e) {
		r.YR.select(e, a.bN.start(e, []));
	},
	resetSelectionToEnd(e) {
		r.YR.select(e, a.bN.end(e, []));
	},
	delete(e, t) {
		let { at: n, distance: i, unit: s, reverse: o = !1, select: l = !1, bounds: u, voids: c } = t;
		if (null == n) {
			if (null == e.selection) return;
			n = e.selection;
		}
		let [d, _] = a.M8.isRange(n) ? a.M8.edges(n) : a.bN.edges(e, n);
		if (null != i || null != s) {
			var E, f, h;
			if (o) {
				let t =
					null !==
						(E = a.bN.before(e, d, {
							distance: i,
							unit: s
						})) && void 0 !== E
						? E
						: a.bN.start(e, []);
				if ('character' === s && (null != i ? i : 1) === 1 && a.C0.equals(d.path, _.path)) {
					let n = a.bN.leaf(e, d.path),
						r = null != n ? n[0].text : '';
					r.length > 0 &&
						null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) &&
						(t =
							null !==
								(f = a.bN.before(e, d, {
									distance: i,
									unit: 'offset'
								})) && void 0 !== f
								? f
								: a.bN.start(e, []));
				}
				d = t;
			} else
				_ =
					null !==
						(h = a.bN.after(e, _, {
							distance: i,
							unit: s
						})) && void 0 !== h
						? h
						: a.bN.end(e, []);
		}
		if (null != u) {
			let [e, t] = a.M8.edges(u);
			a.Jz.isBefore(d, e) && (d = e), a.Jz.isAfter(_, t) && (_ = t);
		}
		!a.Jz.equals(d, _) &&
			(r.YR.delete(e, {
				at: {
					anchor: d,
					focus: _
				},
				hanging: !0,
				voids: c
			}),
			l && a.bN.hasPath(e, d.path) && r.YR.select(e, d));
	},
	textToText(e, t, n) {
		var i;
		let s = a.bN.getSelectionOverlap(e, n),
			[o, l] = a.M8.edges(n),
			c = null !== (i = a.bN.before(e, o)) && void 0 !== i ? i : a.bN.start(e, []),
			d = a.bN.after(e, l);
		a.M8.isExpanded(n) &&
			r.YR.delete(e, {
				at: n,
				voids: !0
			}),
			r.YR.insertText(e, t, { at: c }),
			(c = null != c ? c : a.bN.start(e, [])),
			(d = null != d ? d : a.bN.end(e, [])),
			u(e, s, c, d, d);
	},
	textToVoid(e, t, n) {
		let i = a.bN.getSelectionOverlap(e, n),
			s = a.M8.start(n),
			o = a.C0.next(s.path),
			l = {
				path: a.C0.next(o),
				offset: 0
			};
		r.YR.delete(e, {
			at: n,
			voids: !0
		}),
			0 === s.offset && r.YR.insertNodes(e, [{ text: '' }], { at: s.path }),
			r.YR.insertNodes(e, [t], { at: s }),
			(!a.bN.hasPath(e, l.path) || !a.LC.isText(a.bN.node(e, l.path)[0])) && r.YR.insertNodes(e, [{ text: '' }], { at: l.path }),
			u(e, i, s, l, l);
	},
	textToInline(e, t, n) {
		let i = a.bN.getSelectionOverlap(e, n),
			s = t.children[t.children.length - 1],
			o = a.M8.start(n),
			l = a.C0.next(o.path),
			c = {
				path: a.C0.child(l, t.children.length - 1),
				offset: a.LC.isText(s) ? s.text.length : 0
			};
		r.YR.delete(e, {
			at: n,
			voids: !0
		}),
			0 === o.offset && r.YR.insertNodes(e, [{ text: '' }], { at: o.path }),
			r.YR.insertNodes(e, [t], { at: o }),
			u(e, i, o, c, c);
	},
	voidToText(e, t, n) {
		var i;
		let s = a.bN.getSelectionOverlap(e, n),
			o = null !== (i = a.bN.before(e, n)) && void 0 !== i ? i : a.bN.start(e, []),
			l = {
				path: o.path,
				offset: o.offset + t.length
			};
		r.YR.delete(e, {
			at: n,
			voids: !0
		}),
			r.YR.insertText(e, t, { at: o }),
			u(e, s, o, o, l);
	},
	removeInline(e, t) {
		var n;
		let i = a.bN.getSelectionOverlap(e, t),
			s = null !== (n = a.bN.before(e, t)) && void 0 !== n ? n : a.bN.start(e, []);
		r.YR.delete(e, {
			at: t,
			voids: !0
		}),
			u(e, i, s, s, s);
	},
	removeInlineChildren(e, t) {
		let [n, i] = t,
			s = a.bN.getSelectionOverlap(e, i),
			o = {
				path: a.C0.child(i, 0),
				offset: 0
			};
		a.bN.withoutNormalizing(e, () => {
			for (let t = n.children.length - 1; t >= 0; t--)
				r.YR.removeNodes(e, {
					at: a.C0.child(i, t),
					voids: !0
				});
		}),
			u(e, s, null, o, null);
	},
	selectCommandOption(e, t) {
		let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
			s = i.cr(e);
		if (null != s)
			for (let i = 0; i < s[0].children.length; i++) {
				let o = s[0].children[i];
				if (a.aj.isType(o, 'applicationCommandOption') && o.optionName === t) {
					n ? r.YR.select(e, [0, i]) : r.YR.select(e, a.bN.end(e, [0, i]));
					return;
				}
			}
	},
	selectPreviousCommandOption(e) {
		if (null == i.cr(e)) return;
		let t = null != e.selection ? e.selection.focus.path : a.bN.end(e, s.YD).path,
			n = i.HZ(e),
			o = a.bN.previous(e, {
				at: t,
				match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
			});
		null != o ? r.YR.select(e, o[1]) : a.C0.isAfter(t, s.u9) && r.YR.select(e, a.bN.end(e, s.u9));
	},
	selectNextCommandOption(e) {
		if (null == i.cr(e)) return;
		let t = null != e.selection ? e.selection.focus.path : a.bN.start(e, s.YD).path,
			n = i.HZ(e),
			l = a.bN.next(e, {
				at: t,
				match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
			});
		null != l ? r.YR.select(e, l[1]) : o.resetSelectionToEnd(e);
	},
	insertCommandOption(e, t) {
		o.resetSelectionToEnd(e),
			o.insertNodes(e, [
				{
					type: 'applicationCommandOption',
					optionName: t.name,
					optionDisplayName: t.displayName,
					optionType: t.type,
					children: [{ text: '' }]
				}
			]);
	},
	keyboardMove(e, t) {
		let { reverse: n = !1, unit: i = 'character', edge: s } = null != t ? t : {},
			o = e.selection;
		if (null == o) return;
		if (void 0 === s && a.M8.isExpanded(o)) {
			r.YR.collapse(e, { edge: n ? 'start' : 'end' });
			return;
		}
		let l = a.bN.leaf(e, o.anchor.path);
		if (null == l) return;
		let u = n ? a.bN.before : a.bN.after,
			c = o.focus;
		for (; null != c; ) {
			let t = i;
			n || o.focus.offset !== l[0].text.length ? n && 0 === o.focus.offset && (t = 'offset') : (t = 'offset');
			let r = u(e, c, { unit: t });
			if (null == r || a.Jz.equals(c, r)) {
				c = void 0;
				break;
			}
			if (((c = r), null == a.bN.getParentVoid(e, c))) break;
		}
		null != c &&
			('focus' === s
				? r.YR.setSelection(e, { focus: c })
				: r.YR.setSelection(e, {
						focus: c,
						anchor: c
					}));
	}
};
function l(e, t, n, r, i) {
	switch (t) {
		case 'start':
			return n;
		case 'inside':
			return r;
		case 'end':
			return i;
	}
	return e;
}
function u(e, t, n, r, i) {
	var a, s;
	if (null == t.anchor && null == t.focus) return;
	let u = l(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, r, i),
		c = l(null === (s = e.selection) || void 0 === s ? void 0 : s.focus, t.focus, n, r, i);
	if (null != u && null != c)
		o.select(e, {
			anchor: u,
			focus: c
		});
}
