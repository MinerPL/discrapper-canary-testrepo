n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(524437), r = n(481060), o = n(235820), c = n(494404), d = n(110924), u = n(796798), _ = n(198620), E = n(294218), m = n(695346), I = n(592125), T = n(731290), h = n(944486), N = n(455199), f = n(655354), p = n(999671), C = n(324081), g = n(240126), S = n(791914), A = n(981631), x = n(689938), O = n(174766);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function M(e, t, n) {
    let i = t ? N.Z.guildFilter : null, a = t ? N.Z.roleFilter : null, s = t ? N.Z.everyoneFilter : null, l = null;
    null != e && null != i && (l = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, A.DJj, l, a, s);
}
function v(e) {
    let {
            setTab: t,
            onJump: n,
            badgeState: r,
            closePopout: E
        } = e, m = (0, s.e7)([
            I.Z,
            h.Z
        ], () => I.Z.getChannel(h.Z.getChannelId())), {
            messages: T,
            hasMore: f,
            loading: C,
            guildFilter: g,
            roleFilter: R,
            everyoneFilter: v
        } = (0, s.cj)([N.Z], () => ({
            messages: N.Z.getMentions(),
            hasMore: N.Z.hasMore,
            loading: N.Z.loading,
            guildFilter: N.Z.guildFilter,
            roleFilter: N.Z.roleFilter,
            everyoneFilter: N.Z.everyoneFilter
        })), L = (0, d.Z)(g), P = (0, d.Z)(R), D = (0, d.Z)(v);
    a.useEffect(() => {
        if (!N.Z.hasLoadedEver) {
            M(m, !0);
            return;
        }
        (null != L && g !== L || null != P && R !== P || null != D && v !== D) && M(m, !0);
    }, [
        L,
        g,
        P,
        R,
        D,
        v,
        m,
        !0
    ]);
    a.useEffect(() => {
        u.l.getCurrentConfig({ location: 'mentions' }).enabled && (null == T ? void 0 : T.some(_.k5)) && (o.Z.clearMentions(), M(m, !0));
    }, []), a.useEffect(() => () => {
        o.Z.truncateMentions(A.DJj);
    }, []);
    let j = a.useCallback(() => (0, i.jsx)(S.Z, {
        tab: l.X.MENTIONS,
        setTab: t,
        badgeState: r,
        closePopout: E,
        children: (0, i.jsx)(p.Z, {})
    }), [
        !0,
        t,
        r,
        E
    ]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: O.recentMentionsPopout,
            scrollerClassName: O.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                o.Z.deleteRecentMention(e.id);
            },
            channel: m,
            messages: T,
            loading: C,
            hasMore: f,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                M(m, !0, null != T && T.length > 0 ? T[T.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: j,
            renderEmptyState: b,
            renderMessage: Z,
            'aria-label': x.Z.Messages.RECENT_MENTIONS,
            listName: 'recents'
        })
    });
}
function L(e, t) {
    return [(0, i.jsx)(P, {
            message: e,
            gotoMessage: t
        }, e.id)];
}
function Z(e, t) {
    return [(0, i.jsx)(P, {
            message: e,
            gotoMessage: t,
            dismissible: !0
        }, e.id)];
}
function P(e) {
    let {
        message: t,
        gotoMessage: n,
        dismissible: a
    } = e;
    if (null == t)
        return null;
    let s = I.Z.getChannel(t.channel_id);
    if (null == s)
        return null;
    let l = T.Z.didAgree(s.getGuildId()), c = !!s.isNSFW() && !l;
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(C.Z, {
                channel: s,
                gotoChannel: n,
                children: null != a ? (0, i.jsx)(r.CircleIconButton, {
                    className: O.closeButton,
                    tooltip: x.Z.Messages.CLOSE,
                    color: r.CircleIconButtonColors.TERTIARY,
                    icon: (0, i.jsx)(r.CloseSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: () => o.Z.deleteRecentMention(t.id)
                }) : null
            }),
            (0, i.jsxs)('div', {
                className: O.messageContainer,
                children: [
                    (0, i.jsx)(f.Z, {
                        className: O.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(E.Z, {
                        message: t,
                        channel: s,
                        className: O.message,
                        hideAccessories: c,
                        compact: m.jU.getSetting(),
                        animateAvatar: !1,
                        focusProps: R,
                        trackAnnouncementViews: !0
                    }, t.id)
                ]
            })
        ]
    });
}
function b(e) {
    return (0, i.jsx)(g.Z, {
        Icon: r.AtIcon,
        header: x.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: x.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
