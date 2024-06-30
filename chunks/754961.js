n.d(t, {
    T: function () {
        return m;
    },
    i: function () {
        return p;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(920906), o = n(442837), c = n(481060), d = n(607070), u = n(603368), _ = n(284019), E = n(689938), h = n(16747);
function I(e) {
    let {
            index: t,
            onClick: n,
            name: a,
            isActive: _,
            animate: I,
            fillBackgroundColor: m,
            hasError: p
        } = e, g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), T = (0, c.useToken)(c.tokens.colors.BG_SURFACE_OVERLAY), S = s.useMemo(() => (0, u.j1)(m, T.hex()), [
            m,
            T
        ]), C = null != S, N = (0, l.useSpring)({
            transform: _ ? 'translateX(0%)' : 'translateX(-100%)',
            config: {
                ...l.config.stiff,
                clamp: !0
            },
            immediate: g || !I
        }), f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-primary',
                    children: E.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: E.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
                })
            ]
        });
    return (0, i.jsx)(c.Tooltip, {
        color: p ? c.Tooltip.Colors.GREY : c.Tooltip.Colors.BRAND,
        text: p ? f : a,
        'aria-label': p ? E.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : a,
        shouldShow: null != n,
        tooltipStyle: S,
        tooltipClassName: r()(h.progressStepTooltip, { [h.progressStepTooltipCustomColors]: !p && null != S }),
        children: e => (0, i.jsxs)(c.Clickable, {
            ...e,
            'aria-label': E.Z.Messages.STEP_NUMBER.format({ number: t }),
            tabIndex: null == n ? -1 : void 0,
            onClick: n,
            className: h.progressStepWrapper,
            children: [
                p && (0, i.jsx)(c.WarningIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: h.errorIcon
                }),
                (0, i.jsx)('div', {
                    className: h.progressStep,
                    children: (0, i.jsx)(l.animated.div, {
                        style: {
                            ...N,
                            ...S
                        },
                        className: r()(h.progressStepFill, { [h.customProgressStepFill]: C })
                    })
                })
            ]
        })
    });
}
function m(e) {
    let {
        steps: t,
        currentStepIndex: n,
        furthestStepIndex: s,
        onStepClick: a,
        stepFillColor: o,
        animationStyle: c,
        className: d
    } = e;
    return (0, i.jsx)(l.animated.div, {
        style: c,
        className: r()(h.progressContainer, d),
        children: t.map(e => {
            let {
                index: t,
                name: r,
                hasError: l
            } = e;
            return (0, i.jsx)(I, {
                name: r,
                onClick: t <= s ? () => a(t) : void 0,
                isActive: t <= n,
                hasError: l,
                index: t,
                fillBackgroundColor: o,
                animate: n === t || n + 1 === t
            }, r);
        })
    });
}
function p(e) {
    let {
        className: t,
        isBackDisabled: n,
        isNextDisabled: s,
        onNextClick: a,
        onBackClick: o,
        nextButtonBackgroundColor: d,
        nextButtonClassName: u,
        nextButtonAnimationStyle: I
    } = e;
    return (0, i.jsxs)('div', {
        className: r()(h.buttonsContainer, t),
        children: [
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.OUTLINED,
                size: c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.PRIMARY,
                onClick: o,
                disabled: n,
                children: E.Z.Messages.BACK
            }),
            (0, i.jsx)(l.animated.div, {
                style: I,
                children: (0, i.jsx)(_.Z, {
                    className: u,
                    themeColor: d,
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.FILLED,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: a,
                    disabled: s,
                    children: E.Z.Messages.NEXT
                })
            })
        ]
    });
}
