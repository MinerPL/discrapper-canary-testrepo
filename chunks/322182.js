n.d(t, {
    HI: function () {
        return s.HI;
    },
    Ii: function () {
        return s.Ii;
    },
    Jo: function () {
        return s.Jo;
    },
    O4: function () {
        return s.O4;
    },
    Qc: function () {
        return o;
    },
    VG: function () {
        return s.VG;
    },
    Wh: function () {
        return s.Wh;
    },
    Wi: function () {
        return s.Wi;
    },
    pe: function () {
        return s.pe;
    },
    rp: function () {
        return s.rp;
    },
    uf: function () {
        return s.uf;
    },
    wD: function () {
        return s.wD;
    },
    yx: function () {
        return s.yx;
    }
});
var r = n(259630),
    i = n(226457),
    a = n(168597),
    s = n(925455);
function o(e, t) {
    void 0 === t && (t = {}),
        (t = (0, r.pi)(
            {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            },
            t
        ));
    var n = new a._(e, t).parse();
    if (n.err) {
        var o = SyntaxError(i.o[n.err.kind]);
        throw ((o.location = n.err.location), (o.originalMessage = n.err.message), o);
    }
    return (
        !(null == t ? void 0 : t.captureLocation) &&
            !(function e(t) {
                t.forEach(function (t) {
                    if ((delete t.location, (0, s.Wi)(t) || (0, s.Jo)(t))) for (var n in t.options) delete t.options[n].location, e(t.options[n].value);
                    else (0, s.uf)(t) && (0, s.Wh)(t.style) ? delete t.style.location : ((0, s.rp)(t) || (0, s.pe)(t)) && (0, s.Ii)(t.style) ? delete t.style.location : (0, s.HI)(t) && e(t.children);
                });
            })(n.val),
        n.val
    );
}
