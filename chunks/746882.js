"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("47120");
var n, l, r = a("735250"),
  o = a("470079"),
  s = a("512722"),
  i = a.n(s),
  u = a("913527"),
  c = a.n(u),
  d = a("442837"),
  f = a("481060"),
  E = a("749210"),
  A = a("592125"),
  h = a("944486"),
  _ = a("594174"),
  p = a("285952"),
  m = a("153124"),
  v = a("626135"),
  g = a("63063"),
  T = a("771308"),
  b = a("758119"),
  G = a("13430"),
  y = a("723359"),
  M = a("981631"),
  x = a("689938"),
  R = a("895409");

function O(e) {
  let {
    transitionState: t,
    source: n
  } = e, l = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), s = (0, d.useStateFromStores)([h.default, A.default], () => A.default.getChannel(h.default.getChannelId())), [u, O] = o.useState(null), [C, S] = o.useState(null), [N, k] = o.useState(!1), [D, I] = o.useState(0), j = o.createRef(), B = o.createRef(), F = (0, m.useUID)(), L = null != u ? c()().diff(u, "years") : null;

  function w() {
    let e = null == s ? void 0 : s.getGuildId();
    E.default.nsfwReturnToSafety(e), (0, b.closeAgeGateModal)(n)
  }
  async function U() {
    i()(null != u, "Cannot submit null birthday.");
    try {
      return S(null), k(!0), await (0, T.submitDateOfBirth)(u, n)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, b.openFailureAgeGateModal)(n, t.body.date_of_birth);
      else {
        var e;
        (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? S(x.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : S(null == t ? void 0 : t.body.message), k(!1)
      }
    }
  }
  async function Y() {
    if (i()(null != L, "Cannot submit if we haven't been able to calculate age."), L < 18) {
      I(1);
      return
    }
    await U()
  }
  async function P(e) {
    e.preventDefault(), !N && null != u && await Y()
  }
  async function H() {
    null == await U() && I(0)
  }
  o.useEffect(() => {
    null != l && null != l.nsfwAllowed && (0, b.openSuccessAgeGateModal)(n)
  }), o.useEffect(() => {
    v.default.track(M.AnalyticEvents.AGE_GATE_ACTION, {
      source: n,
      action: y.AgeGateAnalyticAction.AGE_GATE_OPEN
    })
  }, [n]);
  let z = o.useCallback(e => {
      O(e)
    }, [O]),
    K = o.useCallback(() => {
      var e;
      null === (e = B.current) || void 0 === e || e.focus()
    }, [B]);
  return 0 === D ? function() {
    let e = (() => {
        if (n === y.AgeGateSource.FAMILY_CENTER) return x.default.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
        return x.default.Messages.AGE_GATE_EXISTING_HEADER
      })(),
      l = (() => {
        switch (n) {
          case y.AgeGateSource.FAMILY_CENTER:
            return x.default.Messages.AGE_GATE_FAMILY_CENTER_BODY;
          case y.AgeGateSource.DEEP_LINK_PROMPT:
            return x.default.Messages.AGE_GATE_DEEP_LINK_BODY.format({
              helpURL: g.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
            });
          default:
            return x.default.Messages.AGE_GATE_NSFW_BODY.format({
              helpURL: g.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
            })
        }
      })();
    return (0, r.jsxs)(f.ModalRoot, {
      transitionState: t,
      size: f.ModalSize.SMALL,
      "aria-labelledby": F,
      children: [(0, r.jsxs)(f.ModalContent, {
        children: [(0, r.jsxs)("div", {
          className: R.container,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: a("462991"),
            className: R.img
          }), (0, r.jsx)(f.Heading, {
            variant: "heading-xl/semibold",
            className: R.title,
            id: F,
            children: e
          }), (0, r.jsx)(f.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: l
          })]
        }), (0, r.jsx)("form", {
          onSubmit: P,
          children: (0, r.jsx)(G.default, {
            label: x.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
            wrapperClassName: R.birthday,
            name: "date_of_birth",
            onChange: z,
            onPopulated: K,
            error: C,
            value: u,
            ref: j,
            autoFocus: !0
          })
        })]
      }), (0, r.jsxs)(f.ModalFooter, {
        justify: p.default.Justify.BETWEEN,
        children: [(0, r.jsx)(f.Button, {
          buttonRef: B,
          submitting: N,
          disabled: null == u,
          size: f.ButtonSizes.SMALL,
          onClick: Y,
          children: x.default.Messages.AGE_GATE_SUBMIT
        }), (0, r.jsx)(f.Button, {
          look: f.Button.Looks.LINK,
          size: f.Button.Sizes.NONE,
          color: f.Button.Colors.PRIMARY,
          onClick: w,
          children: x.default.Messages.AGE_GATE_GO_BACK
        })]
      })]
    })
  }() : (0, r.jsxs)(f.ModalRoot, {
    transitionState: f.ModalTransitionState.ENTERED,
    size: f.ModalSize.SMALL,
    "aria-labelledby": F,
    children: [(0, r.jsx)(f.ModalContent, {
      children: (0, r.jsxs)("div", {
        className: R.confirmContainer,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          className: R.confirmTitle,
          id: F,
          children: x.default.Messages.AGE_GATE_CONFIRM_HEADER.format({
            age: L
          })
        }), (0, r.jsx)(f.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: x.default.Messages.AGE_GATE_NSFW_BODY.format({
            helpURL: g.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
          })
        })]
      })
    }), (0, r.jsxs)(f.ModalFooter, {
      className: R.confirmFooter,
      children: [(0, r.jsx)(f.Button, {
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.NONE,
        color: f.Button.Colors.PRIMARY,
        onClick: () => I(0),
        children: x.default.Messages.AGE_GATE_CONFIRM_GO_BACK
      }), (0, r.jsx)(f.Button, {
        color: f.Button.Colors.BRAND,
        onClick: H,
        children: x.default.Messages.AGE_GATE_CONFIRM_BUTTON
      })]
    })]
  })
}(l = n || (n = {}))[l.AGE_GATE_FORM = 0] = "AGE_GATE_FORM", l[l.CONFIRM = 1] = "CONFIRM"