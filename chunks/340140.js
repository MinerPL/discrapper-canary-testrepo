t.r(s), t(47120);
var a = t(735250),
  l = t(470079),
  n = t(481060),
  o = t(285952),
  r = t(538211),
  _ = t(698066),
  i = t(111810),
  E = t(689938),
  R = t(688257),
  u = t(456972);

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class M extends l.PureComponent {
  render() {
let {
  isStreamer: e,
  transitionState: s,
  onClose: t
} = this.props, {
  problem: l
} = this.state;
return (0, a.jsxs)(n.ModalRoot, {
  transitionState: s,
  size: n.ModalSize.SMALL,
  'aria-label': E.Z.Messages.STREAM_REPORT_A_PROBLEM,
  children: [
    (0, a.jsx)(i.Z, {}),
    (0, a.jsxs)(n.ModalHeader, {
      separator: !1,
      children: [
        (0, a.jsx)(n.ModalCloseButton, {
          className: u.closeButton,
          onClick: t
        }),
        (0, a.jsx)(n.FormTitle, {
          tag: 'h2',
          className: u.title,
          children: E.Z.Messages.STREAM_REPORT_A_PROBLEM
        })
      ]
    }),
    (0, a.jsxs)(n.ModalContent, {
      className: u.content,
      children: [
        (0, a.jsx)(n.Text, {
          variant: 'text-sm/normal',
          children: E.Z.Messages.STREAM_REPORT_PROBLEM_BODY
        }),
        (0, a.jsx)(n.FormItem, {
          title: E.Z.Messages.STREAM_REPORT_LABEL,
          children: (0, a.jsx)(n.SingleSelect, {
            placeholder: E.Z.Messages.STREAM_REPORT_PLACEHOLDER,
            options: (0, r.Z)(e, !1),
            onChange: this.handleChanged,
            value: l,
            maxVisibleItems: 4
          })
        }),
        (0, a.jsx)('div', {
          className: R.art
        })
      ]
    }),
    (0, a.jsxs)(n.ModalFooter, {
      className: u.__invalid_footer,
      children: [
        (0, a.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          disabled: null == l,
          onClick: this.handleSubmit,
          children: E.Z.Messages.STREAM_REPORT_SUBMIT
        }),
        (0, a.jsx)(o.Z, {
          children: (0, a.jsx)(n.Button, {
            look: n.Button.Looks.LINK,
            color: n.Button.Colors.PRIMARY,
            size: n.Button.Sizes.NONE,
            onClick: t,
            children: E.Z.Messages.CANCEL
          })
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), c(this, 'state', {
  problem: null
}), c(this, 'handleChanged', e => {
  this.setState({
    problem: null != e ? e : null
  });
}), c(this, 'handleSubmit', () => {
  let {
    stream: e,
    streamApplication: s,
    analyticsData: l,
    onClose: o
  } = this.props, {
    problem: r
  } = this.state;
  (0, _.Z)({
    problem: r,
    stream: e,
    feedback: '',
    streamApplication: s,
    analyticsData: l,
    location: 'Stream'
  }), o(), (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('14466').then(t.bind(t, 729328));
    return s => (0, a.jsx)(e, {
      body: E.Z.Messages.STREAM_REPORTED_BODY,
      ...s
    });
  });
});
  }
}
s.default = M;