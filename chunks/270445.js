n.d(t, {
    BU: function () {
        return tN;
    },
    CX: function () {
        return tc;
    },
    F3: function () {
        return ev;
    },
    UE: function () {
        return tg;
    },
    _7: function () {
        return ex;
    },
    mH: function () {
        return tI;
    },
    vt: function () {
        return eF;
    }
});
var r = n(653603),
    i = n.n(r),
    a = n(889678),
    s = n.n(a),
    o = n(123763),
    l = n.n(o),
    u = n(192379),
    c = n(367989),
    d = n(327432),
    f = n(690096),
    _ = n(247187),
    h = n(995295);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) {
            if (((n = a[r]), !(t.indexOf(n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
    }
    return i;
}
var g = 0;
class E {
    constructor() {
        this.id = ''.concat(g++);
    }
}
var v = new WeakMap(),
    I = new WeakMap(),
    S = new WeakMap(),
    T = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap(),
    A = new WeakMap(),
    N = new WeakMap(),
    C = new WeakMap(),
    R = new WeakMap(),
    O = new WeakMap(),
    D = new WeakMap(),
    L = new WeakMap(),
    x = new WeakMap(),
    w = new WeakMap(),
    M = new WeakMap(),
    P = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    G = new WeakMap(),
    B = new WeakMap(),
    Z = Symbol('placeholder'),
    F = Symbol('mark-placeholder'),
    V = globalThis.Text,
    j = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    H = (e) => W(e) && 8 === e.nodeType,
    Y = (e) => W(e) && 1 === e.nodeType,
    W = (e) => {
        var t = j(e);
        return !!t && e instanceof t.Node;
    },
    K = (e) => {
        var t = e && e.anchorNode && j(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    z = (e) => W(e) && 3 === e.nodeType,
    q = (e) => e.clipboardData && '' !== e.clipboardData.getData('text/plain') && 1 === e.clipboardData.types.length,
    Q = (e) => {
        var [t, n] = e;
        if (Y(t) && t.childNodes.length) {
            var r = n === t.childNodes.length,
                i = r ? n - 1 : n;
            for ([t, i] = J(t, i, r ? 'backward' : 'forward'), r = i < n; Y(t) && t.childNodes.length; ) {
                var a = r ? t.childNodes.length - 1 : 0;
                t = $(t, a, r ? 'backward' : 'forward');
            }
            n = r && null != t.textContent ? t.textContent.length : 0;
        }
        return [t, n];
    },
    X = (e) => {
        for (var t = e && e.parentNode; t; ) {
            if ('[object ShadowRoot]' === t.toString()) return !0;
            t = t.parentNode;
        }
        return !1;
    },
    J = (e, t, n) => {
        for (var { childNodes: r } = e, i = r[t], a = t, s = !1, o = !1; (H(i) || (Y(i) && 0 === i.childNodes.length) || (Y(i) && 'false' === i.getAttribute('contenteditable'))) && (!s || !o); ) {
            if (a >= r.length) {
                (s = !0), (a = t - 1), (n = 'backward');
                continue;
            }
            if (a < 0) {
                (o = !0), (a = t + 1), (n = 'forward');
                continue;
            }
            (i = r[a]), (t = a), (a += 'forward' === n ? 1 : -1);
        }
        return [i, t];
    },
    $ = (e, t, n) => {
        var [r] = J(e, t, n);
        return r;
    },
    ee = (e) => {
        var t = '';
        if (z(e) && e.nodeValue) return e.nodeValue;
        if (Y(e)) {
            for (var n of Array.from(e.childNodes)) t += ee(n);
            var r = getComputedStyle(e).getPropertyValue('display');
            ('block' === r || 'list' === r || 'BR' === e.tagName) && (t += '\n');
        }
        return t;
    },
    et = /data-slate-fragment="(.+?)"/m,
    en = (e) => {
        var [, t] = e.getData('text/html').match(et) || [];
        return t;
    },
    er = (e, t, n) => {
        var { target: r } = t;
        if (Y(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = ev.getWindow(e);
        if (i.contains(r)) return ev.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && er(e, a, n);
    },
    ei = parseInt(u.version.split('.')[0], 10) >= 17,
    ea = 'undefined' != typeof navigator && 'undefined' != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    es = 'undefined' != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eo = 'undefined' != typeof navigator && /Android/.test(navigator.userAgent),
    el = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    eu = 'undefined' != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ec = 'undefined' != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ed = 'undefined' != typeof navigator && /Chrome/i.test(navigator.userAgent),
    ef = 'undefined' != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    e_ = eo && 'undefined' != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    eh = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ep = 'undefined' != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    em = 'undefined' != typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eg = !!('undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
    eE = (!ef || !e_) && !ec && 'undefined' != typeof globalThis && globalThis.InputEvent && 'function' == typeof globalThis.InputEvent.prototype.getTargetRanges,
    ev = {
        isComposing: (e) => !!D.get(e),
        getWindow(e) {
            var t = S.get(e);
            if (!t) throw Error('Unable to find a host window element for this editor');
            return t;
        },
        findKey(e, t) {
            var n = N.get(t);
            return !n && ((n = new E()), N.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = I.get(r);
                if (null == i) {
                    if (d.ML.isEditor(r)) return n;
                    break;
                }
                var a = v.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error('Unable to find the path for Slate node: '.concat(d.o4.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = ev.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!O.get(e),
        isReadOnly: (e) => !!R.get(e),
        blur(e) {
            var t = ev.toDOMNode(e, e),
                n = ev.findDocumentOrShadowRoot(e);
            O.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = ev.toDOMNode(e, e),
                n = ev.findDocumentOrShadowRoot(e);
            O.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = ev.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = ev.toDOMNode(e, e);
            try {
                n = Y(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return !!n && n.closest('[data-slate-editor]') === a && (!i || !!n.isContentEditable || ('boolean' == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) || !!n.getAttribute('data-slate-zero-width'));
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
        },
        toDOMNode(e, t) {
            var n = C.get(e),
                r = d.ML.isEditor(t) ? T.get(e) : null == n ? void 0 : n.get(ev.findKey(e, t));
            if (!r) throw Error('Cannot resolve a DOM node from Slate node: '.concat(d.o4.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.ML.node(e, t.path),
                r = ev.toDOMNode(e, n);
            d.ML.void(e, { at: t }) &&
                (t = {
                    path: t.path,
                    offset: 0
                });
            for (var i = Array.from(r.querySelectorAll('[data-slate-string], [data-slate-zero-width]')), a = 0, s = 0; s < i.length; s++) {
                var o = i[s],
                    l = o.childNodes[0];
                if (null != l && null != l.textContent) {
                    var { length: u } = l.textContent,
                        c = o.getAttribute('data-slate-length'),
                        f = a + (null == c ? u : parseInt(c, 10)),
                        _ = i[s + 1];
                    if (t.offset === f && null != _ && _.hasAttribute('data-slate-mark-placeholder')) {
                        var h,
                            p,
                            m = _.childNodes[0];
                        h = [m instanceof V ? m : _, null !== (p = _.textContent) && void 0 !== p && p.startsWith('\uFEFF') ? 1 : 0];
                        break;
                    }
                    if (t.offset <= f) {
                        h = [l, Math.min(u, Math.max(0, t.offset - a))];
                        break;
                    }
                    a = f;
                }
            }
            if (!h) throw Error('Cannot resolve a DOM point from Slate point: '.concat(d.o4.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.e6.isBackward(t),
                a = ev.toDOMPoint(e, n),
                s = d.e6.isCollapsed(t) ? a : ev.toDOMPoint(e, r),
                o = ev.getWindow(e).document.createRange(),
                [l, u] = i ? s : a,
                [c, f] = i ? a : s,
                _ = !!(Y(l) ? l : l.parentElement).getAttribute('data-slate-zero-width'),
                h = !!(Y(c) ? c : c.parentElement).getAttribute('data-slate-zero-width');
            return o.setStart(l, _ ? 1 : u), o.setEnd(c, h ? 1 : f), o;
        },
        toSlateNode(e, t) {
            var n = Y(t) ? t : t.parentElement;
            n && !n.hasAttribute('data-slate-node') && (n = n.closest('[data-slate-node]'));
            var r = n ? y.get(n) : null;
            if (!r) throw Error('Cannot resolve a Slate node from DOM node: '.concat(n));
            return r;
        },
        findEventRange(e, t) {
            'nativeEvent' in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            var s = ev.toSlateNode(e, t.target),
                o = ev.findPath(e, s);
            if (d.W_.isElement(s) && d.ML.isVoid(e, s)) {
                var l = a.getBoundingClientRect(),
                    u = e.isInline(s) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    c = d.ML.point(e, o, { edge: u ? 'start' : 'end' }),
                    f = u ? d.ML.before(e, c) : d.ML.after(e, c);
                if (f) return d.ML.range(e, f);
            }
            var { document: _ } = ev.getWindow(e);
            if (_.caretRangeFromPoint) n = _.caretRangeFromPoint(r, i);
            else {
                var h = _.caretPositionFromPoint(r, i);
                h && ((n = _.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset));
            }
            if (!n) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            return ev.toSlateRange(e, n, {
                exactMatch: !1,
                suppressThrow: !1
            });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, s] = r ? t : Q(t),
                o = a.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    f,
                    _ = ev.toDOMNode(e, e),
                    h = o.closest('[data-slate-void="true"]'),
                    p = h && _.contains(h) ? h : null,
                    m = o.closest('[data-slate-leaf]'),
                    g = null;
                if (m) {
                    if ((l = m.closest('[data-slate-node="text"]'))) {
                        var E = ev.getWindow(e).document.createRange();
                        E.setStart(l, 0), E.setEnd(a, s);
                        var v = E.cloneContents();
                        [...Array.prototype.slice.call(v.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(v.querySelectorAll('[contenteditable=false]'))].forEach((e) => {
                            if (eo && !r && e.hasAttribute('data-slate-zero-width') && e.textContent.length > 0 && '\uFEFF' !== e.textContext) {
                                e.textContent.startsWith('\uFEFF') && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = v.textContent.length),
                            (g = l);
                    }
                } else if (p) {
                    for (var I = p.querySelectorAll('[data-slate-leaf]'), S = 0; S < I.length; S++) {
                        var T = I[S];
                        if (ev.hasDOMNode(e, T)) {
                            m = T;
                            break;
                        }
                    }
                    m
                        ? ((l = m.closest('[data-slate-node="text"]')),
                          (u = (g = m).textContent.length),
                          g.querySelectorAll('[data-slate-zero-width]').forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                g && u === g.textContent.length && eo && 'z' === g.getAttribute('data-slate-zero-width') && null !== (c = g.textContent) && void 0 !== c && c.startsWith('\uFEFF') && (o.hasAttribute('data-slate-zero-width') || (el && null !== (f = g.textContent) && void 0 !== f && f.endsWith('\n\n'))) && u--;
            }
            if (eo && !l && !r) {
                var b = o.hasAttribute('data-slate-node') ? o : o.closest('[data-slate-node]');
                if (b && ev.hasDOMNode(e, b, { editable: !0 })) {
                    var y = ev.toSlateNode(e, b),
                        { path: A, offset: N } = d.ML.start(e, ev.findPath(e, y));
                    return (
                        !b.querySelector('[data-slate-leaf]') && (N = s),
                        {
                            path: A,
                            offset: N
                        }
                    );
                }
            }
            if (!l) {
                if (i) return null;
                throw Error('Cannot resolve a Slate point from DOM point: '.concat(t));
            }
            var C = ev.toSlateNode(e, l);
            return {
                path: ev.findPath(e, C),
                offset: u
            };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                s,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (((K(t) ? t.anchorNode : t.startContainer) && (K(t) ? ((r = t.anchorNode), (i = t.anchorOffset), (a = t.focusNode), (s = t.focusOffset), (o = ed && X(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed)) : ((r = t.startContainer), (i = t.startOffset), (a = t.endContainer), (s = t.endOffset), (o = t.collapsed))), null == r || null == a || null == i || null == s)) throw Error('Cannot resolve a Slate range from DOM range: '.concat(t));
            'getAttribute' in a && 'false' === a.getAttribute('contenteditable') && ((a = r), (s = (null === (l = r.textContent) || void 0 === l ? void 0 : l.length) || 0));
            var f = ev.toSlatePoint(e, [r, i], {
                exactMatch: u,
                suppressThrow: c
            });
            if (!f) return null;
            var _ = o
                ? f
                : ev.toSlatePoint(e, [a, s], {
                      exactMatch: u,
                      suppressThrow: c
                  });
            if (!_) return null;
            if (el && !o && r !== a) {
                var h = d.ML.isEnd(e, f, f.path),
                    p = d.ML.isStart(e, _, _.path);
                h && (f = d.ML.after(e, f) || f), p && (_ = d.ML.before(e, _) || _);
            }
            var m = {
                anchor: f,
                focus: _
            };
            return (
                d.e6.isExpanded(m) &&
                    d.e6.isForward(m) &&
                    Y(a) &&
                    d.ML.void(e, {
                        at: m.focus,
                        mode: 'highest'
                    }) &&
                    (m = d.ML.unhangRange(e, m, { voids: !0 })),
                m
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path);
        },
        hasTarget: (e, t) => W(t) && ev.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => W(t) && ev.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => ev.hasEditableTarget(e, t) || ev.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (R.get(e)) return !1;
            var n = ev.hasTarget(e, t) && ev.toSlateNode(e, t);
            return d.W_.isElement(n) && d.ML.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null === (t = w.get(e)) || void 0 === t || t();
        },
        androidPendingDiffs: (e) => k.get(e)
    },
    eI = ['anchor', 'focus'],
    eS = ['anchor', 'focus'],
    eT = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    eb = (e, t) => {
        var n = m(e, eI),
            r = m(t, eS);
        return e[Z] === t[Z] && eT(n, r);
    },
    ey = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (!d.e6.equals(r, i) || !eb(r, i)) return !1;
        }
        return !0;
    },
    eA = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eb(r, i)) return !1;
        }
        return !0;
    },
    eN = eg ? u.useLayoutEffect : u.useEffect,
    eC = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = ex(),
            s = ev.findPath(a, i),
            o = d.y$.parent(s),
            l = !0 === n[F];
        return a.isVoid(r)
            ? u.createElement(eD, { length: d.NB.string(r).length })
            : '' !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || '' !== d.ML.string(a, o)
              ? '' === n.text
                  ? u.createElement(eD, { isMarkPlaceholder: l })
                  : t && '\n' === n.text.slice(-1)
                    ? u.createElement(eR, {
                          isTrailing: !0,
                          text: n.text
                      })
                    : u.createElement(eR, { text: n.text })
              : u.createElement(eD, {
                    isLineBreak: !0,
                    isMarkPlaceholder: l
                });
    },
    eR = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, u.useRef)(null),
            i = () => ''.concat(null != t ? t : '').concat(n ? '\n' : ''),
            [a] = (0, u.useState)(i);
        return (
            eN(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            u.createElement(eO, { ref: r }, a)
        );
    },
    eO = (0, u.memo)(
        (0, u.forwardRef)((e, t) =>
            u.createElement(
                'span',
                {
                    'data-slate-string': !0,
                    ref: t
                },
                e.children
            )
        )
    ),
    eD = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = {
                'data-slate-zero-width': n ? 'n' : 'z',
                'data-slate-length': t
            };
        return r && (i['data-slate-mark-placeholder'] = !0), u.createElement('span', Object.assign({}, i), eo && n ? null : '\uFEFF', n ? u.createElement('br', null) : null);
    },
    eL = (0, u.createContext)(null),
    ex = () => {
        var e = (0, u.useContext)(eL);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    ew = u.memo(
        (e) => {
            var { leaf: t, isLast: n, text: r, parent: i, renderPlaceholder: a, renderLeaf: s = (e) => u.createElement(eM, Object.assign({}, e)) } = e,
                o = (0, u.useRef)(null),
                l = (0, u.useRef)(null),
                c = ex(),
                d = (0, u.useRef)(null);
            (0, u.useEffect)(
                () => () => {
                    d.current && d.current.disconnect();
                },
                []
            ),
                (0, u.useEffect)(() => {
                    var e = null == l ? void 0 : l.current;
                    if ((e ? b.set(c, e) : b.delete(c), d.current)) d.current.disconnect(), e && d.current.observe(e);
                    else if (e) {
                        var t = window.ResizeObserver || f.do;
                        (d.current = new t(() => {
                            var e = B.get(c);
                            null == e || e();
                        })),
                            d.current.observe(e);
                    }
                    if (!e && o.current) {
                        var n = B.get(c);
                        null == n || n();
                    }
                    return (
                        (o.current = l.current),
                        () => {
                            b.delete(c);
                        }
                    );
                }, [l, t]);
            var _ = u.createElement(eC, {
                isLast: n,
                leaf: t,
                parent: i,
                text: r
            });
            if (t[Z]) {
                var h = {
                    children: t.placeholder,
                    attributes: {
                        'data-slate-placeholder': !0,
                        style: {
                            position: 'absolute',
                            pointerEvents: 'none',
                            width: '100%',
                            maxWidth: '100%',
                            display: 'block',
                            opacity: '0.333',
                            userSelect: 'none',
                            textDecoration: 'none'
                        },
                        contentEditable: !1,
                        ref: l
                    }
                };
                _ = u.createElement(u.Fragment, null, a(h), _);
            }
            return s({
                attributes: { 'data-slate-leaf': !0 },
                children: _,
                leaf: t,
                text: r
            });
        },
        (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[Z] === e.leaf[Z]
    ),
    eM = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n);
    },
    eP = u.memo(
        (e) => {
            for (var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: s } = e, o = ex(), l = (0, u.useRef)(null), c = d.xv.decorations(s, t), f = ev.findKey(o, s), _ = [], h = 0; h < c.length; h++) {
                var p = c[h];
                _.push(
                    u.createElement(ew, {
                        isLast: n && h === c.length - 1,
                        key: ''.concat(f.id, '-').concat(h),
                        renderPlaceholder: i,
                        leaf: p,
                        text: s,
                        parent: r,
                        renderLeaf: a
                    })
                );
            }
            var m = (0, u.useCallback)(
                (e) => {
                    var t = C.get(o);
                    e ? (null == t || t.set(f, e), A.set(s, e), y.set(e, s)) : (null == t || t.delete(f), A.delete(s), l.current && y.delete(l.current)), (l.current = e);
                },
                [l, o, f, s]
            );
            return u.createElement(
                'span',
                {
                    'data-slate-node': 'text',
                    ref: m
                },
                _
            );
        },
        (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eA(t.decorations, e.decorations)
    ),
    ek = u.memo(
        (e) => {
            var { decorations: t, element: n, renderElement: r = (e) => u.createElement(eU, Object.assign({}, e)), renderPlaceholder: a, renderLeaf: s, selection: o } = e,
                l = ex(),
                c = eH(),
                f = l.isInline(n),
                _ = ev.findKey(l, n),
                h = (0, u.useCallback)(
                    (e) => {
                        var t = C.get(l);
                        e ? (null == t || t.set(_, e), A.set(n, e), y.set(e, n)) : (null == t || t.delete(_), A.delete(n));
                    },
                    [l, _, n]
                ),
                p = eV({
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: a,
                    renderLeaf: s,
                    selection: o
                }),
                m = {
                    'data-slate-node': 'element',
                    ref: h
                };
            if ((f && (m['data-slate-inline'] = !0), !f && d.ML.hasInlines(l, n))) {
                var g = d.NB.string(n),
                    E = i()(g);
                'rtl' === E && (m.dir = E);
            }
            if (d.ML.isVoid(l, n)) {
                (m['data-slate-void'] = !0), !c && f && (m.contentEditable = !1);
                var [[S]] = d.NB.texts(n);
                (p = u.createElement(
                    f ? 'span' : 'div',
                    {
                        'data-slate-spacer': !0,
                        style: {
                            height: '0',
                            color: 'transparent',
                            outline: 'none',
                            position: 'absolute'
                        }
                    },
                    u.createElement(eP, {
                        renderPlaceholder: a,
                        decorations: [],
                        isLast: !1,
                        parent: n,
                        text: S
                    })
                )),
                    v.set(S, 0),
                    I.set(S, n);
            }
            return r({
                attributes: m,
                children: p,
                element: n,
                decorations: t
            });
        },
        (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ey(e.decorations, t.decorations) && (e.selection === t.selection || (!!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection)))
    ),
    eU = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = ex().isInline(r) ? 'span' : 'div';
        return u.createElement(i, Object.assign({}, t, { style: { position: 'relative' } }), n);
    },
    eG = (0, u.createContext)(() => []),
    eB = () => (0, u.useContext)(eG),
    eZ = (0, u.createContext)(!1),
    eF = () => (0, u.useContext)(eZ),
    eV = (e) => {
        for (var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: s } = e, o = eB(), l = ex(), c = ev.findPath(l, n), f = [], _ = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n), h = 0; h < n.children.length; h++) {
            var p = c.concat(h),
                m = n.children[h],
                g = ev.findKey(l, m),
                E = d.ML.range(l, p),
                S = s && d.e6.intersection(E, s),
                T = o([m, p]);
            for (var b of t) {
                var y = d.e6.intersection(b, E);
                y && T.push(y);
            }
            d.W_.isElement(m)
                ? f.push(
                      u.createElement(
                          eZ.Provider,
                          {
                              key: 'provider-'.concat(g.id),
                              value: !!S
                          },
                          u.createElement(ek, {
                              decorations: T,
                              element: m,
                              key: g.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: S
                          })
                      )
                  )
                : f.push(
                      u.createElement(eP, {
                          decorations: T,
                          key: g.id,
                          isLast: _ && h === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: m
                      })
                  ),
                v.set(m, h),
                I.set(m, n);
        }
        return f;
    },
    ej = (0, u.createContext)(!1),
    eH = () => (0, u.useContext)(ej),
    eY = (0, u.createContext)(null),
    eW = () => {
        var e = (0, u.useContext)(eY);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eK = {
        bold: 'mod+b',
        compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
        moveBackward: 'left',
        moveForward: 'right',
        moveWordBackward: 'ctrl+left',
        moveWordForward: 'ctrl+right',
        deleteBackward: 'shift?+backspace',
        deleteForward: 'shift?+delete',
        extendBackward: 'shift+left',
        extendForward: 'shift+right',
        italic: 'mod+i',
        insertSoftBreak: 'shift+enter',
        splitBlock: 'enter',
        undo: 'mod+z'
    },
    ez = {
        moveLineBackward: 'opt+up',
        moveLineForward: 'opt+down',
        moveWordBackward: 'opt+left',
        moveWordForward: 'opt+right',
        deleteBackward: ['ctrl+backspace', 'ctrl+h'],
        deleteForward: ['ctrl+delete', 'ctrl+d'],
        deleteLineBackward: 'cmd+shift?+backspace',
        deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
        deleteWordBackward: 'opt+shift?+backspace',
        deleteWordForward: 'opt+shift?+delete',
        extendLineBackward: 'opt+shift+up',
        extendLineForward: 'opt+shift+down',
        redo: 'cmd+shift+z',
        transposeCharacter: 'ctrl+t'
    },
    eq = {
        deleteWordBackward: 'ctrl+shift?+backspace',
        deleteWordForward: 'ctrl+shift?+delete',
        redo: ['ctrl+y', 'ctrl+shift+z']
    },
    eQ = (e) => {
        var t = eK[e],
            n = ez[e],
            r = eq[e],
            i = t && (0, _.isKeyHotkey)(t),
            a = n && (0, _.isKeyHotkey)(n),
            s = r && (0, _.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (es && a && a(e)) || (!es && s && s(e))) || !1;
    },
    eX = {
        isBold: eQ('bold'),
        isCompose: eQ('compose'),
        isMoveBackward: eQ('moveBackward'),
        isMoveForward: eQ('moveForward'),
        isDeleteBackward: eQ('deleteBackward'),
        isDeleteForward: eQ('deleteForward'),
        isDeleteLineBackward: eQ('deleteLineBackward'),
        isDeleteLineForward: eQ('deleteLineForward'),
        isDeleteWordBackward: eQ('deleteWordBackward'),
        isDeleteWordForward: eQ('deleteWordForward'),
        isExtendBackward: eQ('extendBackward'),
        isExtendForward: eQ('extendForward'),
        isExtendLineBackward: eQ('extendLineBackward'),
        isExtendLineForward: eQ('extendLineForward'),
        isItalic: eQ('italic'),
        isMoveLineBackward: eQ('moveLineBackward'),
        isMoveLineForward: eQ('moveLineForward'),
        isMoveWordBackward: eQ('moveWordBackward'),
        isMoveWordForward: eQ('moveWordForward'),
        isRedo: eQ('redo'),
        isSoftBreak: eQ('insertSoftBreak'),
        isSplitBlock: eQ('splitBlock'),
        isTransposeCharacter: eQ('transposeCharacter'),
        isUndo: eQ('undo')
    },
    eJ = (e, t) => {
        var n = [],
            r = () => {
                n = [];
            };
        return {
            registerMutations: (r) => {
                if (!!t.current) {
                    var i = r.filter((t) => er(e, t, r));
                    n.push(...i);
                }
            },
            restoreDOM: function () {
                n.length > 0 &&
                    (n.reverse().forEach((e) => {
                        if ('characterData' !== e.type)
                            e.removedNodes.forEach((t) => {
                                e.target.insertBefore(t, e.nextSibling);
                            }),
                                e.addedNodes.forEach((t) => {
                                    e.target.removeChild(t);
                                });
                    }),
                    r());
            },
            clear: r
        };
    },
    e$ = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0
    };
class e0 extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
        null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e$);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            t = this.context;
        (this.manager = eJ(t, e)), (this.mutationObserver = new MutationObserver(this.manager.registerMutations)), this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            r,
            i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
        return null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null;
    }
    componentDidUpdate() {
        var e;
        null === (e = this.manager) || void 0 === e || e.clear(), this.observe();
    }
    componentWillUnmount() {
        var e;
        null === (e = this.mutationObserver) || void 0 === e || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
e0.contextType = eL;
var e1 = eo
    ? e0
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function e2(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e3(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        s = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(a, i),
        o = Math.min(a.length - s, i.length - s),
        l = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++) if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r;
        })(a, i, o),
        u = {
            start: n + s,
            end: r - l,
            text: i.slice(s, i.length - l)
        };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function e4(e, t) {
    var { path: n, offset: r } = t;
    if (!d.ML.hasPath(e, n)) return null;
    var i = d.NB.get(e, n);
    if (!d.xv.isText(i)) return null;
    var a = d.ML.above(e, {
        match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
        at: n
    });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var s = d.ML.next(e, {
            at: n,
            match: d.xv.isText
        });
        if (!s || !d.y$.isDescendant(s[1], a[1])) return null;
        (r -= i.text.length), (i = s[0]), (n = s[1]);
    }
    return {
        path: n,
        offset: r
    };
}
function e6(e, t) {
    var n = e4(e, t.anchor);
    if (!n) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: n,
            focus: n
        };
    var r = e4(e, t.focus);
    return r
        ? {
              anchor: n,
              focus: r
          }
        : null;
}
function e5(e, t, n) {
    var r = k.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.y$.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, { affinity: 'backward' });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var s = {
                path: t.path,
                offset: a.start
            },
            o = d.E9.transform(s, n, { affinity: 'backward' });
        return o
            ? {
                  path: o.path,
                  offset: o.offset + t.offset - a.start
              }
            : null;
    }
    var l = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start
        },
        u = d.E9.transform(l, n, { affinity: 'backward' });
    return u
        ? 'split_node' === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
            ? u
            : {
                  path: u.path,
                  offset: u.offset + a.text.length - a.end + a.start
              }
        : null;
}
function e7(e, t, n) {
    var r = e5(e, t.anchor, n);
    if (!r) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: r,
            focus: r
        };
    var i = e5(e, t.focus, n);
    return i
        ? {
              anchor: r,
              focus: i
          }
        : null;
}
function e8(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e9(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e8(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e8(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var te = function () {},
    tt = (e) => (null == e ? void 0 : e.constructor.name) === 'DataTransfer',
    tn = ['node'];
function tr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
var ti = {
        subtree: !0,
        childList: !0,
        characterData: !0
    },
    ta = ['autoFocus', 'decorate', 'onDOMBeforeInput', 'placeholder', 'readOnly', 'renderElement', 'renderLeaf', 'renderPlaceholder', 'scrollSelectionIntoView', 'style', 'as', 'disableDefaultStyles'],
    ts = ['text'];
function to(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? to(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : to(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tu = (e) => u.createElement(u.Fragment, null, eV(e)),
    tc = (e) => {
        var t,
            n,
            r,
            a,
            o,
            c,
            f = (0, u.useCallback)((e) => u.createElement(td, Object.assign({}, e)), []),
            { autoFocus: _, decorate: h = tf, onDOMBeforeInput: g, placeholder: E, readOnly: v = !1, renderElement: I, renderLeaf: N, renderPlaceholder: C = f, scrollSelectionIntoView: x = t_, style: V = {}, as: H = 'div', disableDefaultStyles: z = !1 } = e,
            Q = m(e, ta),
            X = eW(),
            [J, $] = (0, u.useState)(!1),
            ee = (0, u.useRef)(null),
            et = (0, u.useRef)([]);
        var { onUserInput: en, receivedUserInput: ei } =
                ((t = ex()),
                (n = (0, u.useRef)(!1)),
                (r = (0, u.useRef)(0)),
                (a = (0, u.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = ev.getWindow(t);
                        e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, u.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                {
                    receivedUserInput: n,
                    onUserInput: a
                }),
            [, es] = (0, u.useReducer)((e) => e + 1, 0);
        B.set(X, es), R.set(X, v);
        var ec = (0, u.useMemo)(
            () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }),
            []
        );
        (0, u.useLayoutEffect)(
            () => () => {
                if (null != ec && null != ec.latestElement) ec.latestElement.remove(), (ec.latestElement = null);
            },
            []
        ),
            (0, u.useEffect)(() => {
                ee.current && _ && ee.current.focus();
            }, [_]);
        var ef = (0, u.useCallback)(
                l()(() => {
                    if ((eo || !ev.isComposing(X)) && (!ec.isUpdatingSelection || (null != eI && eI.isFlushing())) && !ec.isDraggingInternally) {
                        var e = ev.findDocumentOrShadowRoot(X),
                            { activeElement: t } = e,
                            n = ev.toDOMNode(X, X),
                            r = e.getSelection();
                        if ((t === n ? ((ec.latestElement = t), O.set(X, !0)) : O.delete(X), !r)) return d.YR.deselect(X);
                        var { anchorNode: i, focusNode: a } = r,
                            s = ev.hasEditableTarget(X, i) || ev.isTargetInsideNonReadonlyVoid(X, i),
                            o = ev.hasEditableTarget(X, a) || ev.isTargetInsideNonReadonlyVoid(X, a);
                        if (s && o) {
                            var l = ev.toSlateRange(X, r, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            l && (ev.isComposing(X) || (null != eI && eI.hasPendingChanges()) || (null != eI && eI.isFlushing()) ? null == eI || eI.handleUserSelect(l) : d.YR.select(X, l));
                        }
                        v && (!s || !o) && d.YR.deselect(X);
                    }
                }, 100),
                [v]
            ),
            e_ = (0, u.useMemo)(() => s()(ef, 0), [ef]),
            eI = (function (e) {
                var t,
                    { node: n } = e,
                    r = m(e, tn);
                if (!eo) return null;
                var i = ex();
                var a =
                        ((t = (0, u.useRef)(!1)),
                        (0, u.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            []
                        ),
                        t.current),
                    [s] = (0, u.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                i = !1,
                                a = null,
                                s = null,
                                o = null,
                                l = 0,
                                u = !1,
                                c = () => {
                                    var e = G.get(t);
                                    if ((G.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = e6(t, e);
                                        r && (!n || !d.e6.equals(r, n)) && d.YR.select(t, r);
                                    }
                                },
                                f = () => {
                                    var e = U.get(t);
                                    if ((U.delete(t), !!e)) {
                                        if (e.at) {
                                            var n = d.E9.isPoint(e.at) ? e4(t, e.at) : e6(t, e.at);
                                            if (!n) return;
                                            var r = d.ML.range(t, n);
                                            (!t.selection || !d.e6.equals(t.selection, r)) && d.YR.select(t, n);
                                        }
                                        e.run();
                                    }
                                },
                                _ = () => {
                                    if ((s && (clearTimeout(s), (s = null)), o && (clearTimeout(o), (o = null)), !E() && !g())) {
                                        c();
                                        return;
                                    }
                                    !i && ((i = !0), setTimeout(() => (i = !1))), g() && (i = 'action');
                                    var e = t.selection && d.ML.rangeRef(t, t.selection, { affinity: 'forward' });
                                    P.set(t, t.marks), te('flush', U.get(t), k.get(t));
                                    for (var a = E(); (l = null === (_ = k.get(t)) || void 0 === _ ? void 0 : _[0]); ) {
                                        var l,
                                            _,
                                            h,
                                            p = M.get(t);
                                        void 0 !== p && (M.delete(t), (t.marks = p)), p && !1 === u && (u = null);
                                        var m = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: {
                                                    path: t,
                                                    offset: n.start
                                                },
                                                focus: {
                                                    path: t,
                                                    offset: n.end
                                                }
                                            };
                                        })(l);
                                        (!t.selection || !d.e6.equals(t.selection, m)) && d.YR.select(t, m),
                                            l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t),
                                            k.set(
                                                t,
                                                null === (h = k.get(t)) || void 0 === h
                                                    ? void 0
                                                    : h.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== l.id;
                                                      })
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!d.ML.hasPath(e, n)) return !1;
                                                var i = d.NB.get(e, n);
                                                if (!d.xv.isText(i)) return !1;
                                                if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var a = d.y$.next(n);
                                                if (!d.ML.hasPath(e, a)) return !1;
                                                var s = d.NB.get(e, a);
                                                return d.xv.isText(s) && s.text.startsWith(r.text);
                                            })(t, l) && ((a = !1), U.delete(t), P.delete(t), (i = 'action'), G.delete(t), n.cancel(), r.cancel(), null == e || e.unref());
                                    }
                                    var v = null == e ? void 0 : e.unref();
                                    if ((v && !G.get(t) && (!t.selection || !d.e6.equals(v, t.selection)) && d.YR.select(t, v), g())) {
                                        f();
                                        return;
                                    }
                                    a && n(), n.flush(), r.flush(), c();
                                    var I = P.get(t);
                                    P.delete(t), void 0 !== I && ((t.marks = I), t.onChange());
                                },
                                h = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = b.get(t);
                                    if (!!n) {
                                        if (E() || e) {
                                            n.style.display = 'none';
                                            return;
                                        }
                                        n.style.removeProperty('display');
                                    }
                                },
                                p = (e, n) => {
                                    var r,
                                        i,
                                        a,
                                        s,
                                        o,
                                        u,
                                        c,
                                        f,
                                        _,
                                        p = null !== (_ = k.get(t)) && void 0 !== _ ? _ : [];
                                    k.set(t, p);
                                    var m = d.NB.leaf(t, e),
                                        g = p.findIndex((t) => d.y$.equals(t.path, e));
                                    if (g < 0) {
                                        e3(m.text, n) &&
                                            p.push({
                                                path: e,
                                                diff: n,
                                                id: l++
                                            }),
                                            h();
                                        return;
                                    }
                                    var E =
                                        ((r = m.text),
                                        (i = p[g].diff),
                                        (a = n),
                                        (s = Math.min(i.start, a.start)),
                                        (o = Math.max(0, Math.min(i.start + i.text.length, a.end) - a.start)),
                                        (u = e2(r, i, a)),
                                        (c = Math.max(a.start + a.text.length, i.start + i.text.length + (i.start + i.text.length > a.start ? a.text.length : 0) - o)),
                                        (f = u.slice(s, c)),
                                        e3(r, {
                                            start: s,
                                            end: Math.max(i.end, a.end - i.text.length + (i.end - i.start)),
                                            text: f
                                        }));
                                    if (!E) {
                                        p.splice(g, 1), h();
                                        return;
                                    }
                                    p[g] = e9(e9({}, p[g]), {}, { diff: E });
                                },
                                m = function (e) {
                                    var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (u = !1),
                                        G.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        g() && _(),
                                        U.set(t, {
                                            at: i,
                                            run: e
                                        }),
                                        (o = setTimeout(_));
                                },
                                g = () => !!U.get(t),
                                E = () => {
                                    var e;
                                    return !!(null !== (e = k.get(t)) && void 0 !== e && e.length);
                                },
                                v = (e) => {
                                    G.set(t, e), s && (clearTimeout(s), (s = null));
                                    var { selection: n } = t;
                                    if (!!e) {
                                        var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
                                            i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((r && u) || i) && (u = !1), (r || E()) && (s = setTimeout(_, 200));
                                    }
                                },
                                I = () => {
                                    !g() && (o = setTimeout(_));
                                };
                            return {
                                flush: _,
                                scheduleFlush: I,
                                hasPendingDiffs: E,
                                hasPendingAction: g,
                                hasPendingChanges: () => g() || E(),
                                isFlushing: () => i,
                                handleUserSelect: v,
                                handleCompositionEnd: (e) => {
                                    a && clearTimeout(a),
                                        (a = setTimeout(() => {
                                            D.set(t, !1), _();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    D.set(t, !0), a && (clearTimeout(a), (a = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    s && (clearTimeout(s), (s = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        i = e.dataTransfer || e.data || void 0;
                                    !1 !== u && 'insertText' !== n && 'insertCompositionText' !== n && (u = !1);
                                    var [a] = e.getTargetRanges();
                                    a &&
                                        (r = ev.toSlateRange(t, a, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        }));
                                    var o = ev.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            o &&
                                            ((a = o),
                                            (r = ev.toSlateRange(t, o, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            }))),
                                        !!(r = null !== (D = r) && void 0 !== D ? D : t.selection))
                                    ) {
                                        var l = !0;
                                        if (n.startsWith('delete')) {
                                            if (d.e6.isExpanded(r)) {
                                                var [c, f] = d.e6.edges(r);
                                                if (d.NB.leaf(t, c.path).text.length === c.offset && 0 === f.offset) {
                                                    var _ = d.ML.next(t, {
                                                        at: c.path,
                                                        match: d.xv.isText
                                                    });
                                                    _ &&
                                                        d.y$.equals(_[1], f.path) &&
                                                        (r = {
                                                            anchor: f,
                                                            focus: f
                                                        });
                                                }
                                            }
                                            var h = n.endsWith('Backward') ? 'backward' : 'forward',
                                                [g, E] = d.e6.edges(r),
                                                [S, T] = d.ML.leaf(t, g.path),
                                                b = {
                                                    text: '',
                                                    start: g.offset,
                                                    end: E.offset
                                                },
                                                y = k.get(t),
                                                A = null == y ? void 0 : y.find((e) => d.y$.equals(e.path, T)),
                                                N = A ? [A.diff, b] : [b];
                                            if ((0 === e2(S.text, ...N).length && (l = !1), d.e6.isExpanded(r))) {
                                                if (l && d.y$.equals(r.anchor.path, r.focus.path)) {
                                                    var C = {
                                                        path: r.anchor.path,
                                                        offset: g.offset
                                                    };
                                                    return (
                                                        v(d.ML.range(t, C, C)),
                                                        p(r.anchor.path, {
                                                            text: '',
                                                            end: E.offset,
                                                            start: g.offset
                                                        })
                                                    );
                                                }
                                                return m(() => d.ML.deleteFragment(t, { direction: h }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case 'deleteByComposition':
                                            case 'deleteByCut':
                                            case 'deleteByDrag':
                                                return m(() => d.ML.deleteFragment(t), { at: r });
                                            case 'deleteContent':
                                            case 'deleteContentForward':
                                                var { anchor: R } = r;
                                                if (l && d.e6.isCollapsed(r)) {
                                                    var O = d.NB.leaf(t, R.path);
                                                    if (R.offset < O.text.length)
                                                        return p(R.path, {
                                                            text: '',
                                                            start: R.offset,
                                                            end: R.offset + 1
                                                        });
                                                }
                                                return m(() => d.ML.deleteForward(t), { at: r });
                                            case 'deleteContentBackward':
                                                var D,
                                                    L,
                                                    { anchor: x } = r,
                                                    w = K(a) ? a.isCollapsed : !!(null !== (L = a) && void 0 !== L && L.collapsed);
                                                if (l && w && d.e6.isCollapsed(r) && x.offset > 0)
                                                    return p(x.path, {
                                                        text: '',
                                                        start: x.offset - 1,
                                                        end: x.offset
                                                    });
                                                return m(() => d.ML.deleteBackward(t), { at: r });
                                            case 'deleteEntireSoftLine':
                                                return m(
                                                    () => {
                                                        d.ML.deleteBackward(t, { unit: 'line' }), d.ML.deleteForward(t, { unit: 'line' });
                                                    },
                                                    { at: r }
                                                );
                                            case 'deleteHardLineBackward':
                                                return m(() => d.ML.deleteBackward(t, { unit: 'block' }), { at: r });
                                            case 'deleteSoftLineBackward':
                                                return m(() => d.ML.deleteBackward(t, { unit: 'line' }), { at: r });
                                            case 'deleteHardLineForward':
                                                return m(() => d.ML.deleteForward(t, { unit: 'block' }), { at: r });
                                            case 'deleteSoftLineForward':
                                                return m(() => d.ML.deleteForward(t, { unit: 'line' }), { at: r });
                                            case 'deleteWordBackward':
                                                return m(() => d.ML.deleteBackward(t, { unit: 'word' }), { at: r });
                                            case 'deleteWordForward':
                                                return m(() => d.ML.deleteForward(t, { unit: 'word' }), { at: r });
                                            case 'insertLineBreak':
                                                return m(() => d.ML.insertSoftBreak(t), { at: r });
                                            case 'insertParagraph':
                                                return m(() => d.ML.insertBreak(t), { at: r });
                                            case 'insertCompositionText':
                                            case 'deleteCompositionText':
                                            case 'insertFromComposition':
                                            case 'insertFromDrop':
                                            case 'insertFromPaste':
                                            case 'insertFromYank':
                                            case 'insertReplacementText':
                                            case 'insertText':
                                                if (tt(i)) return m(() => ev.insertData(t, i), { at: r });
                                                var P = null != i ? i : '';
                                                if ((M.get(t) && (P = P.replace('\uFEFF', '')), 'insertText' === n && /.*\n.*\n$/.test(P) && (P = P.slice(0, -1)), P.includes('\n')))
                                                    return m(
                                                        () => {
                                                            var e = P.split('\n');
                                                            e.forEach((n, r) => {
                                                                n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: r }
                                                    );
                                                if (d.y$.equals(r.anchor.path, r.focus.path)) {
                                                    var [U, G] = d.e6.edges(r),
                                                        B = {
                                                            start: U.offset,
                                                            end: G.offset,
                                                            text: P
                                                        };
                                                    if (P && u && 'insertCompositionText' === n) {
                                                        var Z = u.start + u.text.search(/\S|$/);
                                                        B.start + B.text.search(/\S|$/) === Z + 1 && B.end === u.start + u.text.length ? ((B.start -= 1), (u = null), I()) : (u = !1);
                                                    } else u = 'insertText' === n && (null === u ? B : !!(u && d.e6.isCollapsed(r)) && u.end + u.text.length === U.offset && e9(e9({}, u), {}, { text: u.text + P }));
                                                    if (l) {
                                                        p(U.path, B);
                                                        return;
                                                    }
                                                }
                                                return m(() => d.ML.insertText(t, P), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    !E() && (h(!0), setTimeout(h));
                                },
                                handleDomMutations: (e) => {
                                    if (!(E() || g())) {
                                        if (e.some((n) => er(t, n, e))) {
                                            var n;
                                            null === (n = B.get(t)) || void 0 === n || n();
                                        }
                                    }
                                },
                                handleInput: () => {
                                    (g() || !E()) && _();
                                }
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? tr(Object(n), !0).forEach(function (t) {
                                              p(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : tr(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: i }, r)
                        )
                    );
                return (
                    !(function (e, t, n) {
                        var [r] = (0, u.useState)(() => new MutationObserver(t));
                        eN(() => {
                            r.takeRecords();
                        }),
                            (0, u.useEffect)(() => {
                                if (!e.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
                                return r.observe(e.current, n), () => r.disconnect();
                            }, []);
                    })(n, s.handleDomMutations, ti),
                    w.set(i, s.scheduleFlush),
                    a && s.flush(),
                    s
                );
            })({
                node: ee,
                onDOMSelectionChange: ef,
                scheduleOnDOMSelectionChange: e_
            });
        eN(() => {
            ee.current && (e = j(ee.current)) ? (S.set(X, e), T.set(X, ee.current), A.set(X, ee.current), y.set(ee.current, X)) : A.delete(X);
            var e,
                { selection: t } = X,
                n = ev.findDocumentOrShadowRoot(X).getSelection();
            if (!(!n || !ev.isFocused(X) || (null != eI && eI.hasPendingAction()))) {
                var r = (e) => {
                        var r = 'None' !== n.type;
                        if (!!t || !!r) {
                            var i = T.get(X),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var s = ev.toSlateRange(X, n, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                });
                                if (s && d.e6.equals(s, t)) {
                                    if (!ec.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: l } = n;
                                    if (null != l && null !== (o = l.parentElement) && void 0 !== o && o.hasAttribute('data-slate-mark-placeholder')) return;
                                }
                            }
                            if (t && !ev.hasRange(X, t)) {
                                X.selection = ev.toSlateRange(X, n, {
                                    exactMatch: !1,
                                    suppressThrow: !0
                                });
                                return;
                            }
                            ec.isUpdatingSelection = !0;
                            var u = t && ev.toDOMRange(X, t);
                            return u ? (d.e6.isBackward(t) ? n.setBaseAndExtent(u.endContainer, u.endOffset, u.startContainer, u.startOffset) : n.setBaseAndExtent(u.startContainer, u.startOffset, u.endContainer, u.endOffset), x(X, u)) : n.removeAllRanges(), u;
                        }
                    },
                    i = r(),
                    a = (null == eI ? void 0 : eI.isFlushing()) === 'action';
                if (!eo || !a) {
                    setTimeout(() => {
                        i && el && ev.toDOMNode(X, X).focus(), (ec.isUpdatingSelection = !1);
                    });
                    return;
                }
                var s = null,
                    o = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    ev.toDOMNode(X, X).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (s = setTimeout(() => {
                                    e(!0), (ec.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), s && clearTimeout(s);
                };
            }
        });
        var eS = (0, u.useCallback)(
                (e) => {
                    if ((en(), !v && ev.hasEditableTarget(X, e.target) && !tp(e, g))) {
                        if (eI) return eI.handleDOMBeforeInput(e);
                        e_.flush(), ef.flush();
                        var { selection: t } = X,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = 'insertCompositionText' === n || 'deleteCompositionText' === n;
                        if (i && ev.isComposing(X)) return;
                        var a = !1;
                        if ('insertText' === n && t && d.e6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                            (a = !0), X.marks && (a = !1);
                            var { anchor: s } = t,
                                [o, l] = ev.toDOMPoint(X, s),
                                u = null === (_ = o.parentElement) || void 0 === _ ? void 0 : _.closest('a'),
                                c = ev.getWindow(X);
                            if (a && u && ev.hasDOMNode(X, u)) {
                                var f,
                                    _,
                                    h,
                                    p,
                                    m = null == c ? void 0 : c.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                m === o && (null === (p = m.textContent) || void 0 === p ? void 0 : p.length) === l && (a = !1);
                            }
                            if (a && o.parentElement && (null == c ? void 0 : null === (h = c.getComputedStyle(o.parentElement)) || void 0 === h ? void 0 : h.whiteSpace) === 'pre') {
                                var E = d.ML.above(X, {
                                    at: s.path,
                                    match: (e) => d.W_.isElement(e) && d.ML.isBlock(X, e)
                                });
                                E && d.NB.string(E[0]).includes('\t') && (a = !1);
                            }
                        }
                        if (!n.startsWith('delete') || n.startsWith('deleteBy')) {
                            var [I] = e.getTargetRanges();
                            if (I) {
                                var S = ev.toSlateRange(X, I, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                if (!t || !d.e6.equals(t, S)) {
                                    a = !1;
                                    var T = !i && X.selection && d.ML.rangeRef(X, X.selection);
                                    d.YR.select(X, S), T && L.set(X, T);
                                }
                            }
                        }
                        if (!i) {
                            if ((!a && e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith('delete'))) {
                                var b = n.endsWith('Backward') ? 'backward' : 'forward';
                                d.ML.deleteFragment(X, { direction: b });
                                return;
                            }
                            switch (n) {
                                case 'deleteByComposition':
                                case 'deleteByCut':
                                case 'deleteByDrag':
                                    d.ML.deleteFragment(X);
                                    break;
                                case 'deleteContent':
                                case 'deleteContentForward':
                                    d.ML.deleteForward(X);
                                    break;
                                case 'deleteContentBackward':
                                    d.ML.deleteBackward(X);
                                    break;
                                case 'deleteEntireSoftLine':
                                    d.ML.deleteBackward(X, { unit: 'line' }), d.ML.deleteForward(X, { unit: 'line' });
                                    break;
                                case 'deleteHardLineBackward':
                                    d.ML.deleteBackward(X, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineBackward':
                                    d.ML.deleteBackward(X, { unit: 'line' });
                                    break;
                                case 'deleteHardLineForward':
                                    d.ML.deleteForward(X, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineForward':
                                    d.ML.deleteForward(X, { unit: 'line' });
                                    break;
                                case 'deleteWordBackward':
                                    d.ML.deleteBackward(X, { unit: 'word' });
                                    break;
                                case 'deleteWordForward':
                                    d.ML.deleteForward(X, { unit: 'word' });
                                    break;
                                case 'insertLineBreak':
                                    d.ML.insertSoftBreak(X);
                                    break;
                                case 'insertParagraph':
                                    d.ML.insertBreak(X);
                                    break;
                                case 'insertFromComposition':
                                case 'insertFromDrop':
                                case 'insertFromPaste':
                                case 'insertFromYank':
                                case 'insertReplacementText':
                                case 'insertText':
                                    'insertFromComposition' === n && ev.isComposing(X) && ($(!1), D.set(X, !1)), (null == r ? void 0 : r.constructor.name) === 'DataTransfer' ? ev.insertData(X, r) : 'string' == typeof r && (a ? et.current.push(() => d.ML.insertText(X, r)) : d.ML.insertText(X, r));
                            }
                            var y = null === (f = L.get(X)) || void 0 === f ? void 0 : f.unref();
                            L.delete(X), y && (!X.selection || !d.e6.equals(X.selection, y)) && d.YR.select(X, y);
                        }
                    }
                },
                [v, g]
            ),
            eT = (0, u.useCallback)(
                (e) => {
                    null == e ? (ef.cancel(), e_.cancel(), T.delete(X), A.delete(X), ee.current && eE && ee.current.removeEventListener('beforeinput', eS)) : eE && e.addEventListener('beforeinput', eS), (ee.current = e);
                },
                [ee, eS, ef, e_]
            );
        eN(() => {
            var e = ev.getWindow(X);
            return (
                e.document.addEventListener('selectionchange', e_),
                () => {
                    e.document.removeEventListener('selectionchange', e_);
                }
            );
        }, [e_]);
        var eb = h([X, []]);
        if (E && 1 === X.children.length && 1 === Array.from(d.NB.texts(X)).length && '' === d.NB.string(X) && !J) {
            var ey = d.ML.start(X, []);
            eb.push({
                [Z]: !0,
                placeholder: E,
                anchor: ey,
                focus: ey
            });
        }
        var { marks: eA } = X;
        if (((ec.hasMarkPlaceholder = !1), X.selection && d.e6.isCollapsed(X.selection) && eA)) {
            var { anchor: eC } = X.selection,
                eR = d.NB.leaf(X, eC.path),
                eO = m(eR, ts);
            if (!d.xv.equals(eR, eA, { loose: !0 })) {
                ec.hasMarkPlaceholder = !0;
                var eD = Object.fromEntries(Object.keys(eO).map((e) => [e, null]));
                eb.push(
                    tl(
                        tl(tl({ [F]: !0 }, eD), eA),
                        {},
                        {
                            anchor: eC,
                            focus: eC
                        }
                    )
                );
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = X;
                if (e) {
                    var { anchor: t } = e,
                        n = d.NB.leaf(X, t.path);
                    if (eA && !d.xv.equals(n, eA, { loose: !0 })) {
                        M.set(X, eA);
                        return;
                    }
                }
                M.delete(X);
            });
        });
        var eL = null === (o = b.get(X)) || void 0 === o ? void 0 : null === (c = o.getBoundingClientRect()) || void 0 === c ? void 0 : c.height;
        return u.createElement(
            ej.Provider,
            { value: v },
            u.createElement(
                eG.Provider,
                { value: h },
                u.createElement(
                    e1,
                    {
                        node: ee,
                        receivedUserInput: ei
                    },
                    u.createElement(
                        H,
                        Object.assign(
                            {
                                role: v ? void 0 : 'textbox',
                                'aria-multiline': !v || void 0
                            },
                            Q,
                            {
                                spellCheck: (!!eE || !eg) && Q.spellCheck,
                                autoCorrect: eE || !eg ? Q.autoCorrect : 'false',
                                autoCapitalize: eE || !eg ? Q.autoCapitalize : 'false',
                                'data-slate-editor': !0,
                                'data-slate-node': 'value',
                                contentEditable: !v,
                                zindex: -1,
                                suppressContentEditableWarning: !0,
                                ref: eT,
                                style: tl(
                                    tl(
                                        {},
                                        z
                                            ? {}
                                            : tl(
                                                  {
                                                      position: 'relative',
                                                      outline: 'none',
                                                      whiteSpace: 'pre-wrap',
                                                      wordWrap: 'break-word'
                                                  },
                                                  eL ? { minHeight: eL } : {}
                                              )
                                    ),
                                    V
                                ),
                                onBeforeInput: (0, u.useCallback)(
                                    (e) => {
                                        if (!eE && !v && !th(e, Q.onBeforeInput) && ev.hasSelectableTarget(X, e.target) && (e.preventDefault(), !ev.isComposing(X))) {
                                            var t = e.data;
                                            d.ML.insertText(X, t);
                                        }
                                    },
                                    [v]
                                ),
                                onInput: (0, u.useCallback)((e) => {
                                    if (!th(e, Q.onInput)) {
                                        if (eI) {
                                            eI.handleInput();
                                            return;
                                        }
                                        for (var t of et.current) t();
                                        et.current = [];
                                    }
                                }, []),
                                onBlur: (0, u.useCallback)(
                                    (e) => {
                                        if (v || ec.isUpdatingSelection || !ev.hasSelectableTarget(X, e.target) || th(e, Q.onBlur)) return;
                                        var t = ev.findDocumentOrShadowRoot(X);
                                        if (ec.latestElement === t.activeElement) return;
                                        var { relatedTarget: n } = e;
                                        if (!(n === ev.toDOMNode(X, X) || (Y(n) && n.hasAttribute('data-slate-spacer')))) {
                                            if (null != n && W(n) && ev.hasDOMNode(X, n)) {
                                                var r = ev.toSlateNode(X, n);
                                                if (d.W_.isElement(r) && !X.isVoid(r)) return;
                                            }
                                            if (eu) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            O.delete(X);
                                        }
                                    },
                                    [v, Q.onBlur]
                                ),
                                onClick: (0, u.useCallback)(
                                    (e) => {
                                        if (ev.hasTarget(X, e.target) && !th(e, Q.onClick) && W(e.target)) {
                                            var t = ev.toSlateNode(X, e.target),
                                                n = ev.findPath(X, t);
                                            if (!d.ML.hasPath(X, n) || d.NB.get(X, n) !== t) return;
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(d.W_.isElement(t) && d.ML.isBlock(X, t))) {
                                                    var i,
                                                        a = d.ML.above(X, {
                                                            match: (e) => d.W_.isElement(e) && d.ML.isBlock(X, e),
                                                            at: n
                                                        });
                                                    r = null !== (i = null == a ? void 0 : a[1]) && void 0 !== i ? i : n.slice(0, 1);
                                                }
                                                var s = d.ML.range(X, r);
                                                d.YR.select(X, s);
                                                return;
                                            }
                                            if (!v) {
                                                var o = d.ML.start(X, n),
                                                    l = d.ML.end(X, n),
                                                    u = d.ML.void(X, { at: o }),
                                                    c = d.ML.void(X, { at: l });
                                                if (u && c && d.y$.equals(u[1], c[1])) {
                                                    var f = d.ML.range(X, o);
                                                    d.YR.select(X, f);
                                                }
                                            }
                                        }
                                    },
                                    [v, Q.onClick]
                                ),
                                onCompositionEnd: (0, u.useCallback)(
                                    (e) => {
                                        if (ev.hasSelectableTarget(X, e.target)) {
                                            if ((ev.isComposing(X) && ($(!1), D.set(X, !1)), null == eI || eI.handleCompositionEnd(e), !th(e, Q.onCompositionEnd) && !eo)) {
                                                if (!eu && !eh && !ea && !em && !ep && e.data) {
                                                    var t = M.get(X);
                                                    M.delete(X), void 0 !== t && (P.set(X, X.marks), (X.marks = t)), d.ML.insertText(X, e.data);
                                                    var n = P.get(X);
                                                    P.delete(X), void 0 !== n && (X.marks = n);
                                                }
                                            }
                                        }
                                    },
                                    [Q.onCompositionEnd]
                                ),
                                onCompositionUpdate: (0, u.useCallback)(
                                    (e) => {
                                        ev.hasSelectableTarget(X, e.target) && !th(e, Q.onCompositionUpdate) && !ev.isComposing(X) && ($(!0), D.set(X, !0));
                                    },
                                    [Q.onCompositionUpdate]
                                ),
                                onCompositionStart: (0, u.useCallback)(
                                    (e) => {
                                        if (ev.hasSelectableTarget(X, e.target)) {
                                            if ((null == eI || eI.handleCompositionStart(e), !th(e, Q.onCompositionStart) && !eo)) {
                                                $(!0);
                                                var { selection: t } = X;
                                                if (t) {
                                                    if (d.e6.isExpanded(t)) {
                                                        d.ML.deleteFragment(X);
                                                        return;
                                                    }
                                                    var n = d.ML.above(X, {
                                                        match: (e) => d.W_.isElement(e) && d.ML.isInline(X, e),
                                                        mode: 'highest'
                                                    });
                                                    if (n) {
                                                        var [, r] = n;
                                                        if (d.ML.isEnd(X, t.anchor, r)) {
                                                            var i = d.ML.after(X, r);
                                                            d.YR.setSelection(X, {
                                                                anchor: i,
                                                                focus: i
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [Q.onCompositionStart]
                                ),
                                onCopy: (0, u.useCallback)(
                                    (e) => {
                                        ev.hasSelectableTarget(X, e.target) && !th(e, Q.onCopy) && (e.preventDefault(), ev.setFragmentData(X, e.clipboardData, 'copy'));
                                    },
                                    [Q.onCopy]
                                ),
                                onCut: (0, u.useCallback)(
                                    (e) => {
                                        if (!v && ev.hasSelectableTarget(X, e.target) && !th(e, Q.onCut)) {
                                            e.preventDefault(), ev.setFragmentData(X, e.clipboardData, 'cut');
                                            var { selection: t } = X;
                                            if (t) {
                                                if (d.e6.isExpanded(t)) d.ML.deleteFragment(X);
                                                else {
                                                    var n = d.NB.parent(X, t.anchor.path);
                                                    d.ML.isVoid(X, n) && d.YR.delete(X);
                                                }
                                            }
                                        }
                                    },
                                    [v, Q.onCut]
                                ),
                                onDragOver: (0, u.useCallback)(
                                    (e) => {
                                        if (ev.hasTarget(X, e.target) && !th(e, Q.onDragOver)) {
                                            var t = ev.toSlateNode(X, e.target);
                                            d.W_.isElement(t) && d.ML.isVoid(X, t) && e.preventDefault();
                                        }
                                    },
                                    [Q.onDragOver]
                                ),
                                onDragStart: (0, u.useCallback)(
                                    (e) => {
                                        if (!v && ev.hasTarget(X, e.target) && !th(e, Q.onDragStart)) {
                                            var t = ev.toSlateNode(X, e.target),
                                                n = ev.findPath(X, t);
                                            if (
                                                (d.W_.isElement(t) && d.ML.isVoid(X, t)) ||
                                                d.ML.void(X, {
                                                    at: n,
                                                    voids: !0
                                                })
                                            ) {
                                                var r = d.ML.range(X, n);
                                                d.YR.select(X, r);
                                            }
                                            (ec.isDraggingInternally = !0), ev.setFragmentData(X, e.dataTransfer, 'drag');
                                        }
                                    },
                                    [v, Q.onDragStart]
                                ),
                                onDrop: (0, u.useCallback)(
                                    (e) => {
                                        if (!v && ev.hasTarget(X, e.target) && !th(e, Q.onDrop)) {
                                            e.preventDefault();
                                            var t = X.selection,
                                                n = ev.findEventRange(X, e),
                                                r = e.dataTransfer;
                                            d.YR.select(X, n),
                                                ec.isDraggingInternally &&
                                                    t &&
                                                    !d.e6.equals(t, n) &&
                                                    !d.ML.void(X, {
                                                        at: n,
                                                        voids: !0
                                                    }) &&
                                                    d.YR.delete(X, { at: t }),
                                                ev.insertData(X, r),
                                                !ev.isFocused(X) && ev.focus(X);
                                        }
                                        ec.isDraggingInternally = !1;
                                    },
                                    [v, Q.onDrop]
                                ),
                                onDragEnd: (0, u.useCallback)(
                                    (e) => {
                                        !v && ec.isDraggingInternally && Q.onDragEnd && ev.hasTarget(X, e.target) && Q.onDragEnd(e), (ec.isDraggingInternally = !1);
                                    },
                                    [v, Q.onDragEnd]
                                ),
                                onFocus: (0, u.useCallback)(
                                    (e) => {
                                        if (!v && !ec.isUpdatingSelection && ev.hasEditableTarget(X, e.target) && !th(e, Q.onFocus)) {
                                            var t = ev.toDOMNode(X, X),
                                                n = ev.findDocumentOrShadowRoot(X);
                                            if (((ec.latestElement = n.activeElement), el && e.target !== t)) {
                                                t.focus();
                                                return;
                                            }
                                            O.set(X, !0);
                                        }
                                    },
                                    [v, Q.onFocus]
                                ),
                                onKeyDown: (0, u.useCallback)(
                                    (e) => {
                                        if (!v && ev.hasEditableTarget(X, e.target)) {
                                            null == eI || eI.handleKeyDown(e);
                                            var { nativeEvent: t } = e;
                                            if ((ev.isComposing(X) && !1 === t.isComposing && (D.set(X, !1), $(!1)), !(th(e, Q.onKeyDown) || ev.isComposing(X)))) {
                                                var { selection: n } = X,
                                                    r = X.children[null !== n ? n.focus.path[0] : 0],
                                                    a = 'rtl' === i()(d.NB.string(r));
                                                if (eX.isRedo(t)) {
                                                    e.preventDefault();
                                                    'function' == typeof X.redo && X.redo();
                                                    return;
                                                }
                                                if (eX.isUndo(t)) {
                                                    e.preventDefault();
                                                    'function' == typeof X.undo && X.undo();
                                                    return;
                                                }
                                                if (eX.isMoveLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(X, {
                                                            unit: 'line',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (eX.isMoveLineForward(t)) {
                                                    e.preventDefault(), d.YR.move(X, { unit: 'line' });
                                                    return;
                                                }
                                                if (eX.isExtendLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(X, {
                                                            unit: 'line',
                                                            edge: 'focus',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (eX.isExtendLineForward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(X, {
                                                            unit: 'line',
                                                            edge: 'focus'
                                                        });
                                                    return;
                                                }
                                                if (eX.isMoveBackward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(X, { reverse: !a }) : d.YR.collapse(X, { edge: 'start' });
                                                    return;
                                                }
                                                if (eX.isMoveForward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(X, { reverse: a }) : d.YR.collapse(X, { edge: 'end' });
                                                    return;
                                                }
                                                if (eX.isMoveWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(X, { edge: 'focus' }),
                                                        d.YR.move(X, {
                                                            unit: 'word',
                                                            reverse: !a
                                                        });
                                                    return;
                                                }
                                                if (eX.isMoveWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(X, { edge: 'focus' }),
                                                        d.YR.move(X, {
                                                            unit: 'word',
                                                            reverse: a
                                                        });
                                                    return;
                                                }
                                                if (eE) {
                                                    if ((ed || eu) && n && (eX.isDeleteBackward(t) || eX.isDeleteForward(t)) && d.e6.isCollapsed(n)) {
                                                        var s = d.NB.parent(X, n.anchor.path);
                                                        if (d.W_.isElement(s) && d.ML.isVoid(X, s) && (d.ML.isInline(X, s) || d.ML.isBlock(X, s))) {
                                                            e.preventDefault(), d.ML.deleteBackward(X, { unit: 'block' });
                                                            return;
                                                        }
                                                    }
                                                } else {
                                                    if (eX.isBold(t) || eX.isItalic(t) || eX.isTransposeCharacter(t)) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                    if (eX.isSoftBreak(t)) {
                                                        e.preventDefault(), d.ML.insertSoftBreak(X);
                                                        return;
                                                    }
                                                    if (eX.isSplitBlock(t)) {
                                                        e.preventDefault(), d.ML.insertBreak(X);
                                                        return;
                                                    }
                                                    if (eX.isDeleteBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'backward' }) : d.ML.deleteBackward(X);
                                                        return;
                                                    }
                                                    if (eX.isDeleteForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'forward' }) : d.ML.deleteForward(X);
                                                        return;
                                                    }
                                                    if (eX.isDeleteLineBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'backward' }) : d.ML.deleteBackward(X, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (eX.isDeleteLineForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'forward' }) : d.ML.deleteForward(X, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (eX.isDeleteWordBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'backward' }) : d.ML.deleteBackward(X, { unit: 'word' });
                                                        return;
                                                    }
                                                    if (eX.isDeleteWordForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(X, { direction: 'forward' }) : d.ML.deleteForward(X, { unit: 'word' });
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [v, Q.onKeyDown]
                                ),
                                onPaste: (0, u.useCallback)(
                                    (e) => {
                                        !v && ev.hasEditableTarget(X, e.target) && !th(e, Q.onPaste) && (!eE || q(e.nativeEvent) || eu) && (e.preventDefault(), ev.insertData(X, e.clipboardData));
                                    },
                                    [v, Q.onPaste]
                                )
                            }
                        ),
                        u.createElement(tu, {
                            decorations: eb,
                            node: X,
                            renderElement: I,
                            renderPlaceholder: C,
                            renderLeaf: N,
                            selection: X.selection
                        })
                    )
                )
            )
        );
    },
    td = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n, eo && u.createElement('br', null));
    },
    tf = () => [],
    t_ = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.e6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)), (0, c.Z)(n, { scrollMode: 'if-needed' }), delete n.getBoundingClientRect;
        }
    },
    th = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tp = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    tm = (0, u.createContext)(!1),
    tg = () => (0, u.useContext)(tm),
    tE = (0, u.createContext)({}),
    tv = ['editor', 'children', 'onChange', 'value'],
    tI = (e) => {
        var t,
            n,
            r,
            i,
            { editor: a, children: s, onChange: o, value: l } = e,
            c = m(e, tv),
            f = (0, u.useRef)(!1),
            [_, h] = u.useState(() => {
                if (!d.NB.isNodeList(l)) throw Error('[Slate] value is invalid! Expected a list of elements but got: '.concat(d.o4.stringify(l)));
                if (!d.ML.isEditor(a)) throw Error('[Slate] editor is invalid! You passed: '.concat(d.o4.stringify(a)));
                return (
                    (a.children = l),
                    Object.assign(a, c),
                    {
                        v: 0,
                        editor: a
                    }
                );
            });
        var { selectorContext: p, onChange: g } =
                ((t = a),
                (n = (0, u.useRef)([]).current),
                (r = (0, u.useRef)({ editor: t }).current),
                (i = (0, u.useCallback)((e) => {
                    (r.editor = e), n.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, u.useMemo)(
                        () => ({
                            getSlate: () => r.editor,
                            addEventListener: (e) => (
                                n.push(e),
                                () => {
                                    n.splice(n.indexOf(e), 1);
                                }
                            )
                        }),
                        [n, r]
                    ),
                    onChange: i
                }),
            E = (0, u.useCallback)(() => {
                o && o(a.children),
                    h((e) => ({
                        v: e.v + 1,
                        editor: a
                    })),
                    g(a);
            }, [o]);
        (0, u.useEffect)(
            () => (
                x.set(a, E),
                () => {
                    x.set(a, () => {}), (f.current = !0);
                }
            ),
            [E]
        );
        var [v, I] = (0, u.useState)(ev.isFocused(a));
        return (
            (0, u.useEffect)(() => {
                I(ev.isFocused(a));
            }),
            eN(() => {
                var e = () => I(ev.isFocused(a));
                return ei
                    ? (document.addEventListener('focusin', e),
                      document.addEventListener('focusout', e),
                      () => {
                          document.removeEventListener('focusin', e), document.removeEventListener('focusout', e);
                      })
                    : (document.addEventListener('focus', e, !0),
                      document.addEventListener('blur', e, !0),
                      () => {
                          document.removeEventListener('focus', e, !0), document.removeEventListener('blur', e, !0);
                      });
            }, []),
            u.createElement(tE.Provider, { value: p }, u.createElement(eY.Provider, { value: _ }, u.createElement(eL.Provider, { value: _.editor }, u.createElement(tm.Provider, { value: v }, s))))
        );
    },
    tS = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tT = (e, t, n) => {
        var r = ev.toDOMRange(e, t).getBoundingClientRect(),
            i = ev.toDOMRange(e, n).getBoundingClientRect();
        return tS(r, i) && tS(i, r);
    },
    tb = (e, t) => {
        var n = d.ML.range(e, d.e6.end(t)),
            r = Array.from(d.ML.positions(e, { at: t })),
            i = 0,
            a = r.length,
            s = Math.floor(a / 2);
        if (tT(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
        if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
        for (; s !== r.length && s !== i; ) tT(e, d.ML.range(e, r[s]), n) ? (a = s) : (i = s), (s = Math.floor((i + a) / 2));
        return d.ML.range(e, r[a], n);
    };
function ty(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tA(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ty(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ty(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tN = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x-slate-fragment',
            { apply: n, onChange: r, deleteBackward: i, addMark: a, removeMark: s } = e;
        return (
            C.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, i;
                null === (r = w.get(e)) || void 0 === r || r(), !M.get(e) && null !== (i = k.get(e)) && void 0 !== i && i.length && M.set(e, null), P.delete(e), a(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !M.get(e) && null !== (n = k.get(e)) && void 0 !== n && n.length && M.set(e, null), P.delete(e), s(t);
            }),
            (e.deleteBackward = (t) => {
                if ('line' !== t) return i(t);
                if (e.selection && d.e6.isCollapsed(e.selection)) {
                    var n = d.ML.above(e, {
                        match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
                        at: e.selection
                    });
                    if (n) {
                        var [, r] = n,
                            a = d.ML.range(e, r, e.selection.anchor),
                            s = tb(e, a);
                        !d.e6.isCollapsed(s) && d.YR.delete(e, { at: s });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    i = [],
                    a = k.get(e);
                if (null != a && a.length) {
                    var s = a
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: i } = e;
                                switch (t.type) {
                                    case 'insert_text':
                                        if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset <= r.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + r.start,
                                                    end: t.text.length + r.end,
                                                    text: r.text
                                                },
                                                id: i,
                                                path: n
                                            };
                                        return {
                                            diff: {
                                                start: r.start,
                                                end: r.end + t.text.length,
                                                text: r.text
                                            },
                                            id: i,
                                            path: n
                                        };
                                    case 'remove_text':
                                        if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset + t.text.length <= r.start)
                                            return {
                                                diff: {
                                                    start: r.start - t.text.length,
                                                    end: r.end - t.text.length,
                                                    text: r.text
                                                },
                                                id: i,
                                                path: n
                                            };
                                        return {
                                            diff: {
                                                start: r.start,
                                                end: r.end - t.text.length,
                                                text: r.text
                                            },
                                            id: i,
                                            path: n
                                        };
                                    case 'split_node':
                                        if (!d.y$.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: i,
                                                path: d.y$.transform(n, t, { affinity: 'backward' })
                                            };
                                        if (t.position > r.start)
                                            return {
                                                diff: {
                                                    start: r.start,
                                                    end: Math.min(t.position, r.end),
                                                    text: r.text
                                                },
                                                id: i,
                                                path: n
                                            };
                                        return {
                                            diff: {
                                                start: r.start - t.position,
                                                end: r.end - t.position,
                                                text: r.text
                                            },
                                            id: i,
                                            path: d.y$.transform(n, t, { affinity: 'forward' })
                                        };
                                    case 'merge_node':
                                        if (!d.y$.equals(t.path, n))
                                            return {
                                                diff: r,
                                                id: i,
                                                path: d.y$.transform(n, t)
                                            };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text
                                            },
                                            id: i,
                                            path: d.y$.transform(n, t)
                                        };
                                }
                                var a = d.y$.transform(n, t);
                                return a
                                    ? {
                                          diff: r,
                                          path: a,
                                          id: i
                                      }
                                    : null;
                            })(e, t)
                        )
                        .filter(Boolean);
                    k.set(e, s);
                }
                var o = G.get(e);
                o && G.set(e, e7(e, o, t));
                var l = U.get(e);
                if (null != l && l.at) {
                    var u = d.E9.isPoint(null == l ? void 0 : l.at) ? e5(e, l.at, t) : e7(e, l.at, t);
                    U.set(e, u ? tA(tA({}, l), {}, { at: u }) : null);
                }
                switch (t.type) {
                    case 'insert_text':
                    case 'remove_text':
                    case 'set_node':
                    case 'split_node':
                        i.push(...tC(e, t.path));
                        break;
                    case 'set_selection':
                        null === (r = L.get(e)) || void 0 === r || r.unref(), L.delete(e);
                        break;
                    case 'insert_node':
                    case 'remove_node':
                        i.push(...tC(e, d.y$.parent(t.path)));
                        break;
                    case 'merge_node':
                        i.push(...tC(e, d.y$.previous(t.path)));
                        break;
                    case 'move_node':
                        i.push(...tC(e, d.y$.common(d.y$.parent(t.path), d.y$.parent(t.newPath))));
                }
                for (var [c, f] of (n(t), i)) {
                    var [_] = d.ML.node(e, c);
                    N.set(_, f);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (!r) return;
                var [i, a] = d.e6.edges(r),
                    s = d.ML.void(e, { at: i.path }),
                    o = d.ML.void(e, { at: a.path });
                if (!d.e6.isCollapsed(r) || !!s) {
                    var l = ev.toDOMRange(e, r),
                        u = l.cloneContents(),
                        c = u.childNodes[0];
                    if (
                        (u.childNodes.forEach((e) => {
                            e.textContent && '' !== e.textContent.trim() && (c = e);
                        }),
                        o)
                    ) {
                        var [f] = o,
                            _ = l.cloneRange(),
                            h = ev.toDOMNode(e, f);
                        _.setEndAfter(h), (u = _.cloneContents());
                    }
                    if (
                        (s && (c = u.querySelector('[data-slate-spacer]')),
                        Array.from(u.querySelectorAll('[data-slate-zero-width]')).forEach((e) => {
                            var t = 'n' === e.getAttribute('data-slate-zero-width');
                            e.textContent = t ? '\n' : '';
                        }),
                        z(c))
                    ) {
                        var p = c.ownerDocument.createElement('span');
                        (p.style.whiteSpace = 'pre'), p.appendChild(c), u.appendChild(p), (c = p);
                    }
                    var m = JSON.stringify(e.getFragment()),
                        g = window.btoa(encodeURIComponent(m));
                    c.setAttribute('data-slate-fragment', g), n.setData('application/'.concat(t), g);
                    var E = u.ownerDocument.createElement('div');
                    return E.appendChild(u), E.setAttribute('hidden', 'true'), u.ownerDocument.body.appendChild(E), n.setData('text/html', E.innerHTML), n.setData('text/plain', ee(E)), u.ownerDocument.body.removeChild(E), n;
                }
            }),
            (e.insertData = (t) => {
                !e.insertFragmentData(t) && e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
                var r = n.getData('application/'.concat(t)) || en(n);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return e.insertFragment(i), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData('text/plain');
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && d.YR.splitNodes(e, { always: !0 }), e.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                h.unstable_batchedUpdates(() => {
                    var n = x.get(e);
                    n && n(), r(t);
                });
            }),
            e
        );
    },
    tC = (e, t) => {
        var n = [];
        for (var [r, i] of d.ML.levels(e, { at: t })) {
            var a = ev.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
