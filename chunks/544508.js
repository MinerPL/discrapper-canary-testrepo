"use strict";
a.r(t), a("47120"), a("757143");
var s = a("735250"),
  i = a("470079"),
  n = a("803997"),
  l = a.n(n),
  o = a("718017"),
  r = a("399606"),
  d = a("481060"),
  u = a("607070"),
  c = a("745510"),
  E = a("735336"),
  m = a("131640"),
  S = a("51144"),
  f = a("346585"),
  g = a("81259"),
  _ = a("119848"),
  T = a("801461"),
  I = a("228168"),
  O = a("689938"),
  h = a("659338"),
  N = a("733469");
let M = i.forwardRef(function(e, t) {
  let {
    style: a,
    value: i,
    placeholder: n,
    maxLength: o,
    onFocus: r,
    onChange: u
  } = e;
  return (0, s.jsx)(d.TextArea, {
    className: l()(h.userCardInput, a),
    autosize: !0,
    error: null,
    showCharacterCount: !1,
    spellCheck: !1,
    showRemainingCharacterCount: !1,
    value: i,
    placeholder: n,
    rows: 1,
    maxLength: o,
    onChange: u,
    onFocus: r,
    onKeyDown: e => {
      "Enter" === e.key && e.preventDefault()
    },
    inputRef: t
  })
});
t.default = i.forwardRef(function(e, t) {
  let {
    user: a,
    error: n,
    formValues: L,
    displayProfile: P,
    onChangeFormValue: x,
    onFocusDisplayName: R,
    onFocusUsername: C,
    editState: v,
    footerNotice: p,
    usernameSuggestionLoading: A,
    oneClickFlow: y
  } = e, {
    username: U,
    globalName: G
  } = L, b = i.useRef(null), D = i.useRef(null), j = i.useMemo(() => a.merge({
    discriminator: "0000"
  }), [a]), [k, F] = (0, o.useSpring)(() => ({
    opacity: 0,
    y: 5
  }));
  i.useEffect(() => {
    F({
      y: 0,
      opacity: 1,
      from: {
        y: 5,
        opacity: 0
      }
    })
  }, [F, v]), i.useImperativeHandle(t, () => ({
    focusDisplayName: () => {
      var e, t, a;
      null === (t = D.current) || void 0 === t || t.setSelection(0, null === (e = D.current) || void 0 === e ? void 0 : e.value.length), null === (a = D.current) || void 0 === a || a.focus()
    },
    focusUsername: () => {
      var e, t, a;
      null === (t = b.current) || void 0 === t || t.setSelection(0, null === (e = b.current) || void 0 === e ? void 0 : e.value.length), null === (a = b.current) || void 0 === a || a.focus()
    }
  }), []);
  let w = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      createMultipleConfettiAt: B
    } = i.useContext(c.ConfettiCannonContext),
    H = null == P ? void 0 : P.getLegacyUsername();
  return i.useEffect(() => {
    if (!w && v === T.EditState.PREVIEW) a.username.includes(T.POMELO_KEYWORD) && (B(window.innerWidth / 2 + 150, 0, {
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
  }, [B, v, a, w]), (0, s.jsxs)("div", {
    className: l()(h.userCardContainer, {
      [h.shinyCard]: v === T.EditState.PREVIEW
    }),
    children: [(0, s.jsxs)("div", {
      className: h.profileCard,
      children: [(0, s.jsx)(E.default, {
        displayProfile: P,
        user: j,
        allowEdit: !1,
        guildId: void 0,
        profileType: I.UserProfileTypes.POMELO_POPOUT,
        showPremiumBadgeUpsell: !1
      }), (0, s.jsx)(m.UserPopoutAvatar, {
        user: j,
        displayProfile: P,
        isMobile: !1,
        status: null,
        onClose: void 0,
        disableUserProfileLink: !0,
        hasBanner: !1,
        profileType: I.UserProfileTypes.POMELO_POPOUT,
        animateOnHover: !1
      }), v === T.EditState.PREVIEW && null != H && (0, s.jsx)("div", {
        className: h.legacyUsernameBadgeContainer,
        children: (0, s.jsx)(d.Tooltip, {
          position: "top",
          text: O.default.Messages.ORIGINALLY_KNOWN_AS.format({
            legacyUsername: H
          }),
          spacing: 12,
          children: e => (0, s.jsx)(d.Anchor, {
            ...e,
            onClick: e.onClick,
            children: (0, s.jsx)("img", {
              className: h.legacyUsernameBadge,
              alt: "",
              src: N
            })
          })
        })
      })]
    }), v !== T.EditState.PREVIEW && (0, s.jsxs)(o.animated.div, {
      style: {
        opacity: k.opacity,
        y: k.y
      },
      className: h.inputContainer,
      children: [v === T.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: h.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: O.default.Messages.DISPLAY_NAME
        }), (0, s.jsx)(M, {
          style: l()(h.displayNameHeight, h["heading-xl/bold"]),
          value: null != G ? G : "",
          placeholder: S.default.getName(a),
          maxLength: T.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => x({
            globalName: e
          }),
          onFocus: R,
          ref: D
        })]
      }), (v === T.EditState.EDIT_USERNAME || v === T.EditState.SUGGESTION) && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: h.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: O.default.Messages.USERNAME
        }), (0, s.jsx)(M, {
          style: l()(h.userCardHeight, h.lowercaseUsername, h["heading-lg/medium"]),
          value: null != U ? U : "",
          placeholder: a.username,
          maxLength: T.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => x({
            username: e.replace("@", "")
          }),
          onFocus: C,
          ref: b
        })]
      }), (0, s.jsx)("div", {
        className: h.messageContainer,
        children: (() => {
          if (null != n) return (0, s.jsx)(g.default, {
            type: "error",
            children: n
          });
          if (null != p) {
            if (v !== T.EditState.SUGGESTION) return (0, s.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: p
            });
            if (!A) return (0, s.jsx)(g.default, {
              type: "success",
              children: p
            })
          }
          return null == p && null == n && (v === T.EditState.EDIT_USERNAME || v === T.EditState.SUGGESTION) ? (0, s.jsx)(_.default, {
            username: U,
            oneClickFlow: y
          }) : null
        })()
      })]
    }), v === T.EditState.PREVIEW && (0, s.jsxs)("div", {
      className: h.userCard,
      children: [(0, s.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: S.default.getName(a)
      }), (0, s.jsx)(d.Heading, {
        color: "text-normal",
        variant: "heading-lg/medium",
        children: a.username
      }), (0, s.jsx)(d.Text, {
        className: h.memberText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: O.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: (0, f.getMemberSince)(a.id)
        })
      })]
    })]
  })
})