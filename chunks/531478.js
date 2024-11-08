var t = {};
function n(e, n, r) {
    !r && (r = Error);
    var i = (function (e) {
        var t, r;
        function i(t, r, i) {
            var a, s, o;
            return e.call(this, ((a = t), (s = r), (o = i), 'string' == typeof n ? n : n(a, s, o))) || this;
        }
        return (t = i), (r = e), (t.prototype = Object.create(r.prototype)), (t.prototype.constructor = t), (t.__proto__ = r), i;
    })(r);
    (i.prototype.name = r.name), (i.prototype.code = e), (t[e] = i);
}
function r(e, t) {
    if (!Array.isArray(e)) return 'of '.concat(t, ' ').concat(String(e));
    var n = e.length;
    return ((e = e.map(function (e) {
        return String(e);
    })),
    n > 2)
        ? 'one of '.concat(t, ' ').concat(e.slice(0, n - 1).join(', '), ', or ') + e[n - 1]
        : 2 === n
          ? 'one of '.concat(t, ' ').concat(e[0], ' or ').concat(e[1])
          : 'of '.concat(t, ' ').concat(e[0]);
}
n(
    'ERR_INVALID_OPT_VALUE',
    function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
    },
    TypeError
),
    n(
        'ERR_INVALID_ARG_TYPE',
        function (e, t, n) {
            if ('string' == typeof t && ((i = 'not '), t.substr(0, i.length) === i)) (_ = 'must not be'), (t = t.replace(/^not /, ''));
            else _ = 'must be';
            if (((s = e), (o = ' argument'), (void 0 === l || l > s.length) && (l = s.length), s.substring(l - o.length, l) === o)) E = 'The '.concat(e, ' ').concat(_, ' ').concat(r(t, 'type'));
            else {
                var i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    _,
                    E,
                    f = ((u = e), (c = '.'), 'number' != typeof d && (d = 0), d + 1 > u.length || -1 === u.indexOf(c, d)) ? 'argument' : 'property';
                E = 'The "'.concat(e, '" ').concat(f, ' ').concat(_, ' ').concat(r(t, 'type'));
            }
            return (E += '. Received type '.concat(typeof n));
        },
        TypeError
    ),
    n('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
    n('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
        return 'The ' + e + ' method is not implemented';
    }),
    n('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
    n('ERR_STREAM_DESTROYED', function (e) {
        return 'Cannot call ' + e + ' after a stream was destroyed';
    }),
    n('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
    n('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
    n('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    n('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError),
    n(
        'ERR_UNKNOWN_ENCODING',
        function (e) {
            return 'Unknown encoding: ' + e;
        },
        TypeError
    ),
    n('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event'),
    (e.exports.codes = t);
