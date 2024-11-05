n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(954955),
    l = n.n(r),
    s = n(772848),
    a = n(902704),
    u = n(13245),
    c = n(928518),
    d = n(358085),
    h = n(561064),
    f = n(501787);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let v = o.createContext(
    new (class e {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = c.Z.getWindow(f.$J);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: m(null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t ? t : (0, s.Z)(), i)
            }),
                this.elements.add(e),
                this.resizeObserver.observe(e),
                this.globalUpdate();
        }
        unobserve(e) {
            var t;
            null != this.zones.get(e) && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.globalUpdate());
        }
        updateZones() {
            if (!d.isPlatformEmbedded) return;
            let e = c.Z.getWindow(f.$J);
            null != e &&
                u.Z.setClickZones(
                    Array.from(this.zones.values()).map((t) => {
                        let { zone: n } = t;
                        return {
                            name: n.name,
                            left: n.left / e.innerWidth,
                            top: n.top / e.innerHeight,
                            right: n.right / e.innerWidth,
                            bottom: n.bottom / e.innerHeight
                        };
                    })
                );
        }
        cleanUp() {
            var e, t;
            this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), this.updateZones();
        }
        constructor(e) {
            p(this, 'resizeObserver', void 0),
                p(this, 'mutationObserver', void 0),
                p(this, 'zones', new Map()),
                p(this, 'elements', new Set()),
                p(this, 'window', void 0),
                p(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                p(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                p(
                    this,
                    'globalUpdate',
                    l()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let i = t.getBoundingClientRect(),
                                    o = m(n.zone.name, i);
                                if (!(0, a.Z)(o, n.zone))
                                    (e = !0),
                                        (n = {
                                            element: n.element,
                                            zone: o
                                        }),
                                        this.zones.set(t, n);
                            }
                            e && this.updateZones();
                        },
                        500,
                        {
                            trailing: !0,
                            maxWait: 1000
                        }
                    )
                ),
                (this.window = e);
        }
    })((0, h.i)())
);
function g(e) {
    let { observe: t = !0, className: n, children: r } = e,
        l = o.useContext(v),
        [{ refHandler: s, setObserve: a }] = o.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? l.observe(e) : l.unobserve(e));
                },
                refHandler(t) {
                    null != e && l.unobserve(e), (e = t);
                }
            };
        });
    return (
        o.useLayoutEffect(() => {
            a(t);
        }, [t, a]),
        (0, i.jsx)('div', {
            ref: s,
            className: n,
            'data-click-zone': !0,
            children: r
        })
    );
}
