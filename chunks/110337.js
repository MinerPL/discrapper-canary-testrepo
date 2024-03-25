"use strict";
let l, r;
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  i = n("414456"),
  o = n.n(i),
  u = n("77078"),
  c = n("970728"),
  d = n("448993"),
  I = n("393414"),
  p = n("145131"),
  E = n("476765"),
  _ = n("883029"),
  S = n("49111"),
  f = n("782340"),
  T = n("274039"),
  C = n("529861"),
  N = n("156465");
let L = "hTKzmak",
  A = (0, E.uid)();
let m = (l = window.GLOBAL_ENV.INVITE_HOST, r = "", null == l && (l = location.host, r = S.Routes.INVITE("")), "".concat(location.protocol, "//").concat(l).concat(r, "/")),
  h = [L, "".concat(m).concat(L), "".concat(m).concat("cool-people")],
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, s.jsxs)(u.Clickable, {
      className: T.rowContainer,
      onClick: () => {
        t(), (0, I.transitionTo)(S.Routes.GUILD_DISCOVERY)
      },
      children: [(0, s.jsx)("img", {
        width: 40,
        height: 40,
        className: T.rowIcon,
        alt: "",
        src: N
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(u.Heading, {
          className: T.rowText,
          variant: "heading-md/semibold",
          children: f.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, s.jsx)(u.Text, {
          className: T.rowText,
          variant: "text-xs/normal",
          children: f.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, s.jsx)("img", {
        className: T.rowArrow,
        alt: "",
        src: C
      })]
    })
  };

function D(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: l
  } = e, [r, i] = a.useState(""), [I, E] = a.useState(!1), [S, C] = a.useState(null), N = a.useRef(null);
  a.useEffect(() => {
    var e;
    l && (null === (e = N.current) || void 0 === e || e.focus())
  }, [l]);
  let D = e => {
    e.preventDefault();
    let t = r.trim();
    if ("" === t) {
      C(f.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    C(null), E(!0);
    let l = t.split("/"),
      s = l[l.length - 1];
    c.default.resolveInvite(s, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (E(!1), null == t) {
        C(f.default.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = c.default.getInviteContext("Join Guild", t);
        c.default.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.default.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
            let t = (0, _.getInviteError)(e.code);
            C(t)
          } else C(f.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      E(!1);
      let t = new d.V6OrEarlierAPIError(e),
        n = (0, _.getInviteError)(t.code);
      C(n)
    })
  };
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)(u.ModalHeader, {
      className: T.header,
      direction: p.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, s.jsx)(u.Heading, {
        className: T.title,
        variant: "heading-xl/semibold",
        children: f.default.Messages.JOIN_SERVER_TITLE
      }), (0, s.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: f.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, s.jsx)(u.ModalCloseButton, {
        className: T.closeButton,
        onClick: n
      })]
    }), (0, s.jsxs)(u.ModalContent, {
      className: T.content,
      children: [(0, s.jsx)("form", {
        onSubmit: D,
        className: T.inputForm,
        children: (0, s.jsxs)(u.FormItem, {
          children: [(0, s.jsx)(u.FormTitle, {
            id: A,
            error: S,
            className: o(T.formTitle, {
              [T.error]: null != S
            }),
            required: !0,
            children: f.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, s.jsx)(u.TextInput, {
            value: r,
            onChange: i,
            className: T.input,
            inputClassName: T.inputInner,
            placeholder: "".concat(m).concat(L),
            inputRef: N,
            required: !0,
            "aria-labelledby": A
          })]
        })
      }), (0, s.jsx)(u.FormItem, {
        title: f.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: T.formTitle,
        className: T.examplesForm,
        children: h.map(e => (0, s.jsx)(u.Clickable, {
          className: T.sampleLink,
          onClick: () => i(e),
          children: e
        }, e))
      }), (0, s.jsx)(g, {
        onClick: n
      })]
    }), (0, s.jsxs)(u.ModalFooter, {
      className: T.footer,
      children: [(0, s.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        submitting: I,
        onClick: D,
        children: f.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, s.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.MIN,
        onClick: t,
        children: f.default.Messages.BACK
      })]
    })]
  })
}