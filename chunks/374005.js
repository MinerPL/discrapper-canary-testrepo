n.d(t, {
    b: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(393238),
    r = n(540059),
    l = n(720734),
    o = n(840780),
    c = n(235555),
    d = n(746508),
    u = n(210724),
    _ = n(905423),
    E = n(410575),
    h = n(981631),
    m = n(689938),
    I = n(264044);
function g(e) {
    let t = (0, _.Z)((e) => {
        let { guildId: t } = e;
        return t;
    });
    return (0, i.jsx)(o.Z, {
        ...e,
        guildId: t
    });
}
function p() {
    let e = (0, r.Q)('AppPanels'),
        t = a.useRef(null);
    return (
        (0, s.P)(
            t,
            (t) => {
                let { height: n } = t;
                e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
            },
            []
        ),
        (0, i.jsxs)('section', {
            ref: t,
            className: I.panels,
            'aria-label': m.Z.Messages.ACCOUNT_A11Y_LABEL,
            children: [
                (0, i.jsx)(u.Z, {}),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(E.Z, {
                    section: h.jXE.ACTIVITY_PANEL,
                    children: (0, i.jsx)(g, { className: I.activityPanel })
                }),
                (0, i.jsx)(E.Z, {
                    section: h.jXE.RTC_CONNECTION_PANEL,
                    children: (0, i.jsx)(d.Z, {})
                }),
                (0, i.jsx)(E.Z, {
                    section: h.jXE.ACCOUNT_PANEL,
                    children: (0, i.jsx)(l.Z, {})
                })
            ]
        })
    );
}
