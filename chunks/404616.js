n.d(t, {
    Lp: function () {
        return ee;
    },
    NN: function () {
        return ei;
    },
    TJ: function () {
        return et;
    },
    au: function () {
        return er;
    },
    kZ: function () {
        return el;
    },
    m9: function () {
        return es;
    },
    og: function () {
        return ed;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(91192),
    h = n(442837),
    m = n(692547),
    p = n(481060),
    f = n(738619),
    g = n(393238),
    v = n(963374),
    b = n(884338),
    T = n(446489),
    x = n(95398),
    _ = n(406432),
    S = n(169525),
    C = n(566006),
    I = n(255269),
    E = n(937889),
    j = n(443877),
    R = n(524444),
    Z = n(287151),
    N = n(267128),
    y = n(695346),
    A = n(433355),
    O = n(592125),
    M = n(496675),
    w = n(699516),
    P = n(451478),
    L = n(55935),
    k = n(109434),
    U = n(456269),
    B = n(109590),
    D = n(660189),
    F = n(208970),
    V = n(73315),
    H = n(470623),
    G = n(196255),
    W = n(858543),
    z = n(265641),
    J = n(627896),
    K = n(883728),
    X = n(981631),
    Y = n(217702),
    q = n(388032),
    $ = n(646230),
    Q = n(554034);
let ee = 72,
    et = 72;
t.ZP = o.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: a, overrideMedia: l, className: c, containerWidth: d } = e,
        {
            channel: m,
            isOpen: f,
            messageCount: v,
            firstMessage: b,
            content: T,
            media: x
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                i = (0, h.e7)([O.Z], () => O.Z.getChannel(t));
            r()(null != i, 'the thread should not be null here, a store must have missed an update');
            let o = (0, h.e7)([A.ZP], () => A.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                { firstMessage: a } = (0, B.cl)(i),
                { content: s, firstMedia: l } = (0, U.mX)({ firstMessage: a }),
                { messageCountText: c } = (0, U.nP)(i);
            return {
                channel: i,
                isOpen: o,
                messageCount: c,
                firstMessage: a,
                content: s,
                media: null != n ? n : l
            };
        })({
            threadId: t,
            overrideMedia: l
        }),
        { ref: _, height: S } = (0, g.Z)(),
        C = (0, H.xH)((e) => e.setCardHeight);
    o.useEffect(() => {
        null != S && C(t, S);
    }, [S, C, t]),
        o.useEffect(() => {
            null == a || a(_.current, t);
        }, [_, a, t]);
    let I = o.useRef(null),
        { handleLeftClick: E, handleRightClick: j } = (0, K.Z)({
            facepileRef: I,
            goToThread: n,
            channel: m
        }),
        { role: R, onFocus: Z, ...N } = (0, u.JA)(t),
        { isFocused: y, handleFocus: M, handleBlur: w } = (0, z.Z)(Z);
    return (0, i.jsxs)('div', {
        ref: _,
        'data-item-id': t,
        onClick: E,
        onContextMenu: j,
        className: s()($.container, c, { [$.isOpen]: f }),
        children: [
            (0, i.jsx)(p.Clickable, {
                onClick: E,
                focusProps: { ringTarget: _ },
                onContextMenu: j,
                'aria-label': q.intl.formatToPlainString(q.t.pgYN6e, {
                    title: m.name,
                    count: v
                }),
                className: $.focusTarget,
                onFocus: M,
                onBlur: w,
                ...N
            }),
            (0, i.jsxs)('div', {
                className: $.left,
                children: [
                    (0, i.jsx)(p.HeadingLevel, {
                        children: (0, i.jsx)(en, {
                            channel: m,
                            firstMessage: b,
                            content: T,
                            hasMediaAttachment: null != x,
                            containerWidth: d
                        })
                    }),
                    (0, i.jsx)(p.FocusBlock, {
                        enabled: !y,
                        children: (0, i.jsx)(ea, {
                            channel: m,
                            firstMessage: b,
                            facepileRef: I
                        })
                    })
                ]
            }),
            (null == b ? void 0 : b.blocked) || null == x
                ? null
                : (0, i.jsx)(eu, {
                      channel: m,
                      firstMedia: x
                  })
        ]
    });
});
function en(e) {
    let { channel: t, firstMessage: n, content: o, hasMediaAttachment: a, containerWidth: l } = e,
        { isNew: r, hasUnreads: c } = (0, U.J$)(t),
        d = ei(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, J.x)(r, 24, l);
    return (0, i.jsxs)('div', {
        className: $.body,
        children: [
            (0, i.jsx)(W.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: s()($.header, { [$.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: $.headerText,
                    children: [
                        (0, i.jsx)(p.Heading, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: $.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: u,
                                children: [
                                    d,
                                    r &&
                                        (0, i.jsx)('span', {
                                            className: $.newBadgeWrapper,
                                            children: (0, i.jsx)(p.TextBadge, {
                                                className: $.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: q.intl.string(q.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        r &&
                            h &&
                            (0, i.jsx)(p.TextBadge, {
                                className: $.newBadge,
                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                text: q.intl.string(q.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: $.message,
                children: (0, i.jsx)(eo, {
                    channel: t,
                    message: n,
                    content: o,
                    hasMediaAttachment: a,
                    hasUnreads: c
                })
            })
        ]
    });
}
function ei(e) {
    let t = (0, h.e7)([F.Z], () => F.Z.getHasSearchResults(e.parent_id)),
        n = (0, h.e7)([F.Z], () => F.Z.getSearchQuery(e.parent_id)),
        i = o.useMemo(() => (0, v.nC)(t && null != n ? n : ''), [t, n]);
    return o.useMemo(
        () =>
            (0, E.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let eo = o.memo(function (e) {
    let { message: t, channel: n, content: o, hasMediaAttachment: a, hasUnreads: l } = e,
        r = (0, h.e7)([w.Z], () => null != t && w.Z.isBlockedForMessage(t)),
        c = (0, h.e7)([D.Z], () => D.Z.isLoading(n.id)),
        d = (0, h.e7)([M.Z], () => M.Z.can(X.Plq.MANAGE_MESSAGES, n)),
        u = y.cC.useSetting(),
        m = null;
    if (r)
        m = (0, i.jsx)(p.Text, {
            className: $.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: q.intl.string(q.t.Lkp2fH)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, N.f)(t, o, r, s()($.messageContent, Q.inlineFormat, Q.__invalid_smallFontSize), {
                      leadingIconClass: $.messageContentLeadingIcon,
                      trailingIconClass: $.messageContentTrailingIcon,
                      iconSize: Y.WW
                  });
        m =
            null != n
                ? (0, i.jsx)(p.Text, {
                      variant: 'text-sm/semibold',
                      color: l ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : a
                  ? null
                  : (0, i.jsx)(p.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: l ? 'header-secondary' : 'text-muted',
                        className: $.messageContent,
                        children: null == t ? (c ? null : q.intl.string(q.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(x.a.Provider, {
        value: (0, I.Z)(u, d),
        children: [
            !r &&
                (0, i.jsx)(G.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: l
                }),
            (0, i.jsx)(p.FocusBlock, {
                className: $.messageFocusBlock,
                children: m
            })
        ]
    });
});
function ea(e) {
    let { channel: t, facepileRef: n, firstMessage: o } = e,
        a = (0, U.Q)(t),
        s = (null == o ? void 0 : o.reactions) != null && o.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: $.footer,
        children: [
            s || null == o
                ? null
                : (0, i.jsx)(el, {
                      firstMessage: o,
                      channel: t
                  }),
            null == o
                ? null
                : (0, i.jsx)(er, {
                      firstMessage: o,
                      channel: t
                  }),
            (0, i.jsx)(es, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: $.bullet,
                children: '\u2022'
            }),
            a.length > 0
                ? (0, i.jsxs)('div', {
                      className: $.typing,
                      children: [
                          (0, i.jsx)(ed, {
                              channel: t,
                              userIds: a,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: $.dots,
                              children: (0, i.jsx)(p.Dots, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(f.Z, {
                              channel: t,
                              className: $.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(ec, { channel: t })
        ]
    });
}
function es(e) {
    let { channel: t, iconSize: n, showReadState: o = !1 } = e,
        { messageCountText: a, unreadCount: l } = (0, U.nP)(t);
    return (0, i.jsxs)('div', {
        className: s()($.messageCountBox, { [$.hasRead]: o && null == l }),
        children: [
            (0, i.jsx)('span', {
                className: $.messageCountIcon,
                children: (0, i.jsx)(p.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof a
                ? (0, i.jsx)(T.Z, {
                      value: a,
                      digitWidth: 9,
                      className: $.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: $.messageCountText,
                      children: a
                  }),
            null == l
                ? null
                : (0, i.jsxs)(p.Text, {
                      className: $.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', q.intl.format(q.t.z3PEtr, { count: l }), ')']
                  })
        ]
    });
}
function el(e) {
    let { firstMessage: t, channel: n } = e,
        o = (0, h.e7)([O.Z], () => O.Z.getChannel(n.parent_id)),
        a = (0, U.Bs)(o),
        { disableReactionCreates: s, isLurking: l, isPendingMember: r } = (0, j.Z)(n);
    return null == a || s
        ? null
        : (0, i.jsx)(Z.le, {
              className: $.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: C.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function er(e) {
    var t;
    let { firstMessage: n, channel: o } = e,
        a = (0, U.IN)(n),
        { disableReactionUpdates: s, isLurking: l, isPendingMember: r } = (0, j.Z)(o);
    return null == a
        ? null
        : (0, i.jsx)(
              Z.le,
              {
                  className: $.updateReactionButton,
                  message: n,
                  readOnly: s || o.isArchivedLockedThread(),
                  isLurking: l,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: a.burst_count >= a.count ? C.O.BURST : C.O.NORMAL,
                  emojiSize: 'reaction',
                  emojiSizeTooltip: 'reaction',
                  ...a
              },
              ''.concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ':').concat(a.emoji.name)
          );
}
function ec(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: o } = (0, k.H)(n.parent_id),
        a = (0, U.xw)(n, o),
        s = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null == s ? null : q.intl.formatToPlainString(q.t['13euCQ'], { timestamp: (0, L.vc)(d()(s), 'LLLL') });
    return (0, i.jsx)(p.Tooltip, {
        text: l,
        tooltipClassName: $.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(p.Text, {
                className: $.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: a
            })
    });
}
function ed(e) {
    let { channel: t, userIds: n, facepileRef: o } = e,
        a = (0, U.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(b.Z, {
            className: $.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function eu(e) {
    let t,
        n,
        { channel: o, firstMedia: a } = e,
        l = (0, h.e7)([P.Z], () => P.Z.isFocused()),
        r = (0, _.d$)(a.src),
        c = y.QK.useSetting(),
        [d, u] = (0, S.hL)({
            media: a,
            channel: o
        }),
        m = (0, S.MC)(u),
        { src: f, width: g, height: v, alt: b } = a;
    return (
        v > g ? (n = et) : (t = ee),
        (0, i.jsx)(p.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: $.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    f.startsWith('data:')
                        ? (0, i.jsx)(p.Image, {
                              src: f,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: v,
                              alt: null != b && d ? m : b,
                              className: $.thumbnailContainer,
                              imageClassName: s()({
                                  [$.obscured]: d,
                                  [$.thumbnailOverride]: !0
                              })
                          })
                        : (0, R.Yi)({
                              src: f,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: v,
                              alt: null != b && d ? m : b,
                              autoPlay: c,
                              animated: r && !d && l,
                              containerClassName: $.thumbnailContainer,
                              imageClassName: s()({ [$.obscured]: d })
                          }),
                    d &&
                        (0, i.jsx)(V.Z, {
                            iconClassname: $.obscuredTag,
                            obscureReason: u
                        })
                ]
            })
        })
    );
}
