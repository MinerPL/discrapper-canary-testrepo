n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(889161), l = n(343747), u = n(689938), c = n(507337);
function d(e) {
    let {
            guild: t,
            focused: n,
            ...i
        } = e, {canCreateExpressions: d} = (0, s.XJ)(t);
    return (0, r.jsx)(o.Tooltip, {
        text: u.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
        shouldShow: !d,
        children: e => (0, r.jsx)('li', {
            className: c.soundButtonWrapper,
            ...e,
            children: (0, r.jsxs)(o.ClickableContainer, {
                ...i,
                'aria-label': u.Z.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({ guildName: t.name }),
                className: a()(c.soundAddButton, {
                    [c.focused]: n,
                    [c.disabled]: !d
                }),
                onClick: () => (0, l.Z)(t.id),
                children: [
                    (0, r.jsx)(o.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: c.soundAddIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: d ? 'header-primary' : 'text-muted',
                        children: u.Z.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                    })
                ]
            })
        })
    });
}
