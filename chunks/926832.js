n.d(t, {
    $6: function () {
        return _;
    },
    OV: function () {
        return l;
    },
    Qe: function () {
        return c;
    },
    Rw: function () {
        return s;
    },
    X9: function () {
        return d;
    },
    bc: function () {
        return i;
    },
    gb: function () {
        return u;
    },
    wI: function () {
        return o;
    }
});
var r,
    i,
    a = n(146150);
((r = i || (i = {})).FORMAT_ERROR = 'FORMAT_ERROR'), (r.UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER'), (r.INVALID_CONFIG = 'INVALID_CONFIG'), (r.MISSING_DATA = 'MISSING_DATA'), (r.MISSING_TRANSLATION = 'MISSING_TRANSLATION');
var s = (function (e) {
        function t(n, r, i) {
            var a = this,
                s = i ? (i instanceof Error ? i : Error(String(i))) : void 0;
            return (
                ((a =
                    e.call(
                        this,
                        '[@formatjs/intl Error '
                            .concat(n, '] ')
                            .concat(r, '\n')
                            .concat(s ? '\n'.concat(s.message, '\n').concat(s.stack) : '')
                    ) || this).code = n),
                'function' == typeof Error.captureStackTrace && Error.captureStackTrace(a, t),
                a
            );
        }
        return (0, a.ZT)(t, e), t;
    })(Error),
    o = (function (e) {
        function t(t, n) {
            return e.call(this, i.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    l = (function (e) {
        function t(t, n) {
            return e.call(this, i.INVALID_CONFIG, t, n) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    u = (function (e) {
        function t(t, n) {
            return e.call(this, i.MISSING_DATA, t, n) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    c = (function (e) {
        function t(t, n, r) {
            var a = e.call(this, i.FORMAT_ERROR, ''.concat(t, '\nLocale: ').concat(n, '\n'), r) || this;
            return (a.locale = n), a;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    d = (function (e) {
        function t(t, n, r, i) {
            var a =
                e.call(
                    this,
                    ''
                        .concat(t, '\nMessageID: ')
                        .concat(null == r ? void 0 : r.id, '\nDefault Message: ')
                        .concat(null == r ? void 0 : r.defaultMessage, '\nDescription: ')
                        .concat(null == r ? void 0 : r.description, '\n'),
                    n,
                    i
                ) || this;
            return (a.descriptor = r), (a.locale = n), a;
        }
        return (0, a.ZT)(t, e), t;
    })(c),
    _ = (function (e) {
        function t(t, n) {
            var r =
                e.call(
                    this,
                    i.MISSING_TRANSLATION,
                    'Missing message: "'
                        .concat(t.id, '" for locale "')
                        .concat(n, '", using ')
                        .concat(
                            t.defaultMessage
                                ? 'default message ('.concat(
                                      'string' == typeof t.defaultMessage
                                          ? t.defaultMessage
                                          : t.defaultMessage
                                                .map(function (e) {
                                                    var t;
                                                    return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e);
                                                })
                                                .join(),
                                      ')'
                                  )
                                : 'id',
                            ' as fallback.'
                        )
                ) || this;
            return (r.descriptor = t), r;
        }
        return (0, a.ZT)(t, e), t;
    })(s);
