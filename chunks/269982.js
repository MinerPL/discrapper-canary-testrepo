n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(979554),
    s = n(481060),
    o = n(436774),
    l = n(981631),
    u = n(388032),
    c = n(320663);
function d(e) {
    let { product: t, onSecondaryClick: d } = e,
        f = i.useCallback(() => {
            if (null != t)
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('43360').then(n.bind(n, 73415));
                    return (n) =>
                        (0, r.jsx)(e, {
                            collectableType: null == t ? void 0 : t.type,
                            analyticsSource: l.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: l.jXE.USER_PROFILE,
                                object: l.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: d,
                            ...n
                        });
                });
        }, [t, d]),
        _ = i.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case a.Z.AVATAR_DECORATION:
                    return u.intl.format(u.t['aFR/EB'], { onClick: f });
                case a.Z.PROFILE_EFFECT:
                    return u.intl.format(u.t.eWNOND, { onClick: f });
            }
        }, [null == t ? void 0 : t.type, f]);
    return (0, r.jsxs)('div', {
        className: c.nitroUpsellContainer,
        children: [
            (0, r.jsx)(s.NitroWheelIcon, {
                className: c.nitroWheel,
                size: 'md',
                color: o.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(s.Text, {
                className: c.nitroText,
                variant: 'text-md/medium',
                children: _
            })
        ]
    });
}
