n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(524437),
    l = n(481060),
    o = n(235820),
    c = n(494404),
    u = n(110924),
    d = n(796798),
    _ = n(198620),
    E = n(294218),
    I = n(695346),
    m = n(592125),
    T = n(731290),
    h = n(944486),
    N = n(455199),
    f = n(655354),
    C = n(999671),
    p = n(324081),
    g = n(240126),
    S = n(791914),
    A = n(981631),
    R = n(689938),
    x = n(674069);
let O = {
    offset: {
        left: 4,
        right: -12
    }
};
function M(e, t, n) {
    let i = t ? N.Z.guildFilter : null,
        a = t ? N.Z.roleFilter : null,
        s = t ? N.Z.everyoneFilter : null,
        r = null;
    null != e && null != i && (r = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, A.DJj, r, a, s);
}
function v(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: E } = e,
        I = (0, s.e7)([m.Z, h.Z], () => m.Z.getChannel(h.Z.getChannelId())),
        {
            messages: T,
            hasMore: f,
            loading: p,
            guildFilter: g,
            roleFilter: O,
            everyoneFilter: v
        } = (0, s.cj)([N.Z], () => ({
            messages: N.Z.getMentions(),
            hasMore: N.Z.hasMore,
            loading: N.Z.loading,
            guildFilter: N.Z.guildFilter,
            roleFilter: N.Z.roleFilter,
            everyoneFilter: N.Z.everyoneFilter
        })),
        L = (0, u.Z)(g),
        P = (0, u.Z)(O),
        D = (0, u.Z)(v);
    a.useEffect(() => {
        if (!N.Z.hasLoadedEver) {
            M(I, !0);
            return;
        }
        ((null != L && g !== L) || (null != P && O !== P) || (null != D && v !== D)) && M(I, !0);
    }, [L, g, P, O, D, v, I, !0]);
    a.useEffect(() => {
        d.l.getCurrentConfig({ location: 'mentions' }).enabled && (null == T ? void 0 : T.some(_.k5)) && (o.Z.clearMentions(), M(I, !0));
    }, []),
        a.useEffect(
            () => () => {
                o.Z.truncateMentions(A.DJj);
            },
            []
        );
    let j = a.useCallback(
        () =>
            (0, i.jsx)(S.Z, {
                tab: r.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: E,
                children: (0, i.jsx)(C.Z, {})
            }),
        [!0, t, l, E]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: x.recentMentionsPopout,
            scrollerClassName: x.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                o.Z.deleteRecentMention(e.id);
            },
            channel: I,
            messages: T,
            loading: p,
            hasMore: f,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                M(I, !0, null != T && T.length > 0 ? T[T.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: j,
            renderEmptyState: b,
            renderMessage: Z,
            'aria-label': R.Z.Messages.RECENT_MENTIONS,
            listName: 'recents'
        })
    });
}
function L(e, t) {
    return [
        (0, i.jsx)(
            P,
            {
                message: e,
                gotoMessage: t
            },
            e.id
        )
    ];
}
function Z(e, t) {
    return [
        (0, i.jsx)(
            P,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function P(e) {
    let { message: t, gotoMessage: n, dismissible: a } = e;
    if (null == t) return null;
    let s = m.Z.getChannel(t.channel_id);
    if (null == s) return null;
    let r = T.Z.didAgree(s.getGuildId()),
        c = !!s.isNSFW() && !r;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(p.Z, {
                channel: s,
                gotoChannel: n,
                children:
                    null != a
                        ? (0, i.jsx)(l.CircleIconButton, {
                              className: x.closeButton,
                              tooltip: R.Z.Messages.CLOSE,
                              color: l.CircleIconButtonColors.TERTIARY,
                              icon: (0, i.jsx)(l.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => o.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: x.messageContainer,
                children: [
                    (0, i.jsx)(f.Z, {
                        className: x.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        E.Z,
                        {
                            message: t,
                            channel: s,
                            className: x.message,
                            hideAccessories: c,
                            compact: I.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: O,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function b(e) {
    return (0, i.jsx)(g.Z, {
        Icon: l.AtIcon,
        header: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
