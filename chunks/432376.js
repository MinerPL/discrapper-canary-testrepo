n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: s, isLurking: o, isGuest: a, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || a || !h || !((!0 === s || u) && !d && r),
        disableReactionUpdates: o || a || !h || !0 === l || !0 === c
    };
}
