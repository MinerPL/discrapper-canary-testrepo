n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(692547),
  l = n(481060),
  s = n(40851),
  r = n(881824),
  o = n(688641),
  c = n(689938);

function d(e) {
  let {
className: t,
channel: n,
highlight: d
  } = e, u = (0, s.bp)();
  return (0, i.jsx)(o.Z, {
highlight: null != d && d,
className: t,
icon: (0, i.jsx)(l.StageIcon, {
  size: 'custom',
  color: 'currentColor',
  height: 20,
  width: 20
}),
color: a.Z.unsafe_rawColors.GREEN_360.css,
title: c.Z.Messages.STAGE_CHANNEL_START_TITLE,
description: c.Z.Messages.STAGE_CHANNEL_START_SUBTITLE,
onClick: function() {
  (0, r.T)(n, u);
}
  });
}