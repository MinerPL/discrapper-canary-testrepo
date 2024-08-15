t.d(n, {
  Z: function() {
return r;
  }
}), t(47120);
var a = t(470079),
  l = t(512722),
  s = t.n(l),
  i = t(157925),
  o = t(765305);

function r(e) {
  let {
stageInstance: n,
defaultStep: t,
error: l,
onSave: r
  } = e, [c, d] = a.useState(t), [u, _] = a.useState(), [m, h] = a.useState(null);
  return a.useEffect(() => {
null != l && d(i.lv.STAGE_CHANNEL_SETTINGS);
  }, [l]), {
modalStep: c,
setModalStep: d,
readySlide: m,
handleSlideReady: function(e) {
  return h(e);
},
savedOptions: u,
handleSettingsSave: function(e) {
  if (_(e), e.privacyLevel === o.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== o.j8.PUBLIC) {
    d(i.lv.PUBLIC_STAGE_PREVIEW);
    return;
  }
  r(e);
},
handleDelayedSave: function() {
  s()(null != u, 'Must have some saved options.'), r(u);
}
  };
}