n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n(442837),
  s = n(881052),
  o = n(699682),
  l = n(81897),
  u = n(814443),
  c = n(621853),
  d = n(484459);

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
[n, _] = (0, a.Wu)([c.Z], () => [
  c.Z.getMutualFriends(e),
  c.Z.isFetchingProfile(e)
]),
E = (0, l.Z)(),
[f, h] = (0, r.useState)(null),
p = t && null == f && !_ && null == n;
  (0, r.useEffect)(() => {
if (!!p)
  (async () => {
    try {
      await (0, d.Z)(e, void 0, {
        withMutualFriends: !0,
        abortSignal: E
      });
    } catch (e) {
      h(new s.Hx(e));
    }
  })();
  }, [
p,
e,
E
  ]);
  let m = (0, a.e7)([u.Z], () => u.Z.getUserAffinitiesMap()),
I = (0, r.useMemo)(() => null == n ? null : n.length < 2 ? n : (0, i.sortBy)(n, e => {
  var t, n;
  let {
    user: r
  } = e;
  return -((null !== (n = null === (t = m.get(r.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : -1) * 1);
}), [
  n,
  m
]),
T = (0, o.Z)(I);
  return {
mutualFriends: null != I ? I : T,
isFetching: _
  };
}