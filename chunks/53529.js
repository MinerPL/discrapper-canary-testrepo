n.d(t, {
    T: function () {
        return o;
    }
}), n(47120), n(653041);
var r = n(887490);
let i = new WeakMap(), a = new WeakMap(), o = {
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
        withSingleEntry: (e, t) => s(e, 'other', !1, t),
        withMergedEntry: (e, t) => s(e, 'other', !0, t),
        currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], r = o.currentEntry(e);
            o.isMerging(e) && (null == r ? void 0 : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], i = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0;
            a = null != a ? a : e.selection, i = null != i ? i : r.bN.richValue(e);
            let {history: s} = e, l = o.currentEntry(e);
            for (null != l && (l.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1); s.stack.length >= 250;)
                s.stack.shift();
            s.stack.push({
                type: t,
                mergeable: n,
                createdAt: Date.now(),
                value: i,
                selection: a
            }), s.index = s.stack.length - 1;
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {selection: n} = e, i = r.bN.richValue(e), a = o.currentEntry(e);
            null != a && (a.value = i, a.selection = n, !t && (a.mergeable = !1));
        }
    };
function s(e, t, n, a) {
    let s = e.children, l = e.selection, u = o.isSaving(e);
    i.set(e, !1);
    try {
        let i = a();
        return u && (n ? o.mergeEntry(e) : e.children !== s ? o.insertEntry(e, t, !1) : o.isMerging(e) && null != e.selection && (null == l || !r.M8.equals(e.selection, l)) && o.mergeEntry(e)), i;
    } finally {
        i.set(e, u);
    }
}
