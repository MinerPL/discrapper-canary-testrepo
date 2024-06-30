n.d(t, {
    Q: function () {
        return s;
    }
}), n(571269), n(298267), n(47120);
var r = n(327432), i = n(91313), a = n(887490), o = n(42530);
let s = {
    ...r.YR,
    resetSelectionToStart(e) {
        r.YR.select(e, a.bN.start(e, []));
    },
    resetSelectionToEnd(e) {
        r.YR.select(e, a.bN.end(e, []));
    },
    delete(e, t) {
        let {
            at: n,
            distance: i,
            unit: o,
            reverse: s = !1,
            select: l = !1,
            bounds: u,
            voids: c
        } = t;
        if (null == n) {
            if (null == e.selection)
                return;
            n = e.selection;
        }
        let [d, _] = a.M8.isRange(n) ? a.M8.edges(n) : a.bN.edges(e, n);
        if (null != i || null != o) {
            var E, f, h;
            if (s) {
                let t = null !== (E = a.bN.before(e, d, {
                    distance: i,
                    unit: o
                })) && void 0 !== E ? E : a.bN.start(e, []);
                if ('character' === o && (null != i ? i : 1) === 1 && a.C0.equals(d.path, _.path)) {
                    let n = a.bN.leaf(e, d.path), r = null != n ? n[0].text : '';
                    r.length > 0 && null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (f = a.bN.before(e, d, {
                        distance: i,
                        unit: 'offset'
                    })) && void 0 !== f ? f : a.bN.start(e, []));
                }
                d = t;
            } else
                _ = null !== (h = a.bN.after(e, _, {
                    distance: i,
                    unit: o
                })) && void 0 !== h ? h : a.bN.end(e, []);
        }
        if (null != u) {
            let [e, t] = a.M8.edges(u);
            a.Jz.isBefore(d, e) && (d = e), a.Jz.isAfter(_, t) && (_ = t);
        }
        !a.Jz.equals(d, _) && (r.YR.delete(e, {
            at: {
                anchor: d,
                focus: _
            },
            hanging: !0,
            voids: c
        }), l && a.bN.hasPath(e, d.path) && r.YR.select(e, d));
    },
    textToText(e, t, n) {
        var i;
        let o = a.bN.getSelectionOverlap(e, n), [s, l] = a.M8.edges(n), c = null !== (i = a.bN.before(e, s)) && void 0 !== i ? i : a.bN.start(e, []), d = a.bN.after(e, l);
        a.M8.isExpanded(n) && r.YR.delete(e, {
            at: n,
            voids: !0
        }), r.YR.insertText(e, t, { at: c }), c = null != c ? c : a.bN.start(e, []), d = null != d ? d : a.bN.end(e, []), u(e, o, c, d, d);
    },
    textToVoid(e, t, n) {
        let i = a.bN.getSelectionOverlap(e, n), o = a.M8.start(n), s = a.C0.next(o.path), l = {
                path: a.C0.next(s),
                offset: 0
            };
        r.YR.delete(e, {
            at: n,
            voids: !0
        }), 0 === o.offset && r.YR.insertNodes(e, [{ text: '' }], { at: o.path }), r.YR.insertNodes(e, [t], { at: o }), (!a.bN.hasPath(e, l.path) || !a.LC.isText(a.bN.node(e, l.path)[0])) && r.YR.insertNodes(e, [{ text: '' }], { at: l.path }), u(e, i, o, l, l);
    },
    textToInline(e, t, n) {
        let i = a.bN.getSelectionOverlap(e, n), o = t.children[t.children.length - 1], s = a.M8.start(n), l = a.C0.next(s.path), c = {
                path: a.C0.child(l, t.children.length - 1),
                offset: a.LC.isText(o) ? o.text.length : 0
            };
        r.YR.delete(e, {
            at: n,
            voids: !0
        }), 0 === s.offset && r.YR.insertNodes(e, [{ text: '' }], { at: s.path }), r.YR.insertNodes(e, [t], { at: s }), u(e, i, s, c, c);
    },
    voidToText(e, t, n) {
        var i;
        let o = a.bN.getSelectionOverlap(e, n), s = null !== (i = a.bN.before(e, n)) && void 0 !== i ? i : a.bN.start(e, []), l = {
                path: s.path,
                offset: s.offset + t.length
            };
        r.YR.delete(e, {
            at: n,
            voids: !0
        }), r.YR.insertText(e, t, { at: s }), u(e, o, s, s, l);
    },
    removeInline(e, t) {
        var n;
        let i = a.bN.getSelectionOverlap(e, t), o = null !== (n = a.bN.before(e, t)) && void 0 !== n ? n : a.bN.start(e, []);
        r.YR.delete(e, {
            at: t,
            voids: !0
        }), u(e, i, o, o, o);
    },
    removeInlineChildren(e, t) {
        let [n, i] = t, o = a.bN.getSelectionOverlap(e, i), s = {
                path: a.C0.child(i, 0),
                offset: 0
            };
        a.bN.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--)
                r.YR.removeNodes(e, {
                    at: a.C0.child(i, t),
                    voids: !0
                });
        }), u(e, o, null, s, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], o = i.cr(e);
        if (null != o)
            for (let i = 0; i < o[0].children.length; i++) {
                let s = o[0].children[i];
                if (a.aj.isType(s, 'applicationCommandOption') && s.optionName === t) {
                    n ? r.YR.select(e, [
                        0,
                        i
                    ]) : r.YR.select(e, a.bN.end(e, [
                        0,
                        i
                    ]));
                    return;
                }
            }
    },
    selectPreviousCommandOption(e) {
        if (null == i.cr(e))
            return;
        let t = null != e.selection ? e.selection.focus.path : a.bN.end(e, o.YD).path, n = i.HZ(e), s = a.bN.previous(e, {
                at: t,
                match: e => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
            });
        null != s ? r.YR.select(e, s[1]) : a.C0.isAfter(t, o.u9) && r.YR.select(e, a.bN.end(e, o.u9));
    },
    selectNextCommandOption(e) {
        if (null == i.cr(e))
            return;
        let t = null != e.selection ? e.selection.focus.path : a.bN.start(e, o.YD).path, n = i.HZ(e), l = a.bN.next(e, {
                at: t,
                match: e => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
            });
        null != l ? r.YR.select(e, l[1]) : s.resetSelectionToEnd(e);
    },
    insertCommandOption(e, t) {
        s.resetSelectionToEnd(e), s.insertNodes(e, [{
                type: 'applicationCommandOption',
                optionName: t.name,
                optionDisplayName: t.displayName,
                optionType: t.type,
                children: [{ text: '' }]
            }]);
    },
    keyboardMove(e, t) {
        let {
                reverse: n = !1,
                unit: i = 'character',
                edge: o
            } = null != t ? t : {}, s = e.selection;
        if (null == s)
            return;
        if (void 0 === o && a.M8.isExpanded(s)) {
            r.YR.collapse(e, { edge: n ? 'start' : 'end' });
            return;
        }
        let l = a.bN.leaf(e, s.anchor.path);
        if (null == l)
            return;
        let u = n ? a.bN.before : a.bN.after, c = s.focus;
        for (; null != c;) {
            let t = i;
            n || s.focus.offset !== l[0].text.length ? n && 0 === s.focus.offset && (t = 'offset') : t = 'offset';
            let r = u(e, c, { unit: t });
            if (null == r || a.Jz.equals(c, r)) {
                c = void 0;
                break;
            }
            if (c = r, null == a.bN.getParentVoid(e, c))
                break;
        }
        null != c && ('focus' === o ? r.YR.setSelection(e, { focus: c }) : r.YR.setSelection(e, {
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
    var a, o;
    if (null == t.anchor && null == t.focus)
        return;
    let u = l(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, r, i), c = l(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, r, i);
    if (null != u && null != c)
        s.select(e, {
            anchor: u,
            focus: c
        });
}
