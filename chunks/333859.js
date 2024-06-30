s.d(t, {
    c: function () {
        return h;
    }
});
var n = s(735250), a = s(470079), i = s(442837), r = s(481060), o = s(570140), l = s(37234), c = s(100527), d = s(906732), _ = s(327943), E = s(539873), u = s(197115), T = s(626135), I = s(981631), S = s(474936), N = s(689938), C = s(152593), m = s(331651);
let A = () => {
        o.Z.dispatch({ type: 'APP_ICON_EDITOR_OPEN' }), (0, l.xf)();
    }, h = () => {
        let {analyticsLocations: e} = (0, d.ZP)(c.Z.USER_SETTINGS), t = (0, i.e7)([_.Z], () => _.Z.isUpsellPreview);
        return a.useEffect(() => {
            t && T.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.cd.APP_ICON_UPSELL,
                location_stack: e
            });
        }, []), (0, n.jsxs)('div', {
            className: C.selectionGroup,
            children: [
                (0, n.jsx)(E.Z, {
                    disabled: t,
                    renderCTAButtons: () => (0, n.jsxs)('div', {
                        className: C.tryItOutButtons,
                        children: [
                            (0, n.jsx)(r.Button, {
                                color: t ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
                                onClick: () => A(),
                                children: N.Z.Messages.APP_ICON_PREVIEW_TITLE
                            }),
                            t ? (0, n.jsx)(u.Z, {
                                subscriptionTier: S.Si.TIER_2,
                                buttonText: N.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }) : null
                        ]
                    })
                }),
                (0, n.jsx)(r.FormDivider, { className: m.marginTop20 })
            ]
        });
    };
