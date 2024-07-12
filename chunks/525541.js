n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(493683),
  s = n(726521),
  r = n(213010),
  o = n(718538),
  c = n(689938);

function d(e) {
  let {
otherUserId: t,
channel: n,
buttonSize: d = a.ButtonSizes.TINY,
className: u,
buttonText: h,
navigateAwayOnReportSuccess: p = !0,
onReportClick: m,
onReportSubmit: _,
onMouseEnter: f,
onMouseLeave: E
  } = e, C = (0, r.Q)(t), g = (0, o.V)(n.id, t);
  if (!C || null == g)
return null;
  let I = () => {
null == _ || _(), l.Z.closePrivateChannel(n.id, p);
  };
  return (0, i.jsx)(a.Button, {
className: u,
size: d,
color: a.Button.Colors.RED,
disabled: null == g,
onClick: () => {
  null == m || m(), (0, s.WL)(g, I);
},
onMouseEnter: f,
onMouseLeave: E,
children: null != h ? h : c.Z.Messages.REPORT_SPAM
  });
}