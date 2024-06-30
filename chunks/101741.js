n.d(t, {
    Z: function () {
        return A;
    }
}), n(47120);
var a = n(735250);
n(470079);
var i = n(209173), l = n(782568), r = n(626135), c = n(924489), s = n(132871), o = n(147890), d = n(491576), u = n(112884), _ = n(639002), g = n(781627), m = n(981631), f = n(689938), p = n(439818);
let C = new Map([[
            '890343617762304070',
            { imageSrc: n(336662) }
        ]]), h = new Map(), x = new Map([[
            m.ABu.SPOTIFY,
            { imageSrc: n(655130) }
        ]]);
function I(e) {
    var t, n;
    let {result: i} = e, l = i.data, r = (0, d.Z)({ application: l }), s = C.get(i.data.id);
    if (null == s)
        return null;
    let u = r.length > 0 ? (0, a.jsx)(c.Z, {
            application: i.data,
            textVariant: 'text-sm/semibold',
            mutualGuilds: r,
            mutualGuildShownMax: 3,
            guildIconSize: c.x.SMALL,
            compact: !0
        }) : null, _ = null !== (n = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0, m = _ > 0 ? f.Z.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({ guildCount: _ }) : void 0;
    return (0, a.jsx)(g.Z, {
        imageSrc: s.imageSrc,
        header: i.data.name,
        description: i.data.description,
        secondaryInfo: m,
        ctaLabel: f.Z.Messages.APPLICATION_ADD_BUTTON,
        mutualGuildCount: u,
        onCtaClick: () => (0, o.goToApplication)({ applicationId: l.id })
    });
}
function T(e) {
    let {result: t} = e, n = h.get(t.data.id);
    return null == n ? null : (0, a.jsx)(g.Z, {
        imageSrc: n.imageSrc,
        header: t.data.name,
        description: t.data.description,
        secondaryInfo: f.Z.Messages.APP_DIRECTORY_ACTIVITY_LABEL
    });
}
function R(e) {
    let t, n, i, {
            result: c,
            guildId: o
        } = e, d = x.get(c.data.name);
    return null == d ? null : (c.data.name === m.ABu.SPOTIFY && (t = f.Z.Messages.APP_DIRECTORY_SPOTIFY_TITLE, n = f.Z.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), i = () => {
        r.default.track(m.rMx.APP_DIRECTORY_CTA_CLICKED, {
            current_page: s.ApplicationDirectoryViews.SEARCH,
            cta: 'spotify',
            guild_id: o
        }), (0, l.Z)('https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection');
    }), null == t || null == n || null == i) ? null : (0, a.jsx)(g.Z, {
        imageSrc: d.imageSrc,
        header: t,
        description: n,
        ctaLabel: f.Z.Messages.LEARN_MORE,
        onCtaClick: i,
        secondaryInfo: f.Z.Messages.APP_DIRECTORY_CONNECTION_LABEL
    });
}
function A(e) {
    let {
        results: t,
        guildId: n
    } = e;
    return (0, a.jsxs)('div', {
        className: p.container,
        children: [
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)('div', {
                className: p.list,
                children: t.map((e, t) => {
                    let l = ''.concat(t).concat(e.type);
                    if (e.type === i.s.APPLICATION)
                        return (0, a.jsx)(I, { result: e }, l);
                    if (e.type === i.s.ACTIVITY_APPLICATION)
                        return (0, a.jsx)(T, { result: e }, l);
                    if (e.type === i.s.CONNECTION)
                        return (0, a.jsx)(R, {
                            guildId: n,
                            result: e
                        }, l);
                })
            }),
            (0, a.jsx)(_.Z, { guildId: n })
        ]
    });
}
