n.d(t, {
    D: function () {
        return S;
    },
    Z: function () {
        return v;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(780384),
    r = n(481060),
    o = n(239091),
    c = n(37234),
    u = n(410030),
    d = n(44315),
    h = n(565138),
    p = n(769654),
    m = n(51144),
    _ = n(785717),
    f = n(200634),
    E = n(228168),
    g = n(981631),
    C = n(689938),
    I = n(519294),
    T = n(581958);
let x = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function S(e) {
    let { user: t, guild: s, nick: c, theme: u, onSelect: p } = e,
        _ = t.hasAvatarForGuild(s.id);
    return (0, i.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: I.listRow,
        onClick: p,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('96427'), n.e('23755'), n.e('11751'), n.e('33053'), n.e('37581'), n.e('65840'), n.e('7654'), n.e('90508'), n.e('59743'), n.e('18146'), n.e('44156'), n.e('39371'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('67564'), n.e('1187'), n.e('36897'), n.e('22036'), n.e('92557'), n.e('64679'), n.e('36362'), n.e('3175'), n.e('33213'), n.e('88578')]).then(n.bind(n, 545135));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guild: s
                    });
            });
        },
        children: [
            (0, i.jsx)(h.Z, {
                tabIndex: -1,
                guild: s,
                showBadge: !0,
                className: a()(I.listAvatar, null == s.icon ? T.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, l.wj)(u) ? g.Ilk.PRIMARY_600 : g.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: E.vB,
                size: h.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsxs)('div', {
                className: I.listRowContent,
                children: [
                    (0, i.jsx)('div', {
                        className: I.listName,
                        children: s.toString()
                    }),
                    _ || null != c
                        ? (0, i.jsxs)('div', {
                              className: T.guildNick,
                              children: [
                                  _ &&
                                      (0, i.jsx)(r.Avatar, {
                                          src: t.getAvatarURL(s.id, x),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: T.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != c ? c : m.ZP.getName(t)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function v(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: s } = (0, _.KZ)(),
        { mutualGuilds: a } = (0, f.Z)(t.id),
        l = (0, u.ZP)(),
        o = (e) => {
            (0, p.X)(e), n(), (0, c.xf)();
        };
    return (0, i.jsx)(r.ScrollerThin, {
        className: I.listScroller,
        fade: !0,
        children:
            null == a
                ? (0, i.jsx)('div', {
                      className: I.empty,
                      children: (0, i.jsx)(r.Spinner, {})
                  })
                : 0 === a.length
                  ? (0, i.jsxs)('div', {
                        className: I.empty,
                        children: [
                            (0, i.jsx)('div', { className: I.emptyIconGuilds }),
                            (0, i.jsx)('div', {
                                className: I.emptyText,
                                children: C.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : a.map((e) => {
                        let { guild: n, nick: a } = e;
                        return (0, i.jsx)(
                            S,
                            {
                                user: t,
                                guild: n,
                                nick: a,
                                theme: l,
                                onSelect: () => {
                                    s({ action: 'PRESS_MUTUAL_GUILD' }), o(n.id);
                                }
                            },
                            n.id
                        );
                    })
    });
}
