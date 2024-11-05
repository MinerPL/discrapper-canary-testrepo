var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(204418),
    o = n(594174),
    a = n(113434),
    u = n(182294),
    d = n(52539);
let c = (e) => {
    let { questConfig: t, fallback: n, isFocused: c } = e,
        m = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        { avatarDecoration: x, isFetching: C } = (0, a.DU)(t);
    return C
        ? (0, i.jsx)('div', {
              className: d.questsCollectibleReward,
              children: (0, i.jsx)(l.Spinner, {})
          })
        : null == m || null == x
          ? n
          : (0, i.jsx)('div', {
                className: d.questsCollectibleReward,
                children: (0, i.jsx)(r.Z, {
                    avatarSize: u.EF.SIZE_56,
                    user: m,
                    guildId: null,
                    avatarDecorationOverride: x,
                    animateOnHover: !c
                })
            });
};
t.Z = (e) => (0, i.jsx)(c, { ...e });
