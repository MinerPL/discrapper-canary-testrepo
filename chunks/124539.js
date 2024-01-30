"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  n = a("414456"),
  i = a.n(n),
  o = a("446674"),
  d = a("77078"),
  r = a("913144"),
  c = a("145131"),
  u = a("646356"),
  E = a("736393"),
  _ = a("698609"),
  A = a("170213"),
  S = a("782340"),
  N = a("903948"),
  I = a("434848");

function x(e) {
  let {
    isDsaEligible: t = !1,
    className: a,
    onClose: n,
    onNext: x,
    onBack: f
  } = e, T = (0, _.useSafetyHubAppealSignal)(), g = (0, o.useStateFromStores)([u.default], () => u.default.getFreeTextAppealReason()), [m, p] = l.useState(""), [C, L] = l.useState(!1);
  l.useEffect(() => {
    p(null != g ? g : ""), L(T === A.AppealIngestionSignal.SOMETHING_ELSE)
  }, [g, T]);
  let h = e => {
      L(e === A.AppealIngestionSignal.SOMETHING_ELSE), e !== A.AppealIngestionSignal.SOMETHING_ELSE && (p(""), r.default.dispatch({
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
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: I.header,
      separator: !1,
      children: [(0, s.jsx)(d.Heading, {
        className: I.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, s.jsx)(d.Text, {
        className: I.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != n && (0, s.jsx)(d.ModalCloseButton, {
        className: I.closeButton,
        onClick: n
      })]
    }), (0, s.jsxs)(d.ModalContent, {
      className: i(N.modalContent, a),
      paddingFix: !1,
      children: [(0, s.jsx)(d.RadioGroup, {
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
      }), C && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: m,
          onChange: p,
          autoFocus: !0
        }), (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      }), (0, s.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: N.disclaimer,
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
      })]
    }), (0, s.jsxs)(d.ModalFooter, {
      children: [(0, s.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: m
          }), null == x || x()
        },
        color: d.Button.Colors.BRAND,
        children: S.default.Messages.NEXT
      }), t && (0, s.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: m
          }), null == f || f()
        },
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: S.default.Messages.BACK
      })]
    })]
  })
}