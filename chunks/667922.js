t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(735250),
    a = t(470079),
    s = t(442837),
    l = t(481060),
    r = t(543241),
    o = t(222677),
    u = t(995774),
    d = t(665906),
    c = t(695346),
    E = t(496675),
    M = t(768581),
    g = t(585483),
    m = t(176354),
    f = t(981631),
    I = t(185923),
    _ = t(689938);
function Z(e, n) {
    let { reducedMotion: t } = a.useContext(l.AccessibilityPreferencesContext),
        M = (0, d.$R)(n),
        Z = (0, s.e7)([E.Z], () => (n.isPrivate() || E.Z.can(f.Plq.ADD_REACTIONS, n)) && M, [n, M]),
        h = (0, r.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !Z || e.type === f.uaV.GUILD_INVITE_REMINDER) return null;
    let A = h
        .filter(
            (e) =>
                !m.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: n,
                    intention: I.Hz.REACTION
                })
        )
        .slice(0, 12)
        .map((a, s) => {
            var r, d;
            return (0, i.jsx)(
                l.MenuItem,
                {
                    color: 'default',
                    id: null !== (d = null !== (r = a.id) && void 0 !== r ? r : a.optionallyDiverseSequence) && void 0 !== d ? d : a.name,
                    label: ':'.concat(a.name, ':'),
                    icon: (e) =>
                        (0, i.jsx)(S, {
                            ...e,
                            reducedMotionEnabled: t.enabled,
                            emoji: a
                        }),
                    action: () => {
                        (0, o.rU)(n.id, e.id, (0, u.g1)(a), o.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                s
            );
        });
    return (0, i.jsx)(l.MenuItem, {
        id: 'add-reaction',
        label: _.Z.Messages.ADD_REACTION,
        action: () => {
            g.S.dispatchKeyed(f.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                A,
                (0, i.jsx)(l.MenuSeparator, {}),
                (0, i.jsx)(l.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: _.Z.Messages.VIEW_MORE,
                    icon: l.ReactionIcon,
                    action: () => {
                        g.S.dispatchKeyed(f.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function S(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: a, className: s = '', isFocused: l = !1 } = e;
    return (0, i.jsx)('img', {
        className: s,
        src:
            null != t.id
                ? M.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!a || l),
                      size: 18
                  })
                : m.ZP.getURL(null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ''),
        alt: ''
    });
}
