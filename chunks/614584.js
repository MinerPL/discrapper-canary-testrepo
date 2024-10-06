n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(25209),
    r = n(39154),
    o = n(35125),
    c = n(905405),
    u = n(628238),
    d = n(499401),
    h = n(693912),
    p = n(869765),
    m = n(699516),
    _ = n(352736),
    f = n(937889),
    E = n(739566),
    g = n(267128),
    C = n(507418),
    I = n(348238),
    T = n(981631),
    x = n(689938);
let S = s.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: S, channel: v, compact: N = !1, referencedUsernameProfile: A, referencedAvatarProfile: Z, setPopout: M, isReplySpineClickable: b, showReplySpine: R } = e,
        L = S.state === p.Y.LOADED ? S.message : void 0,
        j = (0, E.Uj)(L),
        P = (0, c.p)(),
        O = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        y = s.useMemo(() => {
            if (null == L) return null;
            let e = (0, r.Z)(L);
            if (e.type === T.uaV.USER_JOIN) {
                let t = _.Z.getWelcomeMessageKind(v.guild_id);
                return (0, l.Rp)(
                    _.Z.getSystemMessageUserJoin(e.id, t).astFormat({
                        username: null != j ? j.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, l.Rp)(
                    (0, o.PA)({
                        username: null != j ? j.nick : e.author.username,
                        guildId: null == v ? void 0 : v.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == j ? void 0 : j.nick
                    })
                );
            else if (e.type === T.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, l.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == j ? void 0 : j.nick
                    })
                );
            else if (e.type === T.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, l.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == j ? void 0 : j.nick
                    })
                );
            else if (e.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : x.Z.Messages.DEADCHAT_PROMPT_1;
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: P
                    },
                    n = e.isFirstMessageInForumPost(v)
                        ? {
                              ...t,
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          }
                        : {
                              ...t,
                              formatInline: !0,
                              allowHeading: O,
                              allowList: O
                          };
                return (0, f.ZP)(e, n).content;
            }
            return null;
        }, [L, j, v, O, P]),
        D = (0, a.e7)([m.Z], () => null != L && m.Z.isBlockedForMessage(L), [L]),
        U = (0, I.wq)(null == L ? void 0 : L.author.id, v.id),
        k = (0, I.$3)(n, L, D),
        w = (0, I.Wl)(L, v, A, M),
        B = (0, I.rY)(Z, M),
        H = s.useCallback(
            () =>
                M({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [M]
        ),
        G = (0, E.Uj)(n);
    return (0, i.jsx)(g.Z, {
        repliedAuthor: j,
        baseMessage: n,
        channel: v,
        baseAuthor: G,
        referencedMessage: S,
        content: y,
        compact: N,
        isReplyAuthorBlocked: D,
        showAvatarPopout: Z,
        showUsernamePopout: A,
        renderPopout: C.Z,
        onClickAvatar: B,
        onClickUsername: w,
        onClickReply: k,
        onContextMenu: U,
        onPopoutRequestClose: H,
        isReplySpineClickable: b,
        showReplySpine: R
    });
});
function v(e) {
    let { message: t, channel: n, compact: s, setPopout: a, referencedUsernameProfile: l, referencedAvatarProfile: r, replyReference: o, replyMessage: c, isReplySpineClickable: u, showReplySpine: d = !0 } = e,
        h =
            null != o &&
            (0, i.jsx)(S, {
                baseMessage: t,
                replyReference: o,
                referencedMessage: c,
                channel: n,
                compact: s,
                setPopout: a,
                referencedUsernameProfile: l,
                referencedAvatarProfile: r,
                isReplySpineClickable: u,
                showReplySpine: d
            });
    return (0, i.jsx)(i.Fragment, { children: h });
}
