i.d(n, {
    Z: function () {
        return T;
    }
});
var l = i(735250);
i(470079);
var t = i(442837), a = i(724912), r = i(41776), s = i(501655), o = i(427679), c = i(592125), u = i(496675), d = i(19780), E = i(594174), g = i(15274), h = i(924301), v = i(951539), Z = i(146768), C = i(592126), m = i(236373), N = i(230900), x = i(854698), f = i(405613), _ = i(460838), I = i(462179), p = i(981631);
function T(e) {
    var n;
    let {
            guildEvent: i,
            guildId: T,
            truncate: j,
            onActionTaken: L,
            className: M,
            isNew: k
        } = e, {
            id: P,
            guild_id: G,
            channel_id: D,
            creator_id: S,
            name: y,
            description: A,
            entity_type: R,
            image: U,
            recurrence_rule: b
        } = i, V = (0, x.DK)(i), O = (0, t.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(P, V), [
            P,
            V
        ]), H = (0, t.e7)([r.Z], () => r.Z.isLurking(G), [G]), w = (0, t.e7)([o.Z], () => o.Z.getStageInstanceByChannel(D), [D]), z = (0, t.e7)([c.Z], () => c.Z.getChannel(D), [D]), B = (0, t.e7)([E.default], () => E.default.getUser(S), [S]), {speakers: J} = (0, Z.Z)({
            id: D,
            data: {
                guild: null,
                instance: w,
                speakers: [],
                participantCount: 0
            },
            context: {
                guildId: G,
                instance: w
            }
        }), X = (0, t.e7)([d.Z], () => d.Z.getChannelId()), W = (0, h.xt)(i), q = X === D && null != X && W, F = J.filter(e => e.type === s.Ui.VOICE), K = F.length, Y = (0, t.e7)([u.Z], () => u.Z.can(p.Plq.CONNECT, z), [z]), Q = (0, v.ZP)(i), {
            isMember: $,
            guild: ee
        } = (0, C.Z)(G, P), en = (0, I.Z)({
            guild: ee,
            channel: z,
            guildScheduledEvent: i,
            isActive: W,
            recurrenceId: V,
            onActionTaken: L
        }), ei = (0, a.Z)(T), el = H ? void 0 : e => (0, g.bO)({
            eventId: P,
            parentGuildId: T,
            recurrenceId: e
        });
    return (0, l.jsx)(_.Z, {
        guild: ee,
        channel: z,
        creator: B,
        name: y,
        entityType: R,
        description: null != A ? A : void 0,
        location: null !== (n = (0, N.cS)(i)) && void 0 !== n ? n : void 0,
        imageSource: null != U ? (0, f.Z)(i) : void 0,
        imageLocation: _.Q.THUMBNAIL,
        isActive: W,
        isUserLurking: H,
        isJoined: q,
        isMember: $,
        isHub: ei,
        speakers: F,
        canConnect: Y,
        speakerCount: K,
        rsvped: O,
        canInvite: Q,
        ...en,
        className: M,
        onClick: el,
        truncate: j,
        isNew: k,
        guildEvent: i,
        recurrenceRule: (0, m.KV)(b),
        recurrenceId: V
    });
}
