t.d(n, {
    Z: function () {
        return p;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(543241),
    s = t(222677),
    u = t(995774),
    d = t(665906),
    c = t(695346),
    g = t(496675),
    f = t(768581),
    m = t(585483),
    h = t(176354),
    v = t(981631),
    I = t(185923),
    E = t(388032);
function p(e, n) {
    let { reducedMotion: t } = l.useContext(a.AccessibilityPreferencesContext),
        f = (0, d.$R)(n),
        p = (0, r.e7)([g.Z], () => (n.isPrivate() || g.Z.can(v.Plq.ADD_REACTIONS, n)) && f, [n, f]),
        Z = (0, o.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !p || e.type === v.uaV.GUILD_INVITE_REMINDER) return null;
    let x = Z.filter(
        (e) =>
            !h.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: I.Hz.REACTION
            })
    )
        .slice(0, 12)
        .map((l, r) => {
            var o, d;
            return (0, i.jsx)(
                a.MenuItem,
                {
                    color: 'default',
                    id: null !== (d = null !== (o = l.id) && void 0 !== o ? o : l.optionallyDiverseSequence) && void 0 !== d ? d : l.name,
                    label: ':'.concat(l.name, ':'),
                    icon: (e) =>
                        (0, i.jsx)(M, {
                            ...e,
                            reducedMotionEnabled: t.enabled,
                            emoji: l
                        }),
                    action: () => {
                        (0, s.rU)(n.id, e.id, (0, u.g1)(l), s.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                r
            );
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'add-reaction',
        label: E.intl.string(E.t.lfIHs7),
        action: () => {
            m.S.dispatchKeyed(v.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                x,
                (0, i.jsx)(a.MenuSeparator, {}),
                (0, i.jsx)(a.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: E.intl.string(E.t['OBCR+v']),
                    icon: a.ReactionIcon,
                    action: () => {
                        m.S.dispatchKeyed(v.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function M(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: l, className: r = '', isFocused: a = !1 } = e;
    return (0, i.jsx)('img', {
        className: r,
        src:
            null != t.id
                ? f.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!l || a),
                      size: 18
                  })
                : h.ZP.getURL(null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ''),
        alt: ''
    });
}
