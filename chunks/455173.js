var i, s, a, r, l = n(442837), o = n(570140), c = n(292556), d = n(812206);
class u extends (r = l.ZP.Store) {
}
a = 'UserAchievementStore', (s = 'displayName') in (i = u) ? Object.defineProperty(i, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[s] = a;
new u(o.Z, {
    USER_ACHIEVEMENT_UPDATE: function (e) {
        let {userAchievement: t} = e, {
                application_id: n,
                achievement: i,
                percent_complete: s
            } = t;
        if (100 === s && null != i) {
            let e = d.Z.getApplication(n), t = null != e ? e.getIconURL(64) : null;
            c.default.showNotification(t, i.name, i.description, { notif_type: 'USER_ACHIEVEMENT_UPDATE' }, { omitViewTracking: !0 });
        }
    }
});
