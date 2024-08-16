var r = n(595022),
    i = n(483266),
    a = n(334389);
t.Z = function (e, t) {
    var n = this.__data__;
    if (n instanceof r.Z) {
        var s = n.__data__;
        if (!i.Z || s.length < 199) return s.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new a.Z(s);
    }
    return n.set(e, t), (this.size = n.size), this;
};
