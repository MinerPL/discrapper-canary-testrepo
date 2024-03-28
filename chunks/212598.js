"use strict";
t.r(a), t.d(a, {
  TwoWayLinkPreConnect: function() {
    return f
  }
}), t("411104");
var l = t("735250"),
  n = t("470079"),
  s = t("512722"),
  r = t.n(s),
  o = t("478677"),
  i = t("481060"),
  c = t("570140"),
  d = t("275759"),
  u = t("202120"),
  N = t("710845"),
  h = t("285952"),
  x = t("441957"),
  m = t("689938"),
  C = t("837537");
let T = new N.default("TwoWayLink");

function f(e) {
  let {
    platformType: a,
    isWaitingForConnection: t,
    onWaitingForConnection: s,
    expectedCallbackState: N,
    onAuthToken: f,
    onError: p,
    onClose: j,
    img: y,
    title: E,
    body: k,
    redirectDestination: v
  } = e, L = n.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.openProviderAuthorize)(a, {
          twoWayLinkType: o.TwoWayLinkType.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      T.error("Error opening provider authorize page", e), p();
      return
    }
    let {
      state: t
    } = (0, d.getCallbackParamsFromURL)(e);
    r()(null != t, "Authorize URL state query parameter must be present"), null == s || s(t)
  }, [a, p, s]), g = n.useCallback(e => {
    let {
      callbackCode: t,
      callbackState: l
    } = e;
    if (l !== N) {
      T.warn("".concat(a, " link: received mismatching callback state!"));
      return
    }
    f({
      callbackCode: t,
      callbackState: l
    })
  }, [a, N, f]);
  return n.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", g), () => {
    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", g)
  }), [g]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: h.default.Direction.VERTICAL,
      className: C.header,
      separator: !1,
      children: [(0, l.jsx)(i.Text, {
        className: C.stepHeader,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: m.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
          number: 1,
          total: 2
        })
      }), (0, l.jsxs)("div", {
        className: C.illustration,
        children: [y, " "]
      }), (0, l.jsx)(i.Heading, {
        className: C.title,
        variant: "heading-xl/extrabold",
        children: E
      }), null != j && (0, l.jsx)(i.ModalCloseButton, {
        className: C.closeButton,
        onClick: j
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: C.body,
      paddingFix: !1,
      children: [(0, l.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: k
      }), !t && (0, l.jsx)(i.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
          redirectUrl: v
        })
      })]
    }), (0, l.jsx)(i.ModalFooter, {
      className: C.footer,
      children: (0, l.jsxs)(i.Button, {
        className: C.footerButton,
        color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
        onClick: L,
        children: [t ? m.default.Messages.RETRY : m.default.Messages.CONTINUE, (0, l.jsx)(x.default, {
          className: C.launchIcon,
          width: "16",
          height: "16"
        })]
      })
    })]
  })
}