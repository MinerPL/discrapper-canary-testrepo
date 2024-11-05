n.d(e, {
    FI: function () {
        return L;
    },
    LL: function () {
        return D;
    },
    N_: function () {
        return G;
    },
    Xi: function () {
        return M;
    },
    eF: function () {
        return U;
    }
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    o = n(978003),
    a = n(41776),
    u = n(355298),
    r = n(957730),
    s = n(572804),
    d = n(901461);
n(734934);
var c = n(569471),
    f = n(723170),
    g = n(695346),
    E = n(131704),
    _ = n(433355),
    N = n(592125),
    I = n(430824),
    h = n(19780),
    p = n(699516),
    T = n(944486),
    S = n(914010),
    C = n(885110),
    m = n(9156),
    v = n(594174),
    Z = n(630388),
    A = n(5192),
    y = n(352736),
    P = n(51144),
    R = n(981631),
    b = n(124368),
    O = n(388032);
function D(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && a.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || p.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && C.Z.getStatus() === R.Skl.DND) || g.QZ.getSetting() || (!i.ignoreNoMessagesSetting && m.ZP.allowNoMessages(n))) && !0;
}
function U(t, e) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, Z.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = N.Z.getChannel(e);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (o = N.Z.getChannel(null == o ? void 0 : o.parent_id));
    let a = v.default.getCurrentUser(),
        r = v.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    if (
        null == o ||
        null == a ||
        null == r ||
        (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
        !D(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(e)
    )
        return !1;
    if (!i) {
        let t = T.Z.getChannelId(S.Z.getGuildId());
        if (t === o.id || _.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (p.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === a.id)) return !1;
    if (E.Ec.has(o.type)) {
        if (c.Z.isMuted(o.id)) return !1;
        let e = (0, f.J)(o);
        return (
            e !== b.iN.NO_MESSAGES &&
            (e === b.iN.ALL_MESSAGES ||
                (0, s.Hl)({
                    rawMessage: t,
                    userId: a.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !E.tx.has(o.type) || h.Z.getChannelId() === o.id;
        if (m.ZP.allowAllMessages(o) && e) return !0;
        let n = m.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = m.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, s.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function G(t, e) {
    var n;
    if (T.Z.getChannelId(S.Z.getGuildId()) !== e) return !1;
    let i = N.Z.getChannel(e);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (i = N.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = v.default.getCurrentUser(),
        o = v.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == o || i.isManaged() || o.hasFlag(R.xW$.SPAMMER) || p.Z.isBlockedOrIgnoredForMessage(t) || o.id === l.id || C.Z.getStatus() === R.Skl.DND || g.QZ.getSetting() || m.ZP.allowNoMessages(i)) && !0;
}
function L(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = v.default.getCurrentUser(),
        o = v.default.getUser(t.ownerId);
    return (
        !(
            null == e ||
            null == l ||
            null == o ||
            !D(l, o, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            m.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || T.Z.getChannelId(S.Z.getGuildId()) !== e.id) &&
        m.ZP.getNewForumThreadsCreated(e)
    );
}
let k = (t, e, n) =>
    ''
        .concat(t, ' (')
        .concat((0, i.F6)(e, v.default, p.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, v.default, p.Z)) : '', ')');
function w(t, e, n, i) {
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return e;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return i;
    }
}
function M(t, e, n) {
    let a;
    let u = A.ZP.getName(t.getGuildId(), t.id, n),
        s = u;
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let c = N.Z.getChannel(t.parent_id);
            e.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? (s = k(s, c, N.Z.getChannel(c.parent_id))) : (0, d.Z)(e) ? null != I.Z.getGuild(t.getGuildId()) && (s = k(s, t, c)) : (s = k(s, t, c));
            break;
        case R.d4z.GROUP_DM:
            !(t.isManaged() && n.bot && s === (0, i.F6)(t, v.default, p.Z)) && (s = ''.concat(s, ' (').concat((0, i.F6)(t, v.default, p.Z, !0), ')'));
    }
    let f = e.content;
    if ((0, d.Z)(e) && null == (f = y.Z.stringify(e, t))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', e), Error('failed to stringify system message'));
    let g = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, o.s)(e) : (0, o.Z)(e)) a = O.intl.string(O.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        a =
            e.activity.type === R.mFx.JOIN
                ? O.intl.formatToPlainString(w(t, O.t.E8CgCg, O.t.c6KHWF, O.t.Fy7rJC), {
                      user: u,
                      game: e.application.name
                  })
                : e.activity.type === R.mFx.JOIN_REQUEST
                  ? O.intl.formatToPlainString(w(t, O.t['/TD0lZ'], O.t['/TD0lZ'], O.t['/TD0lZ']), {
                        user: u,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === R.mFx.LISTEN) {
        let e = w(t, O.t.SaDdmJ, O.t.qsODho, O.t.WeiMTU);
        a = O.intl.formatToPlainString(e, { user: u });
    } else if (null != g && g.length > 0) a = O.intl.formatToPlainString(O.t.zY4v1N, { stickerName: g[0].name });
    else if (e.type === R.uaV.PREMIUM_REFERRAL) a = O.intl.formatToPlainString(O.t.lieTqa, { username: P.ZP.getName(n) });
    else if (null != e.poll) a = O.intl.formatToPlainString(O.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === R.uaV.POLL_RESULT) {
        var E, _, h;
        let t = null === (h = e.embeds) || void 0 === h ? void 0 : null === (_ = h[0]) || void 0 === _ ? void 0 : null === (E = _.fields) || void 0 === E ? void 0 : E.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        a = O.intl.formatToPlainString(O.t['9WrecH'], { question: n });
    } else a = 0 !== f.length && t.type === R.d4z.DM && !n.bot && f.startsWith('> -# *') ? (a = r.ZP.unparse(f, t.id, !0)).substring(0, 1) + a.substring(4) : r.ZP.unparse(f, t.id, !0);
    return (
        0 === a.length &&
            (a = (function (t) {
                var e;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let e = t.embeds[0],
                        n = 'description' in e ? e.description : e.rawDescription,
                        i = 'title' in e ? e.title : e.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != e.fields && e.fields.length > 0) {
                        let t = e.fields[0],
                            n = 'name' in t ? t.name : t.rawName,
                            i = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, Z.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, R.iLy.IS_VOICE_MESSAGE)) return O.intl.string(O.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = t.attachments[0].filename;
                    return O.intl.formatToPlainString(O.t['51OkwM'], { filename: e });
                }
                return '';
            })(e)),
        {
            icon: n.getAvatarURL(t.guild_id, 128),
            title: s,
            body: a
        }
    );
}
