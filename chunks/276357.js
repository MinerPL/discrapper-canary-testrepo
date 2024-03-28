"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("924826"),
  r = a("442837"),
  i = a("481060"),
  o = a("607070"),
  d = a("109434"),
  u = a("456269"),
  c = a("228392"),
  m = a("479099"),
  h = a("981631"),
  f = a("689938"),
  g = a("228155");

function x() {
  return Promise.resolve()
}

function C(e) {
  let {
    channel: t,
    closePopout: a,
    setPopoutRef: C
  } = e, _ = (0, u.useVisibleForumTags)(t), {
    tagFilter: S
  } = (0, d.useForumChannelStore)(t.id), T = (0, d.useForumChannelStoreApi)(), p = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), E = n.useCallback(e => {
    (0, c.trackForumTagFilterClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(S),
      added: !S.has(e),
      location: {
        page: h.AnalyticsPages.GUILD_CHANNEL,
        section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
        object: h.AnalyticsObjects.CHANNEL_TAG
      }
    }), T.getState().toggleTagFilter(t.id, e)
  }, [t, S, T]), N = n.useCallback(() => {
    T.getState().setTagFilter(t.id, new Set), !p && a()
  }, [T, t.id, p, a]), M = (0, l.default)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: x,
    scrollToEnd: x
  }), v = n.useRef(null);
  return n.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != v.current) {
        let e = v.current.querySelector(".".concat(g.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, s.jsxs)(i.Dialog, {
    ref: C,
    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
    className: g.container,
    children: [(0, s.jsx)("div", {
      className: g.header,
      children: (0, s.jsxs)("div", {
        className: g.headerLeft,
        children: [(0, s.jsx)(i.Heading, {
          color: "interactive-normal",
          variant: "text-xs/bold",
          className: g.headerText,
          children: f.default.Messages.FORUM_TAG_POST_SELECT
        }), (0, s.jsx)("div", {
          className: g.countContainer,
          children: (0, s.jsx)(i.Text, {
            className: g.countText,
            color: "none",
            variant: "text-xs/medium",
            children: S.size
          })
        })]
      })
    }), (0, s.jsx)(l.ListNavigatorProvider, {
      navigator: M,
      children: (0, s.jsx)(l.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...a
          } = e;
          return (0, s.jsx)("div", {
            ref: e => {
              t.current = e, v.current = e
            },
            ...a,
            className: g.tagContainer,
            children: _.map(e => (0, s.jsx)(m.default, {
              className: g.tag,
              tag: e,
              selected: S.has(e.id),
              onClick: () => E(e.id)
            }, e.id))
          })
        }
      })
    }), (0, s.jsx)("div", {
      className: g.separator
    }), (0, s.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.CUSTOM,
      className: g.clear,
      "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
      onClick: N,
      children: (0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: f.default.Messages.FORUM_CLEAR_ALL
      })
    })]
  })
}