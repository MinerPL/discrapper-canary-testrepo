"use strict";
let n, s;
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var a = l("735250"),
  r = l("470079"),
  i = l("803997"),
  o = l.n(i),
  u = l("481060"),
  c = l("447543"),
  d = l("881052"),
  _ = l("703656"),
  I = l("285952"),
  E = l("153124"),
  T = l("782605"),
  S = l("981631"),
  N = l("689938"),
  C = l("662288"),
  p = l("216019"),
  f = l("286359");
let A = "hTKzmak",
  L = (0, E.uid)();
let D = (n = window.GLOBAL_ENV.INVITE_HOST, s = "", null == n && (n = location.host, s = S.Routes.INVITE("")), "".concat(location.protocol, "//").concat(n).concat(s, "/")),
  m = [A, "".concat(D).concat(A), "".concat(D).concat("cool-people")],
  G = e => {
    let {
      onClick: t
    } = e;
    return (0, a.jsxs)(u.Clickable, {
      className: C.rowContainer,
      onClick: () => {
        t(), (0, _.transitionTo)(S.Routes.GUILD_DISCOVERY)
      },
      children: [(0, a.jsx)("img", {
        width: 40,
        height: 40,
        className: C.rowIcon,
        alt: "",
        src: f
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.Heading, {
          className: C.rowText,
          variant: "heading-md/semibold",
          children: N.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, a.jsx)(u.Text, {
          className: C.rowText,
          variant: "text-xs/normal",
          children: N.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, a.jsx)("img", {
        className: C.rowArrow,
        alt: "",
        src: p
      })]
    })
  };

function O(e) {
  let {
    onBack: t,
    onClose: l,
    isSlideReady: n
  } = e, [s, i] = r.useState(""), [_, E] = r.useState(!1), [S, p] = r.useState(null), f = r.useRef(null);
  r.useEffect(() => {
    var e;
    n && (null === (e = f.current) || void 0 === e || e.focus())
  }, [n]);
  let O = e => {
    e.preventDefault();
    let t = s.trim();
    if ("" === t) {
      p(N.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    p(null), E(!0);
    let n = t.split("/"),
      a = n[n.length - 1];
    c.default.resolveInvite(a, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (E(!1), null == t) {
        p(N.default.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = c.default.getInviteContext("Join Guild", t);
        c.default.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            l(), c.default.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError ? p((0, T.getInviteError)(e.code)) : p(N.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      E(!1);
      let t = new d.V6OrEarlierAPIError(e);
      p((0, T.getInviteError)(t.code))
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: C.header,
      direction: I.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, a.jsx)(u.Heading, {
        className: C.title,
        variant: "heading-xl/semibold",
        children: N.default.Messages.JOIN_SERVER_TITLE
      }), (0, a.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: N.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, a.jsx)(u.ModalCloseButton, {
        className: C.closeButton,
        onClick: l
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: C.__invalid_content,
      children: [(0, a.jsx)("form", {
        onSubmit: O,
        className: C.inputForm,
        children: (0, a.jsxs)(u.FormItem, {
          children: [(0, a.jsx)(u.FormTitle, {
            id: L,
            error: S,
            className: o()(C.formTitle, {
              [C.error]: null != S
            }),
            required: !0,
            children: N.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, a.jsx)(u.TextInput, {
            value: s,
            onChange: i,
            className: C.input,
            inputClassName: C.inputInner,
            placeholder: "".concat(D).concat(A),
            inputRef: f,
            required: !0,
            "aria-labelledby": L
          })]
        })
      }), (0, a.jsx)(u.FormItem, {
        title: N.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: C.formTitle,
        className: C.examplesForm,
        children: m.map(e => (0, a.jsx)(u.Clickable, {
          className: C.sampleLink,
          onClick: () => i(e),
          children: e
        }, e))
      }), (0, a.jsx)(G, {
        onClick: l
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: C.footer,
      children: [(0, a.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        submitting: _,
        onClick: O,
        children: N.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, a.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.MIN,
        onClick: t,
        children: N.default.Messages.BACK
      })]
    })]
  })
}