n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n(442837),
  s = n(353647),
  o = n(26033),
  l = n(180335),
  u = n(561308),
  c = n(199902),
  d = n(158776),
  _ = n(981631);

function E(e) {
  let t = (0, a.e7)([d.Z], () => d.Z.getActivities(e)),
n = (0, a.e7)([s.Z], () => s.Z.getUserOutbox(e)),
E = (0, a.e7)([c.Z], () => c.Z.getAnyStreamForUser(e)),
{
  live: f,
  recent: h
} = (0, r.useMemo)(() => {
  let e = (0, i.uniqWith)(t.filter(e => {
      let {
        type: t
      } = e;
      return t !== _.IIU.CUSTOM_STATUS;
    }), (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id),
    r = null == n ? void 0 : n.entries.filter(t => (0, o.r5)(t) ? !e.some(e => null != e && (0, l.RL)(t, e)) : !(0, u.kr)(t));
  return {
    live: e,
    recent: null != r ? r : []
  };
}, [
  t,
  n
]);
  return {
live: f,
recent: h,
stream: E
  };
}