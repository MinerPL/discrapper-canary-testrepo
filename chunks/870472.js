n.d(t, {
    Q: function () {
        return c;
    },
    V: function () {
        return o;
    }
}),
    n(47120),
    n(653041),
    n(177593);
var s = n(470079),
    a = n(348327),
    i = n.n(a),
    r = n(699581),
    l = n(596390);
function o(e) {
    let [t, n] = s.useState([e]),
        [a, r] = s.useState(0),
        l = s.useMemo(() => t[a], [t, a]),
        o = s.useCallback(
            (e) => {
                let s = e(l);
                if (i()(l, s)) return;
                let o = t.slice(0, a + 1);
                o.push(s), n(o), r(o.length - 1);
            },
            [a, l, t]
        ),
        c = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, a - e);
                return r(n), t[n];
            },
            [a, t]
        );
    return {
        state: l,
        setState: o,
        goBack: c,
        goForward: s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, a + e);
                return r(n), t[n];
            },
            [a, t]
        )
    };
}
function c(e, t) {
    let { scrollerRef: n, mainInputRef: a, mainContainerRef: i } = t,
        {
            state: { value: o, tags: c, selections: d },
            setState: u,
            goBack: _,
            goForward: I
        } = e;
    s.useLayoutEffect(() => {
        let e = (e) => (t) => {
                ('Meta' === t.key || 'Control' === t.key) &&
                    u((t) => ({
                        ...t,
                        isSelecting: e
                    }));
            },
            t = e(!0),
            n = e(!1);
        return (
            document.addEventListener('keydown', t),
            document.addEventListener('keyup', n),
            () => {
                document.removeEventListener('keydown', t), document.removeEventListener('keyup', n);
            }
        );
    }, [u]);
    let E = s.useCallback(
            (e) => {
                var t, s;
                let a = (null !== (s = e.clipboardData.getData('text')) && void 0 !== s ? s : '')
                    .split(l.uz)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0);
                if (!(a.length <= 1))
                    (0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: [...t, ...a],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        e.preventDefault(),
                        e.stopPropagation(),
                        null === (t = n.current) || void 0 === t || t.scrollToBottom();
            },
            [u, n]
        ),
        T = s.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: s } = t;
                    return {
                        value: s,
                        tags: [...n.filter((t, n) => n !== e)],
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        m = s.useCallback(
            (e) => (t) => {
                u((n) => {
                    let { tags: s, value: a } = n,
                        i = [...s];
                    return (
                        (i[e] = t),
                        {
                            value: a,
                            tags: i,
                            selections: [],
                            isSelecting: !1
                        }
                    );
                });
            },
            [u]
        ),
        N = s.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: s, selections: a, isSelecting: i } = t;
                    return {
                        value: s,
                        tags: n,
                        selections: [...a, n[e]],
                        isSelecting: i
                    };
                });
            },
            [u]
        ),
        S = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u((n) => {
                    let { tags: s, value: a, selections: i, isSelecting: r } = n;
                    return {
                        value: a,
                        tags: s,
                        selections: t ? [] : i.filter((t) => t !== s[e]),
                        isSelecting: r
                    };
                });
            },
            [u]
        ),
        h = s.useCallback(
            (e) => {
                var t;
                u((e) => {
                    let { tags: t, value: n } = e;
                    return {
                        value: n,
                        tags: t,
                        selections: [],
                        isSelecting: !1
                    };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    null === (t = a.current) || void 0 === t || t.focus();
            },
            [a, u]
        ),
        g = s.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n } = t;
                    return {
                        value: e.target.value,
                        tags: n,
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        C = s.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!(o.trim().length <= 0))
                    (0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t } = e;
                            return {
                                value: '',
                                tags: [...t, o],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        s && null != n.current && n.current.scrollToBottom(),
                        t && (e.preventDefault(), e.stopPropagation());
            },
            [n, u, o]
        ),
        x = s.useCallback(
            (e) => {
                let t = o.trim().length <= 0;
                if (d.length > 0) {
                    var n;
                    (0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n, selections: s } = e;
                            return {
                                value: n,
                                tags: t.filter((e) => !s.includes(e)),
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        null === (n = a.current) || void 0 === n || n.focus(),
                        e.preventDefault(),
                        e.stopPropagation();
                } else
                    t &&
                        ((0, r.flushSync)(() => {
                            u((e) => {
                                let { tags: t } = e,
                                    n = [...t],
                                    s = n.pop();
                                return {
                                    value: null != s ? s : '',
                                    tags: [...n],
                                    selections: [],
                                    isSelecting: !1
                                };
                            });
                        }),
                        e.preventDefault(),
                        e.stopPropagation());
            },
            [a, d.length, u, o]
        ),
        p = s.useCallback(
            (e) => {
                var t, n, s, i;
                let r = e.metaKey || e.ctrlKey;
                'z' === e.key && r ? (_().selections.length > 0 ? null === (t = a.current) || void 0 === t || t.blur() : null === (n = a.current) || void 0 === n || n.focus(), e.preventDefault(), e.stopPropagation()) : 'y' === e.key && r && (I().selections.length > 0 ? null === (s = a.current) || void 0 === s || s.blur() : null === (i = a.current) || void 0 === i || i.focus(), e.preventDefault(), e.stopPropagation());
            },
            [_, I, a]
        ),
        R = s.useCallback(
            (e) => {
                var t;
                let n = o.trim().length > 0,
                    { selectionStart: s = 0, selectionEnd: l = 0 } = null !== (t = a.current) && void 0 !== t ? t : {};
                if (0 !== c.length && (!n || !!(s !== l)))
                    (0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: t,
                                selections: [...t],
                                isSelecting: !1
                            };
                        });
                    }),
                        setImmediate(() => {
                            var e;
                            null === (e = a.current) || void 0 === e || e.blur(),
                                setTimeout(() => {
                                    var e;
                                    null === (e = i.current) || void 0 === e || e.focus();
                                }, 16);
                        }),
                        e.preventDefault(),
                        e.stopPropagation();
            },
            [i, a, u, c.length, o]
        ),
        f = s.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && C(e, !1, !1);
            },
            [C]
        ),
        L = s.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                if ('Meta' !== e.key) l.ye.has(e.key) ? C(e) : 'Backspace' === e.key ? x(e) : 'Escape' === e.key ? h(e) : 'a' === e.key && t ? R(e) : l.Bd.has(e.key) && t && p(e);
            },
            [C, x, h, R, p]
        );
    return {
        handlePasteEvent: E,
        handleInputChange: g,
        handleKeyDown: L,
        handleContainerKeyUp: s.useCallback(
            (e) => {
                if (document.activeElement !== i.current) return;
                let t = e.metaKey || e.ctrlKey;
                'Backspace' === e.key ? x(e) : 'a' === e.key && t ? R(e) : 'Escape' === e.key ? h(e) : l.Bd.has(e.key) && t ? p(e) : 'Meta' !== e.key && h(e);
            },
            [p, x, R, h, i]
        ),
        handleRemoveTag: T,
        handleTagChangeEvent: m,
        handleSelectTag: N,
        handleUnselectTag: S,
        handleResetTagSelections: h,
        handleInputBlurEvent: f
    };
}
