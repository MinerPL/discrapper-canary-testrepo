n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(357156),
    l = n(343747),
    u = n(689938),
    c = n(78877);
function d(e) {
    let { guild: t, focused: n, onSelectItem: i, refreshEnabled: d, ..._ } = e,
        { canCreateExpressions: E } = (0, o.X)(t);
    return (0, r.jsx)(s.Tooltip, {
        text: u.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
        shouldShow: !E,
        children: (e) =>
            (0, r.jsx)('li', {
                className: c.soundButtonWrapper,
                ...e,
                children: (0, r.jsx)(s.ClickableContainer, {
                    ..._,
                    'aria-label': u.Z.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({ guildName: t.name }),
                    className: a()(d ? c.soundAddButtonRefresh : c.soundAddButton, {
                        [c.focused]: n,
                        [c.disabled]: !E
                    }),
                    onClick: () => (null != i ? i() : (0, l.Z)(t.id)),
                    children: d
                        ? (0, r.jsxs)('div', {
                              className: c.soundAddInfoRefresh,
                              children: [
                                  (0, r.jsx)(s.CirclePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIconRefresh
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: E ? void 0 : 'text-muted',
                                      className: c.soundAddTextRefresh,
                                      children: u.Z.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                                  })
                              ]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.PlusSmallIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIcon
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: E ? 'header-primary' : 'text-muted',
                                      children: u.Z.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                                  })
                              ]
                          })
                })
            })
    });
}
