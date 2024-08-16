e = r.nmd(e);
var n = r(940151),
    a = t && !t.nodeType && t,
    o = a && e && !e.nodeType && e,
    i = o && o.exports === a && n.process,
    _ = (function () {
        try {
            var e = o && o.require && o.require('util').types;
            if (e) return e;
            return i && i.binding && i.binding('util');
        } catch (e) {}
    })();
e.exports = _;
