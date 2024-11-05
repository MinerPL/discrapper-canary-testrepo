var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(906732),
    a = n(975298),
    o = n(879892),
    c = n(709586),
    d = n(267642),
    u = n(981631),
    m = n(388032),
    h = n(305564);
t.Z = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, l.ZP)(),
        { fractionalState: g } = (0, a.Z)();
    function p(n) {
        null != e.current && (0, r.closeModal)(e.current),
            (0, o.u)({
                analyticsLocation: {
                    page: u.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: u.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: u.qAy.BUTTON_CTA,
                    objectType: u.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            });
    }
    async function x() {
        e.current = await (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSelectGuild: p
                    });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, r.closeModal)(e.current);
                }
            }
        );
    }
    let S = (0, d.aq)({ fractionalState: g });
    return (0, i.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, i.jsx)(c.Z, {
                className: h.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(r.Text, {
                className: h.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: m.intl.format(m.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != S,
                            s = (0, i.jsx)(
                                r.Button,
                                {
                                    className: h.cta,
                                    disabled: n,
                                    color: r.Button.Colors.LINK,
                                    look: r.Button.Looks.LINK,
                                    onClick: n ? void 0 : x,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  r.Tooltip,
                                  {
                                      text: S,
                                      children: (e) =>
                                          (0, i.jsx)('span', {
                                              ...e,
                                              children: s
                                          })
                                  },
                                  t
                              )
                            : s;
                    }
                })
            })
        ]
    });
};
