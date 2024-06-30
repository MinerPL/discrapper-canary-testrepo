r.d(e, {
    R: function () {
        return _;
    },
    f: function () {
        return a;
    }
});
var n = r(981631);
let _ = [
    n.rMx.START_SPEAKING,
    n.rMx.START_LISTENING,
    n.rMx.APP_OPENED,
    n.rMx.NOTIFICATION_CLICKED,
    n.rMx.EXPERIMENT_USER_TRIGGERED,
    n.rMx.EXPERIMENT_DM_TRIGGERED,
    n.rMx.EXPERIMENT_GUILD_TRIGGERED
];
function a(t) {
    let {
            maxBudgetMinute: e,
            maxBudgetHour: r
        } = t, n = {
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
        let t = Date.now(), _ = Math.round(t / 1000 / 60), a = Math.round(t / 1000 / 60 / 60);
        return n.minute.slot !== _ && (n.minute.slot = _, n.minute.budgetUsed = 0), n.hour.slot !== a && (n.hour.slot = a, n.hour.budgetUsed = 0), !!(n.minute.budgetUsed < e) && (n.minute.budgetUsed++, !!(n.hour.budgetUsed < r)) && (n.hour.budgetUsed++, !0);
    };
}
