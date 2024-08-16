n.d(t, {
    T: function () {
        return h;
    },
    i: function () {
        return m;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(338545),
    o = n(481060),
    c = n(603368),
    d = n(284019),
    u = n(689938),
    _ = n(426088);
function E(e) {
    let { index: t, onClick: n, name: s, isActive: d, animate: E, fillBackgroundColor: h, hasError: m } = e,
        I = (0, o.useToken)(o.tokens.colors.BG_SURFACE_OVERLAY),
        g = a.useMemo(() => (0, c.j1)(h, I.hex()), [h, I]),
        p = null != g,
        T = (0, o.useSpring)(
            {
                transform: d ? 'translateX(0%)' : 'translateX(-100%)',
                config: {
                    ...l.config.stiff,
                    clamp: !0
                }
            },
            E ? 'respect-motion-settings' : 'animate-never'
        ),
        S = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-primary',
                    children: u.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: u.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
                })
            ]
        });
    return (0, i.jsx)(o.Tooltip, {
        color: m ? o.Tooltip.Colors.GREY : o.Tooltip.Colors.BRAND,
        text: m ? S : s,
        'aria-label': m ? u.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : s,
        shouldShow: null != n,
        tooltipStyle: g,
        tooltipClassName: r()(_.progressStepTooltip, { [_.progressStepTooltipCustomColors]: !m && null != g }),
        children: (e) =>
            (0, i.jsxs)(o.Clickable, {
                ...e,
                'aria-label': u.Z.Messages.STEP_NUMBER.format({ number: t }),
                tabIndex: null == n ? -1 : void 0,
                onClick: n,
                className: _.progressStepWrapper,
                children: [
                    m &&
                        (0, i.jsx)(o.WarningIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.errorIcon
                        }),
                    (0, i.jsx)('div', {
                        className: _.progressStep,
                        children: (0, i.jsx)(l.animated.div, {
                            style: {
                                ...T,
                                ...g
                            },
                            className: r()(_.progressStepFill, { [_.customProgressStepFill]: p })
                        })
                    })
                ]
            })
    });
}
function h(e) {
    let { steps: t, currentStepIndex: n, furthestStepIndex: a, onStepClick: s, stepFillColor: o, animationStyle: c, className: d } = e;
    return (0, i.jsx)(l.animated.div, {
        style: c,
        className: r()(_.progressContainer, d),
        children: t.map((e) => {
            let { index: t, name: r, hasError: l } = e;
            return (0, i.jsx)(
                E,
                {
                    name: r,
                    onClick: t <= a ? () => s(t) : void 0,
                    isActive: t <= n,
                    hasError: l,
                    index: t,
                    fillBackgroundColor: o,
                    animate: n === t || n + 1 === t
                },
                r
            );
        })
    });
}
function m(e) {
    let { className: t, isBackDisabled: n, isNextDisabled: a, onNextClick: s, onBackClick: c, nextButtonBackgroundColor: E, nextButtonClassName: h, nextButtonAnimationStyle: m } = e;
    return (0, i.jsxs)('div', {
        className: r()(_.buttonsContainer, t),
        children: [
            (0, i.jsx)(o.Button, {
                look: o.Button.Looks.OUTLINED,
                size: o.Button.Sizes.MEDIUM,
                color: o.Button.Colors.PRIMARY,
                onClick: c,
                disabled: n,
                children: u.Z.Messages.BACK
            }),
            (0, i.jsx)(l.animated.div, {
                style: m,
                children: (0, i.jsx)(d.Z, {
                    className: h,
                    themeColor: E,
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: s,
                    disabled: a,
                    children: u.Z.Messages.NEXT
                })
            })
        ]
    });
}
