n.d(t, {
    ZP: function () {
        return f;
    },
    fO: function () {
        return h;
    },
    sF: function () {
        return m;
    }
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(377171),
    s = n(951394),
    c = n(407477),
    d = n(388032),
    u = n(189265);
function m(e) {
    let { label: t, ariaLabel: n, tooltipText: r, tooltipColor: m, icon: h, iconProps: f, onClick: p, onTooltipShow: g, onTooltipHide: _, disabled: C, dangerous: E, separator: I, sparkle: x, showNewBadge: v, buttonClassName: N, children: T, ...S } = e,
        { canShowReactionsOnMessageHover: b } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(a.Tooltip, {
            text: null != r ? r : t,
            color: null != m ? m : a.TooltipColors.PRIMARY,
            'aria-label': t,
            onTooltipShow: g,
            onTooltipHide: _,
            hideOnClick: !0,
            tooltipClassName: u.tooltip,
            children: (e) => {
                let { onMouseEnter: r, onMouseLeave: c, onClick: m } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.zx, {
                            className: l()(N, { [u.hoverBarButton]: b }),
                            onMouseEnter: r,
                            onMouseLeave: c,
                            onClick: (e) => {
                                null == m || m(), p(e);
                            },
                            'aria-label': null != n ? n : t,
                            disabled: C,
                            dangerous: E,
                            ...S,
                            children: [
                                null != h
                                    ? (0, i.jsx)(h, {
                                          className: u.icon,
                                          color: 'currentColor',
                                          ...f
                                      })
                                    : null,
                                null != T
                                    ? (0, i.jsx)('div', {
                                          className: l()(u.icon, u.buttonContent),
                                          children: T
                                      })
                                    : null,
                                x && (0, i.jsx)(a.LottieSparkle, {}),
                                v &&
                                    (0, i.jsx)(a.TextBadge, {
                                        text: d.intl.string(d.t.y2b7CA),
                                        color: o.Z.BG_BRAND,
                                        className: u.newBadge
                                    })
                            ]
                        }),
                        I && (0, i.jsx)(s.Z0, {})
                    ]
                });
            }
        })
    );
}
function h(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: l()(u.separator, t) });
}
function f(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: r } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(s.ZP, {
            className: l()(n.className, u.popover, { [u.popoverReactionHoverBar]: r }),
            children: t
        })
    );
}
