"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(40851),
  a = n(776031),
  l = n(199902),
  u = n(937482),
  _ = n(358085),
  d = n(134598),
  c = n(981631),
  E = n(689938);

function I(e) {
  let {
    onClose: t
  } = e, n = (0, o.bp)(), I = (0, r.e7)([l.Z], () => l.Z.getCurrentUserActiveStream()), T = (0, a.Z)(I, n);
  return (0, i.jsxs)(s.Menu, {
    onSelect: c.VqG,
    navId: "manage-broadcast",
    onClose: t,
    "aria-label": E.Z.Messages.SETTINGS,
    children: [_.isPlatformEmbedded && null != I ? (0, i.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: E.Z.Messages.SCREENSHARE_STREAM_QUALITY,
      children: T
    }) : null, (0, i.jsx)(s.MenuItem, {
      id: "broadcast-settings",
      label: E.Z.Messages.BROADCAST_SETTINGS,
      icon: u.Z,
      action: () => (0, d.X)()
    })]
  })
}