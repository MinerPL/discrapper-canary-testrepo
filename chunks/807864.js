function r(e) {
    let t = Promise.resolve(null), n = [], r = !1, {
            onContention: i,
            onContentionResolved: a,
            onTimeout: o,
            timeoutMs: s
        } = e, l = function (e, l) {
            n.length > 0 ? (i(l, n), r = !0) : r && (a(), r = !1), n.push(l);
            let u = null == s || null == o ? null : setTimeout(() => o(l, n), s);
            return new Promise((r, i) => {
                t = t.then(e).then(r, i).then(() => n.splice(0, 1)), null != u && (t = t.then(() => clearTimeout(u)));
            });
        };
    return l.isMutexHeld = () => n.length > 0, l.getLockHolders = () => n, l;
}
n.d(t, {
    H: function () {
        return r;
    }
}), n(653041);
