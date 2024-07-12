var e, i, u = r(926515),
  o = r(581031),
  a = r(714050),
  c = r(572609),
  s = r(489412),
  f = r(972277),
  l = r(803938),
  h = r(644659).get,
  v = r(973326),
  p = r(440196),
  d = f('native-string-replace', String.prototype.replace),
  x = RegExp.prototype.exec,
  g = x,
  I = o(''.charAt),
  y = o(''.indexOf),
  E = o(''.replace),
  b = o(''.slice);
var R = (i = /b*/g, u(x, e = /a/, 'a'), u(x, i, 'a'), 0 !== e.lastIndex || 0 !== i.lastIndex),
  $ = s.BROKEN_CARET,
  A = void 0 !== /()??/.exec('')[1];
(R || A || $ || v || p) && (g = function(n) {
  var t, r, e, i, o, s, f, v = h(this),
p = a(n),
k = v.raw;
  if (k)
return k.lastIndex = this.lastIndex, t = u(g, k, p), this.lastIndex = k.lastIndex, t;
  var m = v.groups,
C = $ && this.sticky,
S = u(c, this),
w = this.source,
T = 0,
O = p;
  if (C && (-1 === y(S = E(S, 'y', ''), 'g') && (S += 'g'), O = b(p, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && '\n' !== I(p, this.lastIndex - 1)) && (w = '(?: ' + w + ')', O = ' ' + O, T++), r = RegExp('^(?:' + w + ')', S)), A && (r = RegExp('^' + w + '$(?!\\s)', S)), R && (e = this.lastIndex), i = u(x, C ? r : this, O), C ? i ? (i.input = b(i.input, T), i[0] = b(i[0], T), i.index = this.lastIndex, this.lastIndex += i[0].length) : this.lastIndex = 0 : R && i && (this.lastIndex = this.global ? i.index + i[0].length : e), A && i && i.length > 1 && u(d, i[0], r, function() {
  for (o = 1; o < arguments.length - 2; o++)
    void 0 === arguments[o] && (i[o] = void 0);
}), i && m)
for (o = 0, i.groups = s = l(null); o < m.length; o++)
  s[(f = m[o])[0]] = i[f[1]];
  return i;
}), n.exports = g;