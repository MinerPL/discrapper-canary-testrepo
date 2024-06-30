n.d(l, {
    u: function () {
        return i;
    }
});
var s = n(481060), t = n(471445), a = n(230900);
function i(e, l) {
    let n, i;
    if (null == e)
        return null;
    let r = (0, a.cS)(e);
    if (null != r)
        n = s.LocationIcon, i = r;
    else {
        if (null == l)
            return null;
        n = (0, t.Th)(l.type), i = l.name;
    }
    return {
        IconComponent: n,
        locationName: i
    };
}
