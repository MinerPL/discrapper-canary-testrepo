"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("803997"),
  i = a.n(n),
  o = a("442837"),
  d = a("481060"),
  r = a("570140"),
  c = a("285952"),
  u = a("236289"),
  E = a("788080"),
  _ = a("613734"),
  A = a("800530"),
  S = a("689938"),
  N = a("996006"),
  I = a("134247");

function x(e) {
  let {
    isDsaEligible: t = !1,
    className: a,
    onClose: n,
    onNext: x,
    onBack: f
  } = e, T = (0, _.useSafetyHubAppealSignal)(), g = (0, o.useStateFromStores)([u.default], () => u.default.getFreeTextAppealReason()), [p, m] = s.useState(""), [C, L] = s.useState(!1);
  s.useEffect(() => {
    m(null != g ? g : ""), L(T === A.AppealIngestionSignal.SOMETHING_ELSE)
  }, [g, T]);
  let h = e => {
      L(e === A.AppealIngestionSignal.SOMETHING_ELSE), e !== A.AppealIngestionSignal.SOMETHING_ELSE && (m(""), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    M = A.AppealIngestionSignalOrder.map(e => ({
      value: e,
      name: (0, E.getAppealSignalDisplayText)(e)
    }));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: I.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        className: I.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(d.Text, {
        className: I.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != n && (0, l.jsx)(d.ModalCloseButton, {
        className: I.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: i()(N.modalContent, a),
      paddingFix: !1,
      children: [(0, l.jsx)(d.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: I.radioItem,
        size: d.RadioGroup.Sizes.NOT_SET,
        value: T,
        options: M,
        onChange: e => {
          let {
            value: t
          } = e;
          return h(t)
        }
      }), C && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: p,
          onChange: m,
          autoFocus: !0
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: N.disclaimer,
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: p
          }), null == x || x()
        },
        color: d.Button.Colors.BRAND,
        children: S.default.Messages.NEXT
      }), t && (0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: p
          }), null == f || f()
        },
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: S.default.Messages.BACK
      })]
    })]
  })
}