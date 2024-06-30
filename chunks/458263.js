n.d(t, {
    o: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(693789), l = n(260034), r = n(993365), o = n(481060), c = n(230711), d = n(197115), u = n(504983), _ = n(594174), E = n(74538), m = n(981631), I = n(921944), T = n(474936), h = n(526761), N = n(689938), f = n(695983);
function p(e) {
    var t;
    let {
            onClose: n,
            markAsDismissed: p
        } = e, C = (0, a.e7)([_.default], () => _.default.getCurrentUser());
    let g = (t = null == C ? void 0 : C.premiumType) === T.p9.TIER_2 ? N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2, S = E.ZP.canUseCustomCallSounds(C);
    return (0, i.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: f.upsellOuter,
        backgroundClassName: f.upsellInner,
        children: [
            null != p ? (0, i.jsx)(o.Clickable, {
                className: f.close,
                onClick: () => null == p ? void 0 : p(I.L.DISMISS),
                'aria-label': N.Z.Messages.CLOSE,
                children: (0, i.jsx)(o.CloseSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: f.closeIcon
                })
            }) : null,
            (0, i.jsxs)('div', {
                className: f.upsellTitle,
                children: [
                    (0, i.jsx)(o.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: f.nitroWheel
                    }),
                    (0, i.jsx)(l.X, {
                        variant: 'heading-sm/bold',
                        children: N.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                    })
                ]
            }),
            (0, i.jsx)(r.x, {
                variant: 'text-sm/normal',
                children: g
            }),
            S ? (0, i.jsx)(s.zx, {
                onClick: function () {
                    c.Z.open(m.oAB.VOICE, h.GA), null == n || n(), null == p || p(I.L.PRIMARY);
                },
                children: N.Z.Messages.CHECK_IT_OUT
            }) : (0, i.jsx)(d.Z, {
                buttonText: N.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                subscriptionTier: T.Si.TIER_2,
                premiumModalAnalyticsLocation: {
                    section: m.jXE.SOUNDBOARD_SOUND_PICKER,
                    object: m.qAy.BUTTON_CTA
                },
                color: s.zx.Colors.GREEN,
                onSubscribeModalClose: () => null == p ? void 0 : p(I.L.PRIMARY)
            })
        ]
    });
}
