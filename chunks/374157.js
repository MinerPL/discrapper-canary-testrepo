n.d(t, {
    Z: function () {
        return o;
    }
}), n(47120), n(571269), n(298267);
var r = n(327432), i = n(436660), a = n(887490);
function o(e) {
    let {
        apply: t,
        deleteBackward: n,
        deleteForward: o,
        deleteFragment: l,
        insertText: c
    } = e;
    return e.apply = n => {
        var r;
        if ('set_selection' === n.type && (null === (r = e.composition) || void 0 === r ? void 0 : r.startedInsideInline) && a.M8.isRange(n.properties) && a.M8.isRange(n.newProperties) && a.M8.isCollapsed(n.newProperties)) {
            let t = a.bN.getParentInline(e, n.properties), r = a.bN.getParentInline(e, n.newProperties);
            if (null != t && (null == r || !a.C0.equals(t[1], r[1])))
                return;
        }
        t(n);
    }, e.insertText = t => {
        if (null != e.selection && null != a.bN.getCurrentInline(e)) {
            i.Q.insertText(e, t);
            return;
        }
        c(t);
    }, e.deleteBackward = t => {
        !s(e, t, !0) && n(t);
    }, e.deleteForward = t => {
        !s(e, t, !1) && o(t);
    }, e.deleteFragment = t => {
        if (null != e.selection && a.M8.isExpanded(e.selection)) {
            var n, r, o, s;
            let u = e.selection.anchor, c = e.selection.focus, d = a.bN.getParentInline(e, u), _ = a.bN.getParentInline(e, c);
            if (null != d && null != _ && a.C0.equals(d[1], _[1])) {
                l(t);
                return;
            }
            let E = a.M8.isForward(e.selection);
            if (null != d) {
                let [, t] = d, [i, o] = a.bN.edges(e, t);
                E && a.Jz.equals(u, i) ? u = null !== (n = a.bN.before(e, i)) && void 0 !== n ? n : a.bN.start(e, []) : !E && a.Jz.equals(u, o) && (u = null !== (r = a.bN.after(e, o)) && void 0 !== r ? r : a.bN.end(e, []));
            }
            if (null != _) {
                let [, t] = _, [n, r] = a.bN.edges(e, t);
                !E && a.Jz.equals(c, n) ? c = null !== (o = a.bN.before(e, n)) && void 0 !== o ? o : a.bN.start(e, []) : E && a.Jz.equals(c, r) && (c = null !== (s = a.bN.after(e, r)) && void 0 !== s ? s : a.bN.end(e, []));
            }
            i.Q.delete(e, {
                at: {
                    anchor: u,
                    focus: c
                },
                reverse: 'backward' === t,
                select: !0
            });
            return;
        }
        l(t);
    }, r.ML.positions = u, e;
}
function s(e, t, n) {
    let r = a.bN.getCurrentInline(e), o = a.bN.getCurrentBlock(e), s = a.M8.toPoint(e.selection);
    if (null == s || null == o || 'block' === t)
        return !0;
    if ('line' === t && null == r)
        return !1;
    let l = r;
    if (null == l) {
        let t = (n ? a.bN.before : a.bN.after)(e, s);
        null != t && null != (l = a.bN.getParentInline(e, t)) && (s = t);
    }
    if (null != l) {
        let [r, o] = l;
        if (a.bN.isEmpty(e, r) || a.bN.isVoid(e, r))
            i.Q.removeInline(e, o);
        else {
            let [r, l] = a.bN.edges(e, o);
            i.Q.delete(e, {
                at: s,
                unit: t,
                reverse: n,
                select: !0,
                bounds: {
                    anchor: r,
                    focus: l
                }
            });
        }
        return !0;
    }
    let u = !1;
    if (null != o) {
        let [, t] = o, [r, i] = a.bN.edges(e, t);
        u = n && a.Jz.equals(s, r) || !n && a.Jz.equals(s, i);
    }
    if ('word' === t && !u) {
        let r = a.bN.getCurrentText(e);
        if (null != r) {
            let [, o] = r, [l, u] = a.bN.edges(e, o);
            return i.Q.delete(e, {
                at: s,
                unit: t,
                reverse: n,
                select: !0,
                bounds: {
                    anchor: l,
                    focus: u
                }
            }), !0;
        }
    }
    return i.Q.delete(e, {
        at: s,
        unit: t,
        reverse: n,
        select: !0
    }), !0;
}
let l = r.ML.positions;
function* u(e) {
    var t, n, r, i, o, s, u, c;
    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            at: _ = e.selection,
            unit: E = 'offset',
            reverse: f = !1,
            voids: h = !1
        } = null != d ? d : {};
    if ('word' !== E) {
        for (let t of l(e, {
                ...d,
                voids: h || 'block' === E
            }))
            yield t;
        return;
    }
    if (null == _)
        return;
    let p = a.bN.range(e, _), [m, I] = a.M8.edges(p), T = a.bN.richValue(e), g = f ? -1 : 1, S = null !== (r = null === (t = m.path) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 0, A = null !== (i = null === (n = I.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : T.length - 1, N = f ? S : A, v = f ? A : S;
    for (;;) {
        let t = T[v], n = null !== (u = v === S ? null === (o = m.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== u ? u : 0, r = null !== (c = v === A ? null === (s = I.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== c ? c : t.children.length - 1, i = f ? r : n, _ = f ? n : r, E = i;
        for (;;) {
            let n, r;
            let i = t.children[E], o = [
                    v,
                    E
                ];
            if (n = a.C0.equals(o, m.path) || a.C0.isAncestor(o, m.path) ? !f && a.bN.isEnd(e, m, o) ? null : m : a.bN.start(e, o), r = a.C0.equals(o, I.path) || a.C0.isAncestor(o, I.path) ? f && a.bN.isStart(e, I, o) ? null : I : a.bN.end(e, o), null != n && null != r) {
                if (a.LC.isText(i) && 0 === i.text.length) {
                    let e = {
                        path: o,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (a.bN.isInline(e, i) && a.LC.isText(i.children[0]) && 0 === i.children[0].text.length) {
                    let e = {
                        path: a.C0.child(o, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let t = {
                        anchor: n,
                        focus: r
                    };
                    for (let n of l(e, {
                            ...d,
                            at: t
                        }))
                        yield n;
                }
            }
            if (E === _)
                break;
            E += g;
        }
        if (v === N)
            break;
        v += g;
    }
}
