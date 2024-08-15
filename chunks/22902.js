t.d(n, {
  Z: function() {
return a;
  }
});
var r = t(470079),
  i = t(817460),
  o = t(293810),
  l = t(474936),
  u = t(689938);

function a(e) {
  return r.useMemo(() => {
var n;
let t = o.DN.map(e => ({
    value: e,
    label: e.interval === l.rV.DAY && 7 === e.interval_count ? u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
      defaultLimit: (0, i.iG)(e)
    }) : (0, i.iG)(e),
    isDefault: e.interval === l.rV.DAY && 7 === e.interval_count
  })),
  r = null != e ? null === (n = t.find(n => null != n.value && n.value.interval === e.interval && n.value.interval_count === e.interval_count)) || void 0 === n ? void 0 : n.value : e;
return {
  options: t,
  selectedOption: r
};
  }, [e]);
}