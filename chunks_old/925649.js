"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("669491"),
  o = s("77078"),
  d = s("272030"),
  u = s("648747"),
  c = s("380710"),
  E = s("41594"),
  _ = s("676143"),
  I = s("98292"),
  T = s("45029"),
  S = s("851490"),
  f = s("904383"),
  m = s("223729"),
  N = s("49111"),
  g = s("782340"),
  h = s("865027");

function C(e) {
  let {
    guild: t,
    channel: l
  } = e, n = (0, f.useIsChecked)(l.id);
  return "null" === l.id ? (0, a.jsx)("div", {
    className: i(h.categoryRow, h.uncategorized),
    children: (0, a.jsx)(o.Text, {
      className: h.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: l.name
    })
  }) : (0, a.jsxs)(o.Clickable, {
    className: i(h.categoryRow, {
      [h.uncategorized]: "null" === l.id
    }),
    onContextMenu: e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("142047").then(s.bind(s, "142047"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: l,
          guild: t
        })
      })
    },
    onClick: e => {
      e.stopPropagation();
      let n = (0, u.canChannelBeDefault)(t.id, l.id);
      return n ? (0, S.toggleDefaultChannel)(l.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("10035").then(s.bind(s, "10035"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id,
          startingChannelId: l.id
        })
      }), !0
    },
    children: [(0, a.jsx)(o.Text, {
      className: h.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: l.name
    }), (0, a.jsx)(o.Checkbox, {
      "aria-checked": n,
      value: n,
      type: o.Checkbox.Types.INVERTED,
      className: h.checkbox,
      displayOnly: !0
    })]
  })
}
let R = l.memo(function() {
    return (0, a.jsx)("div", {
      className: h.separator
    })
  }),
  x = l.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: h.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  L = l.memo(function(e) {
    let {
      channel: t,
      category: l,
      guild: n,
      isFirstChannel: _,
      isLastChannel: C,
      tooltipDirection: L = "right"
    } = e, O = (0, f.useIsChecked)(t.id, l.id), A = (0, f.useIsDisabled)(t.id, l.id), p = (0, f.useDisabledTooltip)(t.id, l.id), M = (0, f.useTooltip)(n.id, l.id), D = (0, m.default)(n), v = null != D.find(e => e.id === t.id), G = (0, c.useIsChattableChannel)(t.id), j = e => {
      if (A) return;
      e.stopPropagation();
      let l = (0, u.canChannelBeDefault)(n.id, t.id);
      return l ? (0, S.toggleDefaultChannel)(t.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("10035").then(s.bind(s, "10035"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: n.id,
          startingChannelId: t.id
        })
      }), !0
    }, U = e => {
      t.isGuildVocal() ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("168003").then(s.bind(s, "168003"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t,
          guild: n
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("327241").then(s.bind(s, "327241"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t,
          guild: n
        })
      })
    };
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Tooltip, {
        text: null != p ? p : M,
        delay: 500,
        position: L,
        children: e => (0, a.jsxs)(o.Clickable, {
          className: i(h.channelRow, {
            [h.firstChannel]: _,
            [h.lastChannel]: C,
            [h.disabled]: A
          }),
          ...e,
          onClick: j,
          onContextMenu: U,
          children: [(0, a.jsx)("div", {
            className: h.channelInfo,
            children: (0, a.jsxs)("div", {
              className: h.channelName,
              children: [(0, a.jsx)(E.ChannelItemIcon, {
                channel: t,
                guild: n
              }), (0, a.jsx)(I.default, {
                className: h.name,
                children: (0, a.jsx)(o.Text, {
                  className: h.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: A ? "text-muted" : "text-normal",
                  children: t.name
                })
              }), v ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(x, {
                  index: 0
                }), (0, a.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: h.channelSubtitle,
                  color: "text-brand",
                  children: g.default.Messages.CHANNEL_POPULAR
                })]
              }) : null]
            })
          }), (0, a.jsx)("div", {
            className: h.channelActions,
            children: (0, u.canChannelBeDefault)(t.guild_id, t.id) ? (0, a.jsx)(o.Checkbox, {
              "aria-checked": O,
              value: O,
              type: o.Checkbox.Types.INVERTED,
              disabled: A,
              color: G ? r.default.colors.TEXT_BRAND.css : r.default.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: h.checkboxInner,
              displayOnly: !0
            }) : (0, a.jsxs)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.PRIMARY,
              className: h.lockedPill,
              innerClassName: h.lockedPillInner,
              onClick: N.NOOP,
              children: [(0, a.jsx)(T.default, {
                width: 16,
                height: 16
              }), (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: g.default.Messages.UNLOCK
              })]
            })
          })]
        })
      }), !C && (0, a.jsx)(R, {})]
    })
  });

function O(e) {
  let {
    categories: t,
    guild: s,
    className: n,
    hasSidebar: i
  } = e, r = l.useCallback(e => {
    let l = t._categories[e];
    return (0, a.jsx)(C, {
      channel: l.channel,
      guild: s
    }, l.channel.id)
  }, [t, s]), o = l.useCallback((e, l) => {
    let n = t._categories[e],
      r = t[n.channel.id][l];
    return null == r ? null : (0, a.jsx)(L, {
      category: n.channel,
      channel: r.channel,
      guild: s,
      isFirstChannel: 0 === l,
      isLastChannel: t[n.channel.id].length - 1 === l,
      tooltipDirection: i ? "right" : "top"
    }, r.channel.id)
  }, [t, s, i]), d = (0, _.useChannelBrowserSections)(s.id, t, 64);
  return (0, a.jsx)("div", {
    className: n,
    children: d.map((e, t) => {
      let s = r(t),
        l = [],
        n = e.rowCount;
      if (0 === n) return null;
      for (let e = 0; e < n; e++) l.push(o(t, e));
      return (0, a.jsxs)(a.Fragment, {
        children: [s, l]
      })
    })
  })
}