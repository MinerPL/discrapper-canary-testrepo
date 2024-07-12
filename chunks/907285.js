n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(846027),
  s = n(131951);

function l() {
  let e = (0, i.e7)([s.Z], () => Object.values(s.Z.getVideoDevices())),
t = (0, i.e7)([s.Z], () => s.Z.getVideoDeviceId());
  return e.map(e => {
let {
  id: n,
  disabled: i,
  name: s
} = e;
return (0, r.jsx)(a.MenuRadioItem, {
  group: 'video-devices',
  id: 'video-device-'.concat(n),
  disabled: i,
  label: s,
  checked: n === t,
  action: () => o.Z.setVideoDevice(n)
}, 'video-device-'.concat(n));
  });
}