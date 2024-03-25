"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  i = n("272030"),
  u = n("54239"),
  r = n("158534"),
  o = n("812204"),
  d = n("861370"),
  s = n("393414"),
  c = n("47006"),
  _ = n("782340"),
  E = (0, r.default)(function(e) {
    let {
      channel: t,
      onSelect: n
    } = e, r = (0, c.default)(t), o = (0, d.default)({
      id: t.id,
      label: _.default.Messages.COPY_ID_CHANNEL
    });
    return (0, l.jsxs)(a.Menu, {
      navId: "channel-context",
      onClose: i.closeContextMenu,
      "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [(0, l.jsxs)(a.MenuGroup, {
        children: [r, t.isCategory() ? null : (0, l.jsx)(a.MenuItem, {
          id: "jump-to-channel",
          label: _.default.Messages.JUMP_TO_CHANNEL,
          action: () => {
            (0, s.transitionToGuild)(t.guild_id, t.id), (0, u.popLayer)()
          }
        })]
      }), (0, l.jsx)(a.MenuGroup, {
        children: o
      })]
    })
  }, [o.default.CONTEXT_MENU, o.default.CHANNEL_AUDIT_LOG_MENU])