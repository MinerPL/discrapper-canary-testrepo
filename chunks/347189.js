var n = r(585606), _ = r(443735), a = r(402428), i = r(207757), o = r(830911), E = r(556868), s = Object.prototype.hasOwnProperty;
t.exports = function (t, e) {
    var r = a(t), c = !r && _(t), I = !r && !c && i(t), R = !r && !c && !I && E(t), u = r || c || I || R, T = u ? n(t.length, String) : [], l = T.length;
    for (var A in t)
        (e || s.call(t, A)) && !(u && ('length' == A || I && ('offset' == A || 'parent' == A) || R && ('buffer' == A || 'byteLength' == A || 'byteOffset' == A) || o(A, l))) && T.push(A);
    return T;
};
