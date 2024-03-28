"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var u = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  o = n("239091"),
  s = n("522474"),
  i = n("788983"),
  c = n("695346"),
  d = n("393431"),
  r = n("441957"),
  f = n("981631"),
  p = n("689938");

function h(e) {
  let {
    channel: t,
    onSelect: n
  } = e, h = (0, d.default)(), C = c.RtcPanelShowVoiceStates.useSetting(), S = function(e) {
    let t = (0, l.useStateFromStores)([s.default], () => s.default.getWindow(f.PopoutWindowKeys.CHANNEL_CALL_POPOUT));
    return null == e || null != t ? null : (0, u.jsx)(a.MenuItem, {
      id: "popout-call",
      label: p.default.Messages.POPOUT_PLAYER,
      icon: r.default,
      action: () => i.openChannelCallPopout(e)
    })
  }(null != t ? t : void 0);
  return (0, u.jsxs)(a.Menu, {
    navId: "rtc-channel",
    "aria-label": p.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: o.closeContextMenu,
    onSelect: n,
    children: [h, (0, u.jsxs)(a.MenuGroup, {
      children: [S, (0, u.jsx)(a.MenuCheckboxItem, {
        id: "show-voice-states",
        checked: C,
        action: () => c.RtcPanelShowVoiceStates.updateSetting(!C),
        label: p.default.Messages.VOICE_PANEL_SHOW_VOICE_USERS
      })]
    })]
  })
}