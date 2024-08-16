n.d(t, {
    T: function () {
        return s;
    }
}),
    n(47120),
    n(653041);
var r = n(887490);
let i = new WeakMap(),
    a = new WeakMap(),
    s = {
        isMerging(e) {
            var t;
            return null === (t = a.get(e)) || void 0 === t || t;
        },
        isSaving(e) {
            var t;
            return null === (t = i.get(e)) || void 0 === t || t;
        },
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            a.set(e, !1);
            try {
                t();
            } finally {
                a.set(e, n);
            }
        },
        withoutSaving(e, t) {
            let n = this.isSaving(e);
            i.set(e, !1);
            try {
                t();
            } finally {
                i.set(e, n);
            }
        },
        withSingleEntry: (e, t) => o(e, 'other', !1, t),
        withMergedEntry: (e, t) => o(e, 'other', !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = s.currentEntry(e);
            s.isMerging(e) && (null == r ? void 0 : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0;
            (a = null != a ? a : e.selection), (i = null != i ? i : r.bN.richValue(e));
            let { history: o } = e,
                l = s.currentEntry(e);
            for (null != l && (l.mergeable = !1), o.stack.length > 0 && (o.stack.length = o.index + 1); o.stack.length >= 250; ) o.stack.shift();
            o.stack.push({
                type: t,
                mergeable: n,
                createdAt: Date.now(),
                value: i,
                selection: a
            }),
                (o.index = o.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = r.bN.richValue(e),
                a = s.currentEntry(e);
            null != a && ((a.value = i), (a.selection = n), !t && (a.mergeable = !1));
        }
    };
function o(e, t, n, a) {
    let o = e.children,
        l = e.selection,
        u = s.isSaving(e);
    i.set(e, !1);
    try {
        let i = a();
        return u && (n ? s.mergeEntry(e) : e.children !== o ? s.insertEntry(e, t, !1) : s.isMerging(e) && null != e.selection && (null == l || !r.M8.equals(e.selection, l)) && s.mergeEntry(e)), i;
    } finally {
        i.set(e, u);
    }
}
