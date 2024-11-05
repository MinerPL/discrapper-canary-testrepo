n.d(t, {
    Cm: function () {
        return z;
    },
    HH: function () {
        return U;
    },
    Hc: function () {
        return Y;
    },
    IV: function () {
        return W;
    },
    KP: function () {
        return B;
    },
    OP: function () {
        return H;
    },
    Pq: function () {
        return s;
    },
    Sv: function () {
        return F;
    },
    Tw: function () {
        return Z;
    },
    UU: function () {
        return a;
    },
    Yy: function () {
        return i;
    },
    aP: function () {
        return j;
    },
    bR: function () {
        return Q;
    },
    l4: function () {
        return P;
    },
    lJ: function () {
        return r;
    },
    oh: function () {
        return V;
    },
    tG: function () {
        return x;
    },
    vx: function () {
        return k;
    },
    xx: function () {
        return K;
    },
    zj: function () {
        return G;
    }
}),
    n(789020);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(286379),
    f = n(524437),
    _ = n(432877),
    h = n(768494),
    p = n(797614),
    m = n(182274),
    g = n(695346),
    E = n(592125),
    v = n(699516),
    I = n(594174),
    S = n(626135),
    T = n(630388),
    b = n(948561),
    y = n(651530),
    A = n(719548),
    N = n(981631),
    C = n(973005);
n(388032);
let R = {
        [C.TI.DISABLED.valueOf()]: f.Q4.SHOW,
        [C.TI.NON_FRIENDS.valueOf()]: f.Q4.SHOW,
        [C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.Q4.BLOCK
    },
    O = {
        [C.TI.DISABLED.valueOf()]: f.Q4.SHOW,
        [C.TI.NON_FRIENDS.valueOf()]: f.Q4.BLOCK,
        [C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.Q4.BLOCK
    },
    D = {
        [C.TI.DISABLED.valueOf()]: f.Q4.BLUR,
        [C.TI.NON_FRIENDS.valueOf()]: f.Q4.BLUR,
        [C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.Q4.BLOCK
    },
    L = {
        [C.TI.DISABLED.valueOf()]: f.Q4.BLUR,
        [C.TI.NON_FRIENDS.valueOf()]: f.Q4.BLOCK,
        [C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.Q4.BLOCK
    },
    x = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== f.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let i = I.default.getCurrentUser();
        return (null == i ? void 0 : i.nsfwAllowed) === !1
            ? M({
                  isDm: n,
                  isFriend: r
              })
            : w({
                  isDm: n,
                  isFriend: r
              });
    },
    w = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return f.Q4.SHOW;
        let r = g.UP.getSetting();
        return n ? R[r] : O[r];
    },
    M = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return f.Q4.BLUR;
        let r = g.UP.getSetting();
        return n ? D[r] : L[r];
    },
    P = () => {
        let e = g.Sh.getSetting();
        return {
            explicitContentGuilds: x({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: x({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: x({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
function k(e) {
    return e === f.Q4.BLUR || e === f.Q4.BLOCK;
}
function U(e) {
    var t;
    if (!(0, y.Kh)()) return !1;
    let n = I.default.getCurrentUser();
    if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: a } = P(),
        s = E.Z.getChannel(e.channel_id);
    if (null == s) return !1;
    if (s.isDM() || s.isGroupDM()) return null != e.author && v.Z.getFriendIDs().includes(e.author.id) ? k(i) : k(a);
    return k(r);
}
let G = (e) => {
    let t = P();
    g.Sh.updateSetting({
        ...t,
        ...e
    });
};
function B(e, t) {
    var n, r, i, a;
    if (!t) return !1;
    if (_.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, T.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, N.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, T.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, N.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, T.yE)(null !== (a = null === (i = e.media.contentScanMetadata) || void 0 === i ? void 0 : i.flags) && void 0 !== a ? a : 0, h.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function Z(e) {
    return U(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  B(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  B(
                      {
                          type: 1,
                          media: e
                      },
                      !0
                  )
              )
          }
        : {
              obscuredAttachments: [],
              obscuredEmbeds: []
          };
}
function F(e) {
    return !_.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function V(e) {
    return !_.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function j(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = E.Z.getChannel(n);
    S.default.track(N.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, m.U)(),
        context: i
    });
}
function H(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    p.Z.increment({
        name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(1)]
    });
}
function Y(e) {
    var t, n, r, i;
    let { channelId: a, messageId: s, attachmentIds: o, embedIds: l } = e;
    if (null == a || null == s || ((null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0) === 0)) return;
    let u = E.Z.getChannel(a);
    S.default.track(N.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: a,
        guild_id: null == u ? void 0 : u.guild_id,
        message_id: s,
        embed_ids: l,
        user_is_underage: (0, m.U)(),
        scan_timeout_duration: b.b2,
        attachment_ids_v2: o
    }),
        p.Z.increment({
            name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(1)]
        }),
        p.Z.distribution({ name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (r = null == o ? void 0 : o.length) && void 0 !== r ? r : 0) + (null !== (i = null == l ? void 0 : l.length) && void 0 !== i ? i : 0));
}
function W(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: r, numOfEmbeds: i, numOfEmbedsPendingScan: a } = e;
    if (null == t) return;
    let s = E.Z.getChannel(t);
    S.default.track(N.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: i,
        num_of_embeds_pending_scan: a
    });
    let o = r + a;
    o > 0 && p.Z.distribution({ name: d.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, o);
}
function K(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: a, numOfExplicitEmbeds: s } = e;
    if (null == n) return;
    let o = E.Z.getChannel(n);
    S.default.track(N.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == o ? void 0 : o.type,
        guild_id: null == o ? void 0 : o.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: s
    });
}
function z(e) {
    let { attachments: t, embeds: n } = q(e),
        r = (function (e) {
            let { messageSnapshots: t } = e;
            return null == t || 0 === t.length
                ? t
                : t.map((e) => {
                      let { message: t } = e,
                          { attachments: n, embeds: r } = q(t);
                      return (
                          (t = t.merge({
                              attachments: n,
                              embeds: r
                          })),
                          (e = e.merge({ message: t }))
                      );
                  });
        })(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function q(e) {
    let t = e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e));
    return {
        attachments: t,
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
((o = r || (r = {}))[(o.Attachment = 0)] = 'Attachment'), (o[(o.Embed = 1)] = 'Embed'), (o[(o.GenericMedia = 2)] = 'GenericMedia'), ((l = i || (i = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), ((u = a || (a = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), ((c = s || (s = {})).UPDATE = 'update'), (c.TIMEOUT = 'timeout');
let Q = (e, t) => null != e && null != t && (e <= A.LN || t <= A.iE);
