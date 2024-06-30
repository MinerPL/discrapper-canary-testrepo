n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(913527), s = n.n(a), o = n(626135), r = n(981631);
function l(e, t) {
    o.default.track(r.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > s()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
