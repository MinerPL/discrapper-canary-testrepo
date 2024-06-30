var s = n(735250);
n(470079);
var a = n(774078), r = n(706454), i = n(689938);
function l(e) {
    return e.toLocaleString(r.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
t.Z = function (e) {
    let {endDate: t} = e, n = (0, a.Z)(t, 1000);
    return (0, s.jsx)(s.Fragment, {
        children: n.days > 0 ? i.Z.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({ days: n.days }) : i.Z.Messages.BOGO_UNTIL_OFFER_ENDS.format({
            hours: l(n.hours),
            minutes: l(n.minutes),
            seconds: l(n.seconds)
        })
    });
};
