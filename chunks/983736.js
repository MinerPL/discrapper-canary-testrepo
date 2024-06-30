t.d(n, {
    OA: function () {
        return i;
    },
    _C: function () {
        return l;
    },
    kT: function () {
        return s;
    }
});
var o = t(823379), r = t(246364), a = t(592286);
let i = e => {
    let {
        required: n,
        response: t,
        field_type: a
    } = e;
    if (!n)
        return !0;
    if (null == t)
        return !1;
    switch (a) {
    case r.QJ.TERMS:
    case r.QJ.VERIFICATION:
        return !!t;
    case r.QJ.TEXT_INPUT:
    case r.QJ.PARAGRAPH:
        return 'string' == typeof t && '' !== t.trim();
    case r.QJ.MULTIPLE_CHOICE:
        return 'number' == typeof t;
    default:
        return (0, o.vE)(a);
    }
};
function s(e) {
    return a.lI.has(null == e ? void 0 : e.field_type);
}
function l(e) {
    return a.hZ.has(null == e ? void 0 : e.field_type);
}
