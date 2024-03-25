"use strict";
i.r(t), i.d(t, {
  LurkerModeUpsellPopoutTypes: function() {
    return n
  },
  default: function() {
    return T
  }
}), i("222007");
var n, a, l = i("37983"),
  o = i("884691"),
  s = i("446674"),
  r = i("77078"),
  u = i("851387"),
  c = i("476765"),
  d = i("449008"),
  h = i("267567"),
  m = i("49111"),
  f = i("782340"),
  p = i("194627");
(a = n || (n = {}))[a.CHAT = 0] = "CHAT", a[a.REACTIONS = 1] = "REACTIONS";
var T = e => {
  let {
    type: t,
    guild: n,
    closePopout: a,
    ctaRef: T
  } = e, R = (0, c.useUID)(), [g, E] = o.useState(!1), I = (0, s.useStateFromStores)([h.default], () => h.default.isLurking(n.id), [n.id]);
  o.useEffect(() => {
    g && !I && a()
  }, [g, I, a]);
  let N = null,
    S = f.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
  switch (t) {
    case 0:
      N = f.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
      break;
    case 1:
      N = f.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
      break;
    default:
      return (0, d.assertNever)(t)
  }
  if (null == N) return null;
  let _ = async () => {
    E(!0);
    try {
      await u.default.joinGuild(n.id, {
        source: m.JoinGuildSources.CHAT_INPUT_BLOCKER
      }), a()
    } catch {
      E(!1)
    }
  };
  return (0, l.jsxs)(r.Dialog, {
    className: p.container,
    "aria-labelledby": R,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: p.image,
      src: i("748301")
    }), (0, l.jsxs)("div", {
      className: p.content,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: R,
        children: N
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: S
      }), (0, l.jsxs)("div", {
        className: p.buttonContainer,
        children: [(0, l.jsx)(r.Button, {
          buttonRef: T,
          onClick: _,
          submitting: g,
          children: f.default.Messages.LURKER_MODE_POPOUT_JOIN
        }), (0, l.jsx)(r.Button, {
          onClick: a,
          look: r.Button.Looks.BLANK,
          className: p.cancel,
          children: f.default.Messages.LURKER_MODE_POPOUT_CANCEL
        })]
      })]
    })]
  })
}