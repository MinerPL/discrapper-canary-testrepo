i.d(n, {
  Z: function() {
return r;
  }
});
var t = i(735250);
i(470079);
var l = i(442837),
  s = i(481060),
  a = i(5036),
  u = i(58468),
  o = i(689938);

function r(e) {
  let n = (0, l.e7)([u.Z], () => u.Z.isCollapsed(e.id), [e.id]);
  return __OVERLAY__ ? null : (0, t.jsx)(s.MenuCheckboxItem, {
id: 'hide-voice-names',
label: o.Z.Messages.VOICE_CHANNEL_HIDE_NAMES,
action: () => a.Z.update(e.id),
checked: n
  });
}