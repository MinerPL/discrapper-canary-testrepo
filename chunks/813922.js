n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250), a = n(470079), i = n(536982), r = n(456677), l = n(951665), o = n(428760), c = n(55889), d = n(300453), u = n(620436), _ = n(273504), E = n(689938), I = n(921624);
function T(e) {
    var t, n, T, m, N, S;
    let {
            rule: h,
            onChangeRule: g
        } = e, C = a.useCallback(e => {
            g({
                ...h,
                triggerMetadata: {
                    ...h.triggerMetadata,
                    keywordFilter: e
                }
            });
        }, [
            g,
            h
        ]), x = a.useCallback(e => {
            g({
                ...h,
                triggerMetadata: {
                    ...h.triggerMetadata,
                    allowList: e
                }
            });
        }, [
            g,
            h
        ]);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: I.cardContentsContainer,
            children: [
                (0, s.jsxs)(d.Z, {
                    step: 1,
                    header: E.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_TRIGGER_HEADER,
                    children: [
                        (0, s.jsx)(o.Z, {
                            onChangeText: C,
                            maxWordCount: _.RH,
                            initialValue: null === (t = h.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, s.jsx)(l.Z, {
                            rule: h,
                            onChangeRule: g,
                            collapsed: (null == h ? void 0 : null === (n = h.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == h ? void 0 : null === (T = h.triggerMetadata) || void 0 === T ? void 0 : T.regexPatterns.length) === 0
                        }),
                        (0, s.jsx)(i.Z, {
                            onChange: x,
                            initialValue: null === (m = h.triggerMetadata) || void 0 === m ? void 0 : m.allowList,
                            maxWordCount: _.n4,
                            collapsed: (null === (N = h.triggerMetadata) || void 0 === N ? void 0 : N.allowList) == null || (null === (S = h.triggerMetadata) || void 0 === S ? void 0 : S.allowList.length) === 0
                        })
                    ]
                }),
                (0, s.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, s.jsx)(d.Z, {
                    step: 2,
                    header: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                    children: (0, s.jsx)(r.Z, {
                        rule: h,
                        onChangeRule: g
                    })
                }),
                (0, s.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, s.jsx)(d.Z, {
                    step: 3,
                    header: E.Z.Messages.GUILD_AUTOMOD_ROLES_EXEMPTION_HEADER,
                    children: (0, s.jsx)(c.Z, {
                        rule: h,
                        onChangeRule: g,
                        onlyRoles: !0
                    })
                })
            ]
        })
    });
}
