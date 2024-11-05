n.d(t, {
    E7: function () {
        return b;
    },
    Fx: function () {
        return R;
    },
    MT: function () {
        return u;
    },
    QL: function () {
        return T;
    },
    cW: function () {
        return E;
    },
    ex: function () {
        return s;
    },
    kc: function () {
        return D;
    },
    pu: function () {
        return L;
    }
});
var r = n(661763),
    i = n(192379),
    a = n(921336);
function s(e) {
    let t = (0, r.r3)(e);
    if ('virtual' === (0, a.Jz)()) {
        let n = t.activeElement;
        (0, r.QB)(() => {
            t.activeElement === n && e.isConnected && (0, r.Ao)(e);
        });
    } else (0, r.Ao)(e);
}
n(867330);
let o = i.createContext(null),
    l = null;
function u(e) {
    let { children: t, contain: n, restoreFocus: a, autoFocus: s } = e,
        u = (0, i.useRef)(null),
        c = (0, i.useRef)(null),
        d = (0, i.useRef)([]),
        { parentNode: f } = (0, i.useContext)(o) || {},
        p = (0, i.useMemo)(() => new N({ scopeRef: d }), [d]);
    (0, r.bt)(() => {
        let e = f || C.root;
        if (C.getTreeNode(e.scopeRef) && l && !v(l, e.scopeRef)) {
            let t = C.getTreeNode(l);
            t && (e = t);
        }
        e.addChild(p), C.addNode(p);
    }, [p, f]),
        (0, r.bt)(() => {
            let e = C.getTreeNode(d);
            e && (e.contain = !!n);
        }, [n]),
        (0, r.bt)(() => {
            var e;
            let t = null === (e = u.current) || void 0 === e ? void 0 : e.nextSibling,
                n = [];
            for (; t && t !== c.current; ) n.push(t), (t = t.nextSibling);
            d.current = n;
        }, [t]),
        (function (e, t, n) {
            (0, r.bt)(() => {
                if (t || n) return;
                let i = e.current,
                    a = (0, r.r3)(i ? i[0] : void 0),
                    s = (t) => {
                        let n = t.target;
                        if (m(n, e.current)) l = e;
                        else if (!g(n)) l = null;
                    };
                return (
                    a.addEventListener('focusin', s, !1),
                    null == i || i.forEach((e) => e.addEventListener('focusin', s, !1)),
                    () => {
                        a.removeEventListener('focusin', s, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', s, !1));
                    }
                );
            }, [e, t, n]);
        })(d, a, n),
        (function (e, t) {
            let n = (0, i.useRef)(),
                a = (0, i.useRef)();
            (0, r.bt)(() => {
                let i = e.current;
                if (!t) {
                    a.current && (cancelAnimationFrame(a.current), (a.current = void 0));
                    return;
                }
                let s = (0, r.r3)(i ? i[0] : void 0),
                    o = (t) => {
                        if ('Tab' !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                        let n = s.activeElement,
                            r = e.current;
                        if (!r || !m(n, r)) return;
                        let i = T(_(r), { tabbable: !0 }, r);
                        if (!n) return;
                        i.currentNode = n;
                        let a = t.shiftKey ? i.previousNode() : i.nextNode();
                        !a && ((i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling), (a = t.shiftKey ? i.previousNode() : i.nextNode())), t.preventDefault(), a && I(a, !0);
                    },
                    u = (t) => {
                        (!l || v(l, e)) && m(t.target, e.current) ? ((l = e), (n.current = t.target)) : h(e) && !g(t.target, e) ? (n.current ? n.current.focus() : l && l.current && S(l.current)) : h(e) && (n.current = t.target);
                    },
                    c = (t) => {
                        a.current && cancelAnimationFrame(a.current),
                            (a.current = requestAnimationFrame(() => {
                                if (s.activeElement && h(e) && !g(s.activeElement, e)) {
                                    if (((l = e), s.body.contains(t.target))) {
                                        var r;
                                        (n.current = t.target), null === (r = n.current) || void 0 === r || r.focus();
                                    } else l.current && S(l.current);
                                }
                            }));
                    };
                return (
                    s.addEventListener('keydown', o, !1),
                    s.addEventListener('focusin', u, !1),
                    null == i || i.forEach((e) => e.addEventListener('focusin', u, !1)),
                    null == i || i.forEach((e) => e.addEventListener('focusout', c, !1)),
                    () => {
                        s.removeEventListener('keydown', o, !1), s.removeEventListener('focusin', u, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', u, !1)), null == i || i.forEach((e) => e.removeEventListener('focusout', c, !1));
                    }
                );
            }, [e, t]),
                (0, r.bt)(
                    () => () => {
                        a.current && cancelAnimationFrame(a.current);
                    },
                    [a]
                );
        })(d, n),
        (function (e, t, n) {
            let a = (0, i.useRef)('undefined' != typeof document ? (0, r.r3)(e.current ? e.current[0] : void 0).activeElement : null);
            (0, r.bt)(() => {
                let i = e.current,
                    a = (0, r.r3)(i ? i[0] : void 0);
                if (!t || n) return;
                let s = () => {
                    (!l || v(l, e)) && m(a.activeElement, e.current) && (l = e);
                };
                return (
                    a.addEventListener('focusin', s, !1),
                    null == i || i.forEach((e) => e.addEventListener('focusin', s, !1)),
                    () => {
                        a.removeEventListener('focusin', s, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', s, !1));
                    }
                );
            }, [e, n]),
                (0, r.bt)(() => {
                    let i = (0, r.r3)(e.current ? e.current[0] : void 0);
                    if (!t) return;
                    let a = (t) => {
                        if ('Tab' !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                        let n = i.activeElement;
                        if (!m(n, e.current)) return;
                        let r = C.getTreeNode(e);
                        if (!r) return;
                        let a = r.nodeToRestore,
                            s = T(i.body, { tabbable: !0 });
                        s.currentNode = n;
                        let o = t.shiftKey ? s.previousNode() : s.nextNode();
                        if (((!a || !i.body.contains(a) || a === i.body) && ((a = void 0), (r.nodeToRestore = void 0)), (!o || !m(o, e.current)) && a)) {
                            s.currentNode = a;
                            do o = t.shiftKey ? s.previousNode() : s.nextNode();
                            while (m(o, e.current));
                            if ((t.preventDefault(), t.stopPropagation(), o)) I(o, !0);
                            else if (g(a)) I(a, !0);
                            else n.blur();
                        }
                    };
                    return (
                        !n && i.addEventListener('keydown', a, !0),
                        () => {
                            !n && i.removeEventListener('keydown', a, !0);
                        }
                    );
                }, [e, t, n]),
                (0, r.bt)(() => {
                    var n;
                    let i = (0, r.r3)(e.current ? e.current[0] : void 0);
                    if (!t) return;
                    let s = C.getTreeNode(e);
                    if (s)
                        return (
                            (s.nodeToRestore = null !== (n = a.current) && void 0 !== n ? n : void 0),
                            () => {
                                let n = C.getTreeNode(e);
                                if (!n) return;
                                let r = n.nodeToRestore;
                                if (
                                    t &&
                                    r &&
                                    (m(i.activeElement, e.current) ||
                                        (i.activeElement === i.body &&
                                            (function (e) {
                                                let t = C.getTreeNode(l);
                                                for (; t && t.scopeRef !== e; ) {
                                                    if (t.nodeToRestore) return !1;
                                                    t = t.parent;
                                                }
                                                return (null == t ? void 0 : t.scopeRef) === e;
                                            })(e)))
                                ) {
                                    let t = C.clone();
                                    requestAnimationFrame(() => {
                                        if (i.activeElement === i.body) {
                                            let n = t.getTreeNode(e);
                                            for (; n; ) {
                                                if (n.nodeToRestore && n.nodeToRestore.isConnected) {
                                                    I(n.nodeToRestore);
                                                    return;
                                                }
                                                n = n.parent;
                                            }
                                            for (n = t.getTreeNode(e); n; ) {
                                                if (n.scopeRef && n.scopeRef.current && C.getTreeNode(n.scopeRef)) {
                                                    S(n.scopeRef.current, !0);
                                                    return;
                                                }
                                                n = n.parent;
                                            }
                                        }
                                    });
                                }
                            }
                        );
                }, [e, t]);
        })(d, a, n),
        (function (e, t) {
            let n = i.useRef(t);
            (0, i.useEffect)(() => {
                n.current && ((l = e), !m((0, r.r3)(e.current ? e.current[0] : void 0).activeElement, l.current) && e.current && S(e.current)), (n.current = !1);
            }, [e]);
        })(d, s),
        (0, i.useEffect)(() => {
            let e = (0, r.r3)(d.current ? d.current[0] : void 0).activeElement,
                t = null;
            if (m(e, d.current)) {
                for (let n of C.traverse()) n.scopeRef && m(e, n.scopeRef.current) && (t = n);
                t === C.getTreeNode(d) && (l = t.scopeRef);
            }
        }, [d]),
        (0, r.bt)(
            () => () => {
                var e, t, n;
                let r = null !== (n = null === (t = C.getTreeNode(d)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
                (d === l || v(d, l)) && (!r || C.getTreeNode(r)) && (l = r), C.removeTreeNode(d);
            },
            [d]
        );
    let E = (0, i.useMemo)(
            () =>
                (function (e) {
                    return {
                        focusNext(t = {}) {
                            let n = e.current,
                                { from: i, tabbable: a, wrap: s, accept: o } = t,
                                l = i || (0, r.r3)(n[0]).activeElement,
                                u = n[0].previousElementSibling,
                                c = T(
                                    _(n),
                                    {
                                        tabbable: a,
                                        accept: o
                                    },
                                    n
                                );
                            c.currentNode = m(l, n) ? l : u;
                            let d = c.nextNode();
                            return !d && s && ((c.currentNode = u), (d = c.nextNode())), d && I(d, !0), d;
                        },
                        focusPrevious(t = {}) {
                            let n = e.current,
                                { from: i, tabbable: a, wrap: s, accept: o } = t,
                                l = i || (0, r.r3)(n[0]).activeElement,
                                u = n[n.length - 1].nextElementSibling,
                                c = T(
                                    _(n),
                                    {
                                        tabbable: a,
                                        accept: o
                                    },
                                    n
                                );
                            c.currentNode = m(l, n) ? l : u;
                            let d = c.previousNode();
                            return !d && s && ((c.currentNode = u), (d = c.previousNode())), d && I(d, !0), d;
                        },
                        focusFirst(t = {}) {
                            let n = e.current,
                                { tabbable: r, accept: i } = t,
                                a = T(
                                    _(n),
                                    {
                                        tabbable: r,
                                        accept: i
                                    },
                                    n
                                );
                            a.currentNode = n[0].previousElementSibling;
                            let s = a.nextNode();
                            return s && I(s, !0), s;
                        },
                        focusLast(t = {}) {
                            let n = e.current,
                                { tabbable: r, accept: i } = t,
                                a = T(
                                    _(n),
                                    {
                                        tabbable: r,
                                        accept: i
                                    },
                                    n
                                );
                            a.currentNode = n[n.length - 1].nextElementSibling;
                            let s = a.previousNode();
                            return s && I(s, !0), s;
                        }
                    };
                })(d),
            []
        ),
        b = (0, i.useMemo)(
            () => ({
                focusManager: E,
                parentNode: p
            }),
            [p, E]
        );
    return i.createElement(
        o.Provider,
        { value: b },
        i.createElement('span', {
            'data-focus-scope-start': !0,
            hidden: !0,
            ref: u
        }),
        t,
        i.createElement('span', {
            'data-focus-scope-end': !0,
            hidden: !0,
            ref: c
        })
    );
}
let c = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'],
    d = c.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
c.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let f = c.join(':not([hidden]):not([tabindex="-1"]),');
function _(e) {
    return e[0].parentElement;
}
function h(e) {
    let t = C.getTreeNode(l);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function p(e) {
    return g(e);
}
function m(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function g(e, t = null) {
    if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
    for (let { scopeRef: n } of C.traverse(C.getTreeNode(t))) if (n && m(e, n.current)) return !0;
    return !1;
}
function E(e) {
    return g(e, l);
}
function v(e, t) {
    var n;
    let r = null === (n = C.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function I(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch (e) {}
    } else
        try {
            s(e);
        } catch (e) {}
}
function S(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = _(e),
        i = T(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    t && !a && (((i = T((r = _(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), I(a);
}
function T(e, t, n) {
    let i = (null == t ? void 0 : t.tabbable) ? f : d,
        a = (0, r.r3)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var a;
                return (null == t ? void 0 : null === (a = t.from) || void 0 === a ? void 0 : a.contains(e))
                    ? NodeFilter.FILTER_REJECT
                    : e.matches(i) &&
                        (function e(t, n) {
                            var i, a;
                            return (
                                '#comment' !== t.nodeName &&
                                (function (e) {
                                    let t = (0, r.kR)(e);
                                    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                                    let { display: n, visibility: i } = e.style,
                                        a = 'none' !== n && 'hidden' !== i && 'collapse' !== i;
                                    if (a) {
                                        let { getComputedStyle: t } = e.ownerDocument.defaultView,
                                            { display: n, visibility: r } = t(e);
                                        a = 'none' !== n && 'hidden' !== r && 'collapse' !== r;
                                    }
                                    return a;
                                })(t) &&
                                ((i = t), (a = n), !i.hasAttribute('hidden') && ('DETAILS' !== i.nodeName || !a || 'SUMMARY' === a.nodeName || i.hasAttribute('open'))) &&
                                (!t.parentElement || e(t.parentElement, t))
                            );
                        })(e) &&
                        (!n || m(e, n)) &&
                        (!(null == t ? void 0 : t.accept) || t.accept(e))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            }
        });
    return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a;
}
function b(e, t = {}) {
    return {
        focusNext(n = {}) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: s = t.tabbable, wrap: o = t.wrap, accept: l = t.accept } = n,
                u = a || (0, r.r3)(i).activeElement,
                c = T(i, {
                    tabbable: s,
                    accept: l
                });
            i.contains(u) && (c.currentNode = u);
            let d = c.nextNode();
            return !d && o && ((c.currentNode = i), (d = c.nextNode())), d && I(d, !0), d;
        },
        focusPrevious(n = t) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: s = t.tabbable, wrap: o = t.wrap, accept: l = t.accept } = n,
                u = a || (0, r.r3)(i).activeElement,
                c = T(i, {
                    tabbable: s,
                    accept: l
                });
            if (i.contains(u)) c.currentNode = u;
            else {
                let e = y(c);
                return e && I(e, !0), null != e ? e : null;
            }
            let d = c.previousNode();
            if (!d && o) {
                c.currentNode = i;
                let e = y(c);
                if (!e) return null;
                d = e;
            }
            return d && I(d, !0), null != d ? d : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                s = T(r, {
                    tabbable: i,
                    accept: a
                }).nextNode();
            return s && I(s, !0), s;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                s = y(
                    T(r, {
                        tabbable: i,
                        accept: a
                    })
                );
            return s && I(s, !0), null != s ? s : null;
        }
    };
}
function y(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class A {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new N({ scopeRef: e });
        r.addChild(i), (i.parent = r), this.fastMap.set(e, i), n && (i.nodeToRestore = n);
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e);
    }
    removeTreeNode(e) {
        if (null === e) return;
        let t = this.fastMap.get(e);
        if (!t) return;
        let n = t.parent;
        for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && m(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new A();
        for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new N({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class N {
    addChild(e) {
        this.children.add(e), (e.parent = this);
    }
    removeChild(e) {
        this.children.delete(e), (e.parent = void 0);
    }
    constructor(e) {
        (this.children = new Set()), (this.contain = !1), (this.scopeRef = e.scopeRef);
    }
}
let C = new A();
function R(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: r } = e,
        s = (0, i.useRef)({
            isFocused: !1,
            isFocusVisible: t || (0, a.E)()
        }),
        [o, l] = (0, i.useState)(!1),
        [u, c] = (0, i.useState)(() => s.current.isFocused && s.current.isFocusVisible),
        d = (0, i.useCallback)(() => c(s.current.isFocused && s.current.isFocusVisible), []),
        f = (0, i.useCallback)(
            (e) => {
                (s.current.isFocused = e), l(e), d();
            },
            [d]
        );
    (0, a.mG)(
        (e) => {
            (s.current.isFocusVisible = e), d();
        },
        [],
        { isTextInput: n }
    );
    let { focusProps: _ } = (0, a.KK)({
            isDisabled: r,
            onFocusChange: f
        }),
        { focusWithinProps: h } = (0, a.L_)({
            isDisabled: !r,
            onFocusWithinChange: f
        });
    return {
        isFocused: o,
        isFocusVisible: u,
        focusProps: r ? h : _
    };
}
let O = i.createContext(null);
function D(e, t) {
    let { focusProps: n } = (0, a.KK)(e),
        { keyboardProps: o } = (0, a.v5)(e),
        l = (0, r.dG)(n, o),
        u = (function (e) {
            let t = (0, i.useContext)(O) || {};
            (0, r.lE)(t, e);
            let { ref: n, ...a } = t;
            return a;
        })(t),
        c = e.isDisabled ? {} : u,
        d = (0, i.useRef)(e.autoFocus);
    return (
        (0, i.useEffect)(() => {
            d.current && t.current && s(t.current), (d.current = !1);
        }, [t]),
        {
            focusableProps: (0, r.dG)(
                {
                    ...l,
                    tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                },
                c
            )
        }
    );
}
function L(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [a, s] = (0, i.useState)(!1);
    return (
        (0, r.bt)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && s(!!T(e.current, { tabbable: !0 }).nextNode());
                };
                t();
                let n = new MutationObserver(t);
                return (
                    n.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ['tabIndex', 'disabled']
                    }),
                    () => {
                        n.disconnect();
                    }
                );
            }
        }),
        !n && a
    );
}
