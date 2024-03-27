"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("146606"),
  o = a("446674"),
  u = a("77078"),
  d = a("18054"),
  c = a("206230"),
  m = a("367376"),
  h = a("213523"),
  f = a("945330"),
  g = a("673078"),
  x = a("987772"),
  C = a("680986"),
  S = a("578198"),
  _ = a("49111"),
  T = a("782340"),
  p = a("268887"),
  E = a("919163"),
  N = n.memo(function(e) {
    let {
      channel: t,
      onChange: l
    } = e, N = (0, S.useForumPostComposerStoreApi)(), {
      guidelinesOpen: M
    } = (0, S.useForumPostComposerStore)(e => {
      let {
        guidelinesOpen: t
      } = e;
      return {
        guidelinesOpen: t
      }
    }), v = (0, C.useCanManageChannel)(t), [A, I] = n.useState(!1), j = n.useCallback(e => {
      if (null == e) return;
      let t = e.clientHeight >= 220;
      t !== A && I(t)
    }, [A]);
    n.useLayoutEffect(() => {
      setTimeout(l, 350)
    }, [M, l]);
    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
      [O, F] = n.useState(!M),
      b = (0, i.useSpring)({
        opacity: M ? 1 : 0,
        maxHeight: M ? 500 : 0,
        config: {
          duration: 300
        },
        immediate: R,
        onRest: () => F(!M)
      }),
      L = null != t.topic && t.topic.length > 0;
    return L ? (0, s.jsx)(i.animated.div, {
      style: b,
      className: O ? p.hiddenVisually : void 0,
      children: (0, s.jsxs)("div", {
        className: p.container,
        children: [(0, s.jsxs)("div", {
          className: p.headerContainer,
          children: [(0, s.jsxs)(u.Heading, {
            variant: "heading-lg/semibold",
            className: p.guidelinesHeader,
            children: [(0, s.jsx)(h.default, {
              width: 20,
              height: 20
            }), T.default.Messages.FORUM_POST_GUIDELINES_TITLE, v && (0, s.jsx)(u.Clickable, {
              onClick: () => {
                d.default.open(t.id, void 0, _.ChannelSettingsSubsections.TOPIC)
              },
              tag: "span",
              className: p.clickable,
              children: (0, s.jsx)(x.default, {
                width: 16,
                height: 16
              })
            })]
          }), (0, s.jsx)(u.Clickable, {
            "aria-label": T.default.Messages.CLOSE,
            className: p.clickable,
            onClick: () => {
              N.getState().setGuidelinesOpen(!1)
            },
            children: (0, s.jsx)(f.default, {
              width: 16,
              height: 16
            })
          })]
        }), (0, s.jsxs)("div", {
          className: p.descriptionContainer,
          children: [(0, s.jsx)(u.Text, {
            selectable: !0,
            variant: "text-sm/normal",
            color: "header-secondary",
            style: {
              maxHeight: 220
            },
            className: r(p.guidelines, E.markup),
            children: (0, s.jsx)("div", {
              ref: j,
              children: m.default.parseForumPostGuidelines(t.topic, !0, {
                channelId: t.id,
                allowHeading: !0,
                allowList: !0
              })
            })
          }), A && (0, s.jsxs)("div", {
            className: p.showMore,
            children: [(0, s.jsx)("div", {
              className: p.gradient
            }), (0, s.jsx)("div", {
              className: p.linkContainer,
              children: (0, s.jsx)(u.Clickable, {
                className: p.showMoreLink,
                onClick: () => {
                  (0, u.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await a.el("553415").then(a.bind(a, "553415"));
                    return a => (0, s.jsx)(e, {
                      ...a,
                      channel: t
                    })
                  })
                },
                children: (0, s.jsxs)(u.Text, {
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  className: p.showMoreText,
                  children: [T.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(g.default, {
                    className: p.showMoreIcon
                  })]
                })
              })
            })]
          })]
        })]
      })
    }) : null
  })