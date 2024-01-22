"use strict";
let n, r;
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  i = l("414456"),
  o = l.n(i),
  u = l("77078"),
  c = l("970728"),
  d = l("448993"),
  f = l("393414"),
  I = l("145131"),
  E = l("476765"),
  _ = l("883029"),
  p = l("49111"),
  T = l("782340"),
  S = l("479030"),
  C = l("529861"),
  m = l("156465");
let N = "hTKzmak",
  A = (0, E.uid)();
let L = (n = window.GLOBAL_ENV.INVITE_HOST, r = "", null == n && (n = location.host, r = p.Routes.INVITE("")), "".concat(location.protocol, "//").concat(n).concat(r, "/")),
  h = [N, "".concat(L).concat(N), "".concat(L).concat("cool-people")],
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, a.jsxs)(u.Clickable, {
      className: S.rowContainer,
      onClick: () => {
        t(), (0, f.transitionTo)(p.Routes.GUILD_DISCOVERY)
      },
      children: [(0, a.jsx)("img", {
        width: 40,
        height: 40,
        className: S.rowIcon,
        alt: "",
        src: m
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.Heading, {
          className: S.rowText,
          variant: "heading-md/semibold",
          children: T.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, a.jsx)(u.Text, {
          className: S.rowText,
          variant: "text-xs/normal",
          children: T.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, a.jsx)("img", {
        className: S.rowArrow,
        alt: "",
        src: C
      })]
    })
  };

function R(e) {
  let {
    onBack: t,
    onClose: l,
    isSlideReady: n
  } = e, [r, i] = s.useState(""), [f, E] = s.useState(!1), [p, C] = s.useState(null), m = s.useRef(null);
  s.useEffect(() => {
    var e;
    n && (null === (e = m.current) || void 0 === e || e.focus())
  }, [n]);
  let R = e => {
    e.preventDefault();
    let t = r.trim();
    if ("" === t) {
      C(T.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    C(null), E(!0);
    let n = t.split("/"),
      a = n[n.length - 1];
    c.default.resolveInvite(a, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (E(!1), null == t) {
        C(T.default.Messages.INSTANT_INVITE_EXPIRED);
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
          if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
            let t = (0, _.getInviteError)(e.code);
            C(t)
          } else C(T.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      E(!1);
      let t = new d.V6OrEarlierAPIError(e),
        l = (0, _.getInviteError)(t.code);
      C(l)
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: S.header,
      direction: I.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, a.jsx)(u.Heading, {
        className: S.title,
        variant: "heading-xl/semibold",
        children: T.default.Messages.JOIN_SERVER_TITLE
      }), (0, a.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: T.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, a.jsx)(u.ModalCloseButton, {
        className: S.closeButton,
        onClick: l
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: S.content,
      children: [(0, a.jsx)("form", {
        onSubmit: R,
        className: S.inputForm,
        children: (0, a.jsxs)(u.FormItem, {
          children: [(0, a.jsx)(u.FormTitle, {
            id: A,
            error: p,
            className: o(S.formTitle, {
              [S.error]: null != p
            }),
            required: !0,
            children: T.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, a.jsx)(u.TextInput, {
            value: r,
            onChange: i,
            className: S.input,
            inputClassName: S.inputInner,
            placeholder: "".concat(L).concat(N),
            inputRef: m,
            required: !0,
            "aria-labelledby": A
          })]
        })
      }), (0, a.jsx)(u.FormItem, {
        title: T.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: S.formTitle,
        className: S.examplesForm,
        children: h.map(e => (0, a.jsx)(u.Clickable, {
          className: S.sampleLink,
          onClick: () => i(e),
          children: e
        }, e))
      }), (0, a.jsx)(g, {
        onClick: l
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: S.footer,
      children: [(0, a.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        submitting: f,
        onClick: R,
        children: T.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, a.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.MIN,
        onClick: t,
        children: T.default.Messages.BACK
      })]
    })]
  })
}