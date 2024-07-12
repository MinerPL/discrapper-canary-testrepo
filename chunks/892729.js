s.d(t, {
  Z: function() {
return d;
  }
});
var n = s(470079),
  a = s(442837),
  i = s(355467),
  r = s(78839),
  o = s(261744),
  l = s(293810);
let c = [];

function d() {
  let {
ensureFresh: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, o.Z)() === l.PY.SUBSCRIBED, s = (0, a.e7)([r.ZP], () => r.ZP.getActiveGuildSubscriptions()), d = n.useRef(!1);
  return n.useEffect(() => {
(function(e) {
  var t;
  let {
    ensureFresh: s,
    hasFetched: n,
    hasRoleSubscriptions: a
  } = e, i = r.ZP.getActiveGuildSubscriptions();
  return (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0) === 0 && !!a || !!s && !n || !n && !r.ZP.hasFetchedSubscriptions();
}({
  ensureFresh: e,
  hasRoleSubscriptions: t,
  hasFetched: d.current
}) && (d.current = !0, i.jg()));
  }, [
e,
t
  ]), null != s ? s : c;
}