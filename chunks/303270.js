"use strict";
a.r(t), a.d(t, {
  default: function() {
    return L
  }
}), a("222007"), a("781738");
var s = a("37983"),
  n = a("884691"),
  i = a("414456"),
  l = a.n(i),
  r = a("146606"),
  o = a("65597"),
  d = a("77078"),
  u = a("206230"),
  c = a("526887"),
  E = a("289918"),
  m = a("935409"),
  f = a("158998"),
  S = a("415133"),
  g = a("500645"),
  _ = a("925922"),
  T = a("935583"),
  I = a("590456"),
  h = a("782340"),
  O = a("250727"),
  N = a("107681");
let M = n.forwardRef(function(e, t) {
  let {
    style: a,
    value: n,
    placeholder: i,
    maxLength: r,
    onFocus: o,
    onChange: u
  } = e;
  return (0, s.jsx)(d.TextArea, {
    className: l(O.userCardInput, a),
    autosize: !0,
    error: null,
    showCharacterCount: !1,
    spellCheck: !1,
    showRemainingCharacterCount: !1,
    value: n,
    placeholder: i,
    rows: 1,
    maxLength: r,
    onChange: u,
    onFocus: o,
    onKeyDown: e => {
      "Enter" === e.key && e.preventDefault()
    },
    inputRef: t
  })
});
var L = n.forwardRef(function(e, t) {
  let {
    user: a,
    error: i,
    formValues: L,
    displayProfile: R,
    onChangeFormValue: P,
    onFocusDisplayName: v,
    onFocusUsername: C,
    editState: x,
    footerNotice: p,
    usernameSuggestionLoading: A,
    oneClickFlow: y
  } = e, {
    username: U,
    globalName: G
  } = L, D = n.useRef(null), b = n.useRef(null), j = n.useMemo(() => a.merge({
    discriminator: "0000"
  }), [a]), [k, F] = (0, r.useSpring)(() => ({
    opacity: 0,
    y: 5
  }));
  n.useEffect(() => {
    F({
      y: 0,
      opacity: 1,
      from: {
        y: 5,
        opacity: 0
      }
    })
  }, [F, x]), n.useImperativeHandle(t, () => ({
    focusDisplayName: () => {
      var e, t, a;
      null === (t = b.current) || void 0 === t || t.setSelection(0, null === (e = b.current) || void 0 === e ? void 0 : e.value.length), null === (a = b.current) || void 0 === a || a.focus()
    },
    focusUsername: () => {
      var e, t, a;
      null === (t = D.current) || void 0 === t || t.setSelection(0, null === (e = D.current) || void 0 === e ? void 0 : e.value.length), null === (a = D.current) || void 0 === a || a.focus()
    }
  }), []);
  let w = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      createMultipleConfettiAt: B
    } = n.useContext(c.ConfettiCannonContext),
    H = null == R ? void 0 : R.getLegacyUsername();
  return n.useEffect(() => {
    if (!w && x === T.EditState.PREVIEW) a.username.includes(T.POMELO_KEYWORD) && (B(window.innerWidth / 2 + 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: 0,
          y: -180
        },
        maxValue: {
          x: 500,
          y: 180
        }
      }
    }, 15), B(window.innerWidth / 2 - 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: -500,
          y: -180
        },
        maxValue: {
          x: 0,
          y: 180
        }
      }
    }, 15))
  }, [B, x, a, w]), (0, s.jsxs)("div", {
    className: l(O.userCardContainer, {
      [O.shinyCard]: x === T.EditState.PREVIEW
    }),
    children: [(0, s.jsxs)("div", {
      className: O.profileCard,
      children: [(0, s.jsx)(E.default, {
        displayProfile: R,
        user: j,
        allowEdit: !1,
        guildId: void 0,
        profileType: I.UserProfileTypes.POMELO_POPOUT,
        showPremiumBadgeUpsell: !1
      }), (0, s.jsx)(m.UserPopoutAvatar, {
        user: j,
        displayProfile: R,
        isMobile: !1,
        status: null,
        onClose: void 0,
        disableUserProfileLink: !0,
        hasBanner: !1,
        profileType: I.UserProfileTypes.POMELO_POPOUT,
        animateOnHover: !1
      }), x === T.EditState.PREVIEW && null != H && (0, s.jsx)("div", {
        className: O.legacyUsernameBadgeContainer,
        children: (0, s.jsx)(d.Tooltip, {
          position: "top",
          text: h.default.Messages.ORIGINALLY_KNOWN_AS.format({
            legacyUsername: H
          }),
          spacing: 12,
          children: e => (0, s.jsx)(d.Anchor, {
            ...e,
            onClick: e.onClick,
            children: (0, s.jsx)("img", {
              className: O.legacyUsernameBadge,
              alt: "",
              src: N
            })
          })
        })
      })]
    }), x !== T.EditState.PREVIEW && (0, s.jsxs)(r.animated.div, {
      style: {
        opacity: k.opacity,
        y: k.y
      },
      className: O.inputContainer,
      children: [x === T.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: O.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: h.default.Messages.DISPLAY_NAME
        }), (0, s.jsx)(M, {
          style: l(O.displayNameHeight, O["heading-xl/bold"]),
          value: null != G ? G : "",
          placeholder: f.default.getName(a),
          maxLength: T.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => P({
            globalName: e
          }),
          onFocus: v,
          ref: b
        })]
      }), (x === T.EditState.EDIT_USERNAME || x === T.EditState.SUGGESTION) && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: O.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: h.default.Messages.USERNAME
        }), (0, s.jsx)(M, {
          style: l(O.userCardHeight, O.lowercaseUsername, O["heading-lg/medium"]),
          value: null != U ? U : "",
          placeholder: a.username,
          maxLength: T.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => P({
            username: e.replace("@", "")
          }),
          onFocus: C,
          ref: D
        })]
      }), (0, s.jsx)("div", {
        className: O.messageContainer,
        children: (() => {
          if (null != i) return (0, s.jsx)(g.default, {
            type: "error",
            children: i
          });
          if (null != p) {
            if (x !== T.EditState.SUGGESTION) return (0, s.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: p
            });
            if (!A) return (0, s.jsx)(g.default, {
              type: "success",
              children: p
            })
          }
          return null == p && null == i && (x === T.EditState.EDIT_USERNAME || x === T.EditState.SUGGESTION) ? (0, s.jsx)(_.default, {
            username: U,
            oneClickFlow: y
          }) : null
        })()
      })]
    }), x === T.EditState.PREVIEW && (0, s.jsxs)("div", {
      className: O.userCard,
      children: [(0, s.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: f.default.getName(a)
      }), (0, s.jsx)(d.Heading, {
        color: "text-normal",
        variant: "heading-lg/medium",
        children: a.username
      }), (0, s.jsx)(d.Text, {
        className: O.memberText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: h.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: (0, S.getMemberSince)(a.id)
        })
      })]
    })]
  })
})