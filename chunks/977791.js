var r = n(690244),
    i = n(706165),
    a = n(478497)(),
    s = r('%TypeError%'),
    o = {
        assert: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof t) throw new s('`slot` must be a string');
            if ((a.assert(e), !o.has(e, t))) throw new s('`' + t + '` is not present on `O`');
        },
        get: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof t) throw new s('`slot` must be a string');
            var n = a.get(e);
            return n && n['$' + t];
        },
        has: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof t) throw new s('`slot` must be a string');
            var n = a.get(e);
            return !!n && i(n, '$' + t);
        },
        set: function (e, t, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof t) throw new s('`slot` must be a string');
            var r = a.get(e);
            !r && ((r = {}), a.set(e, r)), (r['$' + t] = n);
        }
    };
Object.freeze && Object.freeze(o), (e.exports = o);
