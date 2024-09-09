n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(789020),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(735250);
n(470079);
var i = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(979200),
    l = n(630388),
    u = n(709054),
    c = n(941532),
    d = n(713938),
    _ = n(981631),
    E = n(689938),
    f = n(359850);
let h = (e) => {
    switch (e) {
        case o.ZC.IP_LOCATION:
            return s.GlobeEarthIcon;
        case o.ZC.DISPLAYS_ADVERTISEMENTS:
            return s.EmbedIcon;
        default:
            return null;
    }
};
function p(e) {
    var t;
    let n,
        { application: a, scopes: p, redirectUri: m, approximateGuildCount: T, isEmbeddedFlow: S, disclosures: g } = e,
        A = new Date(u.default.extractTimestamp(a.id)),
        N = (0, d.W3)(p),
        O = (0, l.yE)(null !== (t = a.flags) && void 0 !== t ? t : 0, _.udG.EMBEDDED);
    if (null != m && !O && !S)
        try {
            let e = new URL(m);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    return (0, r.jsxs)('div', {
        className: f.applicationDetails,
        children: [
            null != n
                ? (0, r.jsx)(I, {
                      icon: s.LinkIcon,
                      text: E.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({ origin: n })
                  })
                : null,
            (0, r.jsx)(I, {
                icon: s.LockIcon,
                text: (0, c.i)(a)
            }),
            (0, r.jsx)(I, {
                icon: s.ClockIcon,
                text: E.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({ date: A })
            }),
            p.includes(i.x.BOT) && null != T
                ? (0, r.jsx)(I, {
                      icon: s.RobotIcon,
                      text: E.Z.Messages.OAUTH2_DETAILS_GUILDS.format({ guildCount: T })
                  })
                : null,
            (0, r.jsx)(I, {
                icon: s.ShieldIcon,
                text: N
            }),
            null != g
                ? g.map((e) => {
                      let t = (0, o.PM)(e),
                          n = h(e);
                      return null != n && null != t
                          ? (0, r.jsx)(I, {
                                icon: n,
                                text: t
                            })
                          : null;
                  })
                : null
        ]
    });
}
function I(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: f.entry,
        children: [
            (0, r.jsx)(t, {
                className: f.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/normal',
                className: f.entryInner,
                children: n
            })
        ]
    });
}
