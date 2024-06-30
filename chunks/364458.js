function r(e) {
    let t = {};
    for (let n of e)
        for (let e in n)
            e in t ? t[e] = {
                ...t[e],
                ...n[e]
            } : t[e] = { ...n[e] };
    return t;
}
n.d(t, {
    Z: function () {
        return r;
    }
}), n(47120);
