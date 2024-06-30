r.d(e, {
    O1: function () {
        return E;
    }
});
var n = r(499833), _ = r(50074);
function a(t) {
    return new Promise((e, r) => {
        t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
    });
}
function i(t) {
    return a(t.getAllKeys());
}
function o(t) {
    let e;
    function r() {
        return void 0 == e && (e = function (t, e) {
            let r = indexedDB.open(t);
            r.onupgradeneeded = () => r.result.createObjectStore(e);
            let n = a(r);
            return t => n.then(r => t(r.transaction(e, 'readwrite').objectStore(e)));
        }(t.dbName || 'sentry-offline', t.storeName || 'queue')), e;
    }
    return {
        insert: async e => {
            try {
                var n, o, E;
                let s = await (0, _.V$)(e, t.textEncoder);
                await (n = r(), o = s, E = t.maxQueueSize || 30, n(t => i(t).then(e => {
                    if (!(e.length >= E))
                        return t.put(o, Math.max(...e, 0) + 1), a(t.transaction);
                })));
            } catch (t) {
            }
        },
        pop: async () => {
            try {
                let e = await r()(t => i(t).then(e => {
                    if (0 !== e.length)
                        return a(t.get(e[0])).then(r => (t.delete(e[0]), a(t.transaction).then(() => r)));
                }));
                if (e)
                    return (0, _.f4)(e, t.textEncoder || new TextEncoder(), t.textDecoder || new TextDecoder());
            } catch (t) {
            }
        }
    };
}
function E(t) {
    var e;
    return e = (0, n.Pd)(t), t => e({
        ...t,
        createStore: o
    });
}
