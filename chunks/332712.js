n.d(t, {
  O: function() {
return c;
  }
});
var i = n(470079),
  s = n(442837),
  a = n(570140),
  r = n(621853),
  l = n(484459),
  o = n(594174);

function c(e) {
  let t = (0, s.e7)([o.default], () => o.default.getUser(e)),
n = (0, s.Wu)([r.Z], () => {
  var t, n;
  return null !== (n = null === (t = r.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.map(e => e.guild)) && void 0 !== n ? n : [];
});
  return i.useEffect(() => {
0 === n.length && null != t && null == r.Z.getMutualGuilds(e) && a.Z.wait(() => (0, l.Z)(e, void 0, {
  withMutualGuilds: !0
}));
  }, [
n,
t,
e
  ]), n;
}