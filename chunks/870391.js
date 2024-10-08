var t = 0.1,
    n = 'function' == typeof Float32Array;
function r(e, t) {
    return 1 - 3 * t + 3 * e;
}
function i(e, t) {
    return 3 * t - 6 * e;
}
function a(e) {
    return 3 * e;
}
function s(e, t, n) {
    return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
}
function o(e, t, n) {
    return 3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t;
}
e.exports = function (e, r, i, a) {
    if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var l = n ? new Float32Array(11) : Array(11);
    if (e !== r || i !== a) for (var u = 0; u < 11; ++u) l[u] = s(u * t, e, i);
    return function (n) {
        return e === r && i === a
            ? n
            : 0 === n
              ? 0
              : 1 === n
                ? 1
                : s(
                      (function (n) {
                          for (var r = 0, a = 1, u = 10; a !== u && l[a] <= n; ++a) r += t;
                          var c = r + ((n - l[--a]) / (l[a + 1] - l[a])) * t,
                              d = o(c, e, i);
                          return d >= 0.001
                              ? (function (e, t, n, r) {
                                    for (var i = 0; i < 4; ++i) {
                                        var a = o(t, n, r);
                                        if (0 === a) break;
                                        var l = s(t, n, r) - e;
                                        t -= l / a;
                                    }
                                    return t;
                                })(n, c, e, i)
                              : 0 === d
                                ? c
                                : (function (e, t, n, r, i) {
                                      var a,
                                          o,
                                          l = 0;
                                      do (a = s((o = t + (n - t) / 2), r, i) - e) > 0 ? (n = o) : (t = o);
                                      while (Math.abs(a) > 1e-7 && ++l < 10);
                                      return o;
                                  })(n, r, r + t, e, i);
                      })(n),
                      r,
                      a
                  );
    };
};
