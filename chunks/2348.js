"use strict";
t.d(s, {
  Z: function() {
    return A
  }
}), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(692547),
  o = t(481060),
  c = t(239091),
  d = t(977258),
  u = t(637853),
  E = t(473403),
  _ = t(216306),
  I = t(514342),
  T = t(630641),
  N = t(743475),
  m = t(827907),
  S = t(868814),
  h = t(981631),
  g = t(689938),
  x = t(46771);

function C(e) {
  let {
    guild: s,
    channel: i
  } = e, l = (0, m.Mf)(i.id);
  return "null" === i.id ? (0, n.jsx)("div", {
    className: a()(x.categoryRow, x.uncategorized),
    children: (0, n.jsx)(o.Text, {
      className: x.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, n.jsxs)(o.Clickable, {
    className: a()(x.categoryRow, {
      [x.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("86977"), t.e("39285"), t.e("8965"), t.e("85760")]).then(t.bind(t, 139035));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: i,
          guild: s
        })
      })
    },
    onClick: e => (e.stopPropagation(), (0, d.s)(s.id, i.id) ? (0, N.pt)(i.id) : (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s.id,
        startingChannelId: i.id
      })
    }), !0),
    children: [(0, n.jsx)(o.Text, {
      className: x.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, n.jsx)(o.Checkbox, {
      "aria-checked": l,
      value: l,
      type: o.Checkbox.Types.INVERTED,
      className: x.checkbox,
      displayOnly: !0
    })]
  })
}
let R = i.memo(function() {
    return (0, n.jsx)("div", {
      className: x.separator
    })
  }),
  L = i.memo(function(e) {
    let {
      index: s
    } = e;
    return (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: x.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(s))
  }),
  O = i.memo(function(e) {
    let {
      channel: s,
      category: i,
      guild: l,
      isFirstChannel: _,
      isLastChannel: C,
      tooltipDirection: O = "right"
    } = e, A = (0, m.Mf)(s.id, i.id), p = (0, m.t4)(s.id, i.id), M = (0, m.EH)(s.id, i.id), f = (0, m.lL)(l.id, i.id), v = null != (0, S.Z)(l).find(e => e.id === s.id), D = (0, u.mn)(s.id), Z = e => {
      if (!p) return e.stopPropagation(), (0, d.s)(l.id, s.id) ? (0, N.pt)(s.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: l.id,
          startingChannelId: s.id
        })
      }), !0
    }, j = e => {
      s.isGuildVocal() ? (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("79695"), t.e("14262"), t.e("86977"), t.e("39285"), t.e("32400"), t.e("18320"), t.e("83331"), t.e("69069")]).then(t.bind(t, 213202));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: s,
          guild: l
        })
      }) : (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("49237"), t.e("99387"), t.e("50990"), t.e("79695"), t.e("6380"), t.e("11250"), t.e("57878"), t.e("77172"), t.e("67535"), t.e("95393"), t.e("14262"), t.e("86977"), t.e("81539"), t.e("7590"), t.e("8739"), t.e("58286"), t.e("39285"), t.e("90687"), t.e("41947"), t.e("30243"), t.e("88646"), t.e("38779"), t.e("55207"), t.e("15357"), t.e("47939"), t.e("47403"), t.e("48800"), t.e("39072"), t.e("32400"), t.e("37220"), t.e("62038"), t.e("91315"), t.e("18320"), t.e("72922"), t.e("77791")]).then(t.bind(t, 373651));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: s,
          guild: l
        })
      })
    };
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Tooltip, {
        text: null != M ? M : f,
        delay: 500,
        position: O,
        children: e => (0, n.jsxs)(o.Clickable, {
          className: a()(x.channelRow, {
            [x.firstChannel]: _,
            [x.lastChannel]: C,
            [x.disabled]: p
          }),
          ...e,
          onClick: Z,
          onContextMenu: j,
          children: [(0, n.jsx)("div", {
            className: x.channelInfo,
            children: (0, n.jsxs)("div", {
              className: x.channelName,
              children: [(0, n.jsx)(E._, {
                channel: s,
                guild: l
              }), (0, n.jsx)(I.Z, {
                className: x.__invalid_name,
                children: (0, n.jsx)(o.Text, {
                  className: x.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: p ? "text-muted" : "text-normal",
                  children: s.name
                })
              }), v ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(L, {
                  index: 0
                }), (0, n.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: x.channelSubtitle,
                  color: "text-brand",
                  children: g.Z.Messages.CHANNEL_POPULAR
                })]
              }) : null]
            })
          }), (0, n.jsx)("div", {
            className: x.channelActions,
            children: (0, d.s)(s.guild_id, s.id) ? (0, n.jsx)(o.Checkbox, {
              "aria-checked": A,
              value: A,
              type: o.Checkbox.Types.INVERTED,
              disabled: p,
              color: D ? r.Z.colors.TEXT_BRAND.css : r.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: x.checkboxInner,
              displayOnly: !0
            }) : (0, n.jsxs)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.PRIMARY,
              className: x.lockedPill,
              innerClassName: x.lockedPillInner,
              onClick: h.dG4,
              children: [(0, n.jsx)(T.Z, {
                width: 16,
                height: 16
              }), (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: g.Z.Messages.UNLOCK
              })]
            })
          })]
        })
      }), !C && (0, n.jsx)(R, {})]
    })
  });

function A(e) {
  let {
    categories: s,
    guild: t,
    className: l,
    hasSidebar: a
  } = e, r = i.useCallback(e => {
    let i = s._categories[e];
    return (0, n.jsx)(C, {
      channel: i.channel,
      guild: t
    }, i.channel.id)
  }, [s, t]), o = i.useCallback((e, i) => {
    let l = s._categories[e],
      r = s[l.channel.id][i];
    return null == r ? null : (0, n.jsx)(O, {
      category: l.channel,
      channel: r.channel,
      guild: t,
      isFirstChannel: 0 === i,
      isLastChannel: s[l.channel.id].length - 1 === i,
      tooltipDirection: a ? "right" : "top"
    }, r.channel.id)
  }, [s, t, a]), c = (0, _.tn)(t.id, s, 64);
  return (0, n.jsx)("div", {
    className: l,
    children: c.map((e, s) => {
      let t = r(s),
        i = [],
        l = e.rowCount;
      if (0 === l) return null;
      for (let e = 0; e < l; e++) i.push(o(s, e));
      return (0, n.jsxs)(n.Fragment, {
        children: [t, i]
      })
    })
  })
}