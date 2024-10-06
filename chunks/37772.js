var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(25610),
    d = n(703751),
    u = n(628238),
    _ = n(976853),
    E = n(977683),
    I = n(869765),
    m = n(695346),
    T = n(592125),
    N = n(699516),
    h = n(709054),
    C = n(786761),
    p = n(493892),
    f = n(901461),
    g = n(739566),
    A = n(443877),
    S = n(492593),
    M = n(938353),
    x = n(25015),
    O = n(689674),
    R = n(963550),
    v = n(845080),
    L = n(295790),
    Z = n(145807),
    P = n(56744),
    D = n(834129),
    b = n(981631),
    j = n(689938),
    U = n(590008),
    y = n(916315);
function B(e) {
    let { className: t, count: n, compact: a, collapsedReason: s } = e;
    return (0, i.jsx)(S.Z, {
        className: t,
        compact: a,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(D.Z, {
            compact: a,
            className: U.blockedSystemMessage,
            iconNode: (0, i.jsx)(o.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: U.blockedIcon
            }),
            children: (0, i.jsx)('div', {
                className: U.blockedMessageText,
                children: s.format({ count: n })
            })
        })
    });
}
t.Z = a.memo(function e(t) {
    var n;
    let a;
    let { channel: s, message: o, compact: D = !1, className: U, onContextMenu: k, onClick: G, disableInteraction: F = !1, hasThread: w, treatSpam: V } = t,
        H = b.OBS.has(o.type) ? o.messageReference : void 0,
        Y = (0, r.e7)([I.Z], () => I.Z.getMessageByReference(H)),
        W = (0, r.e7)([T.Z], () => (o.type === b.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED ? T.Z.getChannel(Y.message.channel_id) : null)),
        K = m.x4.useSetting(),
        z = m.RS.useSetting(),
        X = m.NA.useSetting(),
        Q = m.QK.useSetting(),
        J = (0, u.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()),
        q = (0, _.Z)(null == s ? void 0 : s.id),
        { disableReactionCreates: $ } = (0, A.Z)(s),
        { content: ee, hasSpoilerEmbeds: et } = (0, x.Z)(o, {
            hideSimpleEmbedContent: z && X,
            allowList: J,
            allowHeading: J,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, g.ZP)(o),
        ei = (0, r.e7)([T.Z], () => o.hasFlag(b.iLy.HAS_THREAD) && T.Z.getChannel(h.default.castMessageIdAsChannelId(o.id))),
        ea = o.type === b.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED && null != W,
        es = !ea && void 0 === a,
        el = (0, O.Z)({
            message: o,
            channel: s,
            enabled: es
        }),
        er = (0, c.V)(s.id, o.author.id),
        eo = (0, d.r)(o.id),
        ec = (0, E.Z)(o);
    return ea
        ? (0, i.jsx)(e, {
              ...t,
              message: Y.message,
              channel: W,
              hasThread: !1
          })
        : (N.Z.isBlockedForMessage(o) ? (a = j.Z.Messages.BLOCKED_MESSAGE_COUNT) : (0, p.DQ)(o) && V && (a = j.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== a)
          ? (0, i.jsx)(B, {
                className: U,
                compact: D,
                count: 1,
                collapsedReason: a
            })
          : (0, i.jsx)(S.Z, {
                compact: D,
                className: l()(U, {
                    [y.ephemeral]: (0, C.Pv)(o),
                    [y.disableInteraction]: F,
                    [y.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, P.Z)(o, s, H, Y, D),
                childrenHeader: (0, v.Z)({
                    ...t,
                    author: en,
                    guildId: s.guild_id
                }),
                childrenAccessories: (0, i.jsx)(M.BB, {
                    channel: s,
                    message: o,
                    hasSpoilerEmbeds: et,
                    compact: D,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: $,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: w,
                    renderComponentAccessory: !1,
                    inlineAttachmentMedia: K,
                    inlineEmbedMedia: z,
                    renderEmbeds: X,
                    gifAutoPlay: Q,
                    poll: ec,
                    showListsAndHeaders: J,
                    showMaskedLinks: J,
                    shouldHideMediaOptions: q,
                    shouldRedactExplicitContent: er,
                    shouldRenderCtaButton: eo,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, Z.Z)(o, s, D),
                childrenMessageContent: (0, R.Z)(t, ee),
                childrenSystemMessage: (0, L.Z)(t),
                onContextMenu: k,
                onClick: G,
                hasThread: !1 !== w && null != ei && o.hasFlag(b.iLy.HAS_THREAD),
                hasReply: o.type === b.uaV.REPLY,
                isSystemMessage: (0, f.Z)(o),
                messageRef: el
            });
});
