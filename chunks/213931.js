t.d(n, {
    M: function () {
        return o;
    },
    t: function () {
        return s;
    }
});
var i = t(381499),
    a = t(675478),
    l = t(592125),
    r = t(626135),
    u = t(981631);
function s(e, n, t, l) {
    if (n !== t)
        (0, a.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: t }) };
            },
            a.fy.INFREQUENT_USER_ACTION
        ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: e,
                location: l,
                soundpack: t
            });
}
function o(e, n, t, s, o) {
    var d;
    if (t !== s)
        (0, a.BU)(
            e,
            n,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: s }) };
            },
            a.fy.INFREQUENT_USER_ACTION
        ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: e,
                channel_id: n,
                channel_type: null === (d = l.Z.getChannel(n)) || void 0 === d ? void 0 : d.type,
                location: o,
                soundpack: s
            });
}
