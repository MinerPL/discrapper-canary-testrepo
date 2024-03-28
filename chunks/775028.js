"use strict";
l.r(t), l.d(t, {
  default: function() {
    return F
  }
}), l("47120"), l("653041"), l("536091");
var n = l("735250"),
  a = l("470079"),
  s = l("803997"),
  i = l.n(s),
  r = l("442837"),
  d = l("524437"),
  o = l("692547"),
  u = l("481060"),
  c = l("239091"),
  h = l("605236"),
  f = l("66999"),
  m = l("549631"),
  C = l("473403"),
  N = l("454585"),
  x = l("22082"),
  g = l("703656"),
  p = l("6025"),
  S = l("922482"),
  E = l("601070"),
  I = l("514342"),
  _ = l("26290"),
  v = l("216306"),
  T = l("163"),
  O = l("753540"),
  A = l("70297"),
  R = l("981631"),
  j = l("176505"),
  b = l("689938"),
  L = l("624769");
let M = new Set([R.ChannelTypes.GUILD_FORUM, R.ChannelTypes.GUILD_MEDIA]),
  D = new Set([R.ChannelTypes.GUILD_VOICE, R.ChannelTypes.GUILD_STAGE_VOICE]);

function y(e) {
  let {
    guild: t,
    channel: a,
    onCategoryClick: s
  } = e, r = (0, O.useIsChecked)(t.id, a.id, a.id), d = (0, O.useIsDisabled)(t.id, a.id, a.id);
  return (0, n.jsxs)("div", {
    className: i()(L.categoryRow, {
      [L.uncategorized]: "null" === a.id
    }),
    onContextMenu: e => {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await l.e("8965").then(l.bind(l, "139035"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: a,
          guild: t
        })
      })
    },
    children: [(0, n.jsx)(u.Text, {
      className: L.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: a.name
    }), "null" !== a.id && !d && (0, n.jsxs)(u.Clickable, {
      className: L.selectAll,
      onClick: () => {
        !d && s(t.id, a.id, a.id)
      },
      children: [(0, n.jsx)(u.Checkbox, {
        className: L.selectAllCheckbox,
        size: 14,
        shape: u.Checkbox.Shapes.SMALL_BOX,
        value: r,
        type: u.Checkbox.Types.INVERTED,
        displayOnly: !0
      }), (0, n.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: b.default.Messages.CHANNEL_BROWSER_SELECT_ALL
      })]
    })]
  })
}
let B = a.memo(function() {
    return (0, n.jsx)("div", {
      className: L.separator
    })
  }),
  w = a.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: L.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  H = a.memo(function(e) {
    let {
      channel: t,
      category: a,
      guild: s,
      isFirstChannel: d,
      isLastChannel: h,
      onChannelClick: T,
      tooltipDirection: A = "right"
    } = e, {
      isSubscriptionGated: y
    } = (0, f.default)(t.id), H = (0, O.useIsChecked)(s.id, t.id, a.id), F = (0, O.useIsDisabled)(s.id, t.id, a.id), U = (0, O.useDisabledTooltip)(s.id, a.id), k = (0, r.useStateFromStores)([E.default], () => E.default.getActiveThreadCount(s.id, t.id)), P = (0, r.useStateFromStores)([x.default], () => x.default.shouldIndicateNewChannel(s.id, t.id)), G = e => {
      if (!F) return e.stopPropagation(), T(s.id, t.id, a.id), !0
    }, W = e => {
      t.isGuildVocal() ? (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("79695"), l.e("18320"), l.e("83331")]).then(l.bind(l, "213202"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: t,
          guild: s
        })
      }) : (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("79695"), l.e("18320"), l.e("54310")]).then(l.bind(l, "373651"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: t,
          guild: s
        })
      })
    }, z = function(e, t) {
      let l = [];
      return R.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && l.push((0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: L.channelSubtitle,
        children: b.default.Messages.ACTIVE_FORUM_POST_COUNT.format({
          count: t
        })
      }, "thread-count")), !D.has(e.type) && l.push((0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: L.channelSubtitle,
        children: (0, v.getActiveAgoTimestamp)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && l.push((0, n.jsx)(I.default, {
        children: (0, n.jsx)(u.Text, {
          className: L.topic,
          variant: "text-xs/normal",
          children: N.default.parseTopic(e.topic, !0, {
            channelId: e.id
          })
        })
      }, "topic")), [l.map((e, t) => [e, (0, n.jsx)(w, {
        index: t
      }, "subtitle-separator-".concat(t))])].flat(2).slice(0, -1)
    }(t, k), V = e => (e.stopPropagation(), M.has(t.type) || e.shiftKey) ? ((0, g.transitionToGuild)(s.id, t.id), !0) : t.isGuildStageVoice() || t.isGuildVoice() ? ((0, S.connectAndOpen)(t), !0) : (p.default.openChannelAsSidebar({
      guildId: t.guild_id,
      channelId: t.id,
      baseChannelId: j.StaticChannelRoute.CHANNEL_BROWSER
    }), !0), Y = b.default.Messages.CHANNEL_BROWSER_VIEW;
    t.isGuildStageVoice() || t.isGuildVoice() ? Y = b.default.Messages.JOIN : t.isForumLikeChannel() && (Y = b.default.Messages.OPEN);
    let Z = F ? "text-muted" : "text-normal",
      X = (0, u.useToken)(F ? o.default.colors.TEXT_MUTED : o.default.colors.TEXT_NORMAL).hex();
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.Tooltip, {
        text: U,
        delay: 500,
        position: A,
        children: e => (0, n.jsxs)(u.Clickable, {
          className: i()(L.channelRow, {
            [L.firstChannel]: d,
            [L.lastChannel]: h,
            [L.disabled]: F
          }),
          ...e,
          onClick: G,
          onContextMenu: W,
          children: [(0, n.jsxs)("div", {
            className: L.channelInfo,
            children: [(0, n.jsxs)("div", {
              className: L.channelName,
              children: [(0, n.jsx)(C.ChannelItemIcon, {
                channel: t,
                guild: s
              }), (0, n.jsx)(I.default, {
                className: L.__invalid_name,
                children: (0, n.jsx)(u.Text, {
                  className: L.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: Z,
                  children: t.name
                })
              }), y ? (0, n.jsx)(m.default, {
                color: X,
                className: L.premiumIcon
              }) : null, P ? (0, n.jsx)(_.TextBadge, {
                text: b.default.Messages.NEW,
                color: o.default.unsafe_rawColors.BRAND_260.css,
                className: L.titleBadge
              }) : null]
            }), (0, n.jsx)("div", {
              className: L.channelSubtitles,
              children: z
            })]
          }), (0, n.jsxs)("div", {
            className: L.channelActions,
            children: [(0, n.jsx)(u.Button, {
              look: u.ButtonLooks.OUTLINED,
              color: u.ButtonColors.PRIMARY,
              size: u.ButtonSizes.SMALL,
              className: L.viewChannelButton,
              onClick: V,
              children: Y
            }), (0, n.jsx)(u.Checkbox, {
              "aria-checked": H,
              value: H,
              type: u.Checkbox.Types.INVERTED,
              disabled: F,
              innerClassName: L.checkboxInner,
              displayOnly: !0
            })]
          })]
        })
      }), !h && (0, n.jsx)(B, {})]
    })
  });

function F(e) {
  let {
    categories: t,
    guild: l,
    className: s,
    innerClassName: r,
    hasSidebar: o
  } = e, {
    onChannelClick: c
  } = (0, T.default)(l.id), f = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX) ? 0 : -1, m = a.useCallback(e => {
    let {
      section: a
    } = e;
    if (0 === a && -1 === f) return null;
    let s = t._categories[a + f];
    return (0, n.jsx)(y, {
      channel: s.channel,
      guild: l,
      onCategoryClick: c
    }, s.channel.id)
  }, [t, l, f, c]), C = a.useCallback(e => {
    let {
      section: a,
      row: s
    } = e;
    if (0 === a && -1 === f) return (0, n.jsx)(A.default, {
      guild: l
    });
    let i = t._categories[a + f],
      r = t[i.channel.id][s];
    return null == r ? null : (0, n.jsx)(H, {
      category: i.channel,
      channel: r.channel,
      guild: l,
      isFirstChannel: 0 === s,
      isLastChannel: t[i.channel.id].length - 1 === s,
      tooltipDirection: o ? "right" : "top",
      onChannelClick: c
    }, r.channel.id)
  }, [t, l, f, o, c]), N = (0, A.useNuxCardHeight)(l.id), x = (0, v.useChannelBrowserSections)(l.id, t, 64, N);
  return (0, n.jsx)(u.ListAuto, {
    className: s,
    innerClassName: i()(r, L.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => x[e].rowHeight,
    renderSection: m,
    renderRow: C,
    sections: x.map(e => e.rowCount)
  }, "channel-browser-list")
}