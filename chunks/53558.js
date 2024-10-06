n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(970321),
    o = n(283836),
    l = n(621853),
    u = n(475413),
    c = n(689938);
function d(e) {
    let { user: t, onClick: n, ...i } = e;
    return (
        (0, o.q)(t.id),
        (0, r.jsx)(u.tG, {
            action: 'PRESS_APP_STOREFRONT',
            icon: a.ShopIcon,
            text: c.Z.Messages.STOREFRONT,
            color: a.ButtonColors.BRAND,
            themeColor: 'none',
            onClick: n,
            ...i
        })
    );
}
function _(e) {
    var t;
    let { user: o, guildId: u, ...c } = e,
        _ = (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getUserProfile(o.id)) || void 0 === e ? void 0 : e.application;
        }),
        E = (0, s.R)(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : '');
    return null != _ && E
        ? (0, r.jsx)(d, {
              user: o,
              guildId: u,
              onClick: () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('29549'), n.e('31605'), n.e('81272'), n.e('77803'), n.e('5710')]).then(n.bind(n, 7225));
                      return (t) =>
                          (0, r.jsx)(e, {
                              appId: _.id,
                              guildId: u,
                              ...t
                          });
                  });
              },
              ...c
          })
        : null;
}
