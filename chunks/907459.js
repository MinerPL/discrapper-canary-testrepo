n.d(t, {
    Z: function () {
        return M;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(570140), c = n(230711), d = n(351773), _ = n(607070), E = n(100527), f = n(906732), h = n(639119), p = n(197115), m = n(587446), I = n(594174), T = n(626135), g = n(74538), S = n(327943), A = n(539873), N = n(981631), v = n(921944), O = n(474936), R = n(689938), C = n(698938);
let y = () => {
        u.Z.dispatch({ type: 'APP_ICON_EDITOR_CLOSE' });
    }, D = () => {
        var e, t, n;
        let i = (0, s.e7)([I.default], () => g.ZP.isPremium(I.default.getCurrentUser())), a = (0, h.N)(), o = (null == a ? void 0 : null === (e = a.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2;
        return (0, r.jsx)(p.Z, {
            size: l.Button.Sizes.MEDIUM,
            buttonText: i ? R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : o ? (0, g.Rt)({
                intervalType: null == a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == a ? void 0 : null === (n = a.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            }) : R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
            subscriptionTier: O.Si.TIER_2
        });
    }, L = e => {
        let {markAsDismissed: t} = e, n = () => {
                null == t || t(v.L.DISMISS), y();
            };
        return (0, r.jsxs)('div', {
            className: C.editorHeader,
            children: [
                (0, r.jsx)(l.Clickable, {
                    className: C.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(l.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.title,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: 'heading-lg/extrabold',
                            children: R.Z.Messages.APP_ICON_PREVIEW_TITLE
                        }),
                        (0, r.jsx)(m.Z, { className: C.premiumIcon })
                    ]
                })
            ]
        });
    }, b = e => {
        let {
                isCoachmark: t,
                markAsDismissed: n
            } = e, i = (0, s.e7)([S.Z], () => S.Z.isUpsellPreview);
        return (0, r.jsxs)('div', {
            className: C.editorFooter,
            children: [
                i && (0, r.jsx)(D, {}),
                (0, r.jsx)(l.Button, {
                    className: C.footerButton,
                    onClick: () => {
                        null == n || n(v.L.DISMISS), y(), !t && c.Z.open();
                    },
                    color: l.Button.Colors.PRIMARY,
                    size: l.Button.Sizes.MEDIUM,
                    children: i || t ? R.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : R.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
                })
            ]
        });
    };
function M(e) {
    let {
            isCoachmark: t,
            markAsDismissed: n
        } = e, {analyticsLocations: a} = (0, f.ZP)(E.Z.APP_ICON_EDITOR), u = (0, s.e7)([I.default], () => I.default.getCurrentUser()), {
            isUpsellPreview: c,
            isEditorOpen: h,
            shouldEditorAnimate: p
        } = (0, s.cj)([
            S.Z,
            _.Z
        ], () => ({
            isUpsellPreview: S.Z.isUpsellPreview,
            isEditorOpen: S.Z.isEditorOpen,
            shouldEditorAnimate: t && !_.Z.useReducedMotion
        }));
    i.useEffect(() => {
        if (!!c)
            T.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: O.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [
        c,
        a
    ]);
    let m = (0, d.Z)(null, c ? y : N.dG4);
    return (i.useEffect(() => {
        if (!!c && !h)
            return y;
    }, [
        c,
        h
    ]), null == u) ? null : (0, r.jsx)(f.Gt, {
        value: a,
        children: (0, r.jsx)('div', {
            ref: m,
            className: o()(C.editor, p ? C.editorAnimate : null),
            children: (0, r.jsxs)(l.HeadingLevel, {
                children: [
                    (0, r.jsx)(L, { markAsDismissed: n }),
                    (0, r.jsx)(l.Scroller, {
                        className: C.editorBody,
                        children: (0, r.jsx)(A.Z, { className: C.selectionGroup })
                    }),
                    (0, r.jsx)(b, {
                        markAsDismissed: n,
                        isCoachmark: t
                    })
                ]
            })
        })
    });
}
