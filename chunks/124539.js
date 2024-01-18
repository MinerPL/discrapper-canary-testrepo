"use strict";
l.r(a), l.d(a, {
  default: function() {
    return x
  }
}), l("222007");
var t = l("37983"),
  s = l("884691"),
  n = l("414456"),
  i = l.n(n),
  o = l("446674"),
  d = l("77078"),
  r = l("913144"),
  c = l("145131"),
  u = l("646356"),
  E = l("736393"),
  _ = l("698609"),
  N = l("170213"),
  S = l("782340"),
  A = l("434848");

function x(e) {
  let {
    isDsaEligible: a = !1,
    className: l,
    onClose: n,
    onNext: x,
    onBack: I
  } = e, T = (0, _.useSafetyHubAppealSignal)(), f = (0, o.useStateFromStores)([u.default], () => u.default.getFreeTextAppealReason()), [g, h] = s.useState(""), [p, L] = s.useState(!1);
  s.useEffect(() => {
    h(null != f ? f : ""), L(T === N.AppealIngestionSignal.SOMETHING_ELSE)
  }, [f, T]);
  let m = e => {
      L(e === N.AppealIngestionSignal.SOMETHING_ELSE), e !== N.AppealIngestionSignal.SOMETHING_ELSE && (h(""), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    C = N.AppealIngestionSignalOrder.map(e => ({
      value: e,
      name: (0, E.getAppealSignalDisplayText)(e)
    }));
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: A.header,
      separator: !1,
      children: [(0, t.jsx)(d.Heading, {
        className: A.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, t.jsx)(d.Text, {
        className: A.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != n && (0, t.jsx)(d.ModalCloseButton, {
        className: A.closeButton,
        onClick: n
      })]
    }), (0, t.jsxs)(d.ModalContent, {
      className: i(A.templatesList, l),
      paddingFix: !1,
      children: [(0, t.jsx)(d.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: A.radioItem,
        size: d.RadioGroup.Sizes.NOT_SET,
        value: T,
        options: C,
        onChange: e => {
          let {
            value: a
          } = e;
          return m(a)
        }
      }), p && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(d.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: g,
          onChange: h,
          autoFocus: !0
        }), (0, t.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      })]
    }), (0, t.jsxs)(d.ModalFooter, {
      children: [(0, t.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: g
          }), null == x || x()
        },
        color: d.Button.Colors.BRAND,
        children: S.default.Messages.NEXT
      }), a && (0, t.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: g
          }), null == I || I()
        },
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: S.default.Messages.BACK
      })]
    })]
  })
}