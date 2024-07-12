
function t(e) {
  return (e - 30) * 3.62 + 194;
}

function n(e) {
  return (e - 8) * 3 + 25;
}
e.exports = {
  fromOrigamiTensionAndFriction: function(e, n) {
return {
  tension: t(e),
  friction: (n - 8) * 3 + 25
};
  },
  fromBouncinessAndSpeed: function(e, n) {
function r(e, t, n) {
  return (e - t) / (n - t);
}

function i(e, t, n) {
  return t + e * (n - t);
}
var a, o, s, l, u, c, d, _, E = (e / 1.7 - 0) / (20 - (a = 0));
var f = 0.5 + (n / 1.7 - 0) / (20 - (s = 0)) * (200 - (l = 0.5));
var h = (u = E = 0 + E * (0.8 - (o = 0)), c = function(e) {
  var t, n, r;
  if (e <= 18) {
    ;
    return 0.0007 * Math.pow(t = e, 3) - 0.031 * Math.pow(t, 2) + 0.64 * t + 1.28;
  }
  if (e > 18 && e <= 44) {
    ;
    return 0.000044 * Math.pow(n = e, 3) - 0.006 * Math.pow(n, 2) + 0.36 * n + 2;
  }
  return 4.5e-7 * Math.pow(r = e, 3) - 0.000332 * Math.pow(r, 2) + 0.1078 * r + 5.84;
}(f), d = 0.01, 0.01 * (_ = 2 * u - u * u) + (1 - _) * c);
return {
  tension: t(f),
  friction: (h - 8) * 3 + 25
};
  }
};