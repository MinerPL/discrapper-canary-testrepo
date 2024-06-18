"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(943209),
  o = n(556084),
  a = n(659101),
  l = n(689938),
  u = n(39198),
  _ = n(379916);

function d(e) {
  let {
    applicationId: t,
    channelId: n
  } = e, {
    installedIntegrations: d,
    fetched: c
  } = (0, o.j)({
    channelId: n
  });
  return c && void 0 !== d.find(e => e.application.id === t) ? (0, i.jsxs)(a.Z, {
    children: [(0, i.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.title,
      children: l.Z.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
    }), (0, i.jsx)(r.Button, {
      onClick: () => (0, s.GB)(n, t),
      size: r.Button.Sizes.ICON,
      color: r.Button.Colors.RED,
      look: r.Button.Looks.LINK,
      className: u.button,
      children: l.Z.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION
    })]
  }) : null
}