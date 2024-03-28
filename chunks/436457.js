"use strict";
let a, n;
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120");
var l = s("735250"),
  r = s("470079"),
  o = s("803997"),
  i = s.n(o),
  c = s("481060"),
  u = s("447543"),
  d = s("230711"),
  f = s("881052"),
  E = s("285952"),
  p = s("154921"),
  m = s("782605"),
  h = s("981631"),
  N = s("689938"),
  _ = s("898026");
let T = (a = window.GLOBAL_ENV.INVITE_HOST, n = "", null == a && (a = location.host, n = h.Routes.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(n, "/"));

function v(e) {
  let {
    onBack: t,
    onComplete: s,
    onConnect: a,
    isSlideReady: n
  } = e, [o, v] = r.useState(""), [A, S] = r.useState(!1), [x, I] = r.useState(null), g = r.useRef(null);
  r.useEffect(() => {
    var e;
    n && (null === (e = g.current) || void 0 === e || e.focus())
  }, [n]);
  let C = r.useCallback(e => {
      e.preventDefault();
      let t = o.trim();
      if ("" === t) {
        I(N.default.Messages.INVALID_INVITE_LINK_ERROR);
        return
      }
      I(null), S(!0);
      let a = t.split("/"),
        n = a[a.length - 1];
      u.default.resolveInvite(n, "Join Guild", {
        inputValue: t
      }).then(e => {
        let {
          invite: t
        } = e;
        if (S(!1), null == t) {
          I(N.default.Messages.INSTANT_INVITE_EXPIRED);
          return
        }
        if (null != t.channel) {
          let e = u.default.getInviteContext("Join Guild", t);
          u.default.acceptInvite({
            inviteKey: t.code,
            context: e,
            callback: e => {
              s(), u.default.transitionToInvite(e)
            }
          }).catch(e => {
            e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError ? I((0, m.getInviteError)(e.code)) : I(N.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
          })
        }
      }, e => {
        S(!1);
        let t = new f.V6OrEarlierAPIError(e);
        I((0, m.getInviteError)(t.code))
      })
    }, [o, S, I, s]),
    b = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(c.ModalHeader, {
        className: _.header,
        direction: E.default.Direction.VERTICAL,
        separator: !1,
        children: [(0, l.jsx)(p.default, {
          className: _.title,
          size: p.default.Sizes.SIZE_24,
          color: p.default.Colors.HEADER_PRIMARY,
          children: N.default.Messages.JOIN_SERVER_TITLE
        }), (0, l.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: N.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
        })]
      }), (0, l.jsxs)(c.ModalContent, {
        children: [(0, l.jsx)("form", {
          onSubmit: C,
          className: _.inputForm,
          children: (0, l.jsx)(c.FormItem, {
            title: N.default.Messages.FORM_LABEL_INVITE_LINK,
            error: x,
            titleClassName: i()(_.formTitle, {
              [_.error]: null != x
            }),
            children: (0, l.jsx)(c.TextInput, {
              value: o,
              onChange: v,
              className: _.input,
              inputClassName: _.inputInner,
              inputRef: g
            })
          })
        }), (0, l.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: N.default.Messages.JOIN_SERVER_EXAMPLES.format({
            examples: "".concat(T).concat("cool-people", ", ").concat("hTKzmak")
          })
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: _.connectCTA,
          children: N.default.Messages.JOIN_GUILD_CONNECT.format({
            onClick: () => {
              a(), d.default.open(h.UserSettingsSections.CONNECTIONS)
            }
          })
        })]
      })]
    });
  return {
    content: b,
    footer: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        onClick: C,
        disabled: 0 === o.length,
        submitting: A,
        children: N.default.Messages.JOIN
      }), (0, l.jsx)(c.Button, {
        className: _.__invalid_skipButton,
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.MIN,
        onClick: t,
        children: N.default.Messages.BACK
      })]
    })
  }
}