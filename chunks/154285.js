n.d(t, {
    jy: function () {
        return _;
    },
    sw: function () {
        return d;
    }
});
var r = n(149765), i = n(442837), a = n(818083), o = n(430824), s = n(496675), l = n(676770);
let u = (0, a.B)({
        kind: 'guild',
        id: '2023-04_guild_alert_mode',
        label: 'Guild Alert Mode',
        defaultConfig: {
            showAlertMode: !1,
            alsoShowMemberSafety: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Show alert mode experience',
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            },
            {
                id: 2,
                label: 'Show alert mode experience with member safety',
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !0
                }
            }
        ]
    }), c = (0, a.B)({
        kind: 'guild',
        id: '2023-08_guild_alert_mode_friend_server',
        label: 'Guild Alert Mode (friend servers only)',
        defaultConfig: {
            showAlertMode: !1,
            alsoShowMemberSafety: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Show alert mode experience',
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            },
            {
                id: 2,
                label: 'Show alert mode experience with member safety',
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            }
        ]
    });
function d(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getGuild(e)), n = (0, i.e7)([s.Z], () => null != t && r.Db(s.Z.computePermissions(t), l.cv)), a = u.useExperiment({
            guildId: e,
            location: 'c3fae3_1'
        }, {
            disable: !n,
            autoTrackExposure: !0
        }), d = c.useExperiment({
            guildId: e,
            location: 'c3fae3_2'
        }, {
            disable: !n,
            autoTrackExposure: !0
        });
    return {
        showAlertMode: a.showAlertMode || d.showAlertMode,
        alsoShowMemberSafety: a.alsoShowMemberSafety || d.alsoShowMemberSafety
    };
}
function _(e) {
    let t = o.Z.getGuild(e), n = null != t && r.Db(s.Z.computePermissions(t), l.cv), i = u.getCurrentConfig({
            guildId: e,
            location: 'c3fae3_3'
        }, {
            disable: !n,
            autoTrackExposure: !0
        }), a = c.getCurrentConfig({
            guildId: e,
            location: 'c3fae3_4'
        }, {
            disable: !n,
            autoTrackExposure: !0
        });
    return {
        showAlertMode: i.showAlertMode || a.showAlertMode,
        alsoShowMemberSafety: i.alsoShowMemberSafety || a.alsoShowMemberSafety
    };
}
