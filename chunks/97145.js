r.d(t, {
    R: function () {
        return a;
    },
    f: function () {
        return o;
    }
});
var n = r(981631);
let a = [n.rMx.START_SPEAKING, n.rMx.START_LISTENING, n.rMx.APP_OPENED, n.rMx.NOTIFICATION_CLICKED, n.rMx.EXPERIMENT_USER_TRIGGERED, n.rMx.EXPERIMENT_DM_TRIGGERED, n.rMx.EXPERIMENT_GUILD_TRIGGERED];
function o(e) {
    let { maxBudgetMinute: t, maxBudgetHour: r } = e,
        n = {
            minute: {
                slot: 0,
                budgetUsed: 0
            },
            hour: {
                slot: 0,
                budgetUsed: 0
            }
        };
    return () => {
        let e = Date.now(),
            a = Math.round(e / 1000 / 60),
            o = Math.round(e / 1000 / 60 / 60);
        return n.minute.slot !== a && ((n.minute.slot = a), (n.minute.budgetUsed = 0)), n.hour.slot !== o && ((n.hour.slot = o), (n.hour.budgetUsed = 0)), !!(n.minute.budgetUsed < t) && (n.minute.budgetUsed++, !!(n.hour.budgetUsed < r)) && (n.hour.budgetUsed++, !0);
    };
}
