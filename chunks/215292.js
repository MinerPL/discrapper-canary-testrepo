"use strict";
s.r(a), s.d(a, {
  default: function() {
    return I
  },
  useChannelPromptSlide: function() {
    return o
  }
}), s("47120");
var n = s("735250"),
  t = s("470079"),
  l = s("442837"),
  E = s("481060"),
  _ = s("493683"),
  d = s("881052"),
  i = s("984933"),
  T = s("430824"),
  r = s("285952"),
  u = s("346656"),
  L = s("153124"),
  M = s("689938"),
  C = s("261556");

function o(e) {
  let {
    createdGuildId: a,
    hasFooter: s = !0,
    onClose: o,
    onChannelPromptCompleted: I,
    isSlideReady: A
  } = e, [c, N] = t.useState(""), [p, G] = t.useState(null), [m, f] = t.useState(!1), U = (0, L.useUID)(), O = (0, l.useStateFromStores)([T.default], () => T.default.getGuild(a), [a]), D = t.useRef(null);
  t.useEffect(() => {
    var e;
    A && (null === (e = D.current) || void 0 === e || e.focus())
  }, [A]);
  let h = t.useCallback(async e => {
      if (e.preventDefault(), null == O) return;
      f(!0), G(null);
      let a = i.default.getDefaultChannel(O.id);
      try {
        let e = M.default.Messages.NUF_CHANNEL_PROMPT_CHANNEL_TOPIC_TEMPLATE.format({
          topic: c
        });
        await _.default.createTextChannel(O.id, c, null == a ? void 0 : a.parent_id, e), I()
      } catch (e) {
        G(new d.V6OrEarlierAPIError(e))
      }
      f(!1)
    }, [O, c, I]),
    g = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.Button, {
        color: E.Button.Colors.BRAND,
        onClick: h,
        disabled: 0 === c.length,
        submitting: m,
        children: M.default.Messages.DONE
      }), (0, n.jsx)(E.Button, {
        className: C.skipButton,
        look: E.Button.Looks.BLANK,
        size: E.Button.Sizes.MIN,
        onClick: I,
        children: M.default.Messages.SKIP
      })]
    });
  return {
    content: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(E.ModalHeader, {
        className: C.header,
        direction: r.default.Direction.VERTICAL,
        separator: !1,
        children: [null != O && (0, n.jsx)(u.default, {
          guild: O
        }), (0, n.jsx)(E.Text, {
          className: C.guildName,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: null == O ? void 0 : O.name
        }), (0, n.jsx)(E.Heading, {
          className: C.title,
          variant: "heading-sm/semibold",
          children: M.default.Messages.NUF_CHANNEL_PROMPT_TITLE
        }), (0, n.jsx)(E.Text, {
          className: C.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: M.default.Messages.NUF_CHANNEL_PROMPT_SUBTITLE
        }), null != o && (0, n.jsx)(E.ModalCloseButton, {
          className: C.closeButton,
          onClick: o
        })]
      }), (0, n.jsxs)(E.ModalContent, {
        className: C.channelPrompt,
        children: [(0, n.jsx)("form", {
          onSubmit: h,
          children: (0, n.jsx)(E.FormItem, {
            title: M.default.Messages.NUF_CHANNEL_PROMPT_TOPIC,
            tag: "label",
            htmlFor: U,
            error: null == p ? void 0 : p.getFieldMessage("name"),
            children: (0, n.jsx)(E.TextInput, {
              type: "text",
              value: c,
              id: U,
              onChange: N,
              placeholder: M.default.Messages.NUF_CHANNEL_PROMPT_TOPIC_PLACEHOLDER,
              inputRef: D
            })
          })
        }), null != p && 0 === Object.keys(p.fields).length && (0, n.jsx)(E.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: p.message
        })]
      }), s && (0, n.jsx)(E.ModalFooter, {
        children: g
      })]
    }),
    footer: g
  }
}

function I(e) {
  let {
    content: a
  } = o(e);
  return a
}