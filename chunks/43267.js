n.d(t, {
    x: function () {
        return s;
    }
}), n(47120);
var r = n(594174), i = n(768581), a = n(823379), o = n(981631);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32, n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
    case o.d4z.DM:
        let [s] = e.recipients.map(r.default.getUser).filter(a.lm);
        if (null == s)
            return null;
        return s.getAvatarURL(void 0, t, n);
    case o.d4z.GROUP_DM:
        return i.ZP.getChannelIconURL({
            id: e.id,
            icon: e.icon,
            applicationId: e.getApplicationId(),
            size: t
        });
    }
}
