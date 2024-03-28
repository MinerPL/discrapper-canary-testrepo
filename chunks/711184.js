"use strict";
s.r(t), s("47120");
var n = s("735250"),
  r = s("470079"),
  a = s("803997"),
  o = s.n(a),
  i = s("215569"),
  u = s("481060"),
  l = s("401190"),
  d = s("490529"),
  c = s("57875"),
  h = s("368003"),
  p = s("981631"),
  S = s("689938"),
  m = s("846908"),
  f = s("794711");

function H(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let g = e => (0, n.jsx)("div", {
    className: m.innerContentWrapper,
    children: e.children
  }),
  E = {
    [p.HypeSquadHouses.HOUSE_1]: s("530530"),
    [p.HypeSquadHouses.HOUSE_2]: s("230651"),
    [p.HypeSquadHouses.HOUSE_3]: s("497494")
  },
  _ = {
    [p.HypeSquadHouses.HOUSE_1]: m.quizResultLogoWrapperHouse1,
    [p.HypeSquadHouses.HOUSE_2]: m.quizResultLogoWrapperHouse2,
    [p.HypeSquadHouses.HOUSE_3]: m.quizResultLogoWrapperHouse3
  },
  x = e => ({
    [p.HypeSquadHouses.HOUSE_1]: S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_1,
    [p.HypeSquadHouses.HOUSE_2]: S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_2,
    [p.HypeSquadHouses.HOUSE_3]: S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_3
  })[e];
class U extends r.Component {
  getSelectedHouseID() {
    let e;
    let {
      responses: t
    } = this.state, s = {}, n = 0;
    return (Object.keys(t).forEach(r => {
      let a = t[r];
      null == s[a] && (s[a] = 0), s[a]++, s[a] > n && (e = a, n = s[a])
    }), null == e || e === p.RANDOM_HYPESQUAD_HOUSE) ? (0, d.getRandomHouse)() : e
  }
  renderUnknownErrorMessage() {
    return (0, n.jsx)(c.default, {
      children: (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(u.Heading, {
          className: m.quizResultHeading,
          variant: "heading-xl/semibold",
          children: S.default.Messages.HYPESQUAD_ERROR_HEADING
        }), (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: S.default.Messages.HYPESQUAD_ERROR_BODY.format({
            emailAddress: "hypesquad@".concat(p.EMAIL_DOMAIN),
            emailAddressLink: "mailto:hypesquad@".concat(p.EMAIL_DOMAIN)
          })
        })]
      })
    }, "error")
  }
  renderQuizResult() {
    let {
      selectedHouse: e
    } = this.state;
    if (null == e) return null;
    let t = S.default.Messages.HYPESQUAD_QUIZ_TITLE.format({
      house: (0, d.getHouseNameFromHouseID)(e)
    });
    return (0, n.jsx)(c.default, {
      children: (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)("div", {
          className: o()(m.quizResultLogoWrapper, _[e], f.marginBottom20),
          children: (0, n.jsx)("img", {
            alt: t,
            className: m.quizResultLogo,
            src: E[e]
          })
        }), (0, n.jsx)(u.Heading, {
          className: m.quizResultHeading,
          variant: "heading-xl/semibold",
          children: t
        }), (0, n.jsx)(u.Text, {
          className: m.quizResultBody,
          variant: "text-sm/normal",
          children: x(e)
        })]
      })
    }, "submit-step")
  }
  renderContent() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: s,
      questions: r
    } = this.state;
    if (t) return this.renderUnknownErrorMessage();
    if (s) return this.renderQuizResult();
    let a = r[e];
    return (0, n.jsx)(c.default, {
      children: (0, n.jsx)(h.default, {
        onSelect: this.handleQuestionSelect,
        options: a.options,
        prompt: a.prompt
      }, e)
    }, e)
  }
  renderHeaderCopy() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: s,
      questions: n
    } = this.state;
    return t ? S.default.Messages.HYPESQUAD_QUIZ_ERROR_MODAL_TITLE : s ? S.default.Messages.HYPESQUAD_QUIZ_COMPLETED_MODAL_TITLE : S.default.Messages.HYPESQUAD_QUIZ_ONGOING_MODAL_TITLE.format({
      currentQuestion: e + 1,
      questionCount: n.length
    })
  }
  renderNewsletterWarning() {
    return (0, n.jsx)(c.default, {
      children: (0, n.jsx)(u.Text, {
        className: m.nameFormPreface,
        variant: "text-md/normal",
        children: S.default.Messages.HYPESQUAD_NEWSLETTER_WARNING
      })
    })
  }
  renderPrimaryAction() {
    let {
      currentStep: e,
      responses: t,
      hasUnknownError: s,
      hasSubmittedHouse: r,
      isRequestPending: a,
      questions: o
    } = this.state, i = null == t[e];
    return s ? (0, n.jsx)(u.Button, {
      type: "submit",
      color: u.Button.Colors.BRAND,
      onClick: this.handleSubmitButtonClick,
      submitting: a,
      children: S.default.Messages.HYPESQUAD_QUIZ_RETRY
    }) : r ? (0, n.jsx)(u.Button, {
      type: "submit",
      color: u.Button.Colors.BRAND,
      onClick: this.props.onClose,
      children: S.default.Messages.HYPESQUAD_QUIZ_CLOSE
    }) : e === o.length - 1 ? (0, n.jsx)(u.Button, {
      disabled: i,
      type: "submit",
      color: u.Button.Colors.BRAND,
      onClick: this.handleSubmitButtonClick,
      submitting: a,
      children: S.default.Messages.HYPESQUAD_QUIZ_SHOW_MY_HOUSE
    }) : (0, n.jsx)(u.Button, {
      disabled: i,
      type: "submit",
      color: u.Button.Colors.BRAND,
      onClick: this.handleNextQuestionButtonClick,
      children: S.default.Messages.HYPESQUAD_QUIZ_NEXT_QUESTION
    })
  }
  renderSecondaryAction() {
    let {
      hasSubmittedHouse: e
    } = this.state;
    return e ? null : (0, n.jsx)(u.Button, {
      type: "button",
      look: u.Button.Looks.LINK,
      color: u.Button.Colors.PRIMARY,
      onClick: this.props.onClose,
      children: S.default.Messages.HYPESQUAD_QUIZ_CANCEL
    })
  }
  render() {
    let {
      selectedHouse: e
    } = this.state, {
      transitionState: t
    } = this.props;
    return (0, n.jsxs)(u.ModalRoot, {
      size: null == e ? u.ModalSize.MEDIUM : u.ModalSize.SMALL,
      transitionState: t,
      children: [(0, n.jsx)(u.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          children: this.renderHeaderCopy()
        })
      }), (0, n.jsx)("div", {
        className: m.outerContentWrapper,
        children: (0, n.jsx)(i.TransitionGroup, {
          component: g,
          children: this.renderContent()
        })
      }), (0, n.jsxs)(u.ModalFooter, {
        children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      currentStep: 0,
      hasSubmittedHouse: !1,
      hasUnknownError: !1,
      isRequestPending: !1,
      questions: (0, d.getQuestions)(),
      responses: {},
      selectedHouse: null
    }), H(this, "handleQuestionSelect", e => {
      this.setState(t => ({
        responses: {
          ...t.responses,
          [t.currentStep]: e
        }
      }))
    }), H(this, "handleSubmitButtonClick", () => {
      let e = this.getSelectedHouseID();
      this.setState({
        isRequestPending: !0
      }, () => {
        l.default.joinHypeSquadOnline({
          houseID: e
        }).then(() => {
          this.setState({
            hasUnknownError: !1,
            hasSubmittedHouse: !0,
            isRequestPending: !1,
            selectedHouse: e
          })
        }).catch(() => {
          this.setState({
            hasUnknownError: !0,
            hasSubmittedHouse: !1,
            isRequestPending: !1
          })
        })
      })
    }), H(this, "handleKeyDown", e => {
      e.keyCode === p.KeyboardKeys.ENTER && this.handleSubmitButtonClick()
    }), H(this, "handleNextQuestionButtonClick", () => {
      this.setState(e => ({
        currentStep: e.currentStep + 1
      }))
    })
  }
}
t.default = U