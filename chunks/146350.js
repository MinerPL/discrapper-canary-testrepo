"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("86621"),
  c = n("775377"),
  f = n("583232"),
  E = n("891964"),
  h = n("644091"),
  _ = n("845579"),
  C = n("52028"),
  S = n("381546"),
  I = n("304121"),
  m = n("599110"),
  p = n("158998"),
  T = n("49111"),
  g = n("782340"),
  A = n("502587");

function N(e) {
  let {
    status: t,
    description: n,
    focused: s
  } = e;
  return (0, a.jsxs)("div", {
    className: A.statusItem,
    children: [(0, a.jsx)(u.Status, {
      status: t,
      className: A.icon,
      size: 10,
      color: s ? "currentColor" : void 0
    }), (0, a.jsx)("div", {
      className: A.status,
      children: (0, p.humanizeStatus)(t)
    }), null != n && (0, a.jsx)("div", {
      className: A.description,
      children: n
    })]
  })
}

function R(e) {
  let {
    customStatus: t
  } = e, n = e => {
    e.stopPropagation(), _.CustomStatusSetting.updateSetting(void 0)
  };
  return null != t ? (0, a.jsx)("div", {
    "aria-label": g.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
    children: (0, a.jsx)(c.default, {
      className: null != t.emoji ? A.customStatusWithEmoji : A.customStatusItem,
      activity: t,
      emojiClassName: A.customEmoji,
      textClassName: A.customText,
      placeholderText: g.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      children: (0, a.jsx)(u.Tooltip, {
        text: g.default.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: A.clearStatusButton,
          onClick: n,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          tabIndex: -1,
          "aria-hidden": !0,
          children: (0, a.jsx)(S.default, {
            className: A.clearStatusIcon
          })
        })
      })
    })
  }) : (0, a.jsxs)("div", {
    className: i(A.statusItem, A.customStatusContentIcon),
    "aria-label": g.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
    children: [(0, a.jsx)("div", {
      className: A.customEmojiPlaceholder
    }), (0, a.jsx)("div", {
      className: A.status,
      children: g.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
    })]
  })
}

function O(e) {
  let {
    focused: t
  } = e;
  return (0, a.jsxs)("div", {
    className: i(A.statusItem, A.statusItemNoPadding, A.customStatusContentIcon, A.switchAccountsItem),
    "aria-label": g.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
    children: [(0, a.jsx)(I.default, {
      width: 18,
      height: 18,
      className: A.switchAccountsIcon,
      color: t ? o.default.unsafe_rawColors.WHITE_500.css : "currentColor"
    }), (0, a.jsx)("div", {
      className: A.status,
      children: g.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE
    })]
  })
}
let v = e => {
  let {
    customStatus: t,
    onClose: l,
    analyticsContext: i,
    onSelect: r
  } = e, o = (0, h.useMultiAccountMenuItems)();
  s.useEffect(() => {
    m.default.track(T.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != t,
      location: i.location
    })
  }, []);
  let d = e => {
    (0, f.default)(e, void 0, {
      location: i.location
    })
  };
  return (0, a.jsxs)(u.Menu, {
    navId: "status-picker",
    variant: "fixed",
    "aria-label": g.default.Messages.SET_STATUS,
    onClose: l,
    onSelect: r,
    children: [(0, a.jsx)(u.MenuItem, {
      id: "online",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.ONLINE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.ONLINE)
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "idle",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.IDLE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.IDLE)
    }), (0, a.jsx)(u.MenuItem, {
      id: "dnd",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.DND,
          description: g.default.Messages.STATUS_DND_HELP,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.DND)
    }), (0, a.jsx)(u.MenuItem, {
      id: "invisible",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.INVISIBLE,
          description: g.default.Messages.STATUS_INVISIBLE_HELPER,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.INVISIBLE)
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "custom-status",
      keepItemStyles: !0,
      render: () => (0, a.jsx)(R, {
        customStatus: t
      }),
      action: () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("711438").then(n.bind(n, "711438"));
          return t => (0, a.jsx)(e, {
            ...t,
            sourceAnalyticsContext: i
          })
        })
      }
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "switch-account",
      action: E.default,
      label: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(O, {
          focused: t
        })
      },
      children: o
    }, "switch-account")]
  })
};
var L = (0, d.default)(e => {
  let t = (0, r.useStateFromStores)([C.default], () => C.default.getCustomStatusActivity()),
    n = _.StatusSetting.useSetting();
  return (0, a.jsx)(v, {
    ...e,
    customStatus: t,
    status: n
  })
})