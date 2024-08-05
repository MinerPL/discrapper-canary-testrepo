n.d(t, {
  d: function() {
return l;
  }
});
var i = n(652874),
  a = n(868888),
  s = n(433517),
  r = n(49898);
let l = (0, i.Z)((0, a.tJ)(() => ({
  selectedPage: r.F$.SERVERS,
  selectedServerTab: r.vf.GAMING
}), {
  name: 'global-discovery',
  getStorage: () => ({
getItem: e => {
  var t;
  return null !== (t = s.K.get(e)) && void 0 !== t ? t : null;
},
setItem: (e, t) => s.K.set(e, t),
removeItem: e => s.K.remove(e)
  }),
  partialize: e => ({
selectedPage: e.selectedPage
  })
}));