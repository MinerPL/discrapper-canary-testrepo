"use strict";
let i;
n.d(t, {
  GN: function() {
    return c
  },
  tu: function() {
    return d
  },
  uk: function() {
    return _
  }
});
var r = n(259443),
  s = n(292619),
  o = n(474873),
  a = n(135906),
  l = n(246946);
{
  let e = (0, s.w)({
      location: "SoundUtils"
    }),
    t = n(902653);
  i = e ? t.WebAudioAPISound : t.WebAudioSound
}
let u = new r.Y("SoundUtils");

function _(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return d(null !== (n = (0, a.Z)(t)[e]) && void 0 !== n ? n : e, e, i)
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return new i(e, t, n)
}

function c(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    i = arguments.length > 2 ? arguments[2] : void 0,
    r = arguments.length > 3 ? arguments[3] : void 0;
  if (l.Z.disableSounds) return;
  let s = (0, a.Z)(null != r ? r : o.Z.getSoundpack());
  null == s && u.log("Unable to find sound for pack name: ".concat(r));
  let _ = d(null !== (t = s[e]) && void 0 !== t ? t : e, e, n);
  return null != i ? _.playWithListener().then(e => {
    e && i()
  }) : _.play(), _
}