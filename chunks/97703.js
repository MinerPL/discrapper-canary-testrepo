var r = n(531478).codes.ERR_INVALID_OPT_VALUE;
e.exports = {
    getHighWaterMark: function (e, t, n, i) {
        var a,
            s,
            o,
            l = ((a = t), (s = i), (o = n), null != a.highWaterMark ? a.highWaterMark : s ? a[o] : null);
        if (null != l) {
            if (!(isFinite(l) && Math.floor(l) === l) || l < 0) throw new r(i ? n : 'highWaterMark', l);
            return Math.floor(l);
        }
        return e.objectMode ? 16 : 16384;
    }
};
