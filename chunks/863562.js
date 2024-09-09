n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(700582),
    c = n(330726),
    d = n(268350),
    u = n(419922),
    _ = n(689938),
    I = n(405385);
t.Z = (e) => {
    let { className: t, isDisabled: i, sticker: E, canManageSticker: T } = e,
        [m, N] = a.useState(!1),
        [S, h] = (0, c.Z)(null, 4000),
        g = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('33625')]).then(n.bind(n, 136735));
                return (t) =>
                    (0, s.jsx)(e, {
                        sticker: E,
                        guildId: E.guild_id,
                        ...t
                    });
            });
        },
        C = async () => {
            h(null), N(!0);
            try {
                await (0, d.Um)(E);
            } catch (e) {
                h(e.body.message), N(!1);
            }
        };
    return (0, s.jsx)(l.Tooltip, {
        color: l.Tooltip.Colors.RED,
        forceOpen: null != S,
        text: S,
        children: () =>
            (0, s.jsxs)('div', {
                className: r()(I.wrapper, t, { [I.wrapperDisabled]: i }),
                children: [
                    (0, s.jsxs)('div', {
                        className: r()(I.content, { [I.contentRemoving]: m }),
                        children: [
                            (0, s.jsx)(u.ZP, {
                                className: I.sticker,
                                size: 72,
                                sticker: E
                            }),
                            (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsx)(l.Text, {
                                        color: 'header-primary',
                                        variant: 'text-xs/semibold',
                                        className: I.stickerName,
                                        children: E.name
                                    }),
                                    null != E.user &&
                                        (0, s.jsxs)('div', {
                                            className: I.user,
                                            children: [
                                                (0, s.jsx)(o.Z, {
                                                    className: I.userAvatar,
                                                    size: l.AvatarSizes.SIZE_16,
                                                    user: E.user
                                                }),
                                                (0, s.jsx)(l.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: E.user.username
                                                })
                                            ]
                                        })
                                ]
                            }),
                            T
                                ? (0, s.jsxs)('div', {
                                      className: I.actions,
                                      children: [
                                          (0, s.jsx)(l.Clickable, {
                                              className: r()(I.action, I.__invalid_actionEdit),
                                              onClick: g,
                                              'aria-label': _.Z.Messages.EDIT,
                                              children: (0, s.jsx)(l.PencilIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: I.icon
                                              })
                                          }),
                                          (0, s.jsx)(l.Clickable, {
                                              className: r()(I.action, I.actionRemove),
                                              onClick: C,
                                              'aria-label': _.Z.Messages.REMOVE,
                                              children: (0, s.jsx)(l.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: I.icon
                                              })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    m && (0, s.jsx)(l.Spinner, { className: I.spinner })
                ]
            })
    });
};
