n.d(t, {
    Z: function () {
        return S;
    }
}), n(653041), n(47120);
var i = n(735250);
n(470079);
var s = n(287734), a = n(872810), r = n(122810), l = n(841784), o = n(503438), c = n(802856), d = n(420660), u = n(566078), _ = n(23404), E = n(769654), h = n(81063), I = n(761282), m = n(358924), p = n(868854), g = n(817915), T = n(981631);
function S(e) {
    let {
            party: t,
            onChannelContextMenu: n,
            quest: S
        } = e, C = (0, p.L)(), {
            voiceChannels: N,
            currentActivities: f,
            partiedMembers: A,
            applicationStreams: Z,
            guildContext: L
        } = t, v = [], O = e => {
            var t, n;
            let {length: s} = v;
            if (0 === s) {
                v.push(e);
                return;
            }
            let a = v[s - 1], r = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''), l = ''.concat(null !== (n = null == a ? void 0 : a.key) && void 0 !== n ? n : '').startsWith('game') && r.startsWith('rich-presence');
            v.push((0, i.jsx)(m.Z.Separator, { inset: l }, 'sep-'.concat(r))), v.push(e);
        };
    for (let {activity: e} of (N.length > 0 && N.forEach(e => {
            let {
                members: t,
                channel: s,
                guild: a
            } = e;
            O((0, i.jsx)(m.Z.VoiceSection, {
                guild: a,
                channel: s,
                members: t,
                partySize: function (e, t) {
                    let n;
                    let i = e.length, s = 0;
                    !1;
                    n = i + s;
                    return {
                        knownSize: i,
                        unknownSize: s,
                        totalSize: n
                    };
                }(t),
                onChannelContextMenu: n,
                onGuildClick: () => {
                    (0, E.X)(a.id);
                }
            }, 'voice-'.concat(s.id)));
        }), t.currentActivities))
        if (null != e) {
            let t = I.ct(e);
            if (null != t) {
                O(t);
                break;
            }
        }
    return Z.length > 0 && C && Z.forEach(e => {
        let {
            stream: t,
            streamUser: n,
            activity: r
        } = e;
        O((0, i.jsx)(m.Z.ApplicationStreamingSection, {
            guildId: null == L ? void 0 : L.id,
            user: n,
            activity: r,
            applicationStream: t,
            onPreviewClick: () => {
                s.default.selectVoiceChannel(t.channelId), (0, a.iV)(t);
            }
        }, 'application-stream-'.concat(t.ownerId)));
    }), f.forEach((e, t) => {
        var n, s, a, E, I, p, C, Z, v;
        let {
            activity: R,
            game: x,
            playingMembers: P,
            activityUser: b
        } = e;
        if (null == R || null == R.type)
            return null;
        if (f.length > 1 && R.type === T.IIU.PLAYING && !(0, r.Z)(R) && null != x)
            O((0, i.jsx)(m.Z.GameSection, {
                icon: x.getIconURL(g.Z),
                name: x.name,
                partySize: {
                    knownSize: P.length,
                    unknownSize: 0,
                    totalSize: P.length
                },
                members: P
            }, 'game-'.concat(null !== (n = R.session_id) && void 0 !== n ? n : t, '-').concat(null !== (s = R.application_id) && void 0 !== s ? s : t)));
        else if ((0, l.Z)(R)) {
            let e = new Set(P.map(e => e.id)), t = null === (a = N.find(e => null != e)) || void 0 === a ? void 0 : a.channel;
            null != t && O((0, i.jsx)(m.Z.EmbeddedActivitySection, {
                activity: R,
                participants: e,
                channel: t,
                guildId: t.guild_id
            }, 'embedded-activity-'.concat(R.application_id)));
        } else if ((null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.PLAYING)
            O((0, i.jsx)(m.Z.RichPresenceSection, {
                activity: R,
                getAssetImage: h.getAssetImage
            }, 'rich-presence-'.concat(null !== (E = R.session_id) && void 0 !== E ? E : t, '-').concat(b.id)));
        else if ((0, d.Z)(R)) {
            let e = N.length > 0 && N[0].members.length > 1, n = P.length > 1;
            O((0, i.jsx)(m.Z.TwitchSection, {
                guildId: null == L ? void 0 : L.id,
                activity: R,
                user: e || n ? b : null,
                getAssetImage: h.getAssetImage
            }, 'streaming-'.concat(null !== (I = R.session_id) && void 0 !== I ? I : t)));
        } else
            (0, o.Z)(R) ? O((0, i.jsx)(m.Z.SpotifySection, {
                activity: R,
                isSolo: 1 === A.length,
                partySize: {
                    knownSize: P.length,
                    unknownSize: 0,
                    totalSize: P.length
                },
                getAssetImage: h.getAssetImage,
                members: P
            }, 'spotify-'.concat(null !== (p = R.session_id) && void 0 !== p ? p : t, '-').concat(b.id))) : (null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.LISTENING ? O((0, i.jsx)(m.Z.RichPresenceSection, {
                activity: R,
                getAssetImage: h.getAssetImage
            }, 'rich-presence-'.concat(null !== (C = R.session_id) && void 0 !== C ? C : t, '-').concat(b.id))) : (0, c.Z)(R) && O((0, i.jsx)(m.Z.XboxSection, { title: x.name }, 'xbox-'.concat(null !== (Z = R.session_id) && void 0 !== Z ? Z : t)));
        null != S && null != x && x.id === u.r.build(S.config).application.id && O((0, i.jsx)(_.Z, { quest: S }, 'quest-'.concat(S.id, '-').concat(null !== (v = R.session_id) && void 0 !== v ? v : t)));
    }), v.length > 0 ? (0, i.jsx)(m.Z.Body, { children: v }) : null;
}
