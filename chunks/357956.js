var n = s(735250);
s(470079);
var a = s(481060), i = s(774078), r = s(55935), o = s(689938);
t.Z = function (e) {
    let {
            className: t,
            cooldown: s
        } = e, l = (0, i.Z)(s);
    return (0, n.jsx)(a.Text, {
        className: t,
        variant: 'text-sm/medium',
        color: 'text-muted',
        children: (0, r.QX)(l, {
            days: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_DAYS,
            hours: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_HOURS,
            minutes: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_MINUTES
        })
    });
};
