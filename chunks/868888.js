n.d(t, {
    XR: function () {
        return r;
    },
    tJ: function () {
        return d;
    }
});
Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
let r = (e) => (t, n, r) => {
    let i = r.subscribe;
    return (
        (r.subscribe = (e, t, n) => {
            let a = e;
            if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                    s = e(r.getState());
                (a = (n) => {
                    let r = e(n);
                    if (!i(s, r)) {
                        let e = s;
                        t((s = r), e);
                    }
                }),
                    (null == n ? void 0 : n.fireImmediately) && t(s, s);
            }
            return i(a);
        }),
        e(t, n, r)
    );
};
var i = Object.defineProperty,
    a = Object.getOwnPropertySymbols,
    s = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    l = (e, t, n) =>
        t in e
            ? i(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    u = (e, t) => {
        for (var n in t || (t = {})) s.call(t, n) && l(e, n, t[n]);
        if (a) for (var n of a(t)) o.call(t, n) && l(e, n, t[n]);
        return e;
    };
let c = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => c(e)(n),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => c(t)(e)
            };
        }
    },
    d = (e, t) => (n, r, i) => {
        let a,
            s,
            o = u(
                {
                    getStorage: () => localStorage,
                    serialize: JSON.stringify,
                    deserialize: JSON.parse,
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => u(u({}, t), e)
                },
                t
            );
        (o.blacklist || o.whitelist) && console.warn(`The ${o.blacklist ? 'blacklist' : 'whitelist'} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);
        let l = !1,
            d = new Set(),
            _ = new Set();
        try {
            a = o.getStorage();
        } catch (e) {}
        if (!a)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                i
            );
        !a.removeItem && console.warn(`[zustand persist middleware] The given storage for item '${o.name}' does not contain a 'removeItem' method, which will be required in v4.`);
        let E = c(o.serialize),
            f = () => {
                let e;
                let t = o.partialize(u({}, r()));
                o.whitelist &&
                    Object.keys(t).forEach((e) => {
                        var n;
                        (null == (n = o.whitelist) ? void 0 : n.includes(e)) || delete t[e];
                    }),
                    o.blacklist && o.blacklist.forEach((e) => delete t[e]);
                let n = E({
                    state: t,
                    version: o.version
                })
                    .then((e) => a.setItem(o.name, e))
                    .catch((t) => {
                        e = t;
                    });
                if (e) throw e;
                return n;
            },
            h = i.setState;
        i.setState = (e, t) => {
            h(e, t), f();
        };
        let p = e(
                (...e) => {
                    n(...e), f();
                },
                r,
                i
            ),
            m = () => {
                var e;
                if (!a) return;
                (l = !1), d.forEach((e) => e(r()));
                let t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, r())) || void 0;
                return c(a.getItem.bind(a))(o.name)
                    .then((e) => {
                        if (e) return o.deserialize(e);
                    })
                    .then((e) => {
                        if (e) {
                            if ('number' != typeof e.version || e.version === o.version) return e.state;
                            if (o.migrate) return o.migrate(e.state, e.version);
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                        }
                    })
                    .then((e) => {
                        var t;
                        return n((s = o.merge(e, null != (t = r()) ? t : p)), !0), f();
                    })
                    .then(() => {
                        null == t || t(s, void 0), (l = !0), _.forEach((e) => e(s));
                    })
                    .catch((e) => {
                        null == t || t(void 0, e);
                    });
            };
        return (
            (i.persist = {
                setOptions: (e) => {
                    (o = u(u({}, o), e)), e.getStorage && (a = e.getStorage());
                },
                clearStorage: () => {
                    var e;
                    null == (e = null == a ? void 0 : a.removeItem) || e.call(a, o.name);
                },
                rehydrate: () => m(),
                hasHydrated: () => l,
                onHydrate: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    _.add(e),
                    () => {
                        _.delete(e);
                    }
                )
            }),
            m(),
            s || p
        );
    };
