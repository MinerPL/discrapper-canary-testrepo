n.d(t, {
    o: function () {
        return C;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    l = n(693789),
    s = n(993365),
    a = n(481060),
    o = n(230711),
    c = n(197115),
    u = n(504983),
    d = n(594174),
    h = n(74538),
    _ = n(981631),
    f = n(921944),
    E = n(474936),
    p = n(526761),
    m = n(689938),
    I = n(568492);
function C(e) {
    var t;
    let { onClose: n, markAsDismissed: C } = e,
        S = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    let g = (t = null == S ? void 0 : S.premiumType) === E.p9.TIER_2 ? m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
        R = h.ZP.canUseCustomCallSounds(S);
    return (0, r.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: I.upsellOuter,
        backgroundClassName: I.upsellInner,
        children: [
            null != C
                ? (0, r.jsx)(a.Clickable, {
                      className: I.close,
                      onClick: () => (null == C ? void 0 : C(f.L.DISMISS)),
                      'aria-label': m.Z.Messages.CLOSE,
                      children: (0, r.jsx)(a.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: I.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: I.upsellTitle,
                children: [
                    (0, r.jsx)(a.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: I.nitroWheel
                    }),
                    (0, r.jsx)(a.Heading, {
                        variant: 'heading-sm/bold',
                        children: m.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                    })
                ]
            }),
            (0, r.jsx)(s.x, {
                variant: 'text-sm/normal',
                children: g
            }),
            R
                ? (0, r.jsx)(l.zx, {
                      onClick: function () {
                          o.Z.open(_.oAB.VOICE, p.GA), null == n || n(), null == C || C(f.L.PRIMARY);
                      },
                      children: m.Z.Messages.CHECK_IT_OUT
                  })
                : (0, r.jsx)(c.Z, {
                      buttonText: m.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                      subscriptionTier: E.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: _.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: _.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == C ? void 0 : C(f.L.PRIMARY))
                  })
        ]
    });
}
