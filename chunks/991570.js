n.d(t, {
  f: function() {
return o;
  }
});
var i = n(442837),
  a = n(481060),
  l = n(318661),
  s = n(721987),
  r = n(594174);

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.8,
o = arguments.length > 3 ? arguments[3] : void 0,
c = (0, i.e7)([r.default], () => r.default.getUser(e), [e]),
d = (0, l.ZP)(e, t),
{
  theme: u
} = (0, s.Z)({
  user: c,
  displayProfile: d,
  isPreview: !0
});
  return (0, a.useToken)(null != o ? o : a.tokens.colors.BACKGROUND_NESTED_FLOATING, u).hex({
opacity: n
  });
}