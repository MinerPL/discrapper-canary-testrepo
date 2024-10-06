n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(911969),
    r = n(581364),
    o = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    h = n(614584);
let p = s.memo(function (e) {
    var t, n;
    let { message: p, channel: m, compact: _ = !1, interactionUsernameProfile: f, interactionAvatarProfile: E, interactionData: g, referencedUsernameProfile: C, referencedAvatarProfile: I, setPopout: T } = e,
        x = (0, a.e7)([c.Z], () => c.Z.isBlockedForMessage(p), [p]),
        S = (0, a.e7)([o.Z], () => o.Z.getMessageByReference(null == p ? void 0 : p.messageReference)),
        v = (0, d.wq)(null === (t = p.interaction) || void 0 === t ? void 0 : t.user.id, m.id),
        N = (0, d.Nk)(p.interaction, m, f, T),
        A = (0, d.NU)(E, T),
        Z = (0, r.t0)(p),
        M = (null == Z ? void 0 : Z.type) === l.B8.APPLICATION_COMMAND ? (null === (n = Z.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        b = (0, d.wq)(M, m.id),
        R = (0, d.JC)(M, m, C, T),
        L = (0, d.rY)(I, T),
        j = (0, d.Xn)(g, T),
        P = s.useCallback(
            () =>
                T({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1,
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [T]
        ),
        O = s.useCallback(
            () =>
                (0, h.Z)({
                    message: p,
                    channel: m,
                    compact: _,
                    setPopout: T,
                    referencedUsernameProfile: C,
                    referencedAvatarProfile: I,
                    replyReference: p.messageReference,
                    replyMessage: S,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [m, _, p, I, S, C, T]
        );
    return (0, i.jsx)(u.Z, {
        message: p,
        channel: m,
        compact: _,
        isInteractionUserBlocked: x,
        showAvatarPopout: E,
        showUsernamePopout: f,
        showDataPopout: g,
        showTargetAvatarPopout: I,
        showTargetUsernamePopout: C,
        onClickAvatar: A,
        onClickUsername: N,
        onClickCommand: j,
        onUserContextMenu: v,
        onClickTargetAvatar: L,
        onClickTargetUsername: R,
        onTargetUserContextMenu: b,
        onPopoutRequestClose: P,
        renderTargetMessage: O
    });
});
function m(e, t, n) {
    let { message: s, channel: a, compact: l } = e;
    return null != s.interaction && '' !== s.interaction.displayName
        ? (0, i.jsx)(p, {
              message: s,
              channel: a,
              compact: l,
              setPopout: t,
              ...n
          })
        : null;
}
