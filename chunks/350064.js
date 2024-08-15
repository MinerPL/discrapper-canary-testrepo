n.d(t, {
  $: function() {
return o;
  }
});
var r = n(470079),
  i = n(566620),
  a = n(175894),
  s = n(246106);
let o = e => {
  let {
userActivity: t,
inActivity: n
  } = (0, s.Z)(e.id);
  return (0, a.Z)({
channel: e,
userActivity: t
  }), r.useEffect(() => () => {
(null == t ? void 0 : t.applicationId) != null && (0, i.rp)(e.id, null == t ? void 0 : t.applicationId);
  }, [
e.id,
null == t ? void 0 : t.applicationId
  ]), {
isLoading: !n
  };
};