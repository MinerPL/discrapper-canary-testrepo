n.d(t, {
    p: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(212433),
    o = n(481060),
    l = n(436774),
    u = n(197115),
    c = n(474936),
    d = n(422455);
function _(e) {
    let { showUpsell: t, text: n, textVariant: i, button: _, buttonAnalyticsObject: E, className: f, onSubscribeModalClose: h, showShadow: p = !0, position: I = 'floating' } = e,
        m = (0, o.useSpring)({
            transform: t ? 'translateY(0%)' : 'translateY(120%)',
            opacity: t ? 1 : 0,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, r.jsxs)(s.animated.div, {
        style: { ...m },
        className: a()(
            d.upsellContainer,
            {
                [d.upsellContainerShadow]: p,
                [d.upsellContainerFloating]: 'floating' === I,
                [d.upsellContainerInline]: 'inline' === I
            },
            f
        ),
        children: [
            (0, r.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: l.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(o.Text, {
                variant: null != i ? i : 'text-sm/medium',
                color: 'header-primary',
                className: d.upsellText,
                children: n
            }),
            'string' == typeof _
                ? (0, r.jsx)(u.Z, {
                      className: d.upsellButton,
                      shinyButtonClassName: d.upsellButton,
                      subscriptionTier: c.Si.TIER_2,
                      buttonText: _,
                      premiumModalAnalyticsLocation: E,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: h
                  })
                : _
        ]
    });
}
