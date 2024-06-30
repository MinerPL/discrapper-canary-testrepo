var n = r(961499);
t.exports = function (t, e) {
    var r = n(this, t), _ = r.size;
    return r.set(t, e), this.size += r.size == _ ? 0 : 1, this;
};
