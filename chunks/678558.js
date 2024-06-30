n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(40851), u = n(906732), c = n(78839), d = n(267642), _ = n(879892), E = n(981631), f = n(689938), h = n(320315);
t.Z = e => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: a,
            buttonText: p,
            targetBoostedGuildTier: m,
            onClose: I = () => {
            },
            closeLayer: T = () => {
            },
            pauseAnimation: g = !1,
            applicationId: S,
            handleSubscribeModalClose: A,
            withHighlight: N = !1,
            ...v
        } = e, {analyticsLocations: O} = (0, u.ZP)(), R = (0, l.bp)() === E.IlC.POPOUT, [C, y] = i.useState(!1), D = null != m ? Math.max((0, d.KK)(a, m), 1) : 1, L = (0, d.aq)(), b = async () => {
            y(!0), await (0, _.u)({
                analyticsLocations: O,
                analyticsLocation: t,
                analyticsSourceLocation: n,
                guild: a,
                numberOfBoostsToAdd: D,
                onClose: I,
                closeLayer: T,
                inPopout: R,
                applicationId: S,
                handleSubscribeModalClose: A
            }), y(!1);
        }, M = c.ZP.getPremiumTypeSubscription(), P = (0, r.jsx)('span', { children: null != p ? p : f.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER });
    return ((null == M ? void 0 : M.isPausedOrPausePending) && (P = (0, r.jsxs)('div', {
        className: h.pausedButton,
        children: [
            (0, r.jsx)(s.LockIcon, {
                size: 'xs',
                className: h.lockIcon
            }),
            ' ',
            P
        ]
    }), v.disabled = !0), null != L) ? (0, r.jsx)(s.Tooltip, {
        text: L,
        'aria-label': !1,
        children: e => (0, r.jsx)(s.ShinyButton, {
            ...e,
            disabled: !0,
            size: s.Button.Sizes.SMALL,
            pauseAnimation: g,
            ...v,
            children: P
        })
    }) : (0, r.jsx)(s.ShinyButton, {
        size: s.Button.Sizes.SMALL,
        ...v,
        className: o()(v.className, { [h.buttonHighlighted]: N }),
        submitting: C,
        onClick: b,
        pauseAnimation: g,
        children: P
    });
};
