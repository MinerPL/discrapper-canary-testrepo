n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(212433),
    o = n(873546),
    c = n(481060),
    d = n(906732),
    u = n(963249),
    _ = n(579185),
    E = n(479446),
    h = n(522558),
    m = n(441623),
    I = n(317271),
    p = n(16474),
    g = n(474936),
    T = n(981631),
    f = n(689938),
    S = n(551370),
    C = n(886733);
let N = {
    width: 14,
    height: 14
};
function A(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: s, shouldHighlight: A } = e,
        { analyticsLocations: v } = (0, d.ZP)(),
        { isHovered: Z, setIsHovered: L, onMouseEnter: R, onMouseLeave: O } = (0, _.Z)(200, 300),
        { enableEmojiCTA: x } = h.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 }),
        b = a.useCallback(
            (e) => {
                'focus' !== e.type && R();
            },
            [R]
        ),
        M = (e) => {
            e.stopPropagation(),
                (0, u.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, I.F)(n).actionButton,
                    analyticsLocations: v,
                    analyticsObject: {
                        page: s,
                        section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: T.qAy.BUTTON_CTA,
                        objectType: T.Qqv.GIFT
                    },
                    giftMessage: P()
                });
        },
        P = () => {
            if (n === g.hX.FRIEND_ANNIVERSARY) return f.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: m.Z.getFriendAnniversaryYears(t.id) });
            return (0, E.Ou)(n);
        },
        D = () => {
            if (n === g.hX.FRIEND_ANNIVERSARY) return f.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY;
            return (0, E.Ou)(n);
        },
        y = () =>
            x
                ? (0, i.jsx)(c.Clickable, {
                      'aria-label': D(),
                      onClick: M,
                      className: r()(C.actionButton, S.popoutButton, {
                          [C.highlight]: A,
                          [C.actionButtonMobile]: o.tq
                      }),
                      onMouseEnter: b,
                      onMouseLeave: O,
                      children: (0, i.jsx)(l.animated.div, {
                          className: S.spriteContainer,
                          children: (0, i.jsx)('div', { className: S.sprite })
                      })
                  })
                : (0, i.jsx)(c.Button, {
                      onClick: M,
                      onMouseEnter: b,
                      onMouseLeave: O,
                      children: (0, i.jsxs)('div', {
                          className: S.pillContentContainer,
                          children: [
                              (0, i.jsx)(c.GiftIcon, {
                                  size: 'custom',
                                  width: N.width,
                                  height: N.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: S.pillButtonText,
                                  children: D()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(c.Popout, {
        animation: c.Popout.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: Z,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            L(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(p.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: p.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: R,
                onMouseLeave: O,
                popoutPosition: e.position,
                analyticsPage: s,
                analyticsSection: T.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                glow: !0
            }),
        children: () => y()
    });
}
