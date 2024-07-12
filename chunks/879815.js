var i = n(442837),
  s = n(314897),
  a = n(131951),
  r = n(979651);
t.Z = e => (0, i.cj)([
  r.Z,
  a.Z,
  s.default
], () => function(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
o = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
  return {
selfDeaf: i.isSelfDeaf(),
deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
  };
}(e, r.Z, a.Z, s.default));