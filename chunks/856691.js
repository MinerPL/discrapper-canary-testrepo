"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("692547"),
  s = n("40851"),
  i = n("881824"),
  r = n("170039"),
  o = n("688641"),
  u = n("689938");

function d(e) {
  let {
    className: t,
    channel: n,
    highlight: d
  } = e, c = (0, s.useAppContext)();
  return (0, a.jsx)(o.default, {
    highlight: null != d && d,
    className: t,
    icon: (0, a.jsx)(r.default, {
      height: 20,
      width: 20
    }),
    color: l.default.unsafe_rawColors.GREEN_360.css,
    title: u.default.Messages.STAGE_CHANNEL_START_TITLE,
    description: u.default.Messages.STAGE_CHANNEL_START_SUBTITLE,
    onClick: function() {
      (0, i.openStageChannelSettings)(n, c)
    }
  })
}