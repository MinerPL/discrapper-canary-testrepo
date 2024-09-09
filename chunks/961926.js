n.d(t, {
    Z: function () {
        return E;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(536982),
    r = n(285318),
    l = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    _ = n(689938),
    I = n(394570);
function E(e) {
    var t, n, E;
    let { rule: T, onChangeRule: m } = e,
        N = a.useCallback(
            (e) => {
                m({
                    ...T,
                    triggerMetadata: {
                        ...T.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [m, T]
        );
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: I.cardContentsContainer,
            children: [
                (0, s.jsxs)(c.Z, {
                    step: 1,
                    header: _.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_TRIGGER_DESCRIPTION,
                    children: [
                        (0, s.jsx)(r.Z, {
                            rule: T,
                            onChangeRule: m
                        }),
                        (0, s.jsx)(i.Z, {
                            onChange: N,
                            initialValue: null === (t = T.triggerMetadata) || void 0 === t ? void 0 : t.allowList,
                            maxWordCount: u.I3,
                            collapsed: (null === (n = T.triggerMetadata) || void 0 === n ? void 0 : n.allowList) == null || (null === (E = T.triggerMetadata) || void 0 === E ? void 0 : E.allowList.length) === 0
                        })
                    ]
                }),
                (0, s.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
                (0, s.jsx)(c.Z, {
                    step: 2,
                    header: _.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                    children: (0, s.jsx)(l.Z, {
                        rule: T,
                        onChangeRule: m
                    })
                }),
                (0, s.jsx)(d.Z, { type: d.Z.Type.CROSS }),
                (0, s.jsx)(c.Z, {
                    step: 3,
                    header: _.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                    children: (0, s.jsx)(o.Z, {
                        rule: T,
                        onChangeRule: m
                    })
                })
            ]
        })
    });
}
