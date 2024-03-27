"use strict";
n.r(t), n.d(t, {
  MemberListContentSettingsMenu: function() {
    return f
  },
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("225389"),
  i = n("197801"),
  r = n("77078"),
  u = n("650509"),
  o = n("265596"),
  d = n("49111"),
  c = n("782340");
let f = e => {
  let {
    closePopout: t
  } = e, i = (0, l.useStateFromStores)([o.default], () => o.default.hidden);
  return (0, a.jsx)(r.Menu, {
    onSelect: () => {},
    navId: "member-list-settings-menu",
    variant: "fixed",
    onClose: null != t ? t : d.NOOP,
    "aria-label": c.default.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ALT,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [(0, a.jsx)(r.MenuItem, {
        id: "about",
        label: c.default.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ABOUT,
        icon: s.CircleInformationIcon,
        action: () => {
          (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("863638").then(n.bind(n, "863638"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          }), null == t || t()
        }
      }), (0, a.jsx)(r.MenuCheckboxItem, {
        id: "hide",
        label: c.default.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_HIDE,
        checked: i,
        action: () => {
          (0, u.toggleMemberListContentFeedHidden)(), null == t || t()
        }
      })]
    })
  })
};
var h = () => (0, a.jsx)(r.Popout, {
  animation: r.Popout.Animation.NONE,
  position: "bottom",
  align: "right",
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, a.jsx)(f, {
      closePopout: t
    })
  },
  children: e => (0, a.jsx)(r.Clickable, {
    ...e,
    onClick: t => {
      t.stopPropagation(), e.onClick(t)
    },
    style: {
      width: "12px",
      height: "12px"
    },
    children: (0, a.jsx)(i.SettingsIcon, {
      width: 12,
      height: 12
    })
  })
})