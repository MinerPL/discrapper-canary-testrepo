n.d(t, {
    An: function () {
        return T;
    },
    C3: function () {
        return m;
    },
    It: function () {
        return v;
    },
    St: function () {
        return I;
    },
    iN: function () {
        return _;
    },
    nk: function () {
        return A;
    }
}),
    n(653041);
var r = n(470079),
    i = n(442837),
    a = n(818083),
    s = n(430824),
    o = n(496675),
    l = n(308083),
    u = n(981631);
let c = (0, a.B)({
        kind: 'guild',
        id: '2024-07_rapidash_m3_guilds',
        label: 'Rapidash M3 Guilds',
        defaultConfig: {
            enableClanCreation: !1,
            requireTargeting: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Targeted guilds',
                config: {
                    enableClanCreation: !0,
                    requireTargeting: !0
                }
            },
            {
                id: 2,
                label: 'Untargeted guilds',
                config: {
                    enableClanCreation: !0,
                    requireTargeting: !1
                }
            }
        ]
    }),
    d = (0, a.B)({
        kind: 'user',
        id: '2024-07_rapidash_m3_joiners',
        label: 'Rapidash M3 Users',
        defaultConfig: { enableM3Experience: !1 },
        treatments: [
            {
                id: 1,
                label: 'Targeted users',
                config: { enableM3Experience: !0 }
            }
        ]
    });
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
let E = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_valorant_prepilot',
        label: 'Clans Valorant Prepilot',
        defaultConfig: {
            enableClanCreation: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Enable creation of clan guilds - Valorant',
                config: {
                    enableClanCreation: !0,
                    defaultGameId: l.nJ
                }
            }
        ]
    }),
    f = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_genshin_prepilot',
        label: 'Clans Genshin Prepilot',
        defaultConfig: {
            enableClanCreation: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Enable creation of clan guilds - Genshin',
                config: {
                    enableClanCreation: !0,
                    defaultGameId: l.xn
                }
            }
        ]
    });
function h(e) {
    var t, n;
    let { valorantConfig: r, genshinConfig: i } = e;
    return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
}
function p(e) {
    let { guilds: t, valorantConfig: n, genshinConfig: r, m3GuildConfig: a, includeConverted: s } = e,
        l = (0, i.Wu)([o.Z], () => t.filter((e) => o.Z.can(u.Plq.ADMINISTRATOR, e))),
        d = l.filter((e) =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && e.hasFeature(u.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(u.oNc.CLAN));
            })(e, s)
        ),
        _ = l.filter((e) =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && e.hasFeature(u.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(u.oNc.CLAN));
            })(e, s)
        ),
        E = a.requireTargeting
            ? l.filter((e) =>
                  (function (e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                      return (
                          null != e &&
                          e.hasFeature(u.oNc.RAPIDASH_TEST) &&
                          c.getCurrentConfig(
                              {
                                  guildId: e.id,
                                  location: 'isM3TargetedGuild'
                              },
                              { autoTrackExposure: !1 }
                          ).enableClanCreation &&
                          (t || !e.hasFeature(u.oNc.CLAN))
                      );
                  })(e, s)
              )
            : l,
        f = d.length > 0 && r.enableClanCreation,
        p = _.length > 0 && n.enableClanCreation,
        m = E.length > 0 && a.enableClanCreation,
        I = [];
    return (
        f && d.forEach((e) => I.push(e)),
        p && _.forEach((e) => I.push(e)),
        m && E.forEach((e) => I.push(e)),
        {
            guilds: I,
            enableClanCreation: f || p || m,
            defaultGameId: h({
                genshinConfig: f ? r : void 0,
                valorantConfig: p ? n : void 0
            })
        }
    );
}
function m(e) {
    let { location: t, includeConverted: n, autoTrackExposure: a = !0 } = e,
        o = (0, i.Wu)([s.Z], () => Object.values(s.Z.getGuilds())),
        l = E.useExperiment({ location: t }, { autoTrackExposure: a }),
        u = f.useExperiment({ location: t }, { autoTrackExposure: a }),
        d = r.useMemo(() => {
            let e = {
                enableClanCreation: !1,
                requireTargeting: !1
            };
            return (
                o.forEach((n) => {
                    let r = c.getCurrentConfig(
                        {
                            guildId: n.id,
                            location: t
                        },
                        { autoTrackExposure: a }
                    );
                    (e.enableClanCreation = e.enableClanCreation || r.enableClanCreation), (e.requireTargeting = e.requireTargeting || r.requireTargeting);
                }),
                e
            );
        }, [o, t, a]);
    return p({
        guilds: o,
        valorantConfig: l,
        genshinConfig: u,
        m3GuildConfig: d,
        includeConverted: n
    });
}
function I(e) {
    let { guild: t, location: n, includeConverted: r, autoTrackExposure: i = !0 } = e,
        a = E.useExperiment({ location: n }, { autoTrackExposure: i }),
        s = f.useExperiment({ location: n }, { autoTrackExposure: i }),
        o = c.useExperiment(
            {
                guildId: null == t ? void 0 : t.id,
                location: n
            },
            { autoTrackExposure: i }
        );
    return p({
        guilds: [t],
        valorantConfig: a,
        genshinConfig: s,
        m3GuildConfig: o,
        includeConverted: r
    });
}
function T(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = E.useExperiment({ location: t }, { autoTrackExposure: n });
    return h({
        valorantConfig: r,
        genshinConfig: f.useExperiment({ location: t }, { autoTrackExposure: n })
    });
}
let g = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_valorant_pilot',
        label: 'Clans Valorant Pilot',
        defaultConfig: {
            clanDiscoveryEnabled: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Show clan discovery (Valorant)',
                config: {
                    clanDiscoveryEnabled: !0,
                    defaultGameId: l.nJ
                }
            }
        ]
    }),
    S = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_genshin_pilot',
        label: 'Clans Genshin Pilot',
        defaultConfig: {
            clanDiscoveryEnabled: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Show clan discovery (Genshin Impact)',
                config: {
                    clanDiscoveryEnabled: !0,
                    defaultGameId: l.xn
                }
            }
        ]
    });
function A(e) {
    var t, n;
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = g.useExperiment({ location: e }, { autoTrackExposure: r }),
        a = S.useExperiment({ location: e }, { autoTrackExposure: r }),
        s = _(e, r);
    return {
        clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled || s,
        defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
    };
}
let N = (0, a.B)({
    kind: 'user',
    id: '2024-05_clans_general',
    label: 'Clans General',
    defaultConfig: { clanTagsVisible: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show clan tags',
            config: { clanTagsVisible: !0 }
        }
    ]
});
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = _(e, t),
        r = N.useExperiment({ location: e }, { autoTrackExposure: t });
    return n ? { clanTagsVisible: !0 } : r;
}
(0, a.B)({
    kind: 'user',
    id: '2024-06_clans_mobile_tags',
    label: 'Clans - Mobile',
    defaultConfig: { clanTagsVisible: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show tags on mobile',
            config: { clanTagsVisible: !0 }
        }
    ]
});
