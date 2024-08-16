n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    r = n(841784),
    l = n(503438),
    o = n(802856),
    c = n(707409),
    d = n(51144),
    u = n(761282),
    _ = n(358924),
    E = n(817915),
    h = n(981631),
    m = n(689938);
function I(e) {
    let { party: t, onUserContextMenu: a } = e,
        { priorityMembers: I, guildContext: g } = t,
        p = I[0],
        T = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                a = n.filter((e) => !i.has(e.id)),
                s = d.ZP.getName(t[0].user),
                r = null != t[1] ? d.ZP.getName(t[1].user) : null != a[0] ? d.ZP.getName(a[0]) : null;
            switch (n.length) {
                case 1:
                    return s;
                case 2:
                    return m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN_ONLY.format({
                        user1: s,
                        user2: r
                    });
                default:
                    return m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN.format({
                        user1: s,
                        user2: r,
                        extras: n.length - 2
                    });
            }
        })(t),
        { subtitle: S, icon: f } = (function (e) {
            var t;
            let { priorityMembers: a, partiedMembers: d, voiceChannels: I, currentActivities: g } = e,
                p = a.length,
                T = d.length - p,
                S = g[0],
                f = null == S ? void 0 : S.activity,
                C = null == S ? void 0 : S.startedPlayingTime,
                N = { name: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : '' };
            if ((0, r.Z)(f) && null != f)
                return {
                    subtitle: (0, i.jsx)(c.ZP, {
                        start: C,
                        location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: N
                    }),
                    icon: null
                };
            if (p + T === 1 && null != S) {
                let { game: e } = S;
                if (null == f)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let t = u.dc(f);
                if (null != t) return t;
                switch (f.type) {
                    case h.IIU.PLAYING:
                        if ((0, o.Z)(f))
                            return {
                                subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
                                icon: (0, i.jsx)(_.Z.Header.Icon, { src: _.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, i.jsx)(c.ZP, {
                                start: C,
                                location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: N
                            }),
                            icon: null != e ? (0, i.jsx)(_.Z.Header.Icon, { src: null != e.getIconURL(E.Z) ? e.getIconURL(E.Z) : n(211827) }) : null
                        };
                    case h.IIU.STREAMING:
                        return {
                            subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH,
                            icon: null != e && null != e.getIconURL(E.Z) ? (0, i.jsx)(_.Z.Header.Icon, { src: e.getIconURL(E.Z) }) : null
                        };
                    case h.IIU.LISTENING:
                        let a;
                        return (
                            (a = (0, l.Z)(f) ? (0, i.jsx)(_.Z.Header.Icon, { src: _.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(E.Z) ? (0, i.jsx)(_.Z.Header.Icon, { src: e.getIconURL(E.Z) }) : (0, i.jsx)(_.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({ name: f.name }),
                                icon: a
                            }
                        );
                    case h.IIU.WATCHING:
                        return {
                            subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING,
                            icon: null != e && null != e.getIconURL(E.Z) ? (0, i.jsx)(_.Z.Header.Icon, { src: e.getIconURL(E.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
                            icon: null
                        };
                }
            }
            if (0 === g.length) {
                if (I.length > 0)
                    return {
                        subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
                        icon: null
                    };
                let e = g[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = u.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === h.IIU.LISTENING)
                        return {
                            subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_SPOTIFY,
                            icon: (0, i.jsx)(_.Z.Header.Icon, { src: _.Z.Header.Icon.Src.SPOTIFY })
                        };
                }
            } else if (1 === g.length) {
                let e = g.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let { activity: t, game: n, startedPlayingTime: a } = e;
                return (
                    s()(null != t, 'Activity was null somehow'),
                    {
                        subtitle: (0, i.jsx)(c.ZP, {
                            start: a,
                            location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: N
                        }),
                        icon: null != n && null != n.getIconURL(E.Z) ? (0, i.jsx)(_.Z.Header.Icon, { src: n.getIconURL(E.Z) }) : null
                    }
                );
            }
            return {
                subtitle: m.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
                icon: (0, i.jsx)(_.Z.Header.Icon, { src: _.Z.Header.Icon.Src.MULTIPLE })
            };
        })(t);
    return (0, i.jsx)(_.Z.Header, {
        priorityUser: p,
        guildId: null == g ? void 0 : g.id,
        title: T,
        subtitle: S,
        icon: f,
        onContextMenu: (e) => a(e, p.user)
    });
}
