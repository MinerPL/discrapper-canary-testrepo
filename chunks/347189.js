var n = r(585606),
    a = r(443735),
    o = r(402428),
    i = r(207757),
    _ = r(830911),
    E = r(556868),
    s = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var r = o(e),
        c = !r && a(e),
        I = !r && !c && i(e),
        u = !r && !c && !I && E(e),
        l = r || c || I || u,
        R = l ? n(e.length, String) : [],
        A = R.length;
    for (var T in e) (t || s.call(e, T)) && !(l && ('length' == T || (I && ('offset' == T || 'parent' == T)) || (u && ('buffer' == T || 'byteLength' == T || 'byteOffset' == T)) || _(T, A))) && R.push(T);
    return R;
};
