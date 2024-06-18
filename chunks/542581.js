"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  d = n(787014),
  u = n(607070),
  h = n(454585),
  m = n(814550),
  g = n(465670),
  x = n(928457),
  _ = n(185403),
  f = n(456269),
  E = n(470623),
  N = n(981631),
  T = n(689938),
  C = n(411900),
  p = n(946278);
t.Z = l.memo(function(e) {
  let {
    channel: t,
    onChange: a
  } = e, v = (0, E.AF)(), {
    guidelinesOpen: M
  } = (0, E.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), S = (0, f.r_)(t), [I, j] = l.useState(!1), A = l.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== I && j(t)
  }, [I]);
  l.useLayoutEffect(() => {
    setTimeout(a, 350)
  }, [M, a]);
  let R = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
    [Z, O] = l.useState(!M),
    b = (0, r.useSpring)({
      opacity: M ? 1 : 0,
      maxHeight: M ? 500 : 0,
      config: {
        duration: 300
      },
      immediate: R,
      onRest: () => O(!M)
    });
  return null != t.topic && t.topic.length > 0 ? (0, s.jsx)(r.animated.div, {
    style: b,
    className: Z ? C.hiddenVisually : void 0,
    children: (0, s.jsxs)("div", {
      className: C.container,
      children: [(0, s.jsxs)("div", {
        className: C.headerContainer,
        children: [(0, s.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          className: C.guidelinesHeader,
          children: [(0, s.jsx)(m.Z, {
            width: 20,
            height: 20
          }), T.Z.Messages.FORUM_POST_GUIDELINES_TITLE, S && (0, s.jsx)(c.Clickable, {
            onClick: () => {
              d.ZP.open(t.id, void 0, N.ZfP.TOPIC)
            },
            tag: "span",
            className: C.clickable,
            children: (0, s.jsx)(_.Z, {
              width: 16,
              height: 16
            })
          })]
        }), (0, s.jsx)(c.Clickable, {
          "aria-label": T.Z.Messages.CLOSE,
          className: C.clickable,
          onClick: () => {
            v.getState().setGuidelinesOpen(!1)
          },
          children: (0, s.jsx)(g.Z, {
            width: 16,
            height: 16
          })
        })]
      }), (0, s.jsxs)("div", {
        className: C.descriptionContainer,
        children: [(0, s.jsx)(c.Text, {
          selectable: !0,
          variant: "text-sm/normal",
          color: "header-secondary",
          style: {
            maxHeight: 220
          },
          className: i()(C.guidelines, p.markup),
          children: (0, s.jsx)("div", {
            ref: A,
            children: h.Z.parseForumPostGuidelines(t.topic, !0, {
              channelId: t.id,
              allowHeading: !0,
              allowList: !0
            })
          })
        }), I && (0, s.jsxs)("div", {
          className: C.showMore,
          children: [(0, s.jsx)("div", {
            className: C.gradient
          }), (0, s.jsx)("div", {
            className: C.linkContainer,
            children: (0, s.jsx)(c.Clickable, {
              className: C.showMoreLink,
              onClick: () => {
                (0, c.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("99387"), n.e("78712")]).then(n.bind(n, 223164));
                  return n => (0, s.jsx)(e, {
                    ...n,
                    channel: t
                  })
                })
              },
              children: (0, s.jsxs)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: C.showMoreText,
                children: [T.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(x.Z, {
                  className: C.showMoreIcon
                })]
              })
            })
          })]
        })]
      })]
    })
  }) : null
})