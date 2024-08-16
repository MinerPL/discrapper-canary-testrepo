t.d(e, {
    Y: function () {
        return v;
    },
    p: function () {
        return T;
    }
});
var i = t(735250);
t(470079);
var l = t(860911),
    r = t(481060),
    o = t(100527),
    s = t(906732),
    a = t(887706),
    c = t(87484),
    d = t(696906),
    u = t(703656),
    S = t(626135),
    m = t(74538),
    I = t(937615),
    x = t(110742),
    f = t(981631),
    _ = t(474936),
    p = t(689938),
    h = t(986357);
function T(n) {
    let { appId: e, className: t, groupListingId: l, groupListingType: r, guildId: o, onClick: s, onHasClicked: a, skuId: c, subPlan: u, icon: S } = n,
        { openModal: T } = (0, d.Z)({
            guildId: o,
            groupListingId: l,
            showBenefitsFirst: !1,
            analyticsLocation: f.Sbl.APP_STOREFRONT,
            skuId: c
        }),
        v = (0, x.M)(c),
        g = (0, m.aS)(u.id);
    return 'guild' !== r && ('user' !== r || v)
        ? (0, i.jsx)(N, {
              className: t,
              children: p.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          })
        : (0, i.jsx)(E, {
              appId: e,
              skuId: c,
              onClick: (n) => {
                  (null != s ? s : T)(n), null == a || a();
              },
              className: t,
              children: (0, i.jsxs)('div', {
                  className: h.btnContent,
                  children: [S, p.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, I.og)((0, I.T4)(g.amount, g.currency), _.rV.MONTH, 1) })]
              })
          });
}
function v(n) {
    let { appId: e, className: t, onClick: l, onHasClicked: r, sku: a, icon: d } = n,
        { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        S = () => {
            (0, c.Z)({
                applicationId: e,
                skuId: a.id,
                analyticsLocations: u
            });
        },
        m = (0, x.M)(a.id),
        _ = a.type === f.epS.DURABLE && m,
        { price: T } = a;
    return null == T
        ? null
        : _
          ? (0, i.jsx)(N, {
                className: t,
                children: p.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, i.jsx)(E, {
                appId: e,
                skuId: a.id,
                onClick: (n) => {
                    (null != l ? l : S)(n), null == r || r();
                },
                className: t,
                children: (0, i.jsxs)('div', {
                    className: h.btnContent,
                    children: [d, p.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, I.T4)(T.amount, T.currency) })]
                })
            });
}
function E(n) {
    let { appId: e, skuId: t, onClick: o, ...s } = n,
        c = (0, a.Z)();
    return (0, i.jsx)(r.Button, {
        ...s,
        onClick: (n) => {
            if (
                (S.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !c)
            ) {
                n.preventDefault(), n.stopPropagation();
                let i = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    r = (0, l.U)(i, !1);
                (0, u.uL)(r);
                return;
            }
            null == o || o(n);
        }
    });
}
function N(n) {
    let { className: e, children: t } = n;
    return (0, i.jsx)(r.Button, {
        disabled: !0,
        className: e,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        size: r.Button.Sizes.SMALL,
        children: t
    });
}
