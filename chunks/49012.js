n.d(t, {
    q: function () {
        return y;
    },
    r: function () {
        return L;
    }
});
var r = n(302454),
    i = n.n(r),
    a = n(668781),
    s = n(45986),
    o = n(782568),
    l = n(704133),
    u = n(139674),
    c = n(702321),
    d = n(900460),
    _ = n(627714),
    E = n(364640),
    f = n(772096),
    h = n(982806),
    p = n(540709),
    I = n(881706),
    m = n(592125),
    T = n(430824),
    S = n(20303),
    g = n(902676),
    A = n(375954),
    N = n(699516),
    O = n(944486),
    R = n(626135),
    v = n(981631),
    C = n(689938);
function L(e, t) {
    var n;
    let r = m.Z.getChannel(O.Z.getChannelId());
    return !!(null == r || r.type !== v.d4z.DM || N.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function y(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        { trusted: N, onClick: O, onConfirm: L, shouldConfirm: y, messageId: D, channelId: b } = e,
        M = i().sanitizeUrl(e.href);
    if (null == M) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.Z.Messages.HOLD_UP,
                body: C.Z.Messages.MALFORMED_LINK_BODY.format({ url: e.href }),
                isDismissable: !0
            });
        return;
    }
    let P = M;
    try {
        decodeURI(M);
    } catch (e) {
        P = encodeURI(M);
    }
    let U = null,
        w = !1,
        x = D,
        G = b,
        k = null;
    if (null != D && null != b) {
        var B, F, V;
        let e = A.Z.getMessage(b, D),
            t = m.Z.getBasicChannel(b);
        U = null !== (V = null == t ? void 0 : t.guild_id) && void 0 !== V ? V : null;
        let n = T.Z.getGuild(U),
            r = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(v.iLy.IS_CROSSPOST)) && null != U;
        r && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? ((x = e.messageReference.message_id), (G = e.messageReference.channel_id), (k = e.messageReference.guild_id)) : (k = U);
        let i = (null == t ? void 0 : t.type) === v.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(v.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(v.iLy.EPHEMERAL)) === !0;
        w = null != e && !a && (r || i);
    }
    if (null != b) {
        let e = m.Z.getChannel(b),
            t = T.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(v.oNc.DISCOVERABLE) &&
            R.default.track(v.rMx.URL_CLICKED, {
                url_domain: (0, g.F)(P),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(b) &&
                R.default.track(v.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: P
                });
    }
    if ((E.Z.trackLinkClicked(P), null != O)) {
        if (O(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(P, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
        if (
            (w &&
                E.Z.trackAnnouncementMessageLinkClicked({
                    messageId: x,
                    channelId: b,
                    guildId: U,
                    sourceChannelId: G,
                    sourceGuildId: k
                }),
            null != L)
        ) {
            L();
            return;
        }
        (0, o.Z)(P);
    };
    if (null !== u.Z.isBlockedDomain(P)) {
        null == t || t.preventDefault(), l.Z.show(P);
        return;
    }
    if (null != (0, I.v)(P)) {
        null == t || t.preventDefault(), p.Z.show(P);
        return;
    }
    if ((0, _.I)(P)) {
        null == t || t.preventDefault(), d.Z.show(P);
        return;
    }
    let Z = 'function' == typeof N ? N() : N,
        Y = (0, g.E)(P),
        j = !('http:' === Y || 'https:' === Y);
    if ((!j && (Z || S.Z.isTrustedDomain(P))) || (j && S.Z.isTrustedProtocol(P))) {
        null == t || (null != y && y)
            ? H()
            : w &&
              E.Z.trackAnnouncementMessageLinkClicked({
                  messageId: x,
                  channelId: b,
                  guildId: U,
                  sourceChannelId: G,
                  sourceGuildId: k
              });
        return;
    }
    if ((null != t && t.preventDefault(), j))
        h.Z.show({
            url: P,
            trustUrl: s.u,
            onConfirm: H,
            isProtocol: !0
        });
    else {
        let e = (0, f.yw)(P),
            t = null != e ? e.displayTarget : P;
        h.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: H,
            isProtocol: !1
        });
    }
}
