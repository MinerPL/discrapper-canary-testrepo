a.d(t, {
    B: function () {
        return u;
    }
});
var n = a(913527),
    s = a.n(n),
    r = a(689938);
let u = [
    {
        getDueAt: () => s()().add(30, 'minutes').toDate(),
        getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
    },
    {
        getDueAt: () => s()().add(1, 'hour').toDate(),
        getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
    },
    {
        getDueAt: () => s()().add(4, 'hour').toDate(),
        getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
    },
    {
        getDueAt: () => s()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_TOMORROW_MORNING
    },
    {
        getDueAt: () => s()().day(8).startOf('day').add(9, 'hours').toDate(),
        getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_NEXT_WEEK
    }
];
