n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(438536), l = n(214906), r = n(346479), o = n(723170), c = n(124368);
function d(e) {
    let {
            channel: t,
            closePopout: n,
            onSelect: d,
            navId: u,
            label: _
        } = e, E = (0, s.Z)(t, 'Notifications Bell'), m = (0, l.Z)(t), I = (0, o.B)(t);
    return (0, i.jsxs)(a.Menu, {
        navId: u,
        onClose: n,
        'aria-label': _,
        onSelect: d,
        children: [
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    t.isForumPost() ? E : null,
                    m
                ]
            }),
            (0, i.jsx)(a.MenuGroup, {
                children: (0, c.zb)().map(e => {
                    let {
                        setting: n,
                        label: s
                    } = e;
                    return (0, i.jsx)(a.MenuRadioItem, {
                        group: 'thread-notifications',
                        id: ''.concat(n),
                        label: s,
                        action: () => r.Z.setNotificationSettings(t, { flags: n }),
                        checked: n === I
                    }, n);
                })
            })
        ]
    });
}
