"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("493683"),
  i = n("726521"),
  r = n("213010"),
  o = n("718538"),
  u = n("689938");

function d(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonSize: d = l.ButtonSizes.TINY,
    className: c,
    buttonText: f,
    navigateAwayOnReportSuccess: h = !0,
    onReportClick: m,
    onReportSubmit: p,
    onMouseEnter: E,
    onMouseLeave: C
  } = e, g = (0, r.useIsRelationshipTypeSpamReportable)(t), S = (0, o.useLongestChannelMessageBeforeReply)(n.id, t);
  if (!g || null == S) return null;
  let _ = () => {
    null == p || p(), s.default.closePrivateChannel(n.id, h)
  };
  return (0, a.jsx)(l.Button, {
    className: c,
    size: d,
    color: l.Button.Colors.RED,
    disabled: null == S,
    onClick: () => {
      null == m || m(), (0, i.showReportModalForFirstDM)(S, _)
    },
    onMouseEnter: E,
    onMouseLeave: C,
    children: null != f ? f : u.default.Messages.REPORT_SPAM
  })
}