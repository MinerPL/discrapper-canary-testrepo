n.d(t, {
    D: function () {
        return T;
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
    m = n(769654),
    p = n(51144),
    _ = n(200634),
    f = n(228168),
    E = n(981631),
    g = n(689938),
    C = n(542926),
    I = n(632207);
let x = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function T(e) {
    let { user: t, guild: s, nick: c, theme: u, onSelect: m } = e,
        _ = t.hasAvatarForGuild(s.id);
    return (0, i.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: C.listRow,
        onClick: m,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('96427'), n.e('23755'), n.e('89350'), n.e('11751'), n.e('33053'), n.e('37581'), n.e('65840'), n.e('7654'), n.e('90508'), n.e('18146'), n.e('44156'), n.e('59743'), n.e('14203'), n.e('85552'), n.e('98926'), n.e('58227'), n.e('1187'), n.e('75531'), n.e('22036'), n.e('92557'), n.e('64679'), n.e('23693'), n.e('87713'), n.e('33213'), n.e('30045')]).then(n.bind(n, 545135));
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
                className: a()(C.listAvatar, null == s.icon ? I.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, l.wj)(u) ? E.Ilk.PRIMARY_600 : E.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: f.vB,
                size: h.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsxs)('div', {
                className: C.listRowContent,
                children: [
                    (0, i.jsx)('div', {
                        className: C.listName,
                        children: s.toString()
                    }),
                    _ || null != c
                        ? (0, i.jsxs)('div', {
                              className: I.guildNick,
                              children: [
                                  _ &&
                                      (0, i.jsx)(r.Avatar, {
                                          src: t.getAvatarURL(s.id, x),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: I.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != c ? c : p.ZP.getName(t)
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
        { mutualGuilds: s } = (0, _.Z)(t.id),
        a = (0, u.ZP)(),
        l = (e) => {
            (0, m.X)(e), n(), (0, c.xf)();
        };
    return (0, i.jsx)(r.ScrollerThin, {
        className: C.listScroller,
        fade: !0,
        children:
            null == s
                ? (0, i.jsx)('div', {
                      className: C.empty,
                      children: (0, i.jsx)(r.Spinner, {})
                  })
                : 0 === s.length
                  ? (0, i.jsxs)('div', {
                        className: C.empty,
                        children: [
                            (0, i.jsx)('div', { className: C.emptyIconGuilds }),
                            (0, i.jsx)('div', {
                                className: C.emptyText,
                                children: g.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : s.map((e) => {
                        let { guild: n, nick: s } = e;
                        return (0, i.jsx)(
                            T,
                            {
                                user: t,
                                guild: n,
                                nick: s,
                                theme: a,
                                onSelect: () => l(n.id)
                            },
                            n.id
                        );
                    })
    });
}
