n.d(t, {
    NX: function () {
        return E;
    },
    WS: function () {
        return _;
    },
    l5: function () {
        return d;
    },
    qB: function () {
        return f;
    },
    vp: function () {
        return h;
    }
});
var r = n(106351), i = n(442837), a = n(818083), o = n(592125), s = n(496675), l = n(944486), u = n(231338);
let c = (0, a.B)({
    kind: 'user',
    id: '2023-08_activities_in_text',
    label: 'Activities in Text User',
    defaultConfig: {
        entryPointEnabled: !1,
        activitiesInTextEnabled: !1,
        showInOmniButtonMenu: !1,
        showNewMobileLeaveUI: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable Activities in Text, DM, and GDM channels',
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !1
            }
        },
        {
            id: 2,
            label: 'Enable Activities in Text, DM, and GDM channels with new mobile leave UI',
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !0
            }
        }
    ]
});
function d(e) {
    var t;
    if (null == e || void 0 === e)
        return !1;
    let n = o.Z.getChannel(e.parent_id);
    if (null != n && (null == n ? void 0 : n.type) !== r.d.GUILD_CATEGORY)
        return !1;
    return t = e.type, [
        r.d.GUILD_TEXT,
        r.d.GROUP_DM,
        r.d.DM
    ].includes(t);
}
function _(e, t, n) {
    if (null == e)
        return !1;
    let r = d(e), i = s.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, e), a = i && s.Z.can(u.Pl.SEND_MESSAGES | u.Pl.USE_APPLICATION_COMMANDS, e);
    if ((null == e ? void 0 : e.guild_id) != null)
        return t ? a && r : i && r;
    return t ? c.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).activitiesInTextEnabled && r : r;
}
function E(e, t, n) {
    let {
            isActivitiesInTextEnabledForChannelType: r,
            channelGuildId: a,
            hasPermission: l
        } = (0, i.cj)([
            o.Z,
            s.Z
        ], () => {
            let n = o.Z.getChannel(e), r = s.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, n), i = r && s.Z.can(u.Pl.SEND_MESSAGES | u.Pl.USE_APPLICATION_COMMANDS, n);
            return {
                isActivitiesInTextEnabledForChannelType: d(n),
                channelGuildId: null == n ? void 0 : n.guild_id,
                hasPermission: t ? i : r
            };
        }), _ = null != a, E = c.useExperiment({ location: n }, {
            autoTrackExposure: !_,
            disable: _
        });
    return _ ? l && r : t ? E.activitiesInTextEnabled && r : r;
}
function f(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(e)), r = (0, i.e7)([s.Z], () => s.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, n)), a = d(n), l = null == n ? void 0 : n.guild_id, _ = null != l, E = c.useExperiment({ location: t }, {
            autoTrackExposure: !_,
            disable: _
        });
    return _ ? r && a : E.showInOmniButtonMenu && a;
}
function h(e, t) {
    let {
            hasGuildId: n,
            isGuildVoiceChannel: a,
            isInPrivateVoiceCall: s
        } = (0, i.cj)([
            o.Z,
            l.Z
        ], () => {
            let t = o.Z.getChannel(e), n = (null == t ? void 0 : t.guild_id) !== void 0 && (null == t ? void 0 : t.guild_id) !== null, i = (null == t ? void 0 : t.type) === r.d.GUILD_VOICE;
            return {
                hasGuildId: n,
                isGuildVoiceChannel: i,
                isInPrivateVoiceCall: (null == t ? void 0 : t.isPrivate()) && l.Z.getVoiceChannelId() === e
            };
        }), u = c.useExperiment({ location: t }, {
            autoTrackExposure: !n,
            disable: n
        }), d = s && u.activitiesInTextEnabled;
    return a || d;
}
