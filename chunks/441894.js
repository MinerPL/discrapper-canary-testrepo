t.d(n, {
  J: function() {
return c;
  }
});
var r = t(442837),
  u = t(19780),
  l = t(977059),
  i = t(760373);

function c(e) {
  let {
channelId: n,
location: t
  } = e, c = l.c.useExperiment({
location: t
  });
  return (0, r.e7)([u.Z], () => function(e, n, t) {
var r;
let {
  enabled: l
} = n;
if (!l || null == e || u.Z.getChannelId() !== e)
  return !1;
let c = null === (r = t.getSecureFramesState()) || void 0 === r ? void 0 : r.version;
return null != c && c > i.HK;
  }(n, c, u.Z));
}