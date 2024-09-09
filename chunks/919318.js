l.d(n, {
    ZP: function () {
        return H;
    }
}),
    l(47120);
var a = l(735250),
    r = l(470079),
    i = l(120356),
    t = l.n(i),
    s = l(442837),
    d = l(481060),
    o = l(904245),
    c = l(368844),
    u = l(73315),
    h = l(454585),
    m = l(406432),
    g = l(169525),
    C = l(524444),
    x = l(703656),
    f = l(6025),
    I = l(695346),
    Z = l(592125),
    _ = l(984933),
    v = l(375954),
    p = l(496675),
    N = l(451478),
    j = l(768581),
    b = l(526120),
    E = l(689981),
    M = l(825334),
    A = l(981631),
    S = l(689938),
    T = l(706221),
    R = l(910212),
    P = l(931057);
function B(e) {
    let n,
        l,
        { firstMedia: r, channelId: i } = e,
        d = (0, s.e7)([Z.Z], () => Z.Z.getChannel(i)),
        [o, c] = (0, g.hL)({
            media: r,
            channel: d
        }),
        h = (0, g.MC)(c),
        x = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        f = (0, m.d$)(r.src),
        _ = I.QK.useSetting(),
        { src: v, width: p, height: j, alt: b } = r;
    return (
        j > p ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: T.media,
            children: [
                (0, C.Yi)({
                    src: v,
                    maxHeight: n,
                    maxWidth: l,
                    width: p,
                    height: j,
                    alt: null != b && o && null != h ? h : b,
                    autoPlay: _,
                    animated: f && !o && x,
                    containerClassName: T.thumbnailContainer,
                    imageClassName: t()({ [T.obscured]: o }),
                    renderForwardComponent: A.VqG
                }),
                o &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: c,
                        iconClassname: T.obscuredTag
                    })
            ]
        })
    );
}
function y(e) {
    let { resource: n } = e,
        l = (0, s.e7)([Z.Z], () => Z.Z.getChannel(n.channelId)),
        i = (0, s.e7)([v.Z], () => v.Z.getMessages(n.channelId)),
        u = (0, s.e7)([p.Z], () => p.Z.can(A.Plq.VIEW_CHANNEL, l)),
        m = i.first(),
        g = (0, E.Z)(m),
        C = (0, c.zy)(m, !1),
        x = (null == C ? void 0 : C.length) > 0 ? C[0] : null,
        I = null != l && null == i.first() && !i.loadingMore && !i.ready && !i.hasFetched && u;
    r.useEffect(() => {
        I &&
            o.Z.fetchMessages({
                channelId: n.channelId,
                after: n.channelId,
                limit: 5
            });
    }, [n.channelId, I]);
    if (null == l || null == l.guild_id) return null;
    let _ = j.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        N = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.Clickable, {
        className: T.row,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, b.C3)(l.guild_id, l.id)
                    : f.Z.openResourceChannelAsSidebar({
                          guildId: l.guild_id,
                          channelId: l.id
                      }));
        },
        children: [
            (0, a.jsxs)('div', {
                className: T.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: T.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    N &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: T.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !N &&
                        (0, a.jsx)(d.Text, {
                            className: t()(T.messageContent, R.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(n.description, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        })
                ]
            }),
            null != n.icon && null != _
                ? (0, a.jsx)('div', {
                      className: T.media,
                      children: (0, a.jsx)('img', {
                          src: _,
                          className: T.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == _ && null != x
                ? (0, a.jsx)(B, {
                      firstMedia: x,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function H(e) {
    let { guild: n, isNewMember: l } = e,
        r = (0, M.Z)(n.id);
    if (0 === r.length)
        return l
            ? null
            : (0, a.jsxs)('div', {
                  className: T.emptyContainer,
                  children: [
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
                      }),
                      (0, a.jsx)('img', {
                          className: T.emptyStateImage,
                          src: P,
                          alt: ''
                      }),
                      (0, a.jsx)(d.Button, {
                          className: T.emptyStateButton,
                          onClick: () => {
                              let e = _.ZP.getDefaultChannel(n.id);
                              null != e && (0, x.uL)(A.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
                      })
                  ]
              });
    return (0, a.jsxs)('div', {
        className: T.container,
        children: [
            (0, a.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: S.Z.Messages.GUILD_HOME_RESOURCES
            }),
            r.map((e) => (0, a.jsx)(y, { resource: e }, e.channelId))
        ]
    });
}
