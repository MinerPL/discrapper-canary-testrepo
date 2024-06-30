n.d(t, {
    Fx: function () {
        return c;
    },
    I6: function () {
        return d;
    },
    hl: function () {
        return _;
    }
});
var r = n(146150), i = n(707908), a = n(686942), o = n(812975), s = n(695170), l = n(713267), u = n(68808);
function c(e) {
    for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
        var l = n[i];
        !(0, a.q9)(o.DY, l) && t.push(l), (0, s.J_)(e[l]) && !(0, s.qb)(e[l]) && t.push(l);
    }
    if (t.length)
        throw Error('Invalid options: ' + t.join(', '));
    return (0, r.pi)({}, e);
}
function d(e) {
    var t = (0, r.pi)((0, r.pi)({}, o.WN), c(e));
    if ((0, a.EN)(t.byeaster) && (t.freq = o.Ci.YEARLY), !((0, a.EN)(t.freq) && o.Ci.FREQUENCIES[t.freq]))
        throw Error('Invalid frequency: '.concat(t.freq, ' ').concat(e.freq));
    if (!t.dtstart && (t.dtstart = new Date(new Date().setMilliseconds(0))), (0, a.EN)(t.wkst) ? (0, a.hj)(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = o.Ci.MO.weekday, (0, a.EN)(t.bysetpos)) {
        (0, a.hj)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var n = 0; n < t.bysetpos.length; n++) {
            var i = t.bysetpos[n];
            if (0 === i || !(i >= -366 && i <= 366))
                throw Error('bysetpos must be between 1 and 366, or between -366 and -1');
        }
    }
    if (!(t.byweekno || (0, a.Dw)(t.byweekno) || (0, a.Dw)(t.byyearday) || t.bymonthday || (0, a.Dw)(t.bymonthday) || (0, a.EN)(t.byweekday) || (0, a.EN)(t.byeaster)))
        switch (t.freq) {
        case o.Ci.YEARLY:
            !t.bymonth && (t.bymonth = t.dtstart.getUTCMonth() + 1), t.bymonthday = t.dtstart.getUTCDate();
            break;
        case o.Ci.MONTHLY:
            t.bymonthday = t.dtstart.getUTCDate();
            break;
        case o.Ci.WEEKLY:
            t.byweekday = [(0, s.FO)(t.dtstart)];
        }
    if ((0, a.EN)(t.bymonth) && !(0, a.kJ)(t.bymonth) && (t.bymonth = [t.bymonth]), (0, a.EN)(t.byyearday) && !(0, a.kJ)(t.byyearday) && (0, a.hj)(t.byyearday) && (t.byyearday = [t.byyearday]), (0, a.EN)(t.bymonthday)) {
        if ((0, a.kJ)(t.bymonthday)) {
            for (var u = [], d = [], n = 0; n < t.bymonthday.length; n++) {
                var i = t.bymonthday[n];
                i > 0 ? u.push(i) : i < 0 && d.push(i);
            }
            t.bymonthday = u, t.bynmonthday = d;
        } else
            t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday]);
    } else
        t.bymonthday = [], t.bynmonthday = [];
    if ((0, a.EN)(t.byweekno) && !(0, a.kJ)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, a.EN)(t.byweekday)) {
        if ((0, a.hj)(t.byweekday))
            t.byweekday = [t.byweekday], t.bynweekday = null;
        else if ((0, a.xs)(t.byweekday))
            t.byweekday = [l.O.fromStr(t.byweekday).weekday], t.bynweekday = null;
        else if (t.byweekday instanceof l.O)
            !t.byweekday.n || t.freq > o.Ci.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [[
                    t.byweekday.weekday,
                    t.byweekday.n
                ]], t.byweekday = null);
        else {
            for (var _ = [], E = [], n = 0; n < t.byweekday.length; n++) {
                var f = t.byweekday[n];
                if ((0, a.hj)(f)) {
                    _.push(f);
                    continue;
                }
                if ((0, a.xs)(f)) {
                    _.push(l.O.fromStr(f).weekday);
                    continue;
                }
                !f.n || t.freq > o.Ci.MONTHLY ? _.push(f.weekday) : E.push([
                    f.weekday,
                    f.n
                ]);
            }
            t.byweekday = (0, a.Dw)(_) ? _ : null, t.bynweekday = (0, a.Dw)(E) ? E : null;
        }
    } else
        t.bynweekday = null;
    return (0, a.EN)(t.byhour) ? (0, a.hj)(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < o.Ci.HOURLY ? [t.dtstart.getUTCHours()] : null, (0, a.EN)(t.byminute) ? (0, a.hj)(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < o.Ci.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, (0, a.EN)(t.bysecond) ? (0, a.hj)(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < o.Ci.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, { parsedOptions: t };
}
function _(e) {
    var t = e.dtstart.getTime() % 1000;
    if (!(0, i.e)(e.freq))
        return [];
    var n = [];
    return e.byhour.forEach(function (r) {
        e.byminute.forEach(function (i) {
            e.bysecond.forEach(function (e) {
                n.push(new u.q(r, i, e, t));
            });
        });
    }), n;
}
