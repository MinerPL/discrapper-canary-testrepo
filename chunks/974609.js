n.d(t, {
  H: function() {
return s;
  }
}), n(47120), n(442837);
var r = n(271383),
  i = n(430824),
  a = n(700785);
let s = function(e, t) {
  let [n, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [
i.Z,
r.ZP
  ];
  if (null == e || null == t)
return null;
  let o = n.getGuild(e);
  if (null == o)
return null;
  let l = s.getMember(o.id, t);
  return null == l ? null : a.Hu(o, l);
};