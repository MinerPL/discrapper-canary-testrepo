"use strict";
n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(924826),
  i = n(91192),
  r = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(109434),
  u = n(456269),
  h = n(228392),
  m = n(479099),
  g = n(981631),
  x = n(689938),
  _ = n(451379);

function f() {
  return Promise.resolve()
}

function E(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: E
  } = e, N = (0, u.Vm)(t), {
    tagFilter: T
  } = (0, d.H)(t.id), C = (0, d.v)(), p = (0, r.e7)([c.Z], () => c.Z.keyboardModeEnabled), v = l.useCallback(e => {
    (0, h.e7)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(T),
      added: !T.has(e),
      location: {
        page: g.ZY5.GUILD_CHANNEL,
        section: g.jXE.FORUM_CHANNEL_HEADER,
        object: g.qAy.CHANNEL_TAG
      }
    }), C.getState().toggleTagFilter(t.id, e)
  }, [t, T, C]), M = l.useCallback(() => {
    C.getState().setTagFilter(t.id, new Set), !p && n()
  }, [C, t.id, p, n]), S = (0, a.ZP)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: f,
    scrollToEnd: f
  }), I = l.useRef(null);
  return l.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != I.current) {
        let e = I.current.querySelector(".".concat(_.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, s.jsxs)(o.Dialog, {
    ref: E,
    "aria-label": x.Z.Messages.FORUM_TAG_FILTER_HEADER,
    className: _.container,
    children: [(0, s.jsx)("div", {
      className: _.header,
      children: (0, s.jsxs)("div", {
        className: _.headerLeft,
        children: [(0, s.jsx)(o.Heading, {
          color: "interactive-normal",
          variant: "text-xs/bold",
          className: _.headerText,
          children: x.Z.Messages.FORUM_TAG_POST_SELECT
        }), (0, s.jsx)("div", {
          className: _.countContainer,
          children: (0, s.jsx)(o.Text, {
            className: _.countText,
            color: "none",
            variant: "text-xs/medium",
            children: T.size
          })
        })]
      })
    }), (0, s.jsx)(i.bG, {
      navigator: S,
      children: (0, s.jsx)(i.SJ, {
        children: e => {
          let {
            ref: t,
            ...n
          } = e;
          return (0, s.jsx)("div", {
            ref: e => {
              t.current = e, I.current = e
            },
            ...n,
            className: _.tagContainer,
            children: N.map(e => (0, s.jsx)(m.Z, {
              className: _.tag,
              tag: e,
              selected: T.has(e.id),
              onClick: () => v(e.id)
            }, e.id))
          })
        }
      })
    }), (0, s.jsx)("div", {
      className: _.separator
    }), (0, s.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      color: o.Button.Colors.CUSTOM,
      className: _.clear,
      "aria-label": x.Z.Messages.FORUM_CLEAR_ALL,
      onClick: M,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: x.Z.Messages.FORUM_CLEAR_ALL
      })
    })]
  })
}