n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(735250);
n(470079);
var l = n(442837), r = n(692547), a = n(481060), s = n(619915), o = n(456269), c = n(921711), u = n(71275), d = n(601070), h = n(430824), p = n(496675), _ = n(306680), f = n(979651), m = n(968358), g = n(790901), C = n(714794), I = n(355363), E = n(687352), N = n(135724), x = n(25601), S = n(981631), Z = n(490897), v = n(689938), T = n(219644);
function L(e) {
    var t;
    let {
            channel: n,
            isChannelSelected: L,
            isChannelCollapsed: A,
            voiceStates: b,
            enableConnectedUserLimit: M,
            enableActivities: R,
            isSubscriptionGated: y,
            needSubscriptionToAccess: O,
            isNewChannel: P,
            muted: j,
            resolvedUnreadSetting: D
        } = e, U = (0, l.e7)([_.ZP], () => _.ZP.getMentionCount(n.id)), G = (0, s.ZP)(n), w = (0, l.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)), k = (0, l.e7)([f.Z], () => f.Z.hasVideo(n.id)), B = (0, u.PK)(n.id) && n.isGuildStageVoice(), V = (0, I.ZP)({
            channel: n,
            locked: w,
            video: k || B,
            selected: L
        }), H = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)), F = (0, o.n2)(n.guild_id, n.id), W = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, C.Z)(U))
        return (0, i.jsx)(x.Z, { mentionsCount: U });
    if ((0, c.O)(y))
        return (0, i.jsx)(c.Z, { locked: O });
    if (P)
        return (0, i.jsx)(a.TextBadge, {
            text: v.Z.Messages.NEW,
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: T.newChannel
        });
    if (!j && D === Z.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: v.Z.Messages.CHANNEL_NEW_POSTS_LABEL.format({ count: (0, a.getBadgeCountString)(H) })
        });
    if (!j && n.isForumLikeChannel() && null != F && F > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.getBadgeCountString)(F)
        });
    let Y = null !== (t = null == b ? void 0 : b.length) && void 0 !== t ? t : 0;
    return null != M && M && V ? (0, i.jsx)(N.Z, {
        userCount: Y,
        video: k || B,
        channel: n
    }) : A && (0, m.a)(b) && W ? (0, i.jsx)(a.TextBadge, {
        text: v.Z.Messages.LIVE,
        color: r.Z.unsafe_rawColors.RED_400.css
    }) : null != R && R && (0, g.u)(G) ? (0, i.jsx)(E.Z, {
        embeddedApps: G,
        muted: j
    }) : null;
}
