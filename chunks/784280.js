"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var n = a("735250"),
  o = a("470079"),
  l = a("442837"),
  r = a("481060"),
  s = a("881052"),
  i = a("607070"),
  d = a("745510"),
  u = a("781792"),
  c = a("430824"),
  f = a("285952"),
  m = a("645792"),
  _ = a("981631"),
  E = a("689938"),
  h = a("830985");

function A(e) {
  let {
    guildId: t
  } = e, a = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(t)), [A, M] = o.useState(null), [b, g] = o.useState(""), {
    createMultipleConfettiAt: x
  } = o.useContext(d.ConfettiCannonContext), R = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion, []), p = async t => {
    let {
      onClose: a,
      guildId: n
    } = e;
    t.preventDefault(), M(null);
    try {
      await (0, u.updateGuildSelfMember)(n, {
        nick: b
      }), null == a || a()
    } catch (e) {
      M(new s.APIError(e))
    }
  }, {
    transitionState: C
  } = e, H = Object.values(c.default.getGuilds()).filter(e => e.id !== t && e.hasFeature(_.GuildFeatures.HUB)).length > 0, L = !R && !H && (null == a ? void 0 : a.hasFeature(_.GuildFeatures.HUB)) && (0, m.backToSchoolEnabled)();
  return o.useEffect(() => {
    if (L) {
      let e = window.innerWidth / 2;
      x(e, window.innerHeight / 2)
    }
  }, [x, L]), (0, n.jsxs)(r.ModalRoot, {
    className: h.__invalid_modalRoot,
    transitionState: C,
    "aria-label": E.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
      guildName: null == a ? void 0 : a.name
    }),
    children: [(0, n.jsxs)(r.ModalHeader, {
      separator: !1,
      className: h.formHeaderContainer,
      direction: f.default.Direction.VERTICAL,
      children: [(0, n.jsx)("div", {
        className: h.formImage
      }), (0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        className: h.formHeader,
        children: E.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
          guildName: null == a ? void 0 : a.name
        })
      }), (0, n.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: h.formSubHeader,
        children: E.default.Messages.HUB_REAL_NAME_MODAL_SUBHEADER
      })]
    }), (0, n.jsxs)("form", {
      className: h.formContent,
      onSubmit: p,
      children: [(0, n.jsx)(r.ModalContent, {
        children: (0, n.jsx)(r.FormItem, {
          title: E.default.Messages.HUB_REAL_NAME_MODAL_FORM_TITLE,
          children: (0, n.jsx)(r.TextInput, {
            placeholder: E.default.Messages.HUB_REAL_NAME_MODAL_FORM_PLACEHOLDER,
            onChange: e => {
              g(e)
            },
            error: null == A ? void 0 : A.getFirstFieldErrorMessage("name"),
            value: b
          })
        })
      }), (0, n.jsx)(r.ModalFooter, {
        className: h.formFooter,
        direction: f.default.Direction.VERTICAL,
        children: (0, n.jsx)(r.Button, {
          type: "submit",
          size: r.Button.Sizes.LARGE,
          color: r.Button.Colors.BRAND,
          children: E.default.Messages.HUB_REAL_NAME_CTA
        })
      })]
    })]
  })
}