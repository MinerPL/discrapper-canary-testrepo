t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), d = t(569471), s = t(346479), u = t(723170), l = t(124368), o = t(689938);
function c(e) {
    let n = (0, u.B)(e);
    return (0, a.e7)([d.Z], () => d.Z.hasJoined(e.id)) ? (0, i.jsx)(r.MenuItem, {
        id: 'thread-notifications',
        label: o.Z.Messages.NOTIFICATION_SETTINGS,
        children: (0, l.zb)().map(t => {
            let {
                setting: a,
                label: d
            } = t;
            return (0, i.jsx)(r.MenuRadioItem, {
                group: 'thread-notifications',
                id: ''.concat(a),
                label: d,
                action: () => s.Z.setNotificationSettings(e, { flags: a }),
                checked: a === n
            }, a);
        })
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'notifications-disabled',
        label: o.Z.Messages.NOTIFICATION_SETTINGS,
        disabled: !0
    });
}
