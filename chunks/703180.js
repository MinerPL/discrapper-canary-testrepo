"use strict";
n.r(t), n.d(t, {
  MemberListContentSettingsMenu: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("882485"),
  i = n("191578"),
  r = n("481060"),
  o = n("485267"),
  u = n("146282"),
  d = n("981631"),
  c = n("689938");
let f = e => {
  let {
    closePopout: t
  } = e, i = (0, l.useStateFromStores)([u.default], () => u.default.hidden);
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
            } = await Promise.all([n.e("99387"), n.e("71517")]).then(n.bind(n, "549505"));
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
          (0, o.toggleMemberListContentFeedHidden)(), null == t || t()
        }
      })]
    })
  })
};
t.default = () => (0, a.jsx)(r.Popout, {
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