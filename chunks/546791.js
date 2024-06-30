_.d(E, {
    LI: function () {
        return N;
    },
    Qr: function () {
        return C;
    },
    f0: function () {
        return S;
    },
    iB: function () {
        return u;
    },
    jV: function () {
        return M;
    },
    lx: function () {
        return o;
    },
    t3: function () {
        return i;
    }
}), _(47120);
var t = _(913527), T = _.n(t), I = _(292352), n = _(689938);
let s = 3600, A = 86400, r = 172800, a = 604800, i = () => ({
        today: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
        yesterday: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
        days: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS
    }), C = e => e ? {
        today: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
        yesterday: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
        days: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS
    } : {
        today: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
        yesterday: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
        days: n.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS
    }, N = (e, E, _) => {
        let t = T()().diff(T()(e), 's'), I = E(), n = T()(e).format('LL');
        return n = t < A ? I.today : t < r ? I.yesterday : I.days.format({ days: Math.min(Math.floor(t / A), null != _ ? _ : 999) });
    }, o = (e, E) => {
        let _ = T()().diff(T()(e), 's'), t = E(), I = T()(e).format('LL');
        return I = _ < 60 ? t.seconds : _ < s ? t.minutes.format({ count: Math.floor(_ / 60) }) : _ < A ? t.hours.format({ count: Math.floor(_ / s) }) : _ < r ? t.yesterday : _ < a ? t.days.format({ count: Math.floor(_ / A) }) : t.date.format({ date: I });
    }, u = e => e.display_type === I.MY.USER_ADD || e.display_type === I.MY.USER_INTERACTION || e.display_type === I.MY.USER_CALLED, S = e => e.display_type === I.MY.GUILD_ADD || e.display_type === I.MY.GUILD_INTERACTION, M = e => {
        for (let E of Object.values(I.MY))
            if (E.toString() === e)
                return E;
    };
