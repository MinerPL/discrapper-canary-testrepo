var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(204418),
    l = n(594174),
    o = n(113434),
    c = n(46140),
    u = n(182294),
    d = n(679001);
let _ = () => (0, i.jsx)('div', { className: d.questsCollectibleReward }),
    E = (e) => {
        let { questConfig: t, fallback: n, isFocused: c } = e,
            _ = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            { avatarDecoration: E, isFetching: I } = (0, o.DU)(t);
        return I
            ? (0, i.jsx)('div', {
                  className: d.questsCollectibleReward,
                  children: (0, i.jsx)(s.Spinner, {})
              })
            : null == _ || null == E
              ? n
              : (0, i.jsx)('div', {
                    className: d.questsCollectibleReward,
                    children: (0, i.jsx)(r.Z, {
                        avatarSize: u.EF.SIZE_56,
                        user: _,
                        guildId: null,
                        avatarDecorationOverride: E,
                        animateOnHover: !c
                    })
                });
    };
t.Z = (e) => (e.questConfig.features.includes(c.S7.FRACTIONS_QUEST) ? (0, i.jsx)(_, {}) : (0, i.jsx)(E, { ...e }));
