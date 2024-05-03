"use strict";
t.r(s), t("47120");
var r = t("735250"),
  a = t("470079"),
  o = t("120356"),
  l = t.n(o),
  n = t("512722"),
  i = t.n(n),
  d = t("481060"),
  c = t("277390"),
  u = t("507893"),
  C = t("644766"),
  _ = t("626135"),
  f = t("985002"),
  E = t("880257"),
  m = t("631885"),
  R = t("292352"),
  h = t("981631"),
  O = t("689938"),
  N = t("8027"),
  x = t("949086");
s.default = e => {
  let {
    transitionState: s,
    onClose: t
  } = e, o = (0, E.default)(), [n, g] = a.useState(!1), {
    getLinkCode: p,
    isGetLinkCodeLoading: M
  } = (0, f.useFamilyCenterActions)({}), I = (0, m.useUserQRLinkUrl)(), A = (0, m.usePendingRequestCount)(), v = a.useRef(A);
  i()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let T = () => {
    g(e => (_.default.track(h.AnalyticEvents.FAMILY_CENTER_ACTION, {
      action: n ? R.FamilyCenterAction.HideQRCode : R.FamilyCenterAction.RevealQRCode
    }), !e)), !n && setTimeout(() => {
      t()
    }, R.QR_CODE_AUTO_HIDE_TIMEOUT)
  };
  a.useEffect(() => {
    p()
  }, []), a.useEffect(() => {
    A > v.current && t()
  }, [v, A, t]);
  let b = n && !M && null != I;
  return (0, r.jsxs)(d.ModalRoot, {
    className: N.modalRoot,
    transitionState: s,
    children: [(0, r.jsxs)(C.default, {
      className: N.notice,
      color: C.NoticeColors.WARNING,
      children: [(0, r.jsx)(u.default, {
        className: N.infoIcon,
        width: 18,
        height: 18
      }), O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE]
    }), (0, r.jsxs)(d.ModalContent, {
      className: N.content,
      children: [(0, r.jsx)(d.Text, {
        className: x.marginBottom8,
        variant: "text-lg/bold",
        color: "header-primary",
        children: O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
      }), (0, r.jsx)(d.Text, {
        className: x.marginBottom20,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, r.jsx)("div", {
        className: N.qrCode,
        children: (0, r.jsx)(d.Clickable, {
          className: l()(N.qrCodeObscure, {
            [N.visible]: b
          }),
          onClick: T,
          children: (0, r.jsx)(c.QRCodeWithOverlay, {
            size: 272,
            text: b ? I : R.PLACEHOLDER_QR_CODE_URL,
            overlaySize: c.QRCodeOverlaySizes.SIZE_60
          })
        })
      }), (0, r.jsx)(d.Text, {
        className: N.reminder,
        variant: "text-xs/semibold",
        color: "header-secondary",
        children: O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
      }), (0, r.jsxs)("div", {
        className: l()(N.buttonContainer, x.marginTop20),
        children: [(0, r.jsx)(d.Button, {
          className: x.marginBottom8,
          grow: !0,
          size: d.Button.Sizes.LARGE,
          onClick: T,
          submitting: n && M,
          children: n ? O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : O.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
        }), (0, r.jsx)(d.Button, {
          grow: !0,
          color: d.Button.Colors.PRIMARY,
          onClick: t,
          children: O.default.Messages.CLOSE
        })]
      })]
    })]
  })
}