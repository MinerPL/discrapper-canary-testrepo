"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  },
  useCustomizeGuildSlide: function() {
    return x
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("803997"),
  n = s.n(i),
  d = s("481060"),
  r = s("749210"),
  o = s("820160"),
  u = s("594174"),
  c = s("285952"),
  C = s("153124"),
  m = s("892880"),
  f = s("458879"),
  T = s("981631"),
  _ = s("689938"),
  E = s("825174");

function x(e) {
  var t;
  let {
    guildTemplate: s,
    onClose: i,
    onBack: x,
    onHubGuildInfoSet: I,
    onGuildCreated: L,
    isSlideReady: h,
    hasFooter: g = !0,
    isCommunity: N = !1
  } = e, [S, M] = l.useState(m.default.getGuildNameSuggestion()), [p, A] = l.useState(null), [j, U] = l.useState(!1), [B, D] = l.useState(null), H = !!(null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()), [O, G] = l.useState(H), R = (0, C.useUID)(), v = l.useRef(null);
  l.useEffect(() => {
    var e;
    h && (null === (e = v.current) || void 0 === e || e.focus())
  }, [h]);
  let y = l.useCallback(async e => {
      if (e.preventDefault(), null != s) {
        U(!0), D(null);
        try {
          if (null != I) I(S, p);
          else {
            let e = await f.default.createGuildFromTemplate(S, p, s, N, O);
            r.default.transitionToGuildSync(e.id), null == L || L(e.id)
          }
        } catch (e) {
          D(e)
        }
        U(!1)
      }
    }, [s, I, S, p, N, O, L]),
    b = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.Button, {
        color: d.Button.Colors.BRAND,
        onClick: y,
        disabled: 0 === S.length,
        submitting: j,
        children: null != I ? _.default.Messages.NEXT : _.default.Messages.CREATE
      }), (0, a.jsx)(d.Button, {
        className: E.backButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.MIN,
        onClick: x,
        children: _.default.Messages.BACK
      })]
    });
  return {
    content: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(d.ModalHeader, {
        direction: c.default.Direction.VERTICAL,
        className: E.header,
        separator: !1,
        children: [(0, a.jsx)(d.Heading, {
          className: n()(E.title),
          variant: "heading-xl/semibold",
          children: _.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
        }), (0, a.jsx)(d.Text, {
          className: E.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: _.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
        }), null != i && (0, a.jsx)(d.ModalCloseButton, {
          className: E.closeButton,
          onClick: i
        })]
      }), (0, a.jsxs)(d.ModalContent, {
        className: E.createGuild,
        children: [(0, a.jsx)("div", {
          className: E.uploadIcon,
          children: (0, a.jsx)(o.default, {
            icon: p,
            onChange: A
          })
        }), (0, a.jsxs)("form", {
          onSubmit: y,
          children: [(0, a.jsxs)(d.FormItem, {
            className: E.nameInput,
            error: null == B ? void 0 : B.getFirstFieldErrorMessage("name"),
            children: [(0, a.jsx)(d.FormTitle, {
              tag: "label",
              htmlFor: R,
              children: _.default.Messages.FORM_LABEL_SERVER_NAME
            }), (0, a.jsx)(d.TextInput, {
              type: "text",
              value: S,
              maxLength: 100,
              onChange: M,
              inputRef: v,
              id: R
            })]
          }), H && (0, a.jsx)(d.FormSwitch, {
            hideBorder: !0,
            value: O,
            onChange: e => G(e),
            note: _.default.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
            className: E.formItemSpaced,
            children: (0, a.jsx)(d.FormTitle, {
              tag: "label",
              children: "Staff Only"
            })
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: E.guidelines,
            children: _.default.Messages.CREATE_SERVER_GUIDELINES.format({
              guidelinesURL: T.MarketingURLs.GUIDELINES
            })
          })]
        }), null == B || B.hasFieldErrors() ? null : (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: B.message
        })]
      }), g && (0, a.jsx)(d.ModalFooter, {
        justify: c.default.Justify.BETWEEN,
        children: b
      })]
    }),
    footer: b
  }
}

function I(e) {
  let {
    content: t
  } = x(e);
  return t
}