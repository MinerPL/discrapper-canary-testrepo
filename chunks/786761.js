n.d(t, {
    e5: function () {
        return A;
    },
    gx: function () {
        return N;
    },
    lp: function () {
        return L;
    },
    wi: function () {
        return v;
    }
}), n(789020), n(47120);
var r = n(913527), i = n.n(r), a = n(830121);
n(712057);
var o = n(292419), s = n(330044), l = n(378233), u = n(360742), c = n(23750), d = n(598077), _ = n(314897), E = n(699516), f = n(594174), h = n(408433), p = n(669079);
n(358085), n(51144);
var m = n(572804);
n(739566);
var I = n(959517), T = n(981631);
n(689938);
let g = new d.Z({
    id: '???',
    username: '???'
});
function S(e) {
    var t;
    return new c.pi({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: O(e),
        embeds: C(e),
        components: (0, o.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], { includeEmojiSrc: !1 }),
        codedLinks: e.type === T.uaV.THREAD_CREATED ? [] : (0, a.ZP)(e.content)
    });
}
function A(e) {
    var t, n, r, i, a, o, l, h, I, A;
    let {
            reactions: N,
            interactionData: v
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, O = S(e), C = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [], L = null !== (a = e.mention_roles) && void 0 !== a ? a : [], b = null !== (o = e.mention_channels) && void 0 !== o ? o : [], M = e.message_reference;
    let P = null == (h = e).author ? g : null != h.webhook_id ? new d.Z(h.author) : null !== (I = f.default.getUser(h.author.id)) && void 0 !== I ? I : new d.Z(h.author), U = null == e ? void 0 : e.gift_info, w = null != e.interaction ? u.Z.createFromServer(e.interaction) : null, x = e.type === T.uaV.THREAD_STARTER_MESSAGE ? null === (r = e.referenced_message) || void 0 === r ? void 0 : null === (n = r.author) || void 0 === n ? void 0 : n.id : void 0, G = e.type === T.uaV.PREMIUM_REFERRAL ? e.content : void 0, k = e.content;
    return e.type === T.uaV.PREMIUM_REFERRAL && (k = ''), A = 0, new c.ZP({
        ...e,
        ...O.toJS(),
        author: P,
        webhookId: e.webhook_id,
        blocked: E.Z.isBlockedForMessage(e) || null != x && E.Z.isBlocked(x),
        mentionEveryone: e.mention_everyone,
        mentions: C,
        mentionRoles: L,
        mentionChannels: b,
        messageReference: M,
        mentioned: (0, m.Sz)({
            userId: _.default.getId(),
            channelId: e.channel_id,
            mentionEveryone: null !== (l = e.mention_everyone) && void 0 !== l && l,
            mentionUsers: C,
            mentionRoles: L
        }),
        giftCodes: (0, p.Fp)(e) ? (0, p.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, p.Q_)(e.content),
        content: k,
        referralTrialOfferId: G,
        call: R(e.call, O.timestamp),
        messageSnapshots: D(e),
        reactions: y(null != N ? N : e.reactions, e.poll),
        interaction: w,
        interactionData: null != v ? v : e.interaction_data,
        interactionMetadata: e.interaction_metadata,
        roleSubscriptionData: e.role_subscription_data,
        purchaseNotification: e.purchase_notification,
        poll: null == e.poll ? void 0 : (0, s.Z)(e.poll),
        giftInfo: null == U ? void 0 : U
    });
}
function N(e, t) {
    return null != t.edited_timestamp ? {
        ...t,
        reactions: e.reactions,
        interaction_data: e.interaction_data
    } : {
        ...e,
        ...t
    };
}
function v(e, t) {
    if (null != t.edited_timestamp)
        return A(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e;
    if (null != t.call && (n = n.set('call', R(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', O(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', C(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', D(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, o.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions) {
        var r;
        n = n.set('reactions', y(null !== (r = e.reactions) && void 0 !== r ? r : t.reactions));
    }
    return null != t.poll && (n = n.set('poll', (0, s.Z)(t.poll))), n;
}
function O(e) {
    return null == e.attachments ? [] : e.attachments.map(e => ({
        ...e,
        spoiler: e.filename.startsWith(I._j)
    }));
}
function R(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null, r = null != n ? i().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r
        };
    }
    return null;
}
function C(e) {
    if (null == e.embeds)
        return [];
    let t = e.embeds.map(t => (0, h.kC)(e.channel_id, e.id, t));
    return (0, h.o3)(t);
}
function y(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null)
        return [];
    let r = null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : n.answer_counts.map(e => ({
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
    return [
        ...null != e ? e : [],
        ...null != r ? r : []
    ].map(e => {
        let t = { ...e };
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0;
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function D(e) {
    return null == e.message_snapshots ? [] : e.message_snapshots.map(e => {
        let {message: t} = e;
        return new c.Hx({ message: S(t) });
    });
}
let L = e => 0 === (0, l.cv)(e).length || '' !== e.content;
