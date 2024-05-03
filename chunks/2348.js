"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("692547"),
  o = s("481060"),
  d = s("239091"),
  u = s("977258"),
  c = s("637853"),
  E = s("473403"),
  _ = s("216306"),
  I = s("514342"),
  T = s("630641"),
  S = s("743475"),
  f = s("827907"),
  m = s("868814"),
  N = s("981631"),
  g = s("689938"),
  h = s("11681");

function C(e) {
  let {
    guild: t,
    channel: l
  } = e, n = (0, f.useIsChecked)(l.id);
  return "null" === l.id ? (0, a.jsx)("div", {
    className: i()(h.categoryRow, h.uncategorized),
    children: (0, a.jsx)(o.Text, {
      className: h.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: l.name
    })
  }) : (0, a.jsxs)(o.Clickable, {
    className: i()(h.categoryRow, {
      [h.uncategorized]: "null" === l.id
    }),
    onContextMenu: e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([s.e("39285"), s.e("87983"), s.e("8965"), s.e("44568")]).then(s.bind(s, "139035"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: l,
          guild: t
        })
      })
    },
    onClick: e => (e.stopPropagation(), (0, u.canChannelBeDefault)(t.id, l.id) ? (0, S.toggleDefaultChannel)(l.id) : (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("35641")]).then(s.bind(s, "89216"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t.id,
        startingChannelId: l.id
      })
    }), !0),
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
    } = e, O = (0, f.useIsChecked)(t.id, l.id), A = (0, f.useIsDisabled)(t.id, l.id), p = (0, f.useDisabledTooltip)(t.id, l.id), M = (0, f.useTooltip)(n.id, l.id), D = null != (0, m.default)(n).find(e => e.id === t.id), v = (0, c.useIsChattableChannel)(t.id), G = e => {
      if (!A) return e.stopPropagation(), (0, u.canChannelBeDefault)(n.id, t.id) ? (0, S.toggleDefaultChannel)(t.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("35641")]).then(s.bind(s, "89216"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: n.id,
          startingChannelId: t.id
        })
      }), !0
    }, j = e => {
      t.isGuildVocal() ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("79695"), s.e("39285"), s.e("14262"), s.e("87983"), s.e("61447"), s.e("18320"), s.e("83331"), s.e("5772")]).then(s.bind(s, "213202"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t,
          guild: n
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("30386"), s.e("79695"), s.e("11250"), s.e("81539"), s.e("57878"), s.e("95393"), s.e("67535"), s.e("39285"), s.e("14262"), s.e("7590"), s.e("70866"), s.e("6380"), s.e("87983"), s.e("8739"), s.e("58286"), s.e("90687"), s.e("41947"), s.e("37766"), s.e("53466"), s.e("38779"), s.e("25464"), s.e("30243"), s.e("23404"), s.e("78690"), s.e("37220"), s.e("61447"), s.e("91315"), s.e("18320"), s.e("80954"), s.e("37839"), s.e("36254")]).then(s.bind(s, "373651"));
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
          className: i()(h.channelRow, {
            [h.firstChannel]: _,
            [h.lastChannel]: C,
            [h.disabled]: A
          }),
          ...e,
          onClick: G,
          onContextMenu: j,
          children: [(0, a.jsx)("div", {
            className: h.channelInfo,
            children: (0, a.jsxs)("div", {
              className: h.channelName,
              children: [(0, a.jsx)(E.ChannelItemIcon, {
                channel: t,
                guild: n
              }), (0, a.jsx)(I.default, {
                className: h.__invalid_name,
                children: (0, a.jsx)(o.Text, {
                  className: h.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: A ? "text-muted" : "text-normal",
                  children: t.name
                })
              }), D ? (0, a.jsxs)(a.Fragment, {
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
              color: v ? r.default.colors.TEXT_BRAND.css : r.default.colors.BUTTON_SECONDARY_BACKGROUND.css,
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