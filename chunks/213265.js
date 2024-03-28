"use strict";
var e, i, u = r("926515"),
  c = r("581031"),
  o = r("714050"),
  s = r("572609"),
  a = r("489412"),
  f = r("972277"),
  l = r("803938"),
  h = r("644659").get,
  v = r("973326"),
  p = r("440196"),
  d = f("native-string-replace", String.prototype.replace),
  x = RegExp.prototype.exec,
  g = x,
  I = c("".charAt),
  y = c("".indexOf),
  E = c("".replace),
  b = c("".slice);
var R = (i = /b*/g, u(x, e = /a/, "a"), u(x, i, "a"), 0 !== e.lastIndex || 0 !== i.lastIndex),
  $ = a.BROKEN_CARET,
  A = void 0 !== /()??/.exec("")[1];
(R || A || $ || v || p) && (g = function(t) {
  var n, r, e, i, c, a, f, v = h(this),
    p = o(t),
    k = v.raw;
  if (k) return k.lastIndex = this.lastIndex, n = u(g, k, p), this.lastIndex = k.lastIndex, n;
  var m = v.groups,
    C = $ && this.sticky,
    S = u(s, this),
    w = this.source,
    T = 0,
    O = p;
  if (C && (-1 === y(S = E(S, "y", ""), "g") && (S += "g"), O = b(p, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== I(p, this.lastIndex - 1)) && (w = "(?: " + w + ")", O = " " + O, T++), r = RegExp("^(?:" + w + ")", S)), A && (r = RegExp("^" + w + "$(?!\\s)", S)), R && (e = this.lastIndex), i = u(x, C ? r : this, O), C ? i ? (i.input = b(i.input, T), i[0] = b(i[0], T), i.index = this.lastIndex, this.lastIndex += i[0].length) : this.lastIndex = 0 : R && i && (this.lastIndex = this.global ? i.index + i[0].length : e), A && i && i.length > 1 && u(d, i[0], r, function() {
      for (c = 1; c < arguments.length - 2; c++) void 0 === arguments[c] && (i[c] = void 0)
    }), i && m)
    for (c = 0, i.groups = a = l(null); c < m.length; c++) a[(f = m[c])[0]] = i[f[1]];
  return i
}), t.exports = g