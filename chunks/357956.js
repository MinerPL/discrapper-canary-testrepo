var n = t(735250);
t(470079);
var a = t(481060),
    i = t(774078),
    r = t(55935),
    o = t(689938);
s.Z = function (e) {
    let { className: s, cooldown: t } = e,
        l = (0, i.Z)(t);
    return (0, n.jsx)(a.Text, {
        className: s,
        variant: 'text-sm/medium',
        color: 'text-muted',
        children: (0, r.QX)(l, {
            days: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_DAYS,
            hours: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_HOURS,
            minutes: o.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_MINUTES
        })
    });
};
