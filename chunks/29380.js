t.d(n, {
  Z: function() {
return C;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  o = t(595519),
  r = t(374065),
  s = t(542094),
  c = t(895924),
  u = t(496675),
  d = t(176412),
  m = t(231338),
  p = t(689938),
  _ = t(119178);

function C(e) {
  let {
channel: n,
application: t,
sectionName: C,
commandName: f,
buttonSize: h = l.ButtonSizes.MEDIUM
  } = e, {
onActivityItemSelected: A,
activityAction: E,
buttonColor: N,
buttonText: v
  } = (0, d.P7)({
channel: n,
application: t,
location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW,
sectionName: C,
commandName: f
  }), x = function(e) {
let {
  channel: n,
  activityAction: t
} = e, i = (0, a.e7)([u.Z], () => u.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, n)), l = (0, r.KF)(n.id), c = !1;
switch (t) {
  case s.JS.LEAVE:
    c = !1;
    break;
  case s.JS.START:
    n.isGuildVoice() ? l !== r.jy.CAN_LAUNCH && (c = !0) : !(0, o.WS)(n, !0) && (c = !0);
    break;
  case s.JS.JOIN:
    n.isGuildVoice() ? c = !i : !(0, o.WS)(n, !1) && (c = !0);
}
return c;
  }({
channel: n,
activityAction: E
  });
  return (0, i.jsx)(l.Tooltip, {
shouldShow: x,
tooltipContentClassName: _.tooltipContent,
text: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START,
children: e => {
  let {
    onClick: n,
    ...a
  } = e;
  return (0, i.jsx)(l.Button, {
    ...a,
    type: 'submit',
    size: h,
    color: N,
    disabled: x,
    onClick: () => {
      A(), null == n || n();
    },
    'aria-label': p.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: v,
      applicationName: t.name
    }),
    children: v
  });
}
  });
}