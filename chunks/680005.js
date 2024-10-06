t.d(e, {
    Y: function () {
        return h;
    },
    p: function () {
        return S;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    r = t(481060),
    a = t(100527),
    o = t(906732),
    s = t(887706),
    u = t(87484),
    c = t(703656),
    d = t(626135),
    f = t(937615),
    p = t(110742),
    m = t(981631),
    v = t(689938),
    I = t(962083);
function S(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, skuId: a, subscriptionPlan: o, icon: s, canPurchase: u, cannotPurchaseReason: c } = n;
    return u
        ? (0, l.jsx)(x, {
              appId: e,
              skuId: a,
              onClick: (n) => {
                  i(n), null == r || r();
              },
              className: t,
              children: (0, l.jsxs)('div', {
                  className: I.btnContent,
                  children: [s, v.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, f.xg)(o) })]
              })
          })
        : (0, l.jsx)(N, {
              className: t,
              children: c
          });
}
function h(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, sku: s, icon: c } = n,
        { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
        S = () => {
            (0, u.Z)({
                applicationId: e,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        h = (0, p.M)(s.id),
        g = s.type === m.epS.DURABLE && h,
        { price: T } = s;
    return null == T
        ? null
        : g
          ? (0, l.jsx)(N, {
                className: t,
                children: v.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(x, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                    (null != i ? i : S)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: I.btnContent,
                    children: [c, v.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, f.T4)(T.amount, T.currency) })]
                })
            });
}
function x(n) {
    let { appId: e, skuId: t, onClick: a, ...o } = n,
        u = (0, s.Z)();
    return (0, l.jsx)(r.Button, {
        ...o,
        onClick: (n) => {
            if (
                (d.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    r = (0, i.Ui)(l, !1);
                (0, c.uL)(r);
                return;
            }
            null == a || a(n);
        }
    });
}
function N(n) {
    let { className: e, children: t } = n;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: e,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: t
    });
}
