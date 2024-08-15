s(47120), s(757143);
var n = s(735250),
  i = s(470079),
  a = s(120356),
  r = s.n(a),
  l = s(338545),
  o = s(399606),
  u = s(481060),
  d = s(607070),
  c = s(745510),
  E = s(735336),
  _ = s(131640),
  m = s(51144),
  g = s(346585),
  S = s(81259),
  I = s(119848),
  T = s(801461),
  O = s(228168),
  N = s(689938),
  h = s(740080),
  f = s(733469);
let M = i.forwardRef(function(e, t) {
  let {
style: s,
value: i,
placeholder: a,
maxLength: l,
onFocus: o,
onChange: d
  } = e;
  return (0, n.jsx)(u.TextArea, {
className: r()(h.userCardInput, s),
autosize: !0,
error: null,
showCharacterCount: !1,
spellCheck: !1,
showRemainingCharacterCount: !1,
value: i,
placeholder: a,
rows: 1,
maxLength: l,
onChange: d,
onFocus: o,
onKeyDown: e => {
  'Enter' === e.key && e.preventDefault();
},
inputRef: t
  });
});
t.Z = i.forwardRef(function(e, t) {
  let {
user: s,
error: a,
formValues: L,
displayProfile: x,
onChangeFormValue: C,
onFocusDisplayName: R,
onFocusUsername: A,
editState: P,
footerNotice: v,
usernameSuggestionLoading: p,
oneClickFlow: y
  } = e, {
username: Z,
globalName: U
  } = L, G = i.useRef(null), b = i.useRef(null), j = i.useMemo(() => s.merge({
discriminator: '0000'
  }), [s]), [D, W] = (0, u.useSpring)(() => ({
opacity: 0,
y: 5
  }));
  i.useEffect(() => {
W({
  y: 0,
  opacity: 1,
  from: {
    y: 5,
    opacity: 0
  }
});
  }, [
W,
P
  ]), i.useImperativeHandle(t, () => ({
focusDisplayName: () => {
  var e, t, s;
  null === (t = b.current) || void 0 === t || t.setSelection(0, null === (e = b.current) || void 0 === e ? void 0 : e.value.length), null === (s = b.current) || void 0 === s || s.focus();
},
focusUsername: () => {
  var e, t, s;
  null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (s = G.current) || void 0 === s || s.focus();
}
  }), []);
  let k = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
{
  createMultipleConfettiAt: F
} = i.useContext(c.h),
w = null == x ? void 0 : x.getLegacyUsername();
  return i.useEffect(() => {
if (!k && P === T.Wq.PREVIEW && !!s.username.includes(T.nA))
  F(window.innerWidth / 2 + 150, 0, {
    velocity: {
      type: 'static-random',
      minValue: {
        x: 0,
        y: -180
      },
      maxValue: {
        x: 500,
        y: 180
      }
    }
  }, 15), F(window.innerWidth / 2 - 150, 0, {
    velocity: {
      type: 'static-random',
      minValue: {
        x: -500,
        y: -180
      },
      maxValue: {
        x: 0,
        y: 180
      }
    }
  }, 15);
  }, [
F,
P,
s,
k
  ]), (0, n.jsxs)('div', {
className: r()(h.userCardContainer, {
  [h.shinyCard]: P === T.Wq.PREVIEW
}),
children: [
  (0, n.jsxs)('div', {
    className: h.profileCard,
    children: [
      (0, n.jsx)(E.Z, {
        displayProfile: x,
        user: j,
        allowEdit: !1,
        guildId: void 0,
        profileType: O.y0.POMELO_POPOUT,
        showPremiumBadgeUpsell: !1
      }),
      (0, n.jsx)(_.tZ, {
        user: j,
        displayProfile: x,
        isMobile: !1,
        status: null,
        onClose: void 0,
        disableUserProfileLink: !0,
        hasBanner: !1,
        profileType: O.y0.POMELO_POPOUT,
        animateOnHover: !1
      }),
      P === T.Wq.PREVIEW && null != w && (0, n.jsx)('div', {
        className: h.legacyUsernameBadgeContainer,
        children: (0, n.jsx)(u.Tooltip, {
          position: 'top',
          text: N.Z.Messages.ORIGINALLY_KNOWN_AS.format({
            legacyUsername: w
          }),
          spacing: 12,
          children: e => (0, n.jsx)(u.Anchor, {
            ...e,
            onClick: e.onClick,
            children: (0, n.jsx)('img', {
              className: h.legacyUsernameBadge,
              alt: '',
              src: f
            })
          })
        })
      })
    ]
  }),
  P !== T.Wq.PREVIEW && (0, n.jsxs)(l.animated.div, {
    style: {
      opacity: D.opacity,
      y: D.y
    },
    className: h.inputContainer,
    children: [
      P === T.Wq.EDIT_DISPLAY_NAME && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(u.Text, {
            className: h.textPadding,
            color: 'text-muted',
            variant: 'text-sm/semibold',
            children: N.Z.Messages.DISPLAY_NAME
          }),
          (0, n.jsx)(M, {
            style: r()(h.displayNameHeight, h['heading-xl/bold']),
            value: null != U ? U : '',
            placeholder: m.ZP.getName(s),
            maxLength: T.hy,
            onChange: e => C({
              globalName: e
            }),
            onFocus: R,
            ref: b
          })
        ]
      }),
      (P === T.Wq.EDIT_USERNAME || P === T.Wq.SUGGESTION) && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(u.Text, {
            className: h.textPadding,
            color: 'text-muted',
            variant: 'text-sm/semibold',
            children: N.Z.Messages.USERNAME
          }),
          (0, n.jsx)(M, {
            style: r()(h.userCardHeight, h.lowercaseUsername, h['heading-lg/medium']),
            value: null != Z ? Z : '',
            placeholder: s.username,
            maxLength: T.hy,
            onChange: e => C({
              username: e.replace('@', '')
            }),
            onFocus: A,
            ref: G
          })
        ]
      }),
      (0, n.jsx)('div', {
        className: h.messageContainer,
        children: (() => {
          if (null != a)
            return (0, n.jsx)(S.Z, {
              type: 'error',
              children: a
            });
          if (null != v) {
            if (P !== T.Wq.SUGGESTION)
              return (0, n.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: v
              });
            if (!p)
              return (0, n.jsx)(S.Z, {
                type: 'success',
                children: v
              });
          }
          return null == v && null == a && (P === T.Wq.EDIT_USERNAME || P === T.Wq.SUGGESTION) ? (0, n.jsx)(I.Z, {
            username: Z,
            oneClickFlow: y
          }) : null;
        })()
      })
    ]
  }),
  P === T.Wq.PREVIEW && (0, n.jsxs)('div', {
    className: h.userCard,
    children: [
      (0, n.jsx)(u.Heading, {
        color: 'header-primary',
        variant: 'heading-xl/bold',
        children: m.ZP.getName(s)
      }),
      (0, n.jsx)(u.Heading, {
        color: 'text-normal',
        variant: 'heading-lg/medium',
        children: s.username
      }),
      (0, n.jsx)(u.Text, {
        className: h.memberText,
        color: 'text-muted',
        variant: 'text-sm/medium',
        children: N.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: (0, g.K9)(s.id)
        })
      })
    ]
  })
]
  });
});