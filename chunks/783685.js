t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(493683),
    r = t(626135),
    s = t(827498),
    c = t(981631),
    d = t(388032);
function u(e) {
    let { botUserId: n, applicationId: t, buttonSize: u } = e,
        [m, p] = l.useState(!1),
        h = l.useRef(null),
        f = l.useCallback(async () => {
            r.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: t,
                button_action: s._y.OPEN_APP_DM
            }),
                p(!0),
                await o.Z.openPrivateChannel(n),
                clearTimeout(h.current),
                p(!1);
        }, [n, t]);
    return (0, i.jsx)(a.Button, {
        type: 'submit',
        size: u,
        color: a.Button.Colors.PRIMARY,
        submitting: m,
        onClick: f,
        'aria-label': d.intl.string(d.t.AUM8hY),
        children: d.intl.string(d.t.AUM8hY)
    });
}
