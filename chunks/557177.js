"use strict";
let i;
n.r(t), n.d(t, {
  createSound: function() {
    return _
  },
  createSoundForPack: function() {
    return d
  },
  playSound: function() {
    return c
  }
});
var r = n("259443"),
  a = n("292619"),
  s = n("474873"),
  o = n("135906"),
  l = n("246946");
{
  let e = (0, a.isEligibleForWebAudioAPI)({
      location: "SoundUtils"
    }),
    t = n("902653");
  i = e ? t.WebAudioAPISound : t.WebAudioSound
}
let u = new r.Logger("SoundUtils");

function d(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return _(null !== (n = (0, o.default)(t)[e]) && void 0 !== n ? n : e, e, i)
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return new i(e, t, n)
}

function c(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    i = arguments.length > 2 ? arguments[2] : void 0,
    r = arguments.length > 3 ? arguments[3] : void 0;
  if (l.default.disableSounds) return;
  let a = (0, o.default)(null != r ? r : s.default.getSoundpack());
  null == a && u.log("Unable to find sound for pack name: ".concat(r));
  let d = _(null !== (t = a[e]) && void 0 !== t ? t : e, e, n);
  return null != i ? d.playWithListener().then(e => {
    e && i()
  }) : d.play(), d
}