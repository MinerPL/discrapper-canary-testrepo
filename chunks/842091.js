var r = n(302454),
  i = n.n(r),
  a = n(840498);

function o(e, t, n, r, i) {
  let o;
  return !n && (t += '\n\n'), o = e(t, {
inline: n,
...r
  }), o = (0, a.ge)(o), o = (0, a.RA)(o), null != i && (o = i(o, n)), o;
}
t.Z = {
  reactParserFor(e) {
let t = i().parserFor(e),
  n = i().reactFor(i().ruleOutput(e, 'react'));
return function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
    r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return n(o(t, e, r, i, a), i);
};
  },
  astParserFor(e) {
let t = i().parserFor(e);
return function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return o(t, e, n, r, i);
};
  }
};