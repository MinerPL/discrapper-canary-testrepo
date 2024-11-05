n.d(t, {
    C8: function () {
        return o;
    },
    HR: function () {
        return u;
    },
    YR: function () {
        return l;
    },
    jK: function () {
        return i;
    },
    u_: function () {
        return s;
    }
});
var r,
    i,
    a = n(259630);
((r = i || (i = {})).MISSING_VALUE = 'MISSING_VALUE'), (r.INVALID_VALUE = 'INVALID_VALUE'), (r.MISSING_INTL_API = 'MISSING_INTL_API');
var s = (function (e) {
        function t(t, n, r) {
            var i = e.call(this, t) || this;
            return (i.code = n), (i.originalMessage = r), i;
        }
        return (
            (0, a.ZT)(t, e),
            (t.prototype.toString = function () {
                return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            t
        );
    })(Error),
    o = (function (e) {
        function t(t, n, r, a) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), i.INVALID_VALUE, a) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    l = (function (e) {
        function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), i.INVALID_VALUE, r) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s),
    u = (function (e) {
        function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), i.MISSING_VALUE, n) || this;
        }
        return (0, a.ZT)(t, e), t;
    })(s);
