a.r(e);
var s = a(735250);
a(470079);
var c = a(481060),
    t = a(239091),
    r = a(108843),
    u = a(100527),
    i = a(299206),
    l = a(852245),
    o = a(689938);
e.default = (0, r.Z)(
    function (n) {
        let { channel: e, onSelect: a } = n,
            r = (0, l.Z)(e),
            u = (0, i.Z)({
                id: e.id,
                label: o.Z.Messages.COPY_ID_CHANNEL
            });
        return (0, s.jsxs)(c.Menu, {
            navId: 'channel-context',
            onClose: t.Zy,
            'aria-label': o.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: a,
            children: [(0, s.jsx)(c.MenuGroup, { children: r }), (0, s.jsx)(c.MenuGroup, { children: u })]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU]
);
