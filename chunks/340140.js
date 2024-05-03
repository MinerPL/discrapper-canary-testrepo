"use strict";
a.r(s), a("47120");
var t = a("735250"),
  l = a("470079"),
  n = a("481060"),
  u = a("285952"),
  r = a("538211"),
  o = a("698066"),
  R = a("111810"),
  d = a("689938"),
  i = a("226262"),
  _ = a("83171");

function E(e, s, a) {
  return s in e ? Object.defineProperty(e, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = a, e
}
class M extends l.PureComponent {
  render() {
    let {
      isStreamer: e,
      transitionState: s,
      onClose: a
    } = this.props, {
      problem: l
    } = this.state;
    return (0, t.jsxs)(n.ModalRoot, {
      transitionState: s,
      size: n.ModalSize.SMALL,
      "aria-label": d.default.Messages.STREAM_REPORT_A_PROBLEM,
      children: [(0, t.jsx)(R.default, {}), (0, t.jsxs)(n.ModalHeader, {
        separator: !1,
        children: [(0, t.jsx)(n.ModalCloseButton, {
          className: _.closeButton,
          onClick: a
        }), (0, t.jsx)(n.FormTitle, {
          tag: "h2",
          className: _.title,
          children: d.default.Messages.STREAM_REPORT_A_PROBLEM
        })]
      }), (0, t.jsxs)(n.ModalContent, {
        className: _.content,
        children: [(0, t.jsx)(n.Text, {
          variant: "text-sm/normal",
          children: d.default.Messages.STREAM_REPORT_PROBLEM_BODY
        }), (0, t.jsx)(n.FormItem, {
          title: d.default.Messages.STREAM_REPORT_LABEL,
          children: (0, t.jsx)(n.SingleSelect, {
            placeholder: d.default.Messages.STREAM_REPORT_PLACEHOLDER,
            options: (0, r.default)(e, !1),
            onChange: this.handleChanged,
            value: l,
            maxVisibleItems: 4
          })
        }), (0, t.jsx)("div", {
          className: i.art
        })]
      }), (0, t.jsxs)(n.ModalFooter, {
        className: _.__invalid_footer,
        children: [(0, t.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          disabled: null == l,
          onClick: this.handleSubmit,
          children: d.default.Messages.STREAM_REPORT_SUBMIT
        }), (0, t.jsx)(u.default, {
          children: (0, t.jsx)(n.Button, {
            look: n.Button.Looks.LINK,
            color: n.Button.Colors.PRIMARY,
            size: n.Button.Sizes.NONE,
            onClick: a,
            children: d.default.Messages.CANCEL
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      problem: null
    }), E(this, "handleChanged", e => {
      this.setState({
        problem: null != e ? e : null
      })
    }), E(this, "handleSubmit", () => {
      let {
        stream: e,
        streamApplication: s,
        analyticsData: l,
        onClose: u
      } = this.props, {
        problem: r
      } = this.state;
      (0, o.default)({
        problem: r,
        stream: e,
        feedback: "",
        streamApplication: s,
        analyticsData: l,
        location: "Stream"
      }), u(), (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return s => (0, t.jsx)(e, {
          body: d.default.Messages.STREAM_REPORTED_BODY,
          ...s
        })
      })
    })
  }
}
s.default = M