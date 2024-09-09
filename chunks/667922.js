t.d(n, {
    Z: function () {
        return Z;
    }
});
var a = t(735250),
    i = t(470079),
    l = t(442837),
    r = t(481060),
    s = t(543241),
    o = t(222677),
    u = t(995774),
    d = t(665906),
    c = t(695346),
    E = t(496675),
    M = t(768581),
    I = t(585483),
    m = t(176354),
    g = t(981631),
    _ = t(185923),
    f = t(689938);
function Z(e, n) {
    let { reducedMotion: t } = i.useContext(r.AccessibilityPreferencesContext),
        M = (0, d.$R)(n),
        Z = (0, l.e7)([E.Z], () => (n.isPrivate() || E.Z.can(g.Plq.ADD_REACTIONS, n)) && M, [n, M]),
        T = (0, s.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !Z || e.type === g.uaV.GUILD_INVITE_REMINDER) return null;
    let v = T.filter(
        (e) =>
            !m.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: _.Hz.REACTION
            })
    )
        .slice(0, 12)
        .map((i, l) => {
            var s, d;
            return (0, a.jsx)(
                r.MenuItem,
                {
                    color: 'default',
                    id: null !== (d = null !== (s = i.id) && void 0 !== s ? s : i.optionallyDiverseSequence) && void 0 !== d ? d : i.name,
                    label: ':'.concat(i.name, ':'),
                    icon: (e) =>
                        (0, a.jsx)(S, {
                            ...e,
                            reducedMotionEnabled: t.enabled,
                            emoji: i
                        }),
                    action: () => {
                        (0, o.rU)(n.id, e.id, (0, u.g1)(i), o.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                l
            );
        });
    return (0, a.jsx)(r.MenuItem, {
        id: 'add-reaction',
        label: f.Z.Messages.ADD_REACTION,
        action: () => {
            I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                v,
                (0, a.jsx)(r.MenuSeparator, {}),
                (0, a.jsx)(r.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: f.Z.Messages.VIEW_MORE,
                    icon: r.ReactionIcon,
                    action: () => {
                        I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function S(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: i, className: l = '', isFocused: r = !1 } = e;
    return (0, a.jsx)('img', {
        className: l,
        src:
            null != t.id
                ? M.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!i || r),
                      size: 18
                  })
                : m.ZP.getURL(null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ''),
        alt: ''
    });
}
