n.d(t, {
    n_: function () {
        return o;
    }
});
var r = n(192379),
    i = n(398928),
    a = n(989103);
class s {
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
function o(e) {
    let { filter: t } = e,
        n = (0, i.q)(e),
        o = (0, r.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        l = (0, r.useCallback)((e) => new s(t ? t(e) : e), [t]),
        u = (0, r.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning]),
        c = (0, a.Kx)(e, l, u),
        d = (0, r.useMemo)(() => new i.Z(c, n), [c, n]),
        f = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
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
            disabledKeys: o,
            selectionManager: d
        }
    );
}
