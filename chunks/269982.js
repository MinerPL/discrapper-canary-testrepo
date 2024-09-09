n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(979554),
    s = n(481060),
    o = n(436774),
    l = n(81245),
    u = n(981631),
    c = n(689938),
    d = n(467154);
function _(e) {
    let { product: t, onSecondaryClick: _ } = e,
        E = i.useCallback(() => {
            if (null != t)
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('43360').then(n.bind(n, 73415));
                    return (n) =>
                        (0, r.jsx)(e, {
                            collectableType: null == t ? void 0 : t.type,
                            analyticsSource: u.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: u.jXE.USER_PROFILE,
                                object: u.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: _,
                            ...n
                        });
                });
        }, [t, _]),
        f = i.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case a.Z.AVATAR_DECORATION:
                    return c.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_INLINE_UPSELL.format({ onClick: E });
                case a.Z.PROFILE_EFFECT:
                    return c.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_INLINE_UPSELL.format({ onClick: E });
            }
        }, [null == t ? void 0 : t.type, E]);
    return (0, l.Mu)('PremiumUserProfileDecorationUpsell')
        ? (0, r.jsxs)('div', {
              className: d.nitroUpsellContainer,
              children: [
                  (0, r.jsx)(s.NitroWheelIcon, {
                      className: d.nitroWheel,
                      size: 'md',
                      color: o.JX.PREMIUM_TIER_2
                  }),
                  (0, r.jsx)(s.Text, {
                      className: d.nitroText,
                      variant: 'text-md/medium',
                      children: f
                  })
              ]
          })
        : null;
}
