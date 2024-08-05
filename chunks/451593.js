s.d(t, {
  E: function() {
return d;
  }
});
var n, a = s(652874),
  i = s(731965),
  r = s(433517);
let o = '__DEBUG_PROFILE_EFFECTS_STORE',
  l = {
profileEffects: null !== (n = r.K.get(o)) && void 0 !== n ? n : {}
  },
  c = e => {
r.K.set(o, e.profileEffects);
  },
  d = (0, a.Z)(e => ({
...l,
upsertConfig: t => (0, i.j)(() => {
  e(e => {
    let s = {
      ...e
    };
    return s.profileEffects[t.id] = t, c(s), s;
  });
}),
deleteConfig: t => (0, i.j)(() => {
  e(e => {
    let s = {
      ...e
    };
    return delete s.profileEffects[t], c(s), s;
  });
})
  }));