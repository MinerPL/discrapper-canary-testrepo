t.d(n, {
  Z: function() {
return o;
  }
}), t(47120);
var a = t(470079),
  l = t(512722),
  s = t.n(l),
  i = t(157925),
  r = t(765305);

function o(e) {
  let {
stageInstance: n,
defaultStep: t,
error: l,
onSave: o
  } = e, [c, d] = a.useState(t), [u, _] = a.useState(), [E, h] = a.useState(null);
  return a.useEffect(() => {
null != l && d(i.lv.STAGE_CHANNEL_SETTINGS);
  }, [l]), {
modalStep: c,
setModalStep: d,
readySlide: E,
handleSlideReady: function(e) {
  return h(e);
},
savedOptions: u,
handleSettingsSave: function(e) {
  if (_(e), e.privacyLevel === r.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== r.j8.PUBLIC) {
    d(i.lv.PUBLIC_STAGE_PREVIEW);
    return;
  }
  o(e);
},
handleDelayedSave: function() {
  s()(null != u, 'Must have some saved options.'), o(u);
}
  };
}