t.d(r, {
  d: function() {
return l;
  },
  u: function() {
return c;
  }
});
var a = t(652874),
  n = t(868888),
  i = t(433517);
let o = {
selectedPage: t(49898).F$.SERVERS
  },
  l = (0, a.Z)((0, n.tJ)(() => o, {
name: 'global-discovery-ui-store',
getStorage: () => ({
  getItem: e => {
    var r;
    return null !== (r = i.K.get(e)) && void 0 !== r ? r : null;
  },
  setItem: (e, r) => i.K.set(e, r),
  removeItem: e => i.K.remove(e)
}),
partialize: e => ({
  selectedPage: e.selectedPage
})
  }));

function c() {
  l.setState(o);
}