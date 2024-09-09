n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var a = n(456677),
    i = n(55889),
    r = n(300453),
    l = n(620436),
    o = n(689938),
    c = n(394570);
function d(e) {
    let { rule: t, onChangeRule: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: c.cardContentsContainer,
            children: [
                (0, s.jsx)(r.Z, {
                    step: 1,
                    header: o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_TRIGGER_HEADER
                }),
                (0, s.jsx)(l.Z, { type: l.Z.Type.ARROW_DOWN }),
                (0, s.jsx)(r.Z, {
                    step: 2,
                    header: o.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                    children: (0, s.jsx)(a.Z, {
                        rule: t,
                        onChangeRule: n
                    })
                }),
                (0, s.jsx)(l.Z, { type: l.Z.Type.CROSS }),
                (0, s.jsx)(r.Z, {
                    step: 3,
                    header: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                    children: (0, s.jsx)(i.Z, {
                        rule: t,
                        onChangeRule: n
                    })
                })
            ]
        })
    });
}
