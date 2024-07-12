s.d(t, {
  Z: function() {
return p;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(544891),
  c = s(704215),
  d = s(481060),
  _ = s(230711),
  E = s(497321),
  u = s(43015),
  T = s(136097),
  I = s(605236),
  S = s(246946),
  N = s(594174),
  C = s(460562),
  m = s(823379),
  A = s(981631),
  h = s(921944),
  g = s(689938),
  O = s(653829);

function p() {
  let e;
  let {
currentSession: t,
otherSessions: s
  } = (0, T.h)(), i = (0, o.e7)([S.Z], () => S.Z.hidePersonalInformation), r = (0, o.e7)([N.default], () => N.default.getCurrentUser()), [_, C] = a.useState(!1);
  a.useEffect(() => {
(0, I.EW)(c.z.AUTH_SESSIONS_NEW, {
  dismissAction: h.L.AUTO
}), (0, u.fw)();
let e = setTimeout(() => C(!0), 500);
return () => {
  clearTimeout(e), (0, u.$Z)();
};
  }, []);
  let m = () => {
  l.tn.post({
    url: A.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG
  });
},
[p, M] = a.useState(new Set());
  return i ? (0, n.jsx)(E.Z, {}) : (e = null == t && 0 === s.length ? _ ? (0, n.jsx)('div', {
className: O.loading,
children: (0, n.jsx)(d.Spinner, {})
  }) : null : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: O.sessions,
    children: [
      (0, n.jsx)(d.FormSection, {
        tag: d.FormTitleTags.H5,
        title: g.Z.Messages.AUTH_SESSIONS_CURRENT,
        titleClassName: O.groupTitle,
        children: null != t ? (0, n.jsx)(R, {
          session: t,
          current: !0
        }) : null
      }),
      !(s.length > 0) && (null == r ? void 0 : r.mfaEnabled) ? null : (0, n.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H5,
        title: g.Z.Messages.AUTH_SESSIONS_OTHERS,
        titleClassName: O.groupTitle,
        className: O.otherSessions,
        children: [
          s.map(e => (0, n.jsx)(R, {
            session: e,
            useChecks: p.size > 0,
            checked: p.has(e.id_hash),
            setChecked: t => {
              let s = new Set(p);
              t ? s.add(e.id_hash) : s.delete(e.id_hash), M(s);
            }
          }, e.id_hash)),
          (null == r ? void 0 : r.mfaEnabled) ? null : (0, n.jsx)(x, {})
        ]
      })
    ]
  }),
  s.length > 0 ? (0, n.jsxs)(d.FormSection, {
    tag: d.FormTitleTags.H5,
    title: p.size > 0 ? g.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : g.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
    children: [
      (0, n.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: g.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
      }),
      (0, n.jsx)(d.Button, {
        look: d.Button.Looks.OUTLINED,
        color: d.Button.Colors.RED,
        size: d.Button.Sizes.SMALL,
        className: O.logOutAllButton,
        onClick: () => {
          p.size > 0 ? (0, u.L$)(Array.from(p)) : (0, u.L$)(s.map(e => e.id_hash));
        },
        children: p.size > 0 ? g.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({
          count: p.size
        }) : g.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
      })
    ]
  }) : null
]
  }), (0, n.jsxs)(d.FormSection, {
tag: d.FormTitleTags.H1,
title: g.Z.Messages.AUTH_SESSIONS,
children: [
  (0, n.jsx)(d.FormText, {
    type: d.FormTextTypes.DESCRIPTION,
    className: O.description,
    children: g.Z.Messages.AUTH_SESSIONS_DESCRIPTION
  }),
  (null == r ? void 0 : r.isStaff()) ? (0, n.jsxs)('div', {
    className: O.tools,
    children: [
      (0, n.jsx)(d.Text, {
        className: O.toolsTitle,
        variant: 'text-md/bold',
        children: 'DEV TOOLS'
      }),
      (0, n.jsx)(d.Text, {
        className: O.toolsTitle,
        variant: 'text-sm/normal',
        color: 'text-danger',
        children: 'These tools are only shown to staff users.'
      }),
      (0, n.jsx)(d.Tooltip, {
        text: 'Triggers mobile and email suspicious session notifications for the current user',
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, n.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            color: d.Button.Colors.PRIMARY,
            onClick: m,
            onMouseEnter: t,
            onMouseLeave: s,
            children: 'Trigger Suspicious Sessions Notification'
          });
        }
      })
    ]
  }) : null,
  e
]
  }));
}

function R(e) {
  var t, s, a, i, o;
  let {
session: l,
current: c,
setChecked: _,
checked: E,
useChecks: I
  } = e, S = null !== (o = null === (t = l.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== o ? o : null === (s = l.client_info) || void 0 === s ? void 0 : s.ip, N = null === (a = l.client_info) || void 0 === a ? void 0 : a.platform, {
text: C,
icon: A
  } = function(e) {
switch (null == e ? void 0 : e.toLowerCase().trim()) {
  case null:
  case void 0:
  case '':
    return {
      text: g.Z.Messages.AUTH_SESSIONS_OS_UNKNOWN,
        icon: d.ScreenIcon
    };
  case 'ios':
  case 'android':
    return {
      text: e,
        icon: d.MobilePhoneIcon
    };
  default:
    return {
      text: e,
        icon: d.ScreenIcon
    };
}
  }(null === (i = l.client_info) || void 0 === i ? void 0 : i.os), h = c ? null : (0, T.p)(l.approx_last_used_time), p = [
C,
N
  ].filter(m.lm), R = [
S,
h
  ].filter(m.lm);
  return (0, n.jsxs)('div', {
className: r()(O.session, c ? O.currentSession : null),
children: [
  (0, n.jsx)('div', {
    className: O.sessionIcon,
    children: (0, n.jsx)(A, {
      size: 'md',
      color: 'currentColor'
    })
  }),
  (0, n.jsxs)('div', {
    className: O.sessionInfo,
    children: [
      (0, n.jsxs)(d.Text, {
        variant: 'eyebrow',
        className: O.sessionInfoRow,
        children: [
          (0, n.jsx)('span', {
            children: p[0]
          }),
          p.length > 1 && (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('span', {
                children: '\xB7'
              }),
              (0, n.jsx)('span', {
                children: p[1]
              })
            ]
          })
        ]
      }),
      (0, n.jsxs)(d.Text, {
        variant: 'text-sm/medium',
        className: O.sessionInfoRow,
        children: [
          (0, n.jsx)('span', {
            children: R[0]
          }),
          R.length > 1 && (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('span', {
                children: '\xB7'
              }),
              (0, n.jsx)('span', {
                children: R[1]
              })
            ]
          })
        ]
      })
    ]
  }),
  c ? null : I ? (0, n.jsx)('div', {
    className: O.sessionCheckbox,
    children: (0, n.jsx)(d.Checkbox, {
      onChange: (e, t) => {
        null == _ || _(t);
      },
      value: E
    })
  }) : (0, n.jsx)(d.Clickable, {
    className: O.sessionMoreButton,
    onClick: e => {
      e.shiftKey ? null == _ || _(!0) : (0, u.L$)(l.id_hash);
    },
    'aria-label': g.Z.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
    children: (0, n.jsx)(d.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor'
    })
  })
]
  }, l.id_hash);
}

function x() {
  return (0, n.jsxs)('div', {
className: r()(O.session, O.legacySession),
children: [
  (0, n.jsx)('div', {
    className: O.sessionIcon,
    children: (0, n.jsx)(C.Z, {
      width: '32',
      height: '32'
    })
  }),
  (0, n.jsxs)('div', {
    className: O.sessionInfo,
    children: [
      (0, n.jsx)(d.Text, {
        variant: 'eyebrow',
        className: O.sessionInfoRow,
        color: 'text-muted',
        children: (0, n.jsx)('span', {
          children: g.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY
        })
      }),
      (0, n.jsx)(d.Text, {
        variant: 'text-sm/medium',
        className: O.sessionInfoRow,
        color: 'text-muted',
        children: (0, n.jsx)('span', {
          children: g.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({
            onClick: () => _.Z.setSection(A.oAB.ACCOUNT)
          })
        })
      })
    ]
  })
]
  });
}