n.d(t, {
    AP: function () {
        return K;
    },
    Ru: function () {
        return q;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(512722),
    o = n.n(r),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    h = n(607070),
    p = n(223606),
    m = n(518738),
    _ = n(628238),
    f = n(807092),
    E = n(869765),
    g = n(703656),
    C = n(695346),
    I = n(592125),
    T = n(906467),
    x = n(323873),
    S = n(709054),
    v = n(786761),
    N = n(534091),
    A = n(901461),
    Z = n(739566),
    M = n(233715),
    b = n(492593),
    R = n(453687),
    L = n(348238),
    j = n(62072),
    P = n(38267),
    O = n(25015),
    y = n(689674),
    D = n(438075),
    U = n(764893),
    k = n(481363),
    w = n(900902),
    B = n(252032),
    H = n(737243),
    G = n(614584),
    V = n(295790),
    F = n(959517),
    W = n(981631),
    z = n(689938),
    Y = n(916315);
function K(e, t, n) {
    return e.getElementById((0, N.p)(t, n));
}
function q(e) {
    var t;
    let {
        id: n,
        message: s,
        message: { messageReference: a },
        compact: r = !1,
        className: d
    } = e;
    o()(s.type === W.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        p = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(a)),
        { popouts: m, setPopout: _ } = (0, P.Z)(s.id, F.d$),
        f = (0, Z.ZP)(s),
        g = (0, R.iG)(s),
        C = (0, R.Gx)(s);
    return s.type === W.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === E.Y.LOADED
        ? (0, i.jsx)(X, {
              ...e,
              viewingChannelId: s.channel_id,
              message: p.message,
              groupId: p.message.id
          })
        : (0, i.jsx)(b.Z, {
              ...h,
              id: n,
              compact: r,
              className: l()(d, {
                  [Y.message]: !0,
                  [Y.cozyMessage]: !r,
                  [Y.systemMessage]: !0,
                  [Y.groupStart]: !0
              }),
              childrenHeader: (0, w.Z)({
                  messageProps: e,
                  setPopout: _,
                  messagePopouts: m,
                  replyReference: a,
                  author: f
              }),
              childrenSystemMessage: (0, V.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': g,
              'aria-describedby': C,
              hasThread: !1
          });
}
function X(e) {
    var t, n;
    let {
            id: a,
            message: r,
            message: { id: o, channel_id: p },
            channel: { guild_id: f },
            compact: I = !1,
            className: T,
            groupId: x,
            viewingChannelId: S
        } = e,
        N = r.type === W.uaV.REPLY ? r.messageReference : void 0,
        { onFocus: M, ...y } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: U, handleFocus: k, handleBlur: H } = (0, L.bb)(M),
        { popouts: K, selected: q, setPopout: X } = (0, P.Z)(r.id, F.d$),
        J = C.RS.useSetting(),
        Q = C.NA.useSetting(),
        $ = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(N)),
        ee = (0, _.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()),
        { handleMouseEnter: et, handleMouseLeave: en, isHovered: ei } = (0, L.tn)(x, r.author.id, q),
        es = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        ea = q || (es && U),
        el = ea || ei,
        { content: er, hasSpoilerEmbeds: eo } = (0, O.Z)(r, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: el,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: S
        }),
        ec = (0, j.Z)(o, p, es),
        eu = (0, Z.ZP)(r),
        ed = (0, R.iG)(r, x),
        eh = (0, R.Gx)(r),
        ep = (0, B.Z)(e, er, !1),
        em = s.useCallback(() => (0, g.XU)(f, p, o), [f, p, o]),
        e_ = (0, m.p9)({
            guildId: f,
            roleId: eu.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: Y.quotedChatMessage,
        children: [
            (0, i.jsx)(d.Clickable, {
                className: Y.jump,
                onClick: em,
                'aria-label': z.Z.Messages.JUMP,
                children: z.Z.Messages.JUMP
            }),
            (0, i.jsx)(b.Z, {
                ...y,
                id: a,
                compact: I,
                className: l()(T, {
                    [Y.message]: !0,
                    [Y.cozyMessage]: !I,
                    [Y.mentioned]: r.mentioned,
                    [Y.ephemeral]: (0, v.Pv)(r),
                    [Y.systemMessage]: (0, A.Z)(r),
                    [Y.groupStart]: r.id === x || r.type === W.uaV.REPLY,
                    [Y.selected]: ea
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: k,
                onBlur: H,
                childrenRepliedMessage:
                    r.type === W.uaV.REPLY &&
                    (0, G.Z)({
                        ...e,
                        setPopout: X,
                        referencedUsernameProfile: K.referencedAvatarProfile,
                        referencedAvatarProfile: K.referencedAvatarProfile,
                        replyReference: N,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, w.Z)({
                    messageProps: e,
                    setPopout: X,
                    messagePopouts: K,
                    replyReference: N,
                    author: eu,
                    repliedMessage: $,
                    roleIcon: e_
                }),
                childrenAccessories: (0, D.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: el,
                    renderThreadAccessory: !1,
                    renderComponentAccessory: !1,
                    renderSuppressEmbeds: !1
                }),
                childrenSystemMessage: (0, V.Z)(e),
                childrenMessageContent: ep,
                onMouseMove: et,
                onMouseLeave: en,
                'aria-labelledby': ed,
                'aria-describedby': eh,
                hasThread: !1
            })
        ]
    });
}
t.ZP = s.memo(function (e) {
    var t, n;
    let a;
    let {
        id: r,
        message: g,
        message: { id: N },
        channel: K,
        channel: { id: q },
        compact: X = !1,
        className: J,
        flashKey: Q,
        groupId: $,
        renderContentOnly: ee
    } = e;
    o()(g.type !== W.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let et = W.OBS.has(g.type) ? g.messageReference : void 0,
        { onFocus: en, ...ei } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        es = C.RS.useSetting(),
        ea = C.NA.useSetting(),
        el = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(et)),
        { popouts: er, selected: eo, setPopout: ec } = (0, P.Z)(g.id, F.d$),
        eu = (0, L.qo)(g, K, ec),
        ed = (0, L.Go)(g, K),
        { handleMouseEnter: eh, handleMouseLeave: ep, hasHovered: em, isHovered: e_ } = (0, L.tn)($, g.author.id, eo),
        { isFocused: ef, hasFocused: eE, handleFocus: eg, handleBlur: eC } = (0, L.bb)(en),
        eI = (0, u.e7)([x.Z], () => x.Z.isEditing(q, N), [q, N]),
        eT = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        ex = eo || eI || (eT && ef),
        eS = ex || e_,
        ev = (0, u.e7)([I.Z], () => g.hasFlag(W.iLy.HAS_THREAD) && I.Z.getChannel(S.default.castMessageIdAsChannelId(g.id))),
        eN = g.isFirstMessageInForumPost(K),
        eA = (0, _.A)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
        eZ = (0, u.e7)([T.Z], () => T.Z.isDeveloper),
        { content: eM, hasSpoilerEmbeds: eb } = (0, O.Z)(g, {
            hideSimpleEmbedContent: es && ea,
            isInteracting: eS,
            formatInline: !1,
            allowList: eN || eA,
            allowHeading: eN || eA,
            allowLinks: !0,
            allowDevLinks: eZ,
            previewLinkTarget: !0
        }),
        eR = (0, j.Z)(N, q, eT),
        eL = (0, Z.ZP)(g),
        ej = (0, u.e7)([f.Z], () => f.Z.getPendingReply(q)),
        eP = (function (e) {
            let t = s.useRef(e);
            return s.useEffect(() => void (t.current = null != e ? e : t.current)), null != e ? e : t.current;
        })(Q),
        eO = (0, m.p9)({
            guildId: K.guild_id,
            roleId: eL.iconRoleId
        }),
        ey = (0, R.iG)(g, $),
        eD = (0, R.Gx)(g),
        eU = (0, u.e7)([p.Z], () => p.Z.getMessage(N), [N]),
        ek = (0, y.Z)({
            message: g,
            channel: K
        }),
        ew = null != eU;
    a = g.type === W.uaV.CUSTOM_GIFT ? '' : !eI && ew ? (0, U.Z)(e, eM) : (0, B.Z)(e, eM, eI);
    let eB = g.id === $,
        eH = (0, i.jsx)(d.FocusRing, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsx)('li', {
                id: r,
                className: Y.messageListItem,
                'aria-setsize': -1,
                children: (0, i.jsx)(b.Z, {
                    ...ei,
                    'aria-setsize': -1,
                    'aria-roledescription': z.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
                    'aria-labelledby': ey,
                    'aria-describedby': eD,
                    onFocus: eg,
                    onBlur: eC,
                    onContextMenu: eu,
                    onKeyDown: eR,
                    onClick: ed,
                    compact: X,
                    contentOnly: ee,
                    className: l()(J, {
                        [Y.message]: !0,
                        [Y.cozyMessage]: !X,
                        [Y.mentioned]: g.mentioned,
                        [Y.ephemeral]: (0, v.Pv)(g),
                        [Y.nitroMessage]: g.type === W.uaV.NITRO_NOTIFICATION,
                        [Y.systemMessage]: (0, A.Z)(g),
                        [Y.groupStart]: !ee && (eB || g.type === W.uaV.REPLY),
                        [Y.selected]: ex,
                        [Y.replying]: (null == ej ? void 0 : ej.message.id) === g.id,
                        [Y.interactionSending]: g.isCommandType() && g.state === W.yb.SENDING,
                        [Y.automodMessage]: ew
                    }),
                    zalgo: !eI,
                    childrenRepliedMessage:
                        ee || g.type !== W.uaV.REPLY
                            ? void 0
                            : (0, G.Z)({
                                  ...e,
                                  setPopout: ec,
                                  referencedUsernameProfile: er.referencedAvatarProfile,
                                  referencedAvatarProfile: er.referencedAvatarProfile,
                                  replyReference: et,
                                  replyMessage: el,
                                  isReplySpineClickable: !0
                              }),
                    childrenExecutedCommand: (0, H.Z)(e, ec, er),
                    childrenHeader: ee
                        ? void 0
                        : (0, w.Z)({
                              messageProps: e,
                              setPopout: ec,
                              messagePopouts: er,
                              replyReference: et,
                              author: eL,
                              repliedMessage: el,
                              roleIcon: eO
                          }),
                    childrenAccessories: (0, D.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eb,
                        handleContextMenu: eu,
                        isInteracting: eS,
                        isAutomodBlockedMessage: ew
                    }),
                    childrenButtons:
                        em || eE
                            ? (0, k.Z)({
                                  buttonProps: e,
                                  setPopout: ec,
                                  messagePopouts: er,
                                  isFocused: e_ || ef
                              })
                            : void 0,
                    childrenSystemMessage: (0, V.Z)(e),
                    childrenMessageContent: a,
                    onMouseMove: eh,
                    onMouseLeave: ep,
                    hasThread: !ee && g.hasFlag(W.iLy.HAS_THREAD) && null != ev,
                    isSystemMessage: (0, A.Z)(g),
                    hasReply: g.type === W.uaV.REPLY,
                    messageRef: ek
                })
            })
        });
    return null != eP
        ? (0, i.jsx)(
              M.Z,
              {
                  flashKey: eP,
                  className: l()({
                      [Y.backgroundFlash]: !0,
                      [Y.groupStart]: !X && g.id === $
                  }),
                  children: eH
              },
              'bg-flash-'.concat(r)
          )
        : eH;
});
