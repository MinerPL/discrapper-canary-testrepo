r.d(t, {
  w: function() {
return i;
  }
});
var n = r(617726),
  a = r(151122),
  o = r(166394);
let i = (0, a._I)(() => ({
  name: 'ModuleMetadata',
  setup(e) {
e.on('beforeEnvelope', e => {
  (0, n.gv)(e, (e, t) => {
    if ('event' === t) {
      let t = Array.isArray(e) ? e[1] : void 0;
      t && ((0, o.CC)(t), e[1] = t);
    }
  });
}), e.on('applyFrameMetadata', t => {
  if (t.type)
    return;
  let r = e.getOptions().stackParser;
  (0, o.GY)(r, t);
});
  }
}));