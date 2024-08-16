r.d(t, {
    O1: function () {
        return s;
    }
});
var n = r(349812),
    a = r(617726),
    o = r(387486);
function i(e) {
    return new Promise((t, r) => {
        (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => r(e.error));
    });
}
function _(e) {
    return i(e.getAllKeys());
}
function E(e) {
    let t;
    function r() {
        return (
            void 0 == t &&
                (t = (function (e, t) {
                    let r = indexedDB.open(e);
                    r.onupgradeneeded = () => r.result.createObjectStore(t);
                    let n = i(r);
                    return (e) => n.then((r) => e(r.transaction(t, 'readwrite').objectStore(t)));
                })(e.dbName || 'sentry-offline', e.storeName || 'queue')),
            t
        );
    }
    return {
        push: async (t) => {
            try {
                var n, o, E;
                let s = await (0, a.V$)(t);
                await ((n = r()),
                (o = s),
                (E = e.maxQueueSize || 30),
                n((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= E)) return e.put(o, Math.max(...t, 0) + 1), i(e.transaction);
                    })
                ));
            } catch (e) {}
        },
        unshift: async (t) => {
            try {
                var n, o, E;
                let s = await (0, a.V$)(t);
                await ((n = r()),
                (o = s),
                (E = e.maxQueueSize || 30),
                n((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= E)) return e.put(o, Math.min(...t, 0) - 1), i(e.transaction);
                    })
                ));
            } catch (e) {}
        },
        shift: async () => {
            try {
                let e = await r()((e) =>
                    _(e).then((t) => {
                        let r = t[0];
                        if (null != r) return i(e.get(r)).then((t) => (e.delete(r), i(e.transaction).then(() => t)));
                    })
                );
                if (e) return (0, a.f4)(e);
            } catch (e) {}
        }
    };
}
function s(e = o.f) {
    var t;
    return (
        (t = (0, n.Pd)(e)),
        (e) =>
            t({
                ...e,
                createStore: E
            })
    );
}
