t.d(s, {
    Z: function () {
        return c;
    },
    a: function () {
        return n;
    }
}),
    t(411104);
var n,
    r,
    o = t(774078),
    a = t(55935),
    i = t(388032);
function c(e, s) {
    let t;
    switch (s) {
        case 0:
            t = {
                days: i.t['/wnvqK'],
                hours: i.t.Jsq0XF,
                minutes: i.t['SBd+Bg']
            };
            break;
        case 1:
            t = {
                days: i.t.UD5nn5,
                hours: i.t.Hg8FeX,
                minutes: i.t.XSbQZW
            };
            break;
        case 2:
            t = {
                days: i.t.rLqNaW,
                hours: i.t.d1LvCA,
                minutes: i.t.Z2LX7O
            };
            break;
        case 3:
            t = {
                days: i.t.fYmir6,
                hours: i.t['C3RO+v'],
                minutes: i.t.r77oHR
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(s, ') when rendering time left'));
    }
    let n = (0, o.Z)(e.toDate(), 60000);
    return (0, a.QX)(n, t);
}
((r = n || (n = {}))[(r.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (r[(r.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (r[(r.ENDS_IN = 2)] = 'ENDS_IN'), (r[(r.SHORT_TIME = 3)] = 'SHORT_TIME');
