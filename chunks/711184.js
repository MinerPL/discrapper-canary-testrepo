"use strict";
s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  i = s(120356),
  o = s.n(i),
  a = s(215569),
  l = s(481060),
  u = s(401190),
  c = s(490529),
  d = s(57875),
  h = s(368003),
  p = s(981631),
  g = s(689938),
  m = s(442883),
  S = s(611273);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let x = e => (0, n.jsx)("div", {
    className: m.innerContentWrapper,
    children: e.children
  }),
  _ = {
    [p.gkr.HOUSE_1]: s(530530),
    [p.gkr.HOUSE_2]: s(230651),
    [p.gkr.HOUSE_3]: s(497494)
  },
  U = {
    [p.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
    [p.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
    [p.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3
  },
  H = e => ({
    [p.gkr.HOUSE_1]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_1,
    [p.gkr.HOUSE_2]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_2,
    [p.gkr.HOUSE_3]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_3
  })[e];
class f extends r.Component {
  getSelectedHouseID() {
    let e;
    let {
      responses: t
    } = this.state, s = {}, n = 0;
    return (Object.keys(t).forEach(r => {
      let i = t[r];
      null == s[i] && (s[i] = 0), s[i]++, s[i] > n && (e = i, n = s[i])
    }), null == e || e === p.jsM) ? (0, c.uj)() : e
  }
  renderUnknownErrorMessage() {
    return (0, n.jsx)(d.Z, {
      children: (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(l.Heading, {
          className: m.quizResultHeading,
          variant: "heading-xl/semibold",
          children: g.Z.Messages.HYPESQUAD_ERROR_HEADING
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: g.Z.Messages.HYPESQUAD_ERROR_BODY.format({
            emailAddress: "hypesquad@".concat(p.U9i),
            emailAddressLink: "mailto:hypesquad@".concat(p.U9i)
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
    let t = g.Z.Messages.HYPESQUAD_QUIZ_TITLE.format({
      house: (0, c.X8)(e)
    });
    return (0, n.jsx)(d.Z, {
      children: (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)("div", {
          className: o()(m.quizResultLogoWrapper, U[e], S.marginBottom20),
          children: (0, n.jsx)("img", {
            alt: t,
            className: m.quizResultLogo,
            src: _[e]
          })
        }), (0, n.jsx)(l.Heading, {
          className: m.quizResultHeading,
          variant: "heading-xl/semibold",
          children: t
        }), (0, n.jsx)(l.Text, {
          className: m.quizResultBody,
          variant: "text-sm/normal",
          children: H(e)
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
    let i = r[e];
    return (0, n.jsx)(d.Z, {
      children: (0, n.jsx)(h.Z, {
        onSelect: this.handleQuestionSelect,
        options: i.options,
        prompt: i.prompt
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
    return t ? g.Z.Messages.HYPESQUAD_QUIZ_ERROR_MODAL_TITLE : s ? g.Z.Messages.HYPESQUAD_QUIZ_COMPLETED_MODAL_TITLE : g.Z.Messages.HYPESQUAD_QUIZ_ONGOING_MODAL_TITLE.format({
      currentQuestion: e + 1,
      questionCount: n.length
    })
  }
  renderNewsletterWarning() {
    return (0, n.jsx)(d.Z, {
      children: (0, n.jsx)(l.Text, {
        className: m.nameFormPreface,
        variant: "text-md/normal",
        children: g.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
      })
    })
  }
  renderPrimaryAction() {
    let {
      currentStep: e,
      responses: t,
      hasUnknownError: s,
      hasSubmittedHouse: r,
      isRequestPending: i,
      questions: o
    } = this.state, a = null == t[e];
    return s ? (0, n.jsx)(l.Button, {
      type: "submit",
      color: l.Button.Colors.BRAND,
      onClick: this.handleSubmitButtonClick,
      submitting: i,
      children: g.Z.Messages.HYPESQUAD_QUIZ_RETRY
    }) : r ? (0, n.jsx)(l.Button, {
      type: "submit",
      color: l.Button.Colors.BRAND,
      onClick: this.props.onClose,
      children: g.Z.Messages.HYPESQUAD_QUIZ_CLOSE
    }) : e === o.length - 1 ? (0, n.jsx)(l.Button, {
      disabled: a,
      type: "submit",
      color: l.Button.Colors.BRAND,
      onClick: this.handleSubmitButtonClick,
      submitting: i,
      children: g.Z.Messages.HYPESQUAD_QUIZ_SHOW_MY_HOUSE
    }) : (0, n.jsx)(l.Button, {
      disabled: a,
      type: "submit",
      color: l.Button.Colors.BRAND,
      onClick: this.handleNextQuestionButtonClick,
      children: g.Z.Messages.HYPESQUAD_QUIZ_NEXT_QUESTION
    })
  }
  renderSecondaryAction() {
    let {
      hasSubmittedHouse: e
    } = this.state;
    return e ? null : (0, n.jsx)(l.Button, {
      type: "button",
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.PRIMARY,
      onClick: this.props.onClose,
      children: g.Z.Messages.HYPESQUAD_QUIZ_CANCEL
    })
  }
  render() {
    let {
      selectedHouse: e
    } = this.state, {
      transitionState: t
    } = this.props;
    return (0, n.jsxs)(l.ModalRoot, {
      size: null == e ? l.ModalSize.MEDIUM : l.ModalSize.SMALL,
      transitionState: t,
      children: [(0, n.jsx)(l.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          children: this.renderHeaderCopy()
        })
      }), (0, n.jsx)("div", {
        className: m.outerContentWrapper,
        children: (0, n.jsx)(a.W, {
          component: x,
          children: this.renderContent()
        })
      }), (0, n.jsxs)(l.ModalFooter, {
        children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      currentStep: 0,
      hasSubmittedHouse: !1,
      hasUnknownError: !1,
      isRequestPending: !1,
      questions: (0, c.tI)(),
      responses: {},
      selectedHouse: null
    }), E(this, "handleQuestionSelect", e => {
      this.setState(t => ({
        responses: {
          ...t.responses,
          [t.currentStep]: e
        }
      }))
    }), E(this, "handleSubmitButtonClick", () => {
      let e = this.getSelectedHouseID();
      this.setState({
        isRequestPending: !0
      }, () => {
        u.Z.joinHypeSquadOnline({
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
    }), E(this, "handleKeyDown", e => {
      e.keyCode === p.yXg.ENTER && this.handleSubmitButtonClick()
    }), E(this, "handleNextQuestionButtonClick", () => {
      this.setState(e => ({
        currentStep: e.currentStep + 1
      }))
    })
  }
}
t.default = f