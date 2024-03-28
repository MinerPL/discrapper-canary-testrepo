"use strict";
t.r(a), t.d(a, {
  TwoWayLinkDiscordConsent: function() {
    return m
  }
}), t("47120");
var l = t("735250"),
  n = t("470079"),
  s = t("512722"),
  r = t.n(s),
  o = t("481060"),
  i = t("457330"),
  c = t("710845"),
  d = t("69580"),
  u = t("285952"),
  N = t("689938"),
  h = t("837537");
let x = new c.default("TwoWayLinkDiscordConsentWeb");

function m(e) {
  let {
    platformType: a,
    clientId: t,
    scopes: s,
    authToken: c,
    onContinue: m,
    onError: C,
    onClose: T,
    redirectUri: f
  } = e, [p, j] = n.useState(!1), y = n.useCallback(async e => {
    let t, {
        location: l
      } = e,
      {
        callbackCode: n,
        callbackState: s
      } = c;
    try {
      t = await i.default.completeTwoWayLink(a, l, n, s)
    } catch (e) {
      x.error("".concat(a, " link error:"), e)
    }
    null != t ? m() : C()
  }, [a, c, m, C]), {
    header: E,
    body: k,
    appDetails: v,
    sendAuthorize: L
  } = (0, d.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: s,
    responseType: "code",
    callback: y,
    isTrustedName: !0,
    isEmbeddedFlow: !0,
    redirectUri: f
  }), g = n.useCallback(() => {
    r()(null != L, "sendAuthorize not available"), j(!0), L(!0)
  }, [L]);
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [null != T && (0, l.jsx)(o.ModalCloseButton, {
      className: h.closeButton,
      onClick: T
    }), (0, l.jsxs)(o.Scroller, {
      children: [(0, l.jsx)(o.ModalHeader, {
        direction: u.default.Direction.VERTICAL,
        className: h.header,
        separator: !1,
        children: (0, l.jsx)(o.Text, {
          className: h.stepHeader,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: N.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
            number: 2,
            total: 2
          })
        })
      }), (0, l.jsxs)("div", {
        className: h.discordConsentBody,
        children: [E, k, v]
      }), (0, l.jsx)(o.ModalFooter, {
        className: h.footer,
        children: (0, l.jsx)(o.Button, {
          className: h.footerButton,
          color: o.Button.Colors.BRAND,
          submitting: p,
          onClick: g,
          children: N.default.Messages.AUTHORIZE_AND_CONTINUE
        })
      })]
    })]
  })
}