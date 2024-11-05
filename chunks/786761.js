n.d(t, {
    Pv: function () {
        return L;
    },
    e5: function () {
        return T;
    },
    gx: function () {
        return b;
    },
    lp: function () {
        return D;
    },
    wi: function () {
        return y;
    }
}),
    n(789020),
    n(47120);
var r = n(913527),
    i = n.n(r),
    a = n(830121);
n(712057);
var s = n(292419),
    o = n(330044),
    l = n(378233),
    u = n(360742),
    c = n(23750),
    d = n(598077),
    f = n(314897),
    _ = n(699516),
    h = n(594174),
    p = n(408433),
    m = n(669079);
n(358085), n(51144);
var g = n(572804);
n(739566);
var E = n(959517),
    v = n(981631);
n(388032);
let I = new d.Z({
    id: '???',
    username: '???'
});
function S(e) {
    var t;
    return new c.pi({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: A(e),
        embeds: C(e),
        components: (0, s.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], { includeEmojiSrc: !1 }),
        codedLinks: e.type === v.uaV.THREAD_CREATED ? [] : (0, a.ZP)(e.content)
    });
}
function T(e) {
    var t, n, r, i, a, s, l, p, E, T;
    let { reactions: b, interactionData: y } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        A = S(e),
        C = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== i ? i : [],
        D = null !== (a = e.mention_roles) && void 0 !== a ? a : [],
        L = null !== (s = e.mention_channels) && void 0 !== s ? s : [],
        x = e.message_reference;
    let w = null == (p = e).author ? I : null != p.webhook_id ? new d.Z(p.author) : null !== (E = h.default.getUser(p.author.id)) && void 0 !== E ? E : new d.Z(p.author),
        M = null == e ? void 0 : e.gift_info,
        P = e.gifting_prompt,
        k = null != e.interaction ? u.Z.createFromServer(e.interaction) : null,
        U = e.type === v.uaV.THREAD_STARTER_MESSAGE ? (null === (r = e.referenced_message) || void 0 === r ? void 0 : null === (n = r.author) || void 0 === n ? void 0 : n.id) : void 0,
        G = e.type === v.uaV.PREMIUM_REFERRAL ? e.content : void 0,
        B = e.content;
    return (
        e.type === v.uaV.PREMIUM_REFERRAL && (B = ''),
        (T = 0),
        new c.ZP({
            ...e,
            ...A.toJS(),
            author: w,
            webhookId: e.webhook_id,
            blocked: _.Z.isBlockedForMessage(e) || (null != U && _.Z.isBlocked(U)),
            ignored: _.Z.isIgnoredForMessage(e) || (null != U && _.Z.isIgnored(U)),
            mentionEveryone: e.mention_everyone,
            mentions: C,
            mentionRoles: D,
            mentionChannels: L,
            messageReference: x,
            mentioned: (0, g.Sz)({
                userId: f.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (l = e.mention_everyone) && void 0 !== l && l,
                mentionUsers: C,
                mentionRoles: D
            }),
            giftCodes: (0, m.Fp)(e) ? (0, m.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, m.Q_)(e.content),
            content: B,
            referralTrialOfferId: G,
            call: N(e.call, A.timestamp),
            messageSnapshots: O(e),
            reactions: R(null != b ? b : e.reactions, e.poll),
            interaction: k,
            interactionData: null != y ? y : e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, o.Z)(e.poll),
            giftInfo: null == M ? void 0 : M,
            giftingPrompt: P
        })
    );
}
function b(e, t) {
    return null != t.edited_timestamp
        ? {
              ...t,
              reactions: e.reactions,
              interaction_data: e.interaction_data
          }
        : {
              ...e,
              ...t
          };
}
function y(e, t) {
    if (null != t.edited_timestamp)
        return T(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e,
        r = !1;
    if ((null != t.call && (n = n.set('call', N(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', A(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', C(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', O(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, s.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions)) {
        var i;
        n = n.set('reactions', R(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set('poll', (0, o.Z)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                'mentions',
                t.mentions.map((e) => e.id)
            )),
            (r = !0)),
        null != t.mention_everyone && ((n = n.set('mentionEveryone', t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set('mentionRoles', t.mention_roles)), (r = !0)),
        r &&
            (n = n.set(
                'mentioned',
                (0, g.ZP)({
                    message: n,
                    userId: f.default.getId()
                })
            )),
        n
    );
}
function A(e) {
    return null == e.attachments
        ? []
        : e.attachments.map((e) => ({
              ...e,
              spoiler: e.filename.startsWith(E._j)
          }));
}
function N(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r
        };
    }
    return null;
}
function C(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, p.kC)(e.channel_id, e.id, t));
    return (0, p.o3)(t);
}
function R(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let r =
        null == t
            ? void 0
            : null === (n = t.results) || void 0 === n
              ? void 0
              : n.answer_counts.map((e) => ({
                    count_details: { vote: e.count },
                    me_vote: e.me_voted,
                    emoji: {
                        id: e.id.toString(),
                        name: '',
                        animated: !1
                    },
                    me: !1,
                    me_burst: !1,
                    count: e.count,
                    burst_count: 0
                }));
    return [...(null != e ? e : []), ...(null != r ? r : [])].map((e) => {
        let t = { ...e };
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0), (t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function O(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t } = e;
              return new c.Hx({ message: S(t) });
          });
}
let D = (e) => 0 === (0, l.cv)(e).length || '' !== e.content;
function L(e) {
    return e.hasFlag(v.iLy.EPHEMERAL) && e.type !== v.uaV.IN_GAME_MESSAGE_NUX;
}
