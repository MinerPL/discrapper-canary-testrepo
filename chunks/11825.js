"use strict";
n.r(t), n.d(t, {
  MoreButton: function() {
    return f
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("836946"),
  r = n("808268"),
  o = n("740727"),
  u = n("833592"),
  d = n("689938");
let c = e => {
    let {
      item: t,
      closePopout: n
    } = e;
    return (0, s.jsx)(l.Menu, {
      navId: "notification-actions",
      onClose: n,
      onSelect: n,
      "aria-label": d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      children: (0, s.jsx)(l.MenuItem, {
        id: "delete",
        label: d.default.Messages.DELETE,
        icon: o.default,
        action: async () => {
          await (0, u.deleteNotificationCenterItem)(t)
        }
      })
    })
  },
  f = a.memo(function(e) {
    let {
      item: t
    } = e;
    return (0, s.jsx)(l.Popout, {
      renderPopout: e => (0, s.jsx)(c, {
        ...e,
        item: t
      }),
      position: "bottom",
      align: "right",
      animation: l.Popout.Animation.NONE,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, s.jsx)(i.default, {
          tooltip: d.default.Messages.MORE,
          color: i.CircleIconButtonColors.TERTIARY,
          icon: (0, s.jsx)(r.default, {
            height: 16,
            width: 16
          }),
          onClick: e => {
            e.stopPropagation(), t(e)
          },
          "aria-haspopup": "menu"
        })
      }
    })
  })