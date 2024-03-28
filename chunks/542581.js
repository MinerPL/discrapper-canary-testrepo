"use strict";
a.r(t), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("718017"),
  o = a("442837"),
  d = a("481060"),
  u = a("787014"),
  c = a("607070"),
  m = a("454585"),
  h = a("814550"),
  f = a("465670"),
  g = a("928457"),
  x = a("185403"),
  C = a("456269"),
  _ = a("470623"),
  S = a("981631"),
  T = a("689938"),
  p = a("688362"),
  E = a("931093");
t.default = n.memo(function(e) {
  let {
    channel: t,
    onChange: l
  } = e, N = (0, _.useForumPostComposerStoreApi)(), {
    guidelinesOpen: M
  } = (0, _.useForumPostComposerStore)(e => {
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
    [O, b] = n.useState(!M),
    F = (0, i.useSpring)({
      opacity: M ? 1 : 0,
      maxHeight: M ? 500 : 0,
      config: {
        duration: 300
      },
      immediate: R,
      onRest: () => b(!M)
    });
  return null != t.topic && t.topic.length > 0 ? (0, s.jsx)(i.animated.div, {
    style: F,
    className: O ? p.hiddenVisually : void 0,
    children: (0, s.jsxs)("div", {
      className: p.container,
      children: [(0, s.jsxs)("div", {
        className: p.headerContainer,
        children: [(0, s.jsxs)(d.Heading, {
          variant: "heading-lg/semibold",
          className: p.guidelinesHeader,
          children: [(0, s.jsx)(h.default, {
            width: 20,
            height: 20
          }), T.default.Messages.FORUM_POST_GUIDELINES_TITLE, v && (0, s.jsx)(d.Clickable, {
            onClick: () => {
              u.default.open(t.id, void 0, S.ChannelSettingsSubsections.TOPIC)
            },
            tag: "span",
            className: p.clickable,
            children: (0, s.jsx)(x.default, {
              width: 16,
              height: 16
            })
          })]
        }), (0, s.jsx)(d.Clickable, {
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
        children: [(0, s.jsx)(d.Text, {
          selectable: !0,
          variant: "text-sm/normal",
          color: "header-secondary",
          style: {
            maxHeight: 220
          },
          className: r()(p.guidelines, E.markup),
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
            children: (0, s.jsx)(d.Clickable, {
              className: p.showMoreLink,
              onClick: () => {
                (0, d.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("78712")]).then(a.bind(a, "223164"));
                  return a => (0, s.jsx)(e, {
                    ...a,
                    channel: t
                  })
                })
              },
              children: (0, s.jsxs)(d.Text, {
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