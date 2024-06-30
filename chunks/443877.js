n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var i = n(442837), s = n(715903), o = n(71619), a = n(41776), l = n(665906), r = n(271383), c = n(607744), u = n(496675), d = n(432376), h = n(981631);
function m(e) {
    let t = null == e ? void 0 : e.guild_id, n = (0, i.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]), m = (0, i.e7)([a.Z], () => null != t && a.Z.isLurking(t), [t]), p = (0, i.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [t]), g = (0, i.e7)([u.Z], () => n && u.Z.can(h.Plq.ADD_REACTIONS, e), [
            n,
            e
        ]), f = (0, s.ux)(t), [, T] = (0, o.AB)(t), _ = (0, l.$R)(e);
    return null == e ? {
        disableReactionReads: !0,
        disableReactionCreates: !0,
        disableReactionUpdates: !0,
        isLurking: !1,
        isGuest: !1,
        isPendingMember: !1
    } : {
        ...(0, d.Z)({
            channel: e,
            canChat: n,
            renderReactions: !0,
            canAddNewReactions: g,
            isLurking: m,
            isGuest: p,
            communicationDisabled: T,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: f
        }),
        isLurking: m,
        isGuest: p,
        isPendingMember: !1
    };
}
