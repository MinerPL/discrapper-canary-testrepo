t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(735250),
    i = t(120356),
    a = t.n(i),
    r = t(481060),
    o = t(318374),
    s = t(5192),
    c = t(192918),
    u = t(256139),
    d = t(91907),
    m = t(866040),
    f = t(689938),
    _ = t(182408);
function p(e) {
    let { entry: n, channel: t, className: i } = e,
        { displayParticipants: p, participant1: C, participant2: h, numOtherParticipants: I, orderedParticipants: x } = (0, c.Z)(n),
        E = [C, h];
    return (0, l.jsxs)('div', {
        className: a()(_.container, i),
        children: [
            p.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.Z, {
                              participants: x,
                              channel: t,
                              children: (e) =>
                                  (0, l.jsx)(r.Clickable, {
                                      className: _.clickable,
                                      ...e,
                                      children: (0, l.jsx)(o.Z, {
                                          maxUsers: 3,
                                          users: p,
                                          size: r.AvatarSizes.SIZE_20,
                                          avatarClassName: _.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, l.jsx)(r.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, l.jsx)(r.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: a()(_.truncatedText, _.usersHeader),
                scaleFontToUserSetting: !0,
                children: f.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: s.ZP.getName(t.guild_id, t.id, E[0]),
                    user1: s.ZP.getName(t.guild_id, t.id, E[1]),
                    countOthers: I,
                    name0Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: E[0],
                                channel: t
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: E[1],
                                channel: t
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, l.jsx)(
                            m.Z,
                            {
                                participants: x,
                                channel: t,
                                children: (n) =>
                                    (0, l.jsx)(u.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, l.jsx)(r.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-primary',
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e
                                        })
                                    })
                            },
                            n
                        )
                })
            })
        ]
    });
}
