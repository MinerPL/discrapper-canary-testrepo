n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(179360),
    u = n(40851),
    c = n(906732),
    d = n(975298),
    f = n(314884),
    _ = n(78839),
    h = n(267642),
    p = n(879892),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(459671);
t.Z = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: I, targetBoostedGuildTier: S, onClose: T = () => {}, closeLayer: b = () => {}, pauseAnimation: y = !1, applicationId: A, handleSubscribeModalClose: N, withHighlight: C = !1, ...R } = e,
        { analyticsLocations: O } = (0, c.ZP)(),
        D = (0, u.bp)() === m.IlC.POPOUT,
        [L, x] = i.useState(!1),
        { fractionalState: w } = (0, d.Z)();
    !f.Z.hasFetched && (0, l.X8)();
    let M = (0, h.vx)(f.Z.boostSlots),
        P = null != S ? Math.max((0, h.KK)(a, S), 1) : 1,
        k = (0, h.aq)({ fractionalState: w }),
        U = async () => {
            x(!0),
                await (0, p.u)({
                    analyticsLocations: O,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: P,
                    onClose: T,
                    closeLayer: b,
                    inPopout: D,
                    applicationId: A,
                    handleSubscribeModalClose: N
                }),
                x(!1);
        },
        G = _.ZP.getPremiumTypeSubscription(),
        B = (0, r.jsx)('span', { children: null != I ? I : E.intl.string(E.t.gKmQ1N) });
    return ((null == G ? void 0 : G.isPausedOrPausePending) &&
        (w === g.a$.NONE || 0 === M.length) &&
        ((B = (0, r.jsxs)('div', {
            className: v.pausedButton,
            children: [
                (0, r.jsx)(o.LockIcon, {
                    size: 'xs',
                    className: v.lockIcon
                }),
                ' ',
                B
            ]
        })),
        (R.disabled = !0)),
    null != k)
        ? (0, r.jsx)(o.Tooltip, {
              text: k,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(o.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: o.Button.Sizes.SMALL,
                      pauseAnimation: y,
                      ...R,
                      children: B
                  })
          })
        : (0, r.jsx)(o.ShinyButton, {
              size: o.Button.Sizes.SMALL,
              ...R,
              className: s()(R.className, { [v.buttonHighlighted]: C }),
              submitting: L,
              onClick: U,
              pauseAnimation: y,
              children: B
          });
};
