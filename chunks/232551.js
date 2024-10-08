n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(757143),
    n(653041),
    n(411104);
var r = n(913527),
    i = n.n(r);
function a(e, t) {
    if ('function' == typeof t) {
        let n = i().localeData(),
            r = t.bind(n);
        return (t, n) => r({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function s(e, t, n) {
    return e < 12 ? (n ? 'am' : 'AM') : n ? 'pm' : 'PM';
}
function o(e) {
    var t, n;
    let r =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (function () {
                      var e;
                      let {
                          months: t,
                          monthsShort: n,
                          weekdays: r,
                          weekdaysShort: o,
                          weekdaysMin: l,
                          meridiem: u = s,
                          ordinal: c,
                          longDateFormat: d,
                          week: _ = {
                              dow: 0,
                              doy: 6
                          }
                      } = i().localeData()._config;
                      return {
                          months: a('month', t),
                          monthsShort: a('month', n),
                          weekdays: a('day', r),
                          weekdaysShort: a('day', o),
                          weekdaysMin: a('day', l),
                          meridiem: u,
                          ordinal: 'string' == typeof (e = c) ? (t) => e.replace('%d', ''.concat(t)) : e,
                          longDateFormat: d,
                          week: _
                      };
                  })(),
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (t = e), (n = r);
    let l = [],
        u = {
            month: !1,
            dayOfYear: !1,
            date: !1,
            day: !1,
            week: !1,
            isoweek: !1,
            year: !1,
            hour: !1,
            minutes: !1,
            seconds: !1,
            millis: !1,
            offset: !1
        },
        c = (e = t.replace(/L[L|T|S]{0,3}/g, (e, r) => {
            if (/^LLLL/.test(e)) return n.longDateFormat.LLLL;
            if (/^LLL/.test(e)) return n.longDateFormat.LLL + e.slice(3);
            if (/^LL/.test(e)) return n.longDateFormat.LL + e.slice(2);
            else if (/^LTS/.test(e)) return n.longDateFormat.LTS + e.slice(3);
            else if (/^LT/.test(e)) return n.longDateFormat.LT + e.slice(2);
            else if (/^L/.test(e) && '[' !== t[r - 1]) return n.longDateFormat.L + e.slice(1);
            return e;
        }));
    function d(e) {
        l.push('(' + e + ')');
    }
    function _(e) {
        c = c.slice(e);
    }
    for (; c.length > 0; ) {
        switch (c.charAt(0)) {
            case 'M':
                if (((u.month = !0), /^MMMM/.test(c))) {
                    d('localeData.months(_month, "'.concat(e, '")')), _(4);
                    continue;
                }
                if (/^MMM/.test(c)) {
                    d('localeData.monthsShort(_month, "'.concat(e, '")')), _(3);
                    continue;
                }
                if (/^MM/.test(c)) {
                    d('_month+1 < 10 ? "0" : ""'), d('_month+1'), _(2);
                    continue;
                }
                if (/^Mo/.test(c)) {
                    d('localeData.ordinal(_month, "M")'), _(2);
                    continue;
                }
                d('_month + 1'), _(1);
                continue;
            case 'Q':
                if (((u.month = !0), /^Qo/.test(c))) {
                    d('localeData.ordinal((_month + 1) / 3, "Q")'), _(2);
                    continue;
                }
                d('Math.ceil((_month + 1) / 3)'), _(1);
                continue;
            case 'D':
                if (/^DDD/.test(c)) {
                    if (((u.dayOfYear = !0), /^DDDD/.test(c))) {
                        d('_doy < 100 ? "0" : ""'), d('_doy < 10 ? "0" : ""'), d('_doy'), _(4);
                        continue;
                    }
                    if (/^DDDo/.test(c)) {
                        d('localeData.ordinal(_doy, "DDD")'), _(4);
                        continue;
                    }
                    d('_doy'), _(3);
                    continue;
                }
                if (((u.date = !0), /^DD/.test(c))) {
                    d('_date < 10 ? "0" : ""'), d('_date'), _(2);
                    continue;
                }
                if (/^Do/.test(c)) {
                    d('localeData.ordinal(_date, "D")'), _(2);
                    continue;
                }
                d('_date'), _(1);
                continue;
            case 'd':
                if (((u.day = !0), /^dddd/.test(c))) {
                    d('localeData.weekdays(_day, "'.concat(e, '")')), _(4);
                    continue;
                }
                if (/^ddd/.test(c)) {
                    d('localeData.weekdaysShort(_day, "'.concat(e, '")')), _(3);
                    continue;
                }
                if (/^dd/.test(c)) {
                    d('localeData.weekdaysMin(_day, "'.concat(e, '")')), _(2);
                    continue;
                }
                if (/^do/.test(c)) {
                    d('localeData.ordinal(_day, "d")'), _(2);
                    continue;
                }
                d('_day'), _(1);
                continue;
            case 'e':
                (u.day = !0), d('(_day + 7 - ' + +r.week.dow + ') % 7'), _(1);
                continue;
            case 'E':
                (u.day = !0), d('_day === 0 ? 7 : _day'), _(1);
                continue;
            case 'w':
                if (((u.week = !0), /^ww/.test(c))) {
                    d('_week < 10 ? "0" : ""'), d('_week'), _(2);
                    continue;
                }
                if (/^wo/.test(c)) {
                    d('localeData.ordinal(_week, "w")'), _(2);
                    continue;
                }
                d('_week'), _(1);
                continue;
            case 'W':
                if (((u.isoweek = !0), /^WW/.test(c))) {
                    d('_i_week < 10 ? "0" : ""'), d('_i_week'), _(2);
                    continue;
                }
                if (/^Wo/.test(c)) {
                    d('localeData.ordinal(_i_week, "W")'), _(2);
                    continue;
                }
                d('_i_week'), _(1);
                continue;
            case 'Y':
                if (((u.year = !0), /^YYYY/.test(c))) {
                    d('_year'), _(4);
                    continue;
                }
                if (/^YY/.test(c)) {
                    d('(_year % 100) < 10 ? "0" : ""'), d('_year % 100'), _(2);
                    continue;
                }
                d('_year < 9999 ? _year : "+" + _year'), _(1);
                continue;
            case 'g':
                if (((u.week = !0), /^gggg/.test(c))) {
                    d('_weekYear'), _(4);
                    continue;
                }
                if (/^gg/.test(c)) {
                    d('(_weekYear % 100) < 10 ? "0" : ""'), d('_weekYear % 100'), _(2);
                    continue;
                }
                break;
            case 'G':
                if (((u.isoweek = !0), /^GGGG/.test(c))) {
                    d('_i_weekYear'), _(4);
                    continue;
                }
                if (/^GG/.test(c)) {
                    d('(_i_weekYear % 100) < 10 ? "0" : ""'), d('_i_weekYear % 100'), _(2);
                    continue;
                }
                break;
            case 'A':
                (u.hour = !0), (u.minutes = !0), d('localeData.meridiem(_hour, _mins, false)'), _(1);
                continue;
            case 'a':
                (u.hour = !0), (u.minutes = !0), d('localeData.meridiem(_hour, _mins, true)'), _(1);
                continue;
            case 'H':
                if (((u.hour = !0), /^HH/.test(c))) {
                    d('_hour < 10 ? "0" : ""'), d('_hour'), _(2);
                    continue;
                }
                d('_hour'), _(1);
                continue;
            case 'h':
                if (((u.hour = !0), /^hh/.test(c))) {
                    d('((_hour+11) % 12) < 9 ? "0" : ""'), d('((_hour+11) % 12) + 1'), _(2);
                    continue;
                }
                d('((_hour+11) % 12) + 1'), _(1);
                continue;
            case 'k':
                if (((u.hour = !0), /^kk/.test(c))) {
                    d('_hour > 0 && _hour < 10 ? "0" : ""'), d('_hour === 0 ? "24" : _hour'), _(2);
                    continue;
                }
                d('_hour === 0 ? "24" : _hour'), _(1);
                continue;
            case 'm':
                if (((u.minutes = !0), /^mm/.test(c))) {
                    d('_mins < 10 ? "0" : ""'), d('_mins'), _(2);
                    continue;
                }
                d('_mins'), _(1);
                continue;
            case 's':
                if (((u.seconds = !0), /^ss/.test(c))) {
                    d('_secs < 10 ? "0" : ""'), d('_secs'), _(2);
                    continue;
                }
                d('_secs'), _(1);
                continue;
            case 'S':
                if (((u.millis = !0), /^SSS/.test(c))) {
                    d('_ms < 100 ? "0" : ""'), d('_ms < 10 ? "0" : ""'), d('_ms');
                    let e = /^S{3,9}/.exec(c);
                    if (null == e) throw Error('ms len regex failed');
                    let t = e[0].length;
                    t > 3 && d('"'.concat(Array(t - 2).join('0'), '"')), _(t);
                    continue;
                }
                if (/^SS/.test(c)) {
                    d('_ms < 100 ? "0" : ""'), d('Math.floor(_ms/10)'), _(2);
                    continue;
                }
                d('Math.floor(_ms / 100)'), _(1);
                continue;
            case 'Z':
                if (((u.offset = !0), /^ZZ/.test(c))) {
                    d('_offs >= 0 ? "+" : "-"'), d('_offH < 10 ? "0" : ""'), d('_offH'), d('_offM < 10 ? "0" : ""'), d('_offM'), _(2);
                    continue;
                }
                d('_offs >= 0 ? "+" : "-"'), d('_offH < 10 ? "0" : ""'), d('_offH'), d('":"'), d('_offM < 10 ? "0" : ""'), d('_offM'), _(1);
                continue;
            case 'X':
                d('Math.floor(d / 1000)'), _(1);
                continue;
            case 'x':
                d('d.valueOf()'), _(1);
                continue;
            case '[':
                let t = c.indexOf(']');
                if (-1 === t) {
                    d('"["'), _(1);
                    continue;
                }
                d(JSON.stringify(c.slice(1, t))), _(t + 1);
                continue;
        }
        d(JSON.stringify(c.charAt(0))), _(1);
    }
    let E = '';
    u.date && (E += 'var _date = d.get' + (o ? 'UTC' : '') + 'Date();\n'), u.month && (E += 'var _month = d.get' + (o ? 'UTC' : '') + 'Month();\n'), u.dayOfYear && (E += 'var _startOfYear = new Date(d.valueOf());\n_startOfYear.set' + (o ? 'UTC' : '') + 'Month(0);\n_startOfYear.set' + (o ? 'UTC' : '') + 'Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n'), u.day && (E += 'var _day = d.get' + (o ? 'UTC' : '') + 'Day();\n'), u.year && (E += 'var _year = d.get' + (o ? 'UTC' : '') + 'FullYear();\n'), u.hour && (E += 'var _hour = d.get' + (o ? 'UTC' : '') + 'Hours();\n'), u.minutes && (E += 'var _mins = d.get' + (o ? 'UTC' : '') + 'Minutes();\n'), u.seconds && (E += 'var _secs = d.get' + (o ? 'UTC' : '') + 'Seconds();\n'), u.millis && (E += 'var _ms = d.get' + (o ? 'UTC' : '') + 'Milliseconds();\n'), u.offset && (o ? (E += 'var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;') : (E += 'var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n')), u.week && (E += 'var _wend = ' + (r.week.doy - r.week.dow) + ';\nvar _ddw = ' + +r.week.doy + ' - d.get' + (o ? 'UTC' : '') + 'Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set' + (o ? 'UTC' : '') + 'Date(d.get' + (o ? 'UTC' : '') + 'Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set' + (o ? 'UTC' : '') + 'Month(0);\n_soy2.set' + (o ? 'UTC' : '') + 'Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get' + (o ? 'UTC' : '') + 'FullYear();\n'), u.isoweek && (E += 'var _i_wend = 3;\nvar _i_ddw = 4 - d.get' + (o ? 'UTC' : '') + 'Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set' + (o ? 'UTC' : '') + 'Date(d.get' + (o ? 'UTC' : '') + 'Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set' + (o ? 'UTC' : '') + 'Month(0);\n_i_soy2.set' + (o ? 'UTC' : '') + 'Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get' + (o ? 'UTC' : '') + 'FullYear();\n');
    let f = Function('d', 'localeData', (E += 'return (\n"" +\n'.concat(l.join(' +\n'), '\n);')));
    return (e) => f(e, r);
}
