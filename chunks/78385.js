r.d(e, {
    C8: function () {
        return s;
    },
    HR: function () {
        return c;
    },
    YR: function () {
        return u;
    },
    jK: function () {
        return i;
    },
    u_: function () {
        return a;
    }
});
var n,
    i,
    o = r(146150);
((n = i || (i = {})).MISSING_VALUE = 'MISSING_VALUE'), (n.INVALID_VALUE = 'INVALID_VALUE'), (n.MISSING_INTL_API = 'MISSING_INTL_API');
var a = (function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return (i.code = r), (i.originalMessage = n), i;
        }
        return (
            (0, o.ZT)(e, t),
            (e.prototype.toString = function () {
                return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            e
        );
    })(Error),
    s = (function (t) {
        function e(e, r, n, o) {
            return t.call(this, 'Invalid values for "'.concat(e, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), i.INVALID_VALUE, o) || this;
        }
        return (0, o.ZT)(e, t), e;
    })(a),
    u = (function (t) {
        function e(e, r, n) {
            return t.call(this, 'Value for "'.concat(e, '" must be of type ').concat(r), i.INVALID_VALUE, n) || this;
        }
        return (0, o.ZT)(e, t), e;
    })(a),
    c = (function (t) {
        function e(e, r) {
            return t.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this;
        }
        return (0, o.ZT)(e, t), e;
    })(a);
