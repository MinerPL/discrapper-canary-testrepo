var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(204418), r = n(594174), o = n(113434), c = n(182294), d = n(227258);
t.Z = e => {
    let {
            questConfig: t,
            fallback: n,
            isFocused: u
        } = e, _ = (0, a.e7)([r.default], () => r.default.getCurrentUser()), {
            avatarDecoration: E,
            isFetching: m
        } = (0, o.DU)(t);
    return m ? (0, i.jsx)('div', {
        className: d.questsCollectibleReward,
        children: (0, i.jsx)(s.Spinner, {})
    }) : null == _ || null == E ? n : (0, i.jsx)('div', {
        className: d.questsCollectibleReward,
        children: (0, i.jsx)(l.Z, {
            avatarSize: c.EF.SIZE_56,
            user: _,
            guildId: null,
            avatarDecorationOverride: E,
            animateOnHover: !u
        })
    });
};
