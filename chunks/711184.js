s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  o = s(120356),
  i = s.n(o),
  a = s(215569),
  u = s(481060),
  l = s(401190),
  c = s(490529),
  d = s(57875),
  p = s(368003),
  h = s(981631),
  g = s(689938),
  m = s(500600),
  _ = s(224499);

function b(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let f = e => (0, n.jsx)('div', {
className: m.innerContentWrapper,
children: e.children
  }),
  S = {
[h.gkr.HOUSE_1]: s(530530),
[h.gkr.HOUSE_2]: s(230651),
[h.gkr.HOUSE_3]: s(497494)
  },
  x = {
[h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
[h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
[h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3
  },
  E = e => ({
[h.gkr.HOUSE_1]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_1,
[h.gkr.HOUSE_2]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_2,
[h.gkr.HOUSE_3]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_3
  } [e]);
class H extends r.Component {
  getSelectedHouseID() {
let e;
let {
  responses: t
} = this.state, s = {}, n = 0;
return (Object.keys(t).forEach(r => {
  let o = t[r];
  null == s[o] && (s[o] = 0), s[o]++, s[o] > n && (e = o, n = s[o]);
}), null == e || e === h.jsM) ? (0, c.uj)() : e;
  }
  renderUnknownErrorMessage() {
return (0, n.jsx)(d.Z, {
  children: (0, n.jsxs)(r.Fragment, {
    children: [
      (0, n.jsx)(u.Heading, {
        className: m.quizResultHeading,
        variant: 'heading-xl/semibold',
        children: g.Z.Messages.HYPESQUAD_ERROR_HEADING
      }),
      (0, n.jsx)(u.Text, {
        variant: 'text-sm/normal',
        children: g.Z.Messages.HYPESQUAD_ERROR_BODY.format({
          emailAddress: 'hypesquad@'.concat(h.U9i),
          emailAddressLink: 'mailto:hypesquad@'.concat(h.U9i)
        })
      })
    ]
  })
}, 'error');
  }
  renderQuizResult() {
let {
  selectedHouse: e
} = this.state;
if (null == e)
  return null;
let t = g.Z.Messages.HYPESQUAD_QUIZ_TITLE.format({
  house: (0, c.X8)(e)
});
return (0, n.jsx)(d.Z, {
  children: (0, n.jsxs)(r.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: i()(m.quizResultLogoWrapper, x[e], _.marginBottom20),
        children: (0, n.jsx)('img', {
          alt: t,
          className: m.quizResultLogo,
          src: S[e]
        })
      }),
      (0, n.jsx)(u.Heading, {
        className: m.quizResultHeading,
        variant: 'heading-xl/semibold',
        children: t
      }),
      (0, n.jsx)(u.Text, {
        className: m.quizResultBody,
        variant: 'text-sm/normal',
        children: E(e)
      })
    ]
  })
}, 'submit-step');
  }
  renderContent() {
let {
  currentStep: e,
  hasUnknownError: t,
  hasSubmittedHouse: s,
  questions: r
} = this.state;
if (t)
  return this.renderUnknownErrorMessage();
if (s)
  return this.renderQuizResult();
let o = r[e];
return (0, n.jsx)(d.Z, {
  children: (0, n.jsx)(p.Z, {
    onSelect: this.handleQuestionSelect,
    options: o.options,
    prompt: o.prompt
  }, e)
}, e);
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
});
  }
  renderNewsletterWarning() {
return (0, n.jsx)(d.Z, {
  children: (0, n.jsx)(u.Text, {
    className: m.nameFormPreface,
    variant: 'text-md/normal',
    children: g.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
  })
});
  }
  renderPrimaryAction() {
let {
  currentStep: e,
  responses: t,
  hasUnknownError: s,
  hasSubmittedHouse: r,
  isRequestPending: o,
  questions: i
} = this.state, a = null == t[e];
return s ? (0, n.jsx)(u.Button, {
  type: 'submit',
  color: u.Button.Colors.BRAND,
  onClick: this.handleSubmitButtonClick,
  submitting: o,
  children: g.Z.Messages.HYPESQUAD_QUIZ_RETRY
}) : r ? (0, n.jsx)(u.Button, {
  type: 'submit',
  color: u.Button.Colors.BRAND,
  onClick: this.props.onClose,
  children: g.Z.Messages.HYPESQUAD_QUIZ_CLOSE
}) : e === i.length - 1 ? (0, n.jsx)(u.Button, {
  disabled: a,
  type: 'submit',
  color: u.Button.Colors.BRAND,
  onClick: this.handleSubmitButtonClick,
  submitting: o,
  children: g.Z.Messages.HYPESQUAD_QUIZ_SHOW_MY_HOUSE
}) : (0, n.jsx)(u.Button, {
  disabled: a,
  type: 'submit',
  color: u.Button.Colors.BRAND,
  onClick: this.handleNextQuestionButtonClick,
  children: g.Z.Messages.HYPESQUAD_QUIZ_NEXT_QUESTION
});
  }
  renderSecondaryAction() {
let {
  hasSubmittedHouse: e
} = this.state;
return e ? null : (0, n.jsx)(u.Button, {
  type: 'button',
  look: u.Button.Looks.LINK,
  color: u.Button.Colors.PRIMARY,
  onClick: this.props.onClose,
  children: g.Z.Messages.HYPESQUAD_QUIZ_CANCEL
});
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
  children: [
    (0, n.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(u.Heading, {
        variant: 'heading-lg/semibold',
        children: this.renderHeaderCopy()
      })
    }),
    (0, n.jsx)('div', {
      className: m.outerContentWrapper,
      children: (0, n.jsx)(a.W, {
        component: f,
        children: this.renderContent()
      })
    }),
    (0, n.jsxs)(u.ModalFooter, {
      children: [
        this.renderPrimaryAction(),
        this.renderSecondaryAction()
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), b(this, 'state', {
  currentStep: 0,
  hasSubmittedHouse: !1,
  hasUnknownError: !1,
  isRequestPending: !1,
  questions: (0, c.tI)(),
  responses: {},
  selectedHouse: null
}), b(this, 'handleQuestionSelect', e => {
  this.setState(t => ({
    responses: {
      ...t.responses,
      [t.currentStep]: e
    }
  }));
}), b(this, 'handleSubmitButtonClick', () => {
  let e = this.getSelectedHouseID();
  this.setState({
    isRequestPending: !0
  }, () => {
    l.Z.joinHypeSquadOnline({
      houseID: e
    }).then(() => {
      this.setState({
        hasUnknownError: !1,
        hasSubmittedHouse: !0,
        isRequestPending: !1,
        selectedHouse: e
      });
    }).catch(() => {
      this.setState({
        hasUnknownError: !0,
        hasSubmittedHouse: !1,
        isRequestPending: !1
      });
    });
  });
}), b(this, 'handleKeyDown', e => {
  e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
}), b(this, 'handleNextQuestionButtonClick', () => {
  this.setState(e => ({
    currentStep: e.currentStep + 1
  }));
});
  }
}
t.default = H;