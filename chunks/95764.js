"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("40851"),
  r = n("889161"),
  o = n("390322"),
  u = n("871499"),
  d = n("592125"),
  c = n("389320"),
  f = n("696202"),
  h = n("15274"),
  m = n("482241"),
  p = n("389303"),
  E = n("554747"),
  C = n("689938"),
  g = n("60614");

function S(e) {
  let {
    channelId: t,
    onClick: n
  } = e, S = (0, i.useAppContext)(), _ = (0, E.useActiveEvent)(t), T = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]), {
    canManageGuildEvent: I
  } = (0, r.useManageResourcePermissions)(T), A = I(_);
  if (null == _) return null;
  let N = () => {
      if (null != T && (0, p.default)(T)) {
        (0, h.openEndEventModal)(T, S);
        return
      }
      n()
    },
    v = () => {
      m.default.endEvent(_.id, _.guild_id)
    };
  return A ? (0, a.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(o.default, {
        children: (0, a.jsx)(s.Menu, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": C.default.Messages.DISCONNECT_MENU,
          onClose: t,
          children: (0, a.jsx)(s.MenuItem, {
            id: "end-voice-event",
            color: "danger",
            action: v,
            label: C.default.Messages.END_EVENT,
            icon: f.default
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: s.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(u.CenterControlButton, {
        label: C.default.Messages.DISCONNECT_SELF,
        color: "red",
        iconComponent: c.default,
        onClick: N,
        onPopoutClick: t,
        className: g.buttonSpacing
      })
    }
  }) : (0, a.jsx)(u.CenterControlButton, {
    className: g.buttonSpacing,
    label: C.default.Messages.DISCONNECT_SELF,
    color: "red",
    iconComponent: c.default,
    onClick: n
  })
}