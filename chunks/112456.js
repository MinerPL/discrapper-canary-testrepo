(function () {
    var n = this,
        r = n.humanize,
        i = {};
    e.exports && (t = e.exports = i),
        (t.humanize = i),
        (i.noConflict = function () {
            return (n.humanize = r), this;
        }),
        (i.pad = function (e, t, n, r) {
            if (((e += ''), n ? n.length > 1 && (n = n.charAt(0)) : (n = ' '), 'right' == (r = void 0 === r ? 'left' : 'right'))) for (; e.length < t; ) e += n;
            else for (; e.length < t; ) e = n + e;
            return e;
        }),
        (i.time = function () {
            return new Date().getTime() / 1000;
        });
    var a = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        s = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    (i.date = function (e, t) {
        var n = void 0 === t ? new Date() : new Date(t instanceof Date ? t : 1000 * t),
            r = /\\?([a-z])/gi,
            o = function (e, t) {
                return c[e] ? c[e]() : t;
            },
            l = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            u = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            c = {
                d: function () {
                    return i.pad(c.j(), 2, '0');
                },
                D: function () {
                    return c.l().slice(0, 3);
                },
                j: function () {
                    return n.getDate();
                },
                l: function () {
                    return l[c.w()];
                },
                N: function () {
                    return c.w() || 7;
                },
                S: function () {
                    var e = c.j();
                    return e > 4 && e < 21
                        ? 'th'
                        : {
                              1: 'st',
                              2: 'nd',
                              3: 'rd'
                          }[e % 10] || 'th';
                },
                w: function () {
                    return n.getDay();
                },
                z: function () {
                    return (c.L() ? s[c.n()] : a[c.n()]) + c.j() - 1;
                },
                W: function () {
                    var e = c.z() - c.N() + 1.5;
                    return i.pad(1 + Math.floor(Math.abs(e) / 7) + (e % 7 > 3.5 ? 1 : 0), 2, '0');
                },
                F: function () {
                    return u[n.getMonth()];
                },
                m: function () {
                    return i.pad(c.n(), 2, '0');
                },
                M: function () {
                    return c.F().slice(0, 3);
                },
                n: function () {
                    return n.getMonth() + 1;
                },
                t: function () {
                    return new Date(c.Y(), c.n(), 0).getDate();
                },
                L: function () {
                    return 1 === new Date(c.Y(), 1, 29).getMonth() ? 1 : 0;
                },
                o: function () {
                    var e = c.n(),
                        t = c.W();
                    return c.Y() + (12 === e && t < 9 ? -1 : 1 === e && t > 9);
                },
                Y: function () {
                    return n.getFullYear();
                },
                y: function () {
                    return String(c.Y()).slice(-2);
                },
                a: function () {
                    return n.getHours() > 11 ? 'pm' : 'am';
                },
                A: function () {
                    return c.a().toUpperCase();
                },
                B: function () {
                    var e = n.getTime() / 1000,
                        t = (e % 86400) + 3600;
                    t < 0 && (t += 86400);
                    var r = (t / 86.4) % 1000;
                    return e < 0 ? Math.ceil(r) : Math.floor(r);
                },
                g: function () {
                    return c.G() % 12 || 12;
                },
                G: function () {
                    return n.getHours();
                },
                h: function () {
                    return i.pad(c.g(), 2, '0');
                },
                H: function () {
                    return i.pad(c.G(), 2, '0');
                },
                i: function () {
                    return i.pad(n.getMinutes(), 2, '0');
                },
                s: function () {
                    return i.pad(n.getSeconds(), 2, '0');
                },
                u: function () {
                    return i.pad(1000 * n.getMilliseconds(), 6, '0');
                },
                O: function () {
                    var e = n.getTimezoneOffset(),
                        t = Math.abs(e);
                    return (e > 0 ? '-' : '+') + i.pad(100 * Math.floor(t / 60) + (t % 60), 4, '0');
                },
                P: function () {
                    var e = c.O();
                    return e.substr(0, 3) + ':' + e.substr(3, 2);
                },
                Z: function () {
                    return -(60 * n.getTimezoneOffset());
                },
                c: function () {
                    return 'Y-m-d\\TH:i:sP'.replace(r, o);
                },
                r: function () {
                    return 'D, d M Y H:i:s O'.replace(r, o);
                },
                U: function () {
                    return n.getTime() / 1000 || 0;
                }
            };
        return e.replace(r, o);
    }),
        (i.numberFormat = function (e, t, n, r) {
            (t = isNaN(t) ? 2 : Math.abs(t)), (n = void 0 === n ? '.' : n), (r = void 0 === r ? ',' : r);
            var i = e < 0 ? '-' : '',
                a = parseInt((e = Math.abs(+e || 0)).toFixed(t), 10) + '',
                s = a.length > 3 ? a.length % 3 : 0;
            return (
                i +
                (s ? a.substr(0, s) + r : '') +
                a.substr(s).replace(/(\d{3})(?=\d)/g, '$1' + r) +
                (t
                    ? n +
                      Math.abs(e - a)
                          .toFixed(t)
                          .slice(2)
                    : '')
            );
        }),
        (i.naturalDay = function (e, t) {
            (e = void 0 === e ? i.time() : e), (t = void 0 === t ? 'Y-m-d' : t);
            var n = new Date(),
                r = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() / 1000;
            if (e < r && e >= r - 86400) return 'yesterday';
            if (e >= r && e < r + 86400) return 'today';
            if (e >= r + 86400 && e < r + 172800) return 'tomorrow';
            return i.date(t, e);
        }),
        (i.relativeTime = function (e) {
            e = void 0 === e ? i.time() : e;
            var t = i.time(),
                n = t - e;
            if (n < 2 && n > -2) return (n >= 0 ? 'just ' : '') + 'now';
            if (n < 60 && n > -60) return n >= 0 ? Math.floor(n) + ' seconds ago' : 'in ' + Math.floor(-n) + ' seconds';
            if (n < 120 && n > -120) return n >= 0 ? 'about a minute ago' : 'in about a minute';
            if (n < 3600 && n > -3600) return n >= 0 ? Math.floor(n / 60) + ' minutes ago' : 'in ' + Math.floor(-n / 60) + ' minutes';
            if (n < 7200 && n > -7200) return n >= 0 ? 'about an hour ago' : 'in about an hour';
            if (n < 86400 && n > -86400) return n >= 0 ? Math.floor(n / 3600) + ' hours ago' : 'in ' + Math.floor(-n / 3600) + ' hours';
            if (n < 172800 && n > -172800) return n >= 0 ? '1 day ago' : 'in 1 day';
            if (n < 2505600 && n > -2505600) return n >= 0 ? Math.floor(n / 86400) + ' days ago' : 'in ' + Math.floor(-n / 86400) + ' days';
            if (n < 5184000 && n > -5184000) return n >= 0 ? 'about a month ago' : 'in about a month';
            var r = parseInt(i.date('Y', t), 10),
                a = parseInt(i.date('Y', e), 10),
                s = 12 * r + parseInt(i.date('n', t), 10) - (12 * a + parseInt(i.date('n', e), 10));
            if (s < 12 && s > -12) return s >= 0 ? s + ' months ago' : 'in ' + -s + ' months';
            var o = r - a;
            return o < 2 && o > -2 ? (o >= 0 ? 'a year ago' : 'in a year') : o >= 0 ? o + ' years ago' : 'in ' + -o + ' years';
        }),
        (i.ordinal = function (e) {
            var t = (e = isNaN((e = parseInt(e, 10))) ? 0 : e) < 0 ? '-' : '',
                n = (e = Math.abs(e)) % 100;
            return (
                t +
                e +
                (n > 4 && n < 21
                    ? 'th'
                    : {
                          1: 'st',
                          2: 'nd',
                          3: 'rd'
                      }[e % 10] || 'th')
            );
        }),
        (i.filesize = function (e, t, n, r, a, s) {
            return ((t = void 0 === t ? 1024 : t), e <= 0) ? '0 bytes' : (e < t && void 0 === n && (n = 0), void 0 === s && (s = ' '), i.intword(e, ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'], t, n, r, a, s));
        }),
        (i.intword = function (e, t, n, r, a, s, o) {
            (u = (t = t || ['', 'K', 'M', 'B', 'T']).length - 1), (n = n || 1000), (r = isNaN(r) ? 2 : Math.abs(r)), (a = a || '.'), (s = s || ','), (o = o || '');
            for (var l, u, c = 0; c < t.length; c++)
                if (e < Math.pow(n, c + 1)) {
                    u = c;
                    break;
                }
            l = e / Math.pow(n, u);
            var d = t[u] ? o + t[u] : '';
            return i.numberFormat(l, r, a, s) + d;
        }),
        (i.linebreaks = function (e) {
            return '<p>' + (e = (e = (e = (e = (e = e.replace(/^([\n|\r]*)/, '')).replace(/([\n|\r]*)$/, '')).replace(/(\r\n|\n|\r)/g, '\n')).replace(/(\n{2,})/g, '</p><p>')).replace(/\n/g, '<br />')) + '</p>';
        }),
        (i.nl2br = function (e) {
            return e.replace(/(\r\n|\n|\r)/g, '<br />');
        }),
        (i.truncatechars = function (e, t) {
            return e.length <= t ? e : e.substr(0, t) + '\u2026';
        }),
        (i.truncatewords = function (e, t) {
            var n = e.split(' ');
            return n.length < t ? e : n.slice(0, t).join(' ') + '\u2026';
        });
}).call(this);
