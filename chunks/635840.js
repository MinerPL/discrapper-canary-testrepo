"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  l = s("481060"),
  n = s("153867"),
  C = s("682864"),
  _ = s("626135"),
  I = s("981631"),
  N = s("689938"),
  o = s("566572");
let A = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
}];

function d(e) {
  let {
    application: t,
    subscriptionId: s,
    onClose: d
  } = e, [r, c] = i.useState(!1), [S, E] = i.useState(null), [O, u] = i.useState(""), T = i.useCallback(() => {
    null != S && (_.default.track(I.AnalyticEvents.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: S,
      application_id: t.id,
      reason: O,
      subscription_id: s
    }), d())
  }, [t.id, s, S, d, O]);
  return i.useEffect(() => {
    n.default.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: r
    })
  }, [r]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.ModalHeader, {
      className: o.headerContainer,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: o.titleContainer,
        children: [(0, a.jsx)(l.Text, {
          className: o.headerTitle,
          variant: "text-lg/semibold",
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
        }), (0, a.jsx)(l.ModalCloseButton, {
          className: o.modalCloseButton,
          onClick: d
        })]
      }), (0, a.jsx)(C.default, {
        size: 8
      }), (0, a.jsx)(l.Text, {
        className: o.headerSubtitle,
        variant: "text-md/medium",
        children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
      })]
    }), (0, a.jsxs)(l.ModalContent, {
      children: [(0, a.jsx)("div", {
        className: o.answerChoicesContainer,
        children: (0, a.jsx)(l.RadioGroup, {
          value: S,
          options: A.map(e => {
            let {
              nameGetter: t,
              value: s
            } = e;
            return {
              name: t(),
              value: s
            }
          }),
          onChange: e => E(e.value),
          withTransparentBackground: !0
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === S && (0, a.jsx)(l.TextInput, {
        autoFocus: !0,
        className: o.otherField,
        placeholder: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
        value: O,
        onChange: u
      })]
    }), (0, a.jsxs)(l.ModalFooter, {
      className: o.footer,
      children: [(0, a.jsx)(l.Button, {
        onClick: T,
        color: l.Button.Colors.BRAND,
        disabled: null == S,
        children: N.default.Messages.SUBMIT
      }), (0, a.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        value: r,
        onChange: (e, t) => c(t),
        size: 20,
        className: o.__invalid_checkbox,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
        })
      })]
    })]
  })
}