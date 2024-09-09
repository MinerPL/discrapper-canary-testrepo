t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(735250);
t(470079);
var i = t(481060),
    u = t(572004),
    s = t(592126),
    r = t(981631),
    a = t(689938);
function d(e, n, t) {
    let d = null != t,
        { isMember: E } = (0, s.Z)(n, e);
    if (!E) return null;
    function o() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, u.JG)(
            ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(r.Z5c.GUILD_EVENT_DETAILS(n, e, l ? null : t))
        ),
            (0, i.showToast)((0, i.createToast)(a.Z.Messages.COPIED_LINK, i.ToastType.SUCCESS));
    }
    return (0, l.jsx)(i.MenuItem, {
        id: a.Z.Messages.COPY_EVENT_LINK,
        label: a.Z.Messages.COPY_EVENT_LINK,
        action: d ? void 0 : () => o(!0),
        children:
            d &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.MenuItem, {
                        id: a.Z.Messages.COPY_RECURRENCE_LINK,
                        label: a.Z.Messages.COPY_RECURRENCE_LINK,
                        action: () => o(!1)
                    }),
                    (0, l.jsx)(i.MenuItem, {
                        id: a.Z.Messages.COPY_SERIES_LINK,
                        label: a.Z.Messages.COPY_SERIES_LINK,
                        action: () => o(!0)
                    })
                ]
            })
    });
}
