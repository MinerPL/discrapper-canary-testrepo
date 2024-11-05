t.d(e, {
    Y: function () {
        return I;
    },
    p: function () {
        return S;
    }
});
var l = t(200651);
t(192379);
var i = t(860911),
    r = t(481060),
    o = t(100527),
    a = t(906732),
    s = t(887706),
    u = t(929011),
    c = t(696906),
    d = t(703656),
    p = t(626135),
    f = t(937615),
    v = t(110742),
    m = t(981631),
    h = t(388032),
    x = t(962083);
function S(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, skuId: o, subscriptionPlan: a, icon: s, cannotOpenReason: u } = n,
        d = null != a ? (0, f.xg)(a) : null,
        p = null == u || u === c.HO.Loading,
        v = (0, c.FC)(u, null != d ? d : '');
    return p
        ? (0, l.jsx)(g, {
              appId: e,
              skuId: o,
              onClick: (n) => {
                  i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)('div', {
                  className: x.btnContent,
                  children: [s, null != d ? h.intl.formatToPlainString(h.t.i4T8v7, { rate: d }) : h.intl.string(h.t.uuzaAA)]
              })
          })
        : (0, l.jsx)(Z, {
              className: t,
              children: v
          });
}
function I(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, sku: s, icon: c } = n,
        { analyticsLocations: d } = (0, a.ZP)(o.Z.APP_STOREFRONT),
        p = () => {
            (0, u.r)({
                appId: e,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        S = (0, v.M)(s.id),
        I = s.type === m.epS.DURABLE && S,
        { price: T } = s;
    return null == T
        ? null
        : I
          ? (0, l.jsx)(Z, {
                className: t,
                children: h.intl.string(h.t['/bUsx8'])
            })
          : (0, l.jsx)(g, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                    (null != i ? i : p)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: x.btnContent,
                    children: [c, h.intl.format(h.t.Xp5WTk, { price: (0, f.T4)(T.amount, T.currency) })]
                })
            });
}
function g(n) {
    let { appId: e, skuId: t, onClick: o, ...a } = n,
        u = (0, s.Z)();
    return (0, l.jsx)(r.Button, {
        ...a,
        onClick: (n) => {
            if (
                (p.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    r = (0, i.Ui)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == o || o(n);
        }
    });
}
function Z(n) {
    let { className: e, children: t } = n;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: e,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: t
    });
}
