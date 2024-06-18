"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n(442837),
  o = n(881052),
  a = n(699682),
  l = n(81897),
  u = n(771845),
  _ = n(621853),
  d = n(484459);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    [n, c] = (0, s.Wu)([_.Z], () => [_.Z.getMutualGuilds(e), _.Z.isFetchingProfile(e)]),
    E = (0, l.Z)(),
    [I, T] = (0, i.useState)(null),
    h = t && null == I && !c && null == n;
  (0, i.useEffect)(() => {
    if (!!h)(async () => {
      try {
        await (0, d.Z)(e, void 0, {
          withMutualGuilds: !0,
          abortSignal: E
        })
      } catch (e) {
        T(new o.Hx(e))
      }
    })()
  }, [h, e, E]);
  let S = (0, s.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
    f = (0, i.useMemo)(() => {
      if (null == n) return null;
      if (n.length < 2) return n;
      let e = Object.fromEntries(S.map((e, t) => [e, t]));
      return (0, r.sortBy)(n, t => {
        var n;
        let {
          guild: i
        } = t;
        return null !== (n = e[i.id]) && void 0 !== n ? n : S.length
      })
    }, [n, S]),
    N = (0, a.Z)(f);
  return {
    mutualGuilds: null != f ? f : N,
    isFetching: c
  }
}