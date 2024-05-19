"use strict";
i.r(t), i.d(t, {
  LurkerModeUpsellPopoutTypes: function() {
    return n
  }
}), i("47120");
var n, a, s = i("735250"),
  l = i("470079"),
  o = i("442837"),
  r = i("481060"),
  u = i("749210"),
  d = i("153124"),
  c = i("823379"),
  h = i("41776"),
  f = i("981631"),
  m = i("689938"),
  p = i("19685");
(a = n || (n = {}))[a.CHAT = 0] = "CHAT", a[a.REACTIONS = 1] = "REACTIONS";
t.default = e => {
  let {
    type: t,
    guild: n,
    closePopout: a,
    ctaRef: g
  } = e, T = (0, d.useUID)(), [S, v] = l.useState(!1), E = (0, o.useStateFromStores)([h.default], () => h.default.isLurking(n.id), [n.id]);
  l.useEffect(() => {
    S && !E && a()
  }, [S, E, a]);
  let R = null,
    I = m.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
  switch (t) {
    case 0:
      R = m.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
      break;
    case 1:
      R = m.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
      break;
    default:
      return (0, c.assertNever)(t)
  }
  if (null == R) return null;
  let N = async () => {
    v(!0);
    try {
      await u.default.joinGuild(n.id, {
        source: f.JoinGuildSources.CHAT_INPUT_BLOCKER
      }), a()
    } catch {
      v(!1)
    }
  };
  return (0, s.jsxs)(r.Dialog, {
    className: p.container,
    "aria-labelledby": T,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: p.image,
      src: i("64395")
    }), (0, s.jsxs)("div", {
      className: p.content,
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: T,
        children: R
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I
      }), (0, s.jsxs)("div", {
        className: p.buttonContainer,
        children: [(0, s.jsx)(r.Button, {
          buttonRef: g,
          onClick: N,
          submitting: S,
          children: m.default.Messages.LURKER_MODE_POPOUT_JOIN
        }), (0, s.jsx)(r.Button, {
          onClick: a,
          look: r.Button.Looks.BLANK,
          className: p.cancel,
          children: m.default.Messages.LURKER_MODE_POPOUT_CANCEL
        })]
      })]
    })]
  })
}