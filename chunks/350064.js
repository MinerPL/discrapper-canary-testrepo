n.d(t, {
  $: function() {
return l;
  }
});
var r = n(470079),
  i = n(566620),
  a = n(246106),
  s = n(797398),
  o = n(513202);
let l = e => {
  let {
userActivity: t,
inActivity: n
  } = (0, a.Z)(e.id), l = o.Z;
  return (0, s.Z)({
channel: e,
userActivity: t,
inActivity: n,
embeddedActivitiesManager: l
  }), r.useEffect(() => () => {
(null == t ? void 0 : t.applicationId) != null && (0, i.rp)(e.id, null == t ? void 0 : t.applicationId);
  }, [
e.id,
null == t ? void 0 : t.applicationId
  ]), {
isLoading: !n
  };
};