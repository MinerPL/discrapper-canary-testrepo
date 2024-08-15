n.d(t, {
  I: function() {
return o;
  },
  c: function() {
return l;
  }
});
var s = n(399606),
  a = n(594174),
  r = n(914788),
  i = n(880257);
let l = () => {
let e = (0, i.Z)();
return (0, s.e7)([
  r.Z,
  a.default
], () => {
  if (!e)
    return a.default.getCurrentUser();
  let t = r.Z.getSelectedTeenId();
  if (null !== t)
    return a.default.getUser(t);
});
  },
  o = e => (0, s.e7)([a.default], () => {
let t = a.default.getUser(e);
if (null != t)
  return t;
  });