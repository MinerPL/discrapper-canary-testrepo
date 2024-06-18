"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var s = n(13245),
  l = n(703656),
  a = n(974180),
  o = n(237997),
  r = n(454902),
  d = n(150097),
  c = n(557177),
  u = n(312839),
  h = n(981631),
  p = n(987650),
  f = n(689938);

function E(e, t, n, E) {
  var Z;
  let {
    icon: g,
    title: m,
    body: _
  } = (0, d.Xi)(e, t, n), {
    trackView: I,
    trackClick: S
  } = (0, u.R)(p.n0.TextChat, {
    notif_type: p.n0.TextChat,
    notif_user_id: null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    colorScheme: r.IC.PRIMARY,
    icon: g,
    title: m,
    body: _,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: f.Z.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      E && (0, c.GN)(a.Ay, a.yk), I()
    },
    onNotificationClick: () => {
      (0, l.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)), S("jump"), o.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      S("dismiss")
    }
  }
}