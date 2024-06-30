n.d(t, {
    Z: function () {
        return u;
    }
}), n(653041);
var i = n(735250), a = n(470079), l = n(442837), s = n(704215), r = n(243778), o = n(375954), c = n(423490);
function u(e) {
    let {children: t} = e, n = (0, l.e7)([o.Z], () => o.Z.hasCurrentUserSentMessageSinceAppStart()), u = a.useMemo(() => {
            let e = [];
            return n && e.push(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [n]);
    return (0, i.jsx)(r.Z, {
        contentTypes: u,
        children: e => {
            let {visibleContent: n} = e;
            if (n === s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2)
                return (0, i.jsx)(c.Q, { children: t });
            return t;
        }
    });
}
