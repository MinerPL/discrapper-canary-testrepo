var r = n(790215);
t.Z = function (e, t) {
    var n = this.__data__, i = (0, r.Z)(n, e);
    return i < 0 ? (++this.size, n.push([
        e,
        t
    ])) : n[i][1] = t, this;
};
