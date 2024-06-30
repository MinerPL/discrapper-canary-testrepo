n.d(t, {
    fU: function () {
        return l;
    },
    jX: function () {
        return u;
    },
    mb: function () {
        return o;
    },
    tV: function () {
        return s;
    }
}), n(47120);
var r = n(664751), i = n(898450);
let a = 'event';
function o(e, t) {
    return null == t ? e : s({
        baseCode: e,
        guildScheduledEventId: function (e) {
            let t = '?' === e.charAt(0) ? e.substring(1) : e;
            try {
                let e = r.parse(t);
                return (0, i.d)(e[a]);
            } catch (e) {
                return;
            }
        }(t)
    });
}
function s(e) {
    let {
        baseCode: t,
        guildScheduledEventId: n
    } = e;
    return null == n ? t : ''.concat(t, '?').concat(a, '=').concat(n);
}
function l(e) {
    let [t, n] = e.split('?');
    if (null == n)
        return { baseCode: t };
    let o = r.parse(n);
    return {
        baseCode: t,
        guildScheduledEventId: (0, i.d)(o[a])
    };
}
function u(e) {
    let [t] = e.split('?');
    return t;
}
