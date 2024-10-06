n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(700582),
    c = n(330726),
    d = n(51144),
    u = n(268350),
    _ = n(419922),
    I = n(689938),
    E = n(102017);
t.Z = (e) => {
    let { className: t, isDisabled: i, sticker: T, canManageSticker: m } = e,
        [N, S] = a.useState(!1),
        [g, h] = (0, c.Z)(null, 4000),
        C = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('2901')]).then(n.bind(n, 136735));
                return (t) =>
                    (0, s.jsx)(e, {
                        sticker: T,
                        guildId: T.guild_id,
                        ...t
                    });
            });
        },
        x = async () => {
            h(null), S(!0);
            try {
                await (0, u.Um)(T);
            } catch (e) {
                h(e.body.message), S(!1);
            }
        },
        p = d.ZP.useUserTag(T.user);
    return (0, s.jsx)(l.Tooltip, {
        color: l.Tooltip.Colors.RED,
        forceOpen: null != g,
        text: g,
        children: () =>
            (0, s.jsxs)('div', {
                className: r()(E.wrapper, t, { [E.wrapperDisabled]: i }),
                children: [
                    (0, s.jsxs)('div', {
                        className: r()(E.content, { [E.contentRemoving]: N }),
                        children: [
                            (0, s.jsx)(_.ZP, {
                                className: E.sticker,
                                size: 72,
                                sticker: T
                            }),
                            (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsx)(l.Text, {
                                        color: 'header-primary',
                                        variant: 'text-xs/semibold',
                                        className: E.stickerName,
                                        children: T.name
                                    }),
                                    null != T.user &&
                                        (0, s.jsxs)('div', {
                                            className: E.user,
                                            children: [
                                                (0, s.jsx)(o.Z, {
                                                    className: E.userAvatar,
                                                    size: l.AvatarSizes.SIZE_16,
                                                    user: T.user
                                                }),
                                                (0, s.jsx)(l.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: p
                                                })
                                            ]
                                        })
                                ]
                            }),
                            m
                                ? (0, s.jsxs)('div', {
                                      className: E.actions,
                                      children: [
                                          (0, s.jsx)(l.Clickable, {
                                              className: E.action,
                                              onClick: C,
                                              'aria-label': I.Z.Messages.EDIT,
                                              children: (0, s.jsx)(l.PencilIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: E.icon
                                              })
                                          }),
                                          (0, s.jsx)(l.Clickable, {
                                              className: r()(E.action, E.actionRemove),
                                              onClick: x,
                                              'aria-label': I.Z.Messages.REMOVE,
                                              children: (0, s.jsx)(l.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: E.icon
                                              })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    N && (0, s.jsx)(l.Spinner, { className: E.spinner })
                ]
            })
    });
};
