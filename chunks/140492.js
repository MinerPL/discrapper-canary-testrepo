t.d(n, {
    Z: function () {
        return T;
    }
}), t(47120), t(733860);
var i = t(718528), l = t(931261), o = t(355298), E = t(333984), r = t(905423), u = t(695346), a = t(283595), s = t(923834), d = t(55589), _ = t(823379), c = t(475468), C = t(981631), A = t(176505);
let I = () => {
    let e = o.Z.getMessageRequestsCount() > 0 || E.Z.getSpamChannelsCount() > 0;
    return [
        C.Z5c.FRIENDS,
        a.Z.hasLibraryApplication() && !u.bm.getSetting() ? C.Z5c.APPLICATION_LIBRARY : null,
        C.Z5c.APPLICATION_STORE,
        e ? C.Z5c.MESSAGE_REQUESTS : null,
        C.Z5c.COLLECTIBLES_SHOP,
        u.Ex.getSetting() ? C.Z5c.FAMILY_CENTER : null
    ].filter(_.lm);
};
function S(e, n) {
    (0, c.K)(e, n);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n = r.Z.getState().guildId;
    null == n ? !function (e) {
        var n, t, i;
        let {
                channelId: l,
                path: o,
                basePath: E
            } = r.Z.getState(), u = d.Z.getPrivateChannelIds(), a = __OVERLAY__ ? u : [
                ...I(),
                ...u
            ];
        let _ = (null == l ? (n = null != o ? o : E, I().findIndex(e => n.startsWith(e))) : null != l ? a.indexOf(l) : 0) + e;
        _ >= a.length ? _ = 0 : _ < 0 && (_ = a.length - 1);
        let A = a[_];
        if (I().includes(A))
            !function (e) {
                let n = s.Z.getCurrentRoute();
                e === C.Z5c.APPLICATION_STORE && null != n ? (0, c.z)(n) : (0, c.z)(e);
            }(A);
        else {
            ;
            t = C.ME, i = A, (0, c.K)(t, i);
        }
    }(e) : !function (e, n) {
        var t, o, E, u;
        let a = r.Z.getState().channelId, s = (0, i.Z)(n).map(e => e.id);
        (0, l.s)(n) && s.unshift(A.oC.GUILD_HOME);
        let d = (t = (null != a ? s.indexOf(a) : -1) + e, o = s.length, t < 0 ? o - 1 : t >= o ? 0 : t);
        E = n, u = s[d], (0, c.K)(E, u);
    }(e, n);
}
