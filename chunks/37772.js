n(789020);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(442837), o = n(481060), c = n(25610), d = n(703751), u = n(628238), _ = n(976853), E = n(977683), m = n(869765), I = n(695346), T = n(592125), h = n(699516), N = n(998951), f = n(702346), p = n(630388), C = n(709054), g = n(493892), S = n(901461), A = n(739566), x = n(443877), O = n(938353), R = n(25015), M = n(689674), v = n(963550), L = n(845080), Z = n(295790), P = n(145807), b = n(56744), D = n(981631), j = n(689938), U = n(429759), y = n(105461);
function B(e) {
    let {
        className: t,
        count: n,
        compact: a,
        collapsedReason: s
    } = e;
    return (0, i.jsx)(N.Z, {
        className: t,
        compact: a,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(f.Z, {
            compact: a,
            className: U.blockedSystemMessage,
            iconNode: (0, i.jsx)(o.CloseSmallIcon, {
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
    let {
            channel: s,
            message: o,
            compact: f = !1,
            className: U,
            onContextMenu: k,
            onClick: G,
            disableInteraction: F = !1,
            hasThread: w,
            treatSpam: V
        } = t, H = D.OBS.has(o.type) ? o.messageReference : void 0, Y = (0, r.e7)([m.Z], () => m.Z.getMessageByReference(H)), W = (0, r.e7)([T.Z], () => o.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === m.Y.LOADED ? T.Z.getChannel(Y.message.channel_id) : null), z = I.x4.useSetting(), K = I.RS.useSetting(), Q = I.NA.useSetting(), q = I.QK.useSetting(), X = (0, u.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()), J = (0, _.Z)(null == s ? void 0 : s.id), {disableReactionCreates: $} = (0, x.Z)(s), {
            content: ee,
            hasSpoilerEmbeds: et
        } = (0, R.Z)(o, {
            hideSimpleEmbedContent: K && Q,
            allowList: X,
            allowHeading: X,
            allowLinks: !0,
            previewLinkTarget: !0
        }), en = (0, A.ZP)(o), ei = (0, r.e7)([T.Z], () => o.hasFlag(D.iLy.HAS_THREAD) && T.Z.getChannel(C.default.castMessageIdAsChannelId(o.id))), ea = o.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === m.Y.LOADED && null != W, es = !ea && void 0 === a, el = (0, M.Z)({
            message: o,
            channel: s,
            enabled: es
        }), er = (0, c.V)(s.id, o.author.id), eo = (0, d.r)(o.id), ec = (0, E.Z)(o);
    return ea ? (0, i.jsx)(e, {
        ...t,
        message: Y.message,
        channel: W,
        hasThread: !1
    }) : (h.Z.isBlockedForMessage(o) ? a = j.Z.Messages.BLOCKED_MESSAGE_COUNT : (0, g.DQ)(o) && V && (a = j.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== a) ? (0, i.jsx)(B, {
        className: U,
        compact: f,
        count: 1,
        collapsedReason: a
    }) : (0, i.jsx)(N.Z, {
        compact: f,
        className: l()(U, {
            [y.ephemeral]: (0, p.yE)(o.flags, D.iLy.EPHEMERAL),
            [y.disableInteraction]: F,
            [y.groupStart]: t.isGroupStart
        }),
        childrenRepliedMessage: (0, b.Z)(o, s, H, Y, f),
        childrenHeader: (0, L.Z)({
            ...t,
            author: en,
            guildId: s.guild_id
        }),
        childrenAccessories: (0, i.jsx)(O.BB, {
            channel: s,
            message: o,
            hasSpoilerEmbeds: et,
            compact: f,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            disableReactionReads: !1,
            disableReactionCreates: $,
            disableReactionUpdates: !1,
            renderThreadAccessory: w,
            renderComponentAccessory: !1,
            inlineAttachmentMedia: z,
            inlineEmbedMedia: K,
            renderEmbeds: Q,
            gifAutoPlay: q,
            poll: ec,
            showListsAndHeaders: X,
            showMaskedLinks: X,
            shouldHideMediaOptions: J,
            shouldRedactExplicitContent: er,
            shouldRenderCtaButton: eo,
            hasInlineForwardButton: !1
        }),
        childrenExecutedCommand: (0, P.Z)(o, s, f),
        childrenMessageContent: (0, v.Z)(t, ee),
        childrenSystemMessage: (0, Z.Z)(t),
        onContextMenu: k,
        onClick: G,
        hasThread: !1 !== w && null != ei && o.hasFlag(D.iLy.HAS_THREAD),
        hasReply: o.type === D.uaV.REPLY,
        isSystemMessage: (0, S.Z)(o),
        messageRef: el
    });
});
