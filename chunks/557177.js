let r;
n.d(t, {
  GN: function() {
return _;
  },
  tu: function() {
return d;
  },
  uk: function() {
return c;
  }
});
var i = n(259443),
  a = n(292619),
  o = n(474873),
  s = n(135906),
  l = n(246946);
{
  let e = (0, a.w)({
  location: 'SoundUtils'
}),
t = n(902653);
  r = e ? t.WebAudioAPISound : t.WebAudioSound;
}
let u = new i.Y('SoundUtils');

function c(e, t) {
  var n;
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return d(null !== (n = (0, s.Z)(t)[e]) && void 0 !== n ? n : e, e, r);
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return new r(e, t, n);
}

function _(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
r = arguments.length > 2 ? arguments[2] : void 0,
i = arguments.length > 3 ? arguments[3] : void 0;
  if (l.Z.disableSounds)
return;
  let a = (0, s.Z)(null != i ? i : o.Z.getSoundpack());
  null == a && u.log('Unable to find sound for pack name: '.concat(i));
  let c = d(null !== (t = a[e]) && void 0 !== t ? t : e, e, n);
  return null != r ? c.playWithListener().then(e => {
e && r();
  }) : c.play(), c;
}