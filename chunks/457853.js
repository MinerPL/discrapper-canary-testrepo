var n = r(900624), _ = r(117973), a = r(302767);
t.exports = function (t, e) {
    var r = this.__data__;
    if (r instanceof n) {
        var i = r.__data__;
        if (!_ || i.length < 199)
            return i.push([
                t,
                e
            ]), this.size = ++r.size, this;
        r = this.__data__ = new a(i);
    }
    return r.set(t, e), this.size = r.size, this;
};
