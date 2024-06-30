t.d(n, {
    B: function () {
        return r;
    }
});
var i = t(70956), a = t(689938);
let r = [
    {
        duration: i.Z.Millis.HOUR,
        getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
    },
    {
        duration: 2 * i.Z.Millis.HOUR,
        getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
    },
    {
        duration: 4 * i.Z.Millis.HOUR,
        getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
    },
    {
        duration: i.Z.Millis.DAY,
        getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
    },
    {
        duration: i.Z.Millis.WEEK,
        getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
    }
];
