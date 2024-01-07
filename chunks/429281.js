function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    }), i("222007"), i("424973"), i("70102");
    var n = i("349807"),
        r = i("244639");
    async function a(t, e, i, a, s) {
        let o = s;
        if (null == o) {
            let t = await fetch(a);
            if (!t.ok) throw Error("Error fetching sticker at ".concat(a));
            o = await t.text()
        }
        if (null == o) return null;
        await (0, r.initialize)();
        let l = new r.default(o);
        return new n.default(l, t, e, i)
    }
    var s = new class t {
        create(t, e, i, n, r) {
            let s = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
            return this.getCached(t).then(o => {
                var l;
                if (this.referenceCounts.set(t, (null !== (l = this.referenceCounts.get(t)) && void 0 !== l ? l : 0) + 1), o) return o;
                let u = {
                    key: t,
                    promise: a(t, e, i, n, r)
                };
                return s && (this.entries.push(u), u.promise.then(e => (null == e && this.removeEntry(t), e)).catch(e => this.removeEntry(t)), this.entries.length > 50 && this.removeEntryAt(0)), u.promise
            })
        }
        drop(t) {
            this.removeEntry(t)
        }
        getCached(t) {
            let e = this.entries.findIndex(e => e.key === t);
            if (e >= 0) {
                let t = this.entries[e];
                return this.entries.splice(e, 1), this.entries.push(t), t.promise.then(t => (null == t && this.removeEntryAt(e), t))
            }
            return Promise.resolve(null)
        }
        removeEntry(t) {
            let e = this.entries.findIndex(e => e.key === t);
            if (!(e >= 0)) return null;
            this.removeEntryAt(e)
        }
        removeEntryAt(t) {
            let e = this.entries[t],
                i = this.referenceCounts.get(e.key);
            return null != i && i > 1 ? (this.referenceCounts.set(e.key, i - 1), null) : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then(t => null == t ? void 0 : t.drop()), e)
        }
        constructor() {
            this.entries = [], this.referenceCounts = new Map
        }
    }
}