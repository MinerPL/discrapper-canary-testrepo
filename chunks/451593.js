t.d(s, {
  E: function() {
return d;
  }
});
var n, a = t(652874),
  i = t(731965),
  r = t(433517);
let o = '__DEBUG_PROFILE_EFFECTS_STORE',
  l = {
profileEffects: null !== (n = r.K.get(o)) && void 0 !== n ? n : {}
  },
  c = e => {
r.K.set(o, e.profileEffects);
  },
  d = (0, a.Z)(e => ({
...l,
upsertConfig: s => (0, i.j)(() => {
  e(e => {
    let t = {
      ...e
    };
    return t.profileEffects[s.id] = s, c(t), t;
  });
}),
deleteConfig: s => (0, i.j)(() => {
  e(e => {
    let t = {
      ...e
    };
    return delete t.profileEffects[s], c(t), t;
  });
})
  }));