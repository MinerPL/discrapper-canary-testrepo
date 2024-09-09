n.d(t, {
    S: function () {
        return s;
    },
    V: function () {
        return o;
    }
});
var r = n(275857),
    i = n(470079),
    a = n(721535);
function s(e) {
    let { collection: t, focusMode: n } = e,
        s = (0, a.q)(e),
        o = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        l = s.setFocusedKey;
    s.setFocusedKey = (e, i) => {
        if ('cell' === n && null != e) {
            let n = t.getItem(e);
            if ((null == n ? void 0 : n.type) === 'item') {
                var a, s;
                let o = (0, r._P)(n, t);
                e = 'last' === i ? (null === (a = (0, r.s)(o)) || void 0 === a ? void 0 : a.key) : null === (s = (0, r.l8)(o)) || void 0 === s ? void 0 : s.key;
            }
        }
        l(e, i);
    };
    let u = (0, i.useMemo)(() => new a.Z(t, s), [t, s]),
        c = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null != s.focusedKey && !t.getItem(s.focusedKey)) {
                let e;
                let n = c.current.getItem(s.focusedKey),
                    i = null != n.parentKey && ('cell' === n.type || 'rowheader' === n.type || 'column' === n.type) ? c.current.getItem(n.parentKey) : n,
                    a = c.current.rows,
                    o = t.rows,
                    l = a.length - o.length,
                    d = Math.min(l > 1 ? Math.max(i.index - l + 1, 0) : i.index, o.length - 1);
                for (; d >= 0; ) {
                    if (!u.isDisabled(o[d].key) && 'headerrow' !== o[d].type) {
                        e = o[d];
                        break;
                    }
                    d < o.length - 1 ? d++ : (d > i.index && (d = i.index), d--);
                }
                if (e) {
                    let a = e.hasChildNodes ? [...(0, r._P)(e, t)] : [],
                        o = e.hasChildNodes && i !== n && n.index < a.length ? a[n.index].key : e.key;
                    s.setFocusedKey(o);
                } else s.setFocusedKey(null);
            }
            c.current = t;
        }, [t, u, s, s.focusedKey]),
        {
            collection: t,
            disabledKeys: o,
            isKeyboardNavigationDisabled: !1,
            selectionManager: u
        }
    );
}
class o {
    *[Symbol.iterator]() {
        yield* [...this.rows];
    }
    get size() {
        return [...this.rows].length;
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
        var e;
        return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let t = [...this.rows];
        return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key;
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
        (this.keyMap = new Map()), (this.keyMap = new Map()), (this.columnCount = null == e ? void 0 : e.columnCount), (this.rows = []);
        let n = (t) => {
                let i,
                    a = this.keyMap.get(t.key);
                e.visitNode && (t = e.visitNode(t)), this.keyMap.set(t.key, t);
                let s = new Set();
                for (let e of t.childNodes) 'cell' === e.type && null == e.parentKey && (e.parentKey = t.key), s.add(e.key), i ? ((i.nextKey = e.key), (e.prevKey = i.key)) : (e.prevKey = null), n(e), (i = e);
                if ((i && (i.nextKey = null), a)) for (let e of a.childNodes) !s.has(e.key) && r(e);
            },
            r = (e) => {
                for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && r(t);
            };
        e.items.forEach((e, r) => {
            let i = {
                level: 0,
                key: 'row-' + r,
                type: 'row',
                value: void 0,
                hasChildNodes: !0,
                childNodes: [...e.childNodes],
                rendered: void 0,
                textValue: void 0,
                ...e
            };
            t ? ((t.nextKey = i.key), (i.prevKey = t.key)) : (i.prevKey = null), this.rows.push(i), n(i), (t = i);
        }),
            t && (t.nextKey = null);
    }
}
