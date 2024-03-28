"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120"), s("773603");
var n, o, l = s("735250"),
  a = s("470079"),
  r = s("544891"),
  i = s("481060"),
  d = s("581874"),
  c = s("285952"),
  u = s("474333"),
  N = s("572004"),
  I = s("472305"),
  h = s("981631"),
  x = s("689938"),
  O = s("170992");

function R(e) {
  let {
    name: t,
    value: s
  } = e, [n, o] = a.useState(d.CopyInputModes.DEFAULT);
  return (0, l.jsxs)("div", {
    className: O.infoRow,
    children: [(0, l.jsx)(i.FormTitle, {
      className: O.__invalid_infoTitle,
      children: t
    }), (0, l.jsx)(d.default, {
      value: s,
      mode: n,
      supportsCopy: N.SUPPORTS_COPY,
      onCopy: () => {
        (0, N.copy)(s), o(d.CopyInputModes.SUCCESS)
      }
    })]
  })
}

function C(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, [n, o] = a.useState(""), [d, N] = a.useState(""), [C, f] = a.useState(null), [m, p] = a.useState(!1), [M, T] = a.useState("DOMAIN"), _ = () => {
    p(!0), f(null), r.HTTP.post({
      url: h.Endpoints.CONNECTION(h.PlatformTypes.DOMAIN, n),
      body: {}
    }).then(() => {
      t()
    }).catch(e => {
      var t, s, n, o, l, a, r;
      (null === (t = e.body) || void 0 === t ? void 0 : t.proof) && "DOMAIN" === M ? (N(e.body.proof), T("PROOF_DNS")) : f((null === (a = e.body) || void 0 === a ? void 0 : null === (l = a.errors) || void 0 === l ? void 0 : null === (o = l.domain) || void 0 === o ? void 0 : null === (n = o._errors) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : s.message) || (null === (r = e.body) || void 0 === r ? void 0 : r.message) || e.message)
    }).finally(() => {
      p(!1)
    })
  };
  return (0, l.jsxs)(i.ModalRoot, {
    transitionState: s,
    className: O.__invalid_modal,
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: O.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: x.default.Messages.DOMAIN_VERIFICATION_HEADER
      }), (0, l.jsx)(i.ModalCloseButton, {
        className: O.closeButton,
        onClick: t
      })]
    }), (0, l.jsxs)(i.Slides, {
      activeSlide: M,
      width: 440,
      children: [(0, l.jsx)(i.Slide, {
        id: "DOMAIN",
        children: (0, l.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), _()
          },
          children: [(0, l.jsxs)(i.ModalContent, {
            className: O.content,
            children: [(0, l.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: O.description,
              children: x.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
            }), (0, l.jsx)(i.FormItem, {
              title: x.default.Messages.DOMAIN_VERIFICATION_LABEL,
              error: C,
              children: (0, l.jsx)(i.TextInput, {
                onChange: o,
                placeholder: I.EXAMPLE_DOMAIN,
                maxLength: 253,
                value: n,
                disabled: m,
                autoFocus: !0
              })
            })]
          }), (0, l.jsxs)(i.ModalFooter, {
            className: O.footer,
            children: [(0, l.jsx)(i.Button, {
              type: "submit",
              submitting: m,
              disabled: "" === n,
              children: x.default.Messages.NEXT
            }), (0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: t,
              children: x.default.Messages.CANCEL
            })]
          })]
        })
      }), (0, l.jsxs)(i.Slide, {
        id: "PROOF_DNS",
        children: [(0, l.jsxs)(i.ModalContent, {
          className: O.content,
          children: [(0, l.jsxs)("ol", {
            className: O.list,
            children: [(0, l.jsx)("li", {
              children: (0, l.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
              })
            }), (0, l.jsxs)("li", {
              children: [(0, l.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
              }), (0, l.jsxs)("div", {
                className: O.dnsRecordContainer,
                children: [(0, l.jsx)(R, {
                  name: x.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                  value: (0, I.getDnsName)(n)
                }), (0, l.jsx)(R, {
                  name: x.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                  value: "TXT"
                }), (0, l.jsx)(R, {
                  name: x.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                  value: d
                })]
              })]
            })]
          }), (0, l.jsx)(u.default, {
            messageType: u.HelpMessageTypes.INFO,
            className: O.text,
            children: x.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
          }), null != C && (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: O.text,
            children: C
          })]
        }), (0, l.jsxs)(i.ModalFooter, {
          className: O.footer,
          direction: c.default.Direction.HORIZONTAL,
          children: [(0, l.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              T("DOMAIN"), f(null)
            },
            children: x.default.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: O.footerInner,
            children: [(0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                T("PROOF_HTTP"), f(null)
              },
              className: O.__invalid_switchButton,
              children: x.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
            }), (0, l.jsx)(i.Button, {
              submitting: m,
              onClick: _,
              children: x.default.Messages.VERIFY
            })]
          })]
        })]
      }), (0, l.jsxs)(i.Slide, {
        id: "PROOF_HTTP",
        children: [(0, l.jsxs)(i.ModalContent, {
          className: O.content,
          children: [(0, l.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: x.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
          }), (0, l.jsxs)("div", {
            className: O.httpFileContainer,
            children: [(0, l.jsx)(R, {
              name: x.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
              value: (0, I.getHttpName)(n)
            }), (0, l.jsx)(R, {
              name: x.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
              value: d
            })]
          }), null != C && (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: O.text,
            children: C
          })]
        }), (0, l.jsxs)(i.ModalFooter, {
          className: O.footer,
          direction: c.default.Direction.HORIZONTAL,
          children: [(0, l.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              T("DOMAIN"), f(null)
            },
            children: x.default.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: O.footerInner,
            children: [(0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                T("PROOF_DNS"), f(null)
              },
              className: O.__invalid_switchButton,
              children: x.default.Messages.DOMAIN_VERIFICATION_USE_DNS
            }), (0, l.jsx)(i.Button, {
              submitting: m,
              onClick: _,
              children: x.default.Messages.VERIFY
            })]
          })]
        })]
      })]
    })]
  })
}(o = n || (n = {})).DOMAIN = "DOMAIN", o.PROOF_DNS = "PROOF_DNS", o.PROOF_HTTP = "PROOF_HTTP"