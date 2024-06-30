var n = s(735250), a = s(470079), i = s(481060), r = s(906732), o = s(879892), l = s(709586), c = s(267642), d = s(981631), _ = s(689938), E = s(381168);
t.Z = function () {
    let e = a.useRef(null), {analyticsLocations: t} = (0, r.ZP)();
    function u(s) {
        null != e.current && (0, i.closeModal)(e.current), (0, o.u)({
            analyticsLocation: {
                page: d.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                section: d.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                object: d.qAy.BUTTON_CTA,
                objectType: d.Qqv.BUY
            },
            analyticsLocations: t,
            guild: s
        });
    }
    async function T() {
        e.current = await (0, i.openModalLazy)(async () => {
            let {default: e} = await Promise.resolve().then(s.bind(s, 719228));
            return t => (0, n.jsx)(e, {
                ...t,
                onSelectGuild: u
            });
        }, {
            onCloseRequest: () => {
                null != e.current && (0, i.closeModal)(e.current);
            }
        });
    }
    let I = (0, c.aq)();
    return (0, n.jsxs)('div', {
        className: E.wrapper,
        children: [
            (0, n.jsx)(l.Z, {
                className: E.boostIcon,
                width: 16,
                height: 16
            }),
            (0, n.jsx)(i.Text, {
                className: E.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
                    boostAnyGuildHook: (e, t) => {
                        let s = null != I, a = (0, n.jsx)(i.Button, {
                                className: E.cta,
                                disabled: s,
                                color: i.Button.Colors.LINK,
                                look: i.Button.Looks.LINK,
                                onClick: s ? void 0 : T,
                                children: e
                            }, t);
                        return s ? (0, n.jsx)(i.Tooltip, {
                            text: I,
                            children: e => (0, n.jsx)('span', {
                                ...e,
                                children: a
                            })
                        }, t) : a;
                    }
                })
            })
        ]
    });
};
