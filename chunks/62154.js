i.d(n, {
    Z: function () {
        return u;
    }
});
var t = i(735250);
i(470079);
var o = i(543595), s = i(100849), l = i(487922), a = i(620648), r = i(944546), c = i(470900), d = i(228168);
function u(e) {
    let {
        displayProfile: n,
        user: i,
        selectedSection: u,
        autoFocusNote: I,
        onClose: E
    } = e;
    switch (u) {
    case d.oh.ACTIVITY:
        return (0, t.jsx)(s.Z, {
            user: i,
            type: o.Y.PROFILE_V2,
            onClose: E
        });
    case d.oh.MUTUAL_GUILDS:
        return (0, t.jsx)(c.Z, {
            user: i,
            onClose: E
        });
    case d.oh.MUTUAL_FRIENDS:
        return (0, t.jsx)(r.Z, {
            user: i,
            onClose: E
        });
    case d.oh.BOT_DATA_ACCESS:
        return (0, t.jsx)(l.Z, { user: i });
    case d.oh.USER_INFO_CONNECTIONS:
    case d.oh.USER_INFO:
    default:
        return (0, t.jsx)(a.Z, {
            displayProfile: n,
            autoFocusNote: I,
            user: i,
            scrollToConnections: u === d.oh.USER_INFO_CONNECTIONS
        });
    }
}
