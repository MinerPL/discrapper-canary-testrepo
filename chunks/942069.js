n.d(t, {
    V: function () {
        return r;
    }
}),
    n(192379);
class r {
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
