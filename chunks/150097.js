n.d(t, {
    FI: function () {
        return P;
    },
    LL: function () {
        return L;
    },
    N_: function () {
        return U;
    },
    Xi: function () {
        return b;
    },
    eF: function () {
        return G;
    }
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    s = n(978003),
    o = n(41776),
    a = n(355298),
    u = n(957730),
    r = n(572804),
    d = n(901461);
n(734934);
var c = n(569471),
    _ = n(723170),
    E = n(695346),
    I = n(131704),
    f = n(433355),
    T = n(592125),
    N = n(430824),
    g = n(19780),
    C = n(699516),
    S = n(944486),
    A = n(914010),
    Z = n(885110),
    h = n(9156),
    O = n(594174),
    v = n(630388),
    m = n(5192),
    D = n(352736),
    p = n(51144),
    M = n(981631),
    R = n(124368),
    y = n(689938);
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(M.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || C.Z.isBlocked(t.id) || (!i.ignoreStatus && Z.Z.getStatus() === M.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && h.ZP.allowNoMessages(n))) && !0;
}
function G(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = T.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (s = T.Z.getChannel(null == s ? void 0 : s.parent_id));
    let o = O.default.getCurrentUser(),
        u = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == s ||
        null == o ||
        null == u ||
        (s.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
        !L(o, u, s, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        a.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = S.Z.getChannelId(A.Z.getGuildId());
        if (e === s.id || f.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (C.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)) return !1;
    if (I.Ec.has(s.type)) {
        if (c.Z.isMuted(s.id)) return !1;
        let t = (0, _.J)(s);
        return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !I.tx.has(s.type) || g.Z.getChannelId() === s.id;
        if (h.ZP.allowAllMessages(s) && t) return !0;
        let n = h.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = h.ZP.isSuppressRolesEnabled(s.getGuildId());
        return (0, r.Hl)({
            rawMessage: e,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function U(e, t) {
    var n;
    if (S.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = T.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (i = T.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = O.default.getCurrentUser(),
        s = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == s || i.isManaged() || s.hasFlag(M.xW$.SPAMMER) || C.Z.isBlockedForMessage(e) || s.id === l.id || Z.Z.getStatus() === M.Skl.DND || E.QZ.getSetting() || h.ZP.allowNoMessages(i)) && !0;
}
function P(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = O.default.getCurrentUser(),
        s = O.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == s ||
            !L(l, s, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || S.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
        h.ZP.getNewForumThreadsCreated(t)
    );
}
let F = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, O.default, C.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, O.default, C.Z)) : '', ')');
function w(e, t, n, i) {
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
            return t;
        case M.d4z.GROUP_DM:
            return n;
        case M.d4z.DM:
        default:
            return i;
    }
}
function b(e, t, n) {
    let o;
    let a = m.ZP.getName(e.getGuildId(), e.id, n),
        r = a;
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_VOICE:
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
            let c = T.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != c ? (r = F(r, c, T.Z.getChannel(c.parent_id))) : (0, d.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (r = F(r, e, c)) : (r = F(r, e, c));
            break;
        case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && r === (0, i.F6)(e, O.default, C.Z)) && (r = ''.concat(r, ' (').concat((0, i.F6)(e, O.default, C.Z, !0), ')'));
    }
    let _ = t.content;
    if ((0, d.Z)(t) && null == (_ = D.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : t.stickers;
    if ('message_reference' in t ? (0, s.s)(t) : (0, s.Z)(t)) o = y.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        o =
            t.activity.type === M.mFx.JOIN
                ? w(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: a,
                      game: t.application.name
                  })
                : t.activity.type === M.mFx.JOIN_REQUEST
                  ? w(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: a,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === M.mFx.LISTEN) o = w(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: a });
    else if (null != E && E.length > 0) o = y.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: E[0].name });
    else if (t.type === M.uaV.PREMIUM_REFERRAL) o = y.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: p.ZP.getName(n) });
    else if (null != t.poll) o = y.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === M.uaV.POLL_RESULT) {
        var I, f, g;
        let e = null === (g = t.embeds) || void 0 === g ? void 0 : null === (f = g[0]) || void 0 === f ? void 0 : null === (I = f.fields) || void 0 === I ? void 0 : I.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        o = y.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else o = 0 !== _.length && e.type === M.d4z.DM && !n.bot && _.startsWith('> -# *') ? (o = u.ZP.unparse(_, e.id, !0)).substring(0, 1) + o.substring(4) : u.ZP.unparse(_, e.id, !0);
    return (
        0 === o.length &&
            (o = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = 'description' in t ? t.description : t.rawDescription,
                        i = 'title' in t ? t.title : t.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != t.fields) {
                        let e = t.fields[0],
                            n = 'name' in e ? e.name : e.rawName,
                            i = 'value' in e ? e.value : e.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, v.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, M.iLy.IS_VOICE_MESSAGE)) return y.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return y.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: r,
            body: o
        }
    );
}
