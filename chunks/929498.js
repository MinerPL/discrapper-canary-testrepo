n.d(t, {
  Z: function() {
return f;
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
  _ = n(622058),
  E = n(981631);

function f(e) {
  let t = (0, a.e7)([d.Z], () => d.Z.getActivities(e)),
n = (0, a.e7)([s.Z], () => s.Z.getUserOutbox(e)),
f = (0, a.e7)([c.Z], () => c.Z.getAnyStreamForUser(e)),
{
  live: h,
  recent: p
} = (0, r.useMemo)(() => {
  let e = (0, i.uniqWith)(t.filter(e => {
      let {
        type: t
      } = e;
      return t !== E.IIU.CUSTOM_STATUS;
    }), (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id),
    r = null == n ? void 0 : n.entries.filter(t => (0, o.y0)(t) ? !e.some(e => null != e && (0, l.RL)(t, e)) : (0, _.R)(t) && !(0, u.kr)(t));
  return {
    live: e,
    recent: null != r ? r : []
  };
}, [
  t,
  n
]);
  return {
live: h,
recent: p,
stream: f,
outbox: n
  };
}