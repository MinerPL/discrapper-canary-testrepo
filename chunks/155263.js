n.d(t, {
    BA: function () {
        return l;
    },
    DC: function () {
        return o;
    }
});
var r = n(398928),
    i = n(192379),
    a = n(989103),
    s = n(239700);
class o {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        return t ? t.prevKey : null;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        return t ? t.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        let t;
        (this.keyMap = new Map()), (this.iterable = e);
        let n = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && 'section' === e.type)) for (let t of e.childNodes) n(t);
        };
        for (let t of e) n(t);
        let r = 0;
        for (let [e, n] of this.keyMap) t ? ((t.nextKey = e), (n.prevKey = t.key)) : ((this.firstKey = e), (n.prevKey = void 0)), 'item' === n.type && (n.index = r++), ((t = n).nextKey = void 0);
        this.lastKey = null == t ? void 0 : t.key;
    }
}
function l(e) {
    var t;
    let [n, l] = (0, s.zk)(e.selectedKey, null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : null, e.onSelectionChange),
        u = (0, i.useMemo)(() => (null != n ? [n] : []), [n]),
        {
            collection: c,
            disabledKeys: d,
            selectionManager: f
        } = (function (e) {
            let { filter: t } = e,
                n = (0, r.q)(e),
                s = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                l = (0, i.useCallback)((e) => new o(t ? t(e) : e), [t]),
                u = (0, i.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning]),
                c = (0, a.Kx)(e, l, u),
                d = (0, i.useMemo)(() => new r.Z(c, n), [c, n]),
                f = (0, i.useRef)(null);
            return (
                (0, i.useEffect)(() => {
                    if (null != n.focusedKey && !c.getItem(n.focusedKey)) {
                        let e;
                        let t = f.current.getItem(n.focusedKey),
                            r = [...f.current.getKeys()]
                                .map((e) => {
                                    let t = f.current.getItem(e);
                                    return 'item' === t.type ? t : null;
                                })
                                .filter((e) => null !== e),
                            i = [...c.getKeys()]
                                .map((e) => {
                                    let t = c.getItem(e);
                                    return 'item' === t.type ? t : null;
                                })
                                .filter((e) => null !== e),
                            a = r.length - i.length,
                            s = Math.min(a > 1 ? Math.max(t.index - a + 1, 0) : t.index, i.length - 1);
                        for (; s >= 0; ) {
                            if (!d.isDisabled(i[s].key)) {
                                e = i[s];
                                break;
                            }
                            s < i.length - 1 ? s++ : (s > t.index && (s = t.index), s--);
                        }
                        n.setFocusedKey(e ? e.key : null);
                    }
                    f.current = c;
                }, [c, d, n, n.focusedKey]),
                {
                    collection: c,
                    disabledKeys: s,
                    selectionManager: d
                }
            );
        })({
            ...e,
            selectionMode: 'single',
            disallowEmptySelection: !0,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: u,
            onSelectionChange: (t) => {
                var r;
                let i = null !== (r = t.values().next().value) && void 0 !== r ? r : null;
                i === n && e.onSelectionChange && e.onSelectionChange(i), l(i);
            }
        }),
        _ = null != n ? c.getItem(n) : null;
    return {
        collection: c,
        disabledKeys: d,
        selectionManager: f,
        selectedKey: n,
        setSelectedKey: l,
        selectedItem: _
    };
}
