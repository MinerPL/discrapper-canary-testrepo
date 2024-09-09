t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var a = t(772848),
    l = t(481060),
    r = t(976255),
    i = t(667),
    o = t(335131),
    d = t(626135),
    c = t(409813),
    u = t(608579),
    E = t(981631);
let h = 'payment-modal',
    C = new Set([c.h8.REVIEW, c.h8.CONFIRM]);
function f(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: f, onClose: x, onComplete: p, analyticsLocations: m, analyticsObject: T } = e,
        I = !1,
        S = (0, a.Z)(),
        v = (e) => {
            n = e;
        };
    (0, l.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: a, ...l } = e;
            return (0, s.jsx)(u.Z, {
                ...l,
                loadId: S,
                skuId: t,
                isGift: c,
                giftMessage: f,
                analyticsLocations: m,
                onClose: (e) => {
                    n(), null == x || x(e);
                },
                onComplete: () => {
                    (I = !0), null == p || p();
                },
                returnRef: a,
                onStepChange: v
            });
        },
        {
            modalKey: h,
            onCloseCallback: () => {
                !I &&
                    d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: E.Zuq[E.GZQ.ONE_TIME],
                        location: T,
                        is_gift: c,
                        location_stack: m
                    }),
                    (0, r.fw)(),
                    (0, i.p)(),
                    null == x || x(I),
                    I && (0, o.qg)();
            },
            onCloseRequest: () => {
                null != n && C.has(n) && (0, l.closeModal)(h);
            }
        }
    );
}
