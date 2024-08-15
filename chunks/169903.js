n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(470079),
  a = n(584825),
  i = n(14263);

function r(e, t) {
  let n = (0, a.qi)(e),
r = (0, i.Z)(e);
  return s.useMemo(() => n.map(e => {
var n;
let s = null == e ? void 0 : e.role_id;
return {
  ...null !== (n = null == t ? void 0 : t.ppgs[e.id]) && void 0 !== n ? n : {},
  key: e.id,
  subscriptionListing: e,
  roleMemberCount: null == s ? void 0 : null == r ? void 0 : r[s]
};
  }), [
n,
null == t ? void 0 : t.ppgs,
r
  ]);
}