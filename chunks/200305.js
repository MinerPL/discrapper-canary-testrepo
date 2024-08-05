n.d(s, {
  Y: function() {
return D;
  }
}), n(47120);
var t, l, i = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  d = n(442837),
  u = n(481060),
  c = n(893776),
  I = n(809206),
  E = n(607070),
  M = n(339085),
  m = n(565138),
  _ = n(601964),
  N = n(650774),
  x = n(271383),
  R = n(430824),
  f = n(594174),
  g = n(285952),
  h = n(626135),
  C = n(768581),
  T = n(863249),
  v = n(944163),
  A = n(246364),
  O = n(983736),
  F = n(266395),
  j = n(990488),
  Z = n(592286),
  L = n(981631),
  p = n(689938),
  B = n(920691),
  V = n(419851),
  S = n(296507),
  b = n(866402),
  P = n(246403);
(l = t || (t = {}))[l.CLAIM_ACCOUNT = 0] = 'CLAIM_ACCOUNT', l[l.EMAIL_CONFIRMATION = 1] = 'EMAIL_CONFIRMATION', l[l.VERIFICATION_FORM = 2] = 'VERIFICATION_FORM';
let y = e => {
let {
  headerId: s,
  email: n,
  password: t,
  setEmail: l,
  setPassword: a,
  emailError: r,
  passwordError: o
} = e;
return (0, i.jsxs)('div', {
  className: B.content,
  children: [
    (0, i.jsx)('div', {
      className: B.applicationIconContainer,
      children: (0, i.jsx)('img', {
        alt: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
        src: V,
        className: B.applicationIcon
      })
    }),
    (0, i.jsx)(u.Heading, {
      id: s,
      variant: 'heading-xl/semibold',
      className: B.header,
      children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
    }),
    (0, i.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
    }),
    (0, i.jsx)('hr', {
      className: B.divider
    }),
    (0, i.jsx)(u.FormItem, {
      title: p.Z.Messages.FORM_LABEL_EMAIL,
      className: B.formItem,
      children: (0, i.jsx)(u.TextInput, {
        value: n,
        error: r,
        onChange: l,
        autoFocus: !0
      })
    }),
    (0, i.jsx)(u.FormItem, {
      title: p.Z.Messages.FORM_LABEL_PASSWORD,
      className: B.formItem,
      children: (0, i.jsx)(u.TextInput, {
        type: 'password',
        value: t,
        error: o,
        onChange: a
      })
    })
  ]
});
  },
  U = e => {
let {
  headerId: s,
  email: n
} = e;
return (0, i.jsxs)('div', {
  className: B.content,
  children: [
    (0, i.jsx)('img', {
      alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
      src: P,
      className: B.applicationIcon
    }),
    (0, i.jsx)(u.Heading, {
      id: s,
      variant: 'heading-xl/semibold',
      className: B.header,
      children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
        email: n
      })
    }),
    (0, i.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
    }),
    (0, i.jsx)(u.Button, {
      className: B.resendButton,
      size: u.Button.Sizes.NONE,
      look: u.Button.Looks.LINK,
      onClick: () => c.Z.verifyResend(),
      children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
    })
  ]
});
  },
  D = e => {
var s;
let {
  guildId: n,
  formState: t,
  updateFormState: l,
  isPreview: a = !1
} = e, r = (0, d.e7)([v.Z], () => v.Z.get(n));
if (null == r)
  return null;
let o = null !== (s = null != t ? t : null == r ? void 0 : r.formFields) && void 0 !== s ? s : [],
  u = a ? j.W : j.r;
return (0, i.jsx)(u, {
  guildId: n,
  formFields: o,
  updateFormFields: l
});
  },
  k = () => n.e('26176').then(n.t.bind(n, 737848, 19)).then(e => {
let {
  default: s
} = e;
return s;
  }),
  w = e => {
let {
  headerId: s,
  guildId: n,
  formState: t,
  updateFormState: l,
  useReducedMotion: a,
  isPreview: r = !1
} = e;
return (0, i.jsxs)('div', {
  className: B.content,
  children: [
    (0, i.jsxs)('div', {
      className: B.animationAndSparklesContainer,
      children: [
        (0, i.jsx)('img', {
          alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: b,
          className: o()(B.sparkleIcon, B.sparkleBottom)
        }),
        (0, i.jsx)(u.LottieAnimation, {
          importData: k,
          shouldAnimate: !a,
          className: B.animation
        }),
        (0, i.jsx)('img', {
          alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: S,
          className: o()(B.sparkleIcon, B.sparkleTop)
        })
      ]
    }),
    (0, i.jsx)(u.Heading, {
      id: s,
      variant: 'heading-xl/semibold',
      className: B.header,
      children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE
    }),
    (0, i.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: B.subheader,
      children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
    }),
    (0, i.jsx)('hr', {
      className: B.divider
    }),
    (0, i.jsx)(D, {
      guildId: n,
      formState: t,
      updateFormState: l,
      isPreview: r
    })
  ]
});
  };
s.Z = e => {
  var s, n;
  let {
headerId: t,
guildId: l,
onClose: r,
onComplete: c,
inviteCode: j,
isPreview: V = !1
  } = e, S = (0, F.rb)(e => e.hasUnsubmittedChanges), b = (0, d.e7)([R.Z], () => R.Z.getGuild(l)), P = (0, d.e7)([v.Z], () => v.Z.get(l)), D = null == P ? void 0 : P.formFields.some(e => e.field_type !== A.QJ.TERMS), k = (0, d.e7)([f.default], () => f.default.getCurrentUser()), G = !(null == k ? void 0 : k.isClaimed()), H = null == k ? void 0 : k.verified, Y = null == k ? void 0 : k.isPhoneVerified(), z = (0, d.e7)([M.Z], () => M.Z.getGuildEmoji(l)), {
storeMemberCount: J,
storeOnlineCount: Q
  } = (0, d.cj)([N.Z], () => ({
storeMemberCount: N.Z.getMemberCount(l),
storeOnlineCount: N.Z.getOnlineCount(l)
  })), [q, W] = a.useState(null !== (s = null == P ? void 0 : P.formFields) && void 0 !== s ? s : []), [X, K] = a.useState(!1), [$, ee] = a.useState(null), [es, en] = a.useState(G ? 0 : 2), [et, el] = a.useState(''), [ei, ea] = a.useState(''), [er, eo] = a.useState(null), [ed, eu] = a.useState(null), ec = null == P ? void 0 : P.guild, eI = a.useMemo(() => null != b ? b : null != ec ? new _.ZP(ec) : null, [
b,
ec
  ]), eE = null !== (n = null == eI ? void 0 : eI.hasFeature(L.oNc.CLAN)) && void 0 !== n && n, {
emojisToRender: eM,
remainingEmojis: em,
numGuildEmoji: e_
  } = a.useMemo(() => {
var e;
let s = [...null !== (e = 0 === z.length ? null == ec ? void 0 : ec.emojis : z) && void 0 !== e ? e : []].reverse(),
  n = 0,
  t = s.length;
return t > 12 && null != s && (n = Math.min(t - (s = s.slice(0, 11)).length, 99)), {
  emojisToRender: s,
  remainingEmojis: n,
  numGuildEmoji: t
};
  }, [
ec,
z
  ]), eN = null != J ? J : null == ec ? void 0 : ec.approximate_member_count, ex = null != Q ? Q : null == ec ? void 0 : ec.approximate_presence_count;
  a.useEffect(() => ((0, F.a5)(!1), () => {
(0, F.a5)(!1);
  }), []), a.useEffect(() => {
T.Z.fetchVerificationForm(l, j);
  }, [
l,
j
  ]), a.useEffect(() => {
null != P && W(P.formFields);
  }, [P]), a.useEffect(() => {
null != k && k.isClaimed() && en(2);
  }, [k]), a.useEffect(() => {
1 === es && H && en(2);
  }, [
es,
H
  ]), a.useEffect(() => {
null != l && h.default.track(L.rMx.OPEN_MODAL, {
  type: Z.N4,
  guild_id: l
});
  }, [l]), a.useEffect(() => {
let e = q.some(e => e.field_type !== A.QJ.TERMS && (0, O.OA)(e));
e && !S ? (0, F.a5)(!0) : !e && S && (0, F.a5)(!1);
  }, [
q,
S
  ]);
  let eR = a.useMemo(() => !(((null == eI ? void 0 : eI.verificationLevel) !== L.sFg.VERY_HIGH || (null == k ? void 0 : k.isStaff())) && H || Y) || q.some(e => !(0, O.OA)(e)), [
  q,
  eI,
  Y,
  H,
  k
]),
ef = (0, d.e7)([E.Z], () => E.Z.useReducedMotion);
  if (null == eI)
return null;
  let eg = async () => {
K(!0), eo(null), eu(null);
try {
  await (0, I.S2)({
    email: et,
    password: ei
  }), K(!1), en(1);
} catch (n) {
  var e, s;
  eo(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), eu(null == n ? void 0 : null === (s = n.body) || void 0 === s ? void 0 : s.password);
} finally {
  K(!1);
}
  }, eh = async () => {
K(!0), ee(null);
let e = null != k ? x.ZP.getMember(l, k.id) : null;
if (null != e && !e.isPending) {
  null == r || r(!0);
  return;
}
try {
  await (null == c ? void 0 : c({
    ...null != P ? P : v.t,
    formFields: q
  })), null == r || r(!0);
} catch (t) {
  var s, n;
  let e = null == t ? void 0 : t.body;
  (null == e ? void 0 : null === (s = e.errors) || void 0 === s ? void 0 : s.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? ee(p.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : ee(null == e ? void 0 : e.message);
} finally {
  K(!1);
}
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(g.Z, {
    direction: g.Z.Direction.VERTICAL,
    justify: g.Z.Justify.BETWEEN,
    className: B.guildSidebar,
    shrink: 0,
    children: [
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(m.Z, {
            guild: eI,
            active: !0,
            className: o()(B.guildIcon, {
              [B.guildIconNoIcon]: null == eI.icon
            })
          }),
          (0, i.jsx)(u.Heading, {
            variant: 'heading-lg/semibold',
            className: B.guildName,
            children: null == eI ? void 0 : eI.name
          }),
          (0, i.jsx)(u.Text, {
            className: B.guildDescription,
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: null == P ? void 0 : P.description
          }),
          null != eM && eM.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('hr', {
                className: B.divider
              }),
              (0, i.jsx)(u.FormTitle, {
                children: p.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
                  emojis: e_
                })
              }),
              (0, i.jsxs)('div', {
                className: B.emojisContainer,
                children: [
                  eM.map(e => {
                    let s = C.ZP.getEmojiURL({
                      id: e.id,
                      animated: !1,
                      size: 24
                    });
                    return (0, i.jsx)(u.Tooltip, {
                      text: ':'.concat(e.name, ':'),
                      children: e => (0, i.jsx)('img', {
                        ...e,
                        width: 24,
                        height: 24,
                        src: s,
                        className: B.emoji,
                        alt: ''
                      })
                    }, e.id);
                  }),
                  null != em && em > 0 ? (0, i.jsx)(u.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: B.emoji,
                    color: 'header-secondary',
                    children: '+'.concat(em)
                  }) : null
                ]
              })
            ]
          }) : null
        ]
      }),
      (0, i.jsxs)('div', {
        children: [
          null != ex && (0, i.jsxs)(g.Z, {
            align: g.Z.Align.CENTER,
            className: B.onlineCount,
            children: [
              (0, i.jsx)('div', {
                className: B.dotOnline
              }),
              (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: p.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                  membersOnline: ex
                })
              })
            ]
          }),
          null != eN && (0, i.jsxs)(g.Z, {
            align: g.Z.Align.CENTER,
            children: [
              (0, i.jsx)('div', {
                className: B.dotMembers
              }),
              (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: p.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                  members: eN
                })
              })
            ]
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: B.modal,
    children: [
      (0, i.jsx)(u.ModalContent, {
        className: B.modalContent,
        children: (0, i.jsx)(u.Sequencer, {
          className: o()(B.sequencer, {
            [B.centerContent]: 2 !== es
          }),
          steps: [
            0,
            1,
            2
          ],
          step: es,
          children: (() => {
            switch (es) {
              case 0:
                return (0, i.jsx)(y, {
                  headerId: t,
                  email: et,
                  password: ei,
                  setEmail: el,
                  setPassword: ea,
                  emailError: er,
                  passwordError: ed
                });
              case 1:
                return (0, i.jsx)(U, {
                  headerId: t,
                  email: et
                });
              case 2:
                return (0, i.jsx)(w, {
                  headerId: t,
                  guildId: l,
                  formState: q,
                  updateFormState: W,
                  isPreview: V,
                  useReducedMotion: ef
                });
            }
          })()
        })
      }),
      (() => {
        switch (es) {
          case 0:
            return (0, i.jsxs)(u.ModalFooter, {
              className: B.footer,
              children: [
                (0, i.jsx)(u.Button, {
                  className: B.submitButton,
                  type: 'submit',
                  submitting: X,
                  onClick: eg,
                  disabled: 0 === et.length || 0 === ei.length,
                  children: p.Z.Messages.NEXT
                }),
                (0, i.jsx)(u.Text, {
                  variant: 'text-xs/normal',
                  color: 'header-secondary',
                  children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
                })
              ]
            });
          case 1:
            return null;
          case 2:
            return (0, i.jsxs)(u.ModalFooter, {
              className: B.footer,
              children: [
                (0, i.jsx)(u.Button, {
                  className: B.submitButton,
                  type: 'submit',
                  submitting: X,
                  onClick: eh,
                  color: u.Button.Colors.GREEN,
                  disabled: null == c || eR,
                  children: p.Z.Messages.SUBMIT
                }),
                null != $ && (0, i.jsx)(u.Text, {
                  variant: 'text-xs/normal',
                  color: 'text-danger',
                  children: $
                }),
                null == $ && D && (0, i.jsxs)('div', {
                  className: B.disclaimerFooter,
                  children: [
                    (0, i.jsx)(u.Text, {
                      color: 'header-secondary',
                      variant: 'text-xs/normal',
                      children: p.Z.Messages.MEMBER_VERIFICATION_WARNING
                    }),
                    eE && (0, i.jsx)(u.Text, {
                      color: 'header-secondary',
                      variant: 'text-xs/normal',
                      children: p.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                    })
                  ]
                })
              ]
            });
        }
      })()
    ]
  })
]
  });
};