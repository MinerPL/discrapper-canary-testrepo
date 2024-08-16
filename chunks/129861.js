var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(385499),
    u = n(813549),
    c = n(246946),
    d = n(51144),
    _ = n(689938),
    E = n(442129);
let f = (e) => {
    let { primary: t, secondary: n, botType: i, botVerified: s, discriminatorClass: u, className: c, usernameClass: d, color: f, botClass: h, showStreamerModeTooltip: p } = e;
    return (0, r.jsxs)('div', {
        className: a()(E.info, c),
        children: [
            (0, r.jsx)(o.Tooltip, {
                text: _.Z.Messages.STREAMER_MODE_ENABLED,
                shouldShow: p,
                'aria-label': !!p && void 0,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        className: a()(E.__invalid_username, d),
                        style: null != f ? { color: f } : void 0,
                        children: t
                    })
            }),
            null != n
                ? (0, r.jsx)('span', {
                      className: a()(E.infoSpacing, u),
                      children: n
                  })
                : void 0,
            null != i &&
                (0, r.jsx)(l.Z, {
                    type: i,
                    className: a()(E.infoSpacing, h),
                    verified: s
                })
        ]
    });
};
t.Z = (e) => {
    let { user: t, nick: n, forceUsername: i, showAccountIdentifier: a, overrideDiscriminator: o, forcePomelo: l, hideBotTag: _ = !1, hideDiscriminator: E = !1, ...h } = e,
        p = (0, s.e7)([c.Z], () => c.Z.hidePersonalInformation),
        m = p || E || t.isNonUserBot(),
        I = t.toString(),
        T = _
            ? null
            : (function (e) {
                  if (e.isSystemUser()) return u.J.SYSTEM_DM;
                  if (e.isClyde()) return u.J.AI;
                  if (e.bot) return u.J.BOT;
                  return null;
              })(t),
        g = t.isVerifiedBot(),
        S = d.ZP.getName(t),
        A = i ? I : null != n ? n : S,
        N = t.isPomelo() || l;
    if (N || A !== I) {
        let e = A === I && N && i ? d.ZP.getUserTag(t, { forcePomelo: l }) : A,
            n = a && e !== '@'.concat(I) ? d.ZP.getUserTag(t) : void 0;
        return (0, r.jsx)(f, {
            primary: e,
            secondary: n,
            botType: T,
            botVerified: g,
            showStreamerModeTooltip: p && e !== S,
            ...h
        });
    }
    return (0, r.jsx)(u.Z, {
        name: A,
        botType: T,
        botVerified: g,
        discriminator: m || A !== I ? null : null != o ? o : t.discriminator,
        ...h
    });
};
