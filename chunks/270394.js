t.d(n, {
  Z: function() {
return k;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(512722),
  r = t.n(o),
  c = t(392711),
  d = t.n(c),
  u = t(399606),
  I = t(692547),
  m = t(481060),
  _ = t(447543),
  N = t(225433),
  E = t(129861),
  T = t(493544),
  h = t(700582),
  p = t(410030),
  g = t(933557),
  C = t(154285),
  f = t(666657),
  x = t(487419),
  O = t(664452),
  S = t(560114),
  A = t(699516),
  R = t(594174),
  b = t(373791),
  Z = t(285952),
  v = t(965638),
  M = t(302434),
  L = t(981631),
  j = t(689938),
  D = t(64215),
  P = t(735194),
  B = t(549856);
let y = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function G(e) {
  var n, t;
  let {
invite: a,
showChannel: s = !1,
inviteDisabled: o = !1,
hide: r = !1
  } = e, c = a.uses;
  return a.maxUses > 0 && (c = ''.concat(a.uses, '/').concat(a.maxUses)), (0, i.jsxs)(Z.Z, {
className: l()(D.inviteSettingsInviteRow, P.card, {
  [D.inviteDisabledRow]: o
}),
children: [
  (0, i.jsx)(Z.Z, {
    grow: y.INVITER,
    basis: 0,
    align: Z.Z.Align.CENTER,
    className: l()(D.text),
    children: (0, i.jsxs)(Z.Z.Child, {
      children: [
        null == (n = a.inviter) ? null : (0, i.jsxs)('div', {
          className: D.user,
          children: [
            (0, i.jsx)(h.Z, {
              user: n,
              size: m.AvatarSizes.SIZE_20,
              className: D.avatar
            }),
            (0, i.jsx)(E.Z, {
              className: D.username,
              discriminatorClass: D.discriminator,
              user: n
            })
          ]
        }),
        (t = a.channel, s ? (0, i.jsx)(m.Text, {
          variant: 'text-xs/normal',
          color: 'header-secondary',
          children: (0, g.F6)(t, R.default, A.Z, !0)
        }) : null)
      ]
    })
  }),
  (0, i.jsx)(Z.Z, {
    grow: y.INVITE_CODE,
    shrink: 1,
    basis: 0,
    align: Z.Z.Align.CENTER,
    className: D.text,
    children: (0, i.jsx)(m.Text, {
      className: D.inviteCode,
      variant: 'text-sm/normal',
      children: r ? '...' : a.code
    })
  }),
  (0, i.jsx)(Z.Z, {
    grow: y.USES,
    basis: 0,
    justify: Z.Z.Justify.END,
    align: Z.Z.Align.CENTER,
    className: l()(D.text),
    children: (0, i.jsx)(m.Text, {
      className: D.uses,
      variant: 'text-sm/normal',
      children: c
    })
  }),
  (0, i.jsx)(Z.Z, {
    grow: y.EXPIRES,
    basis: 0,
    align: Z.Z.Align.CENTER,
    justify: Z.Z.Justify.END,
    className: l()(D.text, D.countdownColumn),
    children: (0, i.jsx)(m.Text, {
      className: D.countdown,
      variant: 'text-sm/normal',
      children: (0, i.jsx)(b.Z, {
        deadline: a.getExpiresAt()
      })
    })
  }),
  (0, i.jsx)(N.Z, {
    className: D.revokeInvite,
    onClick: () => {
      _.Z.revokeInvite(a);
    }
  })
]
  });
}

function k(e) {
  let {
invites: n,
guild: s,
hide: l,
channel: o = null,
showChannel: c = !1,
loading: _ = !1,
canCreateInvites: N = !1
  } = e;
  r()(null != s, 'guild is required');
  let E = (0, v.MQ)(s),
{
  enableInvitesDisabled: h
} = (0, v.FR)(s),
{
  showAlertMode: g
} = (0, C.sw)(s.id),
A = (0, u.e7)([x.Z], () => x.Z.getGuildIncident(s.id)),
R = s.hasFeature(L.oNc.INVITES_DISABLED) || g && (null == A ? void 0 : A.invitesDisabledUntil) != null && new Date(A.invitesDisabledUntil) > new Date(),
[b, P] = a.useState(!1);
  a.useEffect(() => {
E && v.WC.trackExposure({
  guildId: s.id,
  location: '5c23b0_1'
});
  }, [
E,
h,
s.id
  ]);
  let k = (0, p.ZP)(),
U = a.useMemo(() => null == n || _ ? [] : d()(n).sortBy(e => {
  var n, t;
  return (null !== (t = null === (n = e.inviter) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : '').toLowerCase();
}).value(), [
  n,
  _
]),
H = () => {
  (0, m.openModalLazy)(async () => e => (0, i.jsx)(S.default, {
    ...e,
    channel: o,
    guild: s,
    source: L.t4x.SETTINGS_INVITE
  }));
},
w = async e => {
  if (!b) {
    P(!0);
    try {
      await (0, v.AG)(s, e);
    } catch (e) {} finally {
      P(!1);
    }
  }
}, W = () => {
  if (g) {
    let e = {
      source: f.Zu.GUILD_SETTINGS
    };
    (0, m.openModalLazy)(async () => n => (0, i.jsx)(O.default, {
      ...n,
      guildId: s.id,
      analyticsData: e
    }));
  } else
    R ? w(!1) : (0, m.openModalLazy)(async () => function(e) {
      return (0, i.jsx)(M.Z, {
        ...e,
        onConfirm: () => w(!0)
      });
    });
};
  return (0, i.jsx)(T.Xi, {
sections: [Math.max(1, U.length)],
renderSection: () => {
  let e;
  return e = 0 !== U.length || _ ? (0, i.jsxs)(Z.Z, {
    children: [
      (0, i.jsx)(Z.Z.Child, {
        grow: y.INVITER,
        basis: 0,
        className: B.marginReset,
        children: (0, i.jsx)(m.FormTitle, {
          children: j.Z.Messages.INSTANT_INVITE_INVITER
        })
      }),
      (0, i.jsx)(Z.Z.Child, {
        basis: 0,
        grow: y.INVITE_CODE,
        className: B.marginReset,
        children: (0, i.jsx)(m.FormTitle, {
          children: j.Z.Messages.INSTANT_INVITE_INVITE_CODE
        })
      }),
      (0, i.jsx)(Z.Z.Child, {
        grow: y.USES,
        basis: 0,
        className: D.textAlignRight,
        children: (0, i.jsx)(m.FormTitle, {
          children: j.Z.Messages.INSTANT_INVITE_USES
        })
      }),
      (0, i.jsx)(Z.Z.Child, {
        grow: y.EXPIRES,
        basis: 0,
        className: D.textAlignRight,
        children: (0, i.jsx)(m.FormTitle, {
          children: j.Z.Messages.INSTANT_INVITE_EXPIRES
        })
      })
    ]
  }) : (0, i.jsxs)(m.EmptyState, {
    theme: k,
    children: [
      (0, i.jsx)(m.EmptyStateImage, {
        darkSrc: t(914814),
        lightSrc: t(370392),
        width: 256,
        height: 130
      }),
      (0, i.jsx)(m.EmptyStateText, {
        note: j.Z.Messages.NO_INVITES_BODY,
        children: j.Z.Messages.NO_INVITES_LABEL
      })
    ]
  }), (0, i.jsx)(m.FormSection, {
    className: D.headerSection,
    children: (0, i.jsxs)(m.HeadingLevel, {
      component: (0, i.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H1,
        children: j.Z.Messages.INVITES
      }),
      children: [
        (0, i.jsx)(m.FormText, {
          className: B.marginBottom20,
          type: m.FormTextTypes.DESCRIPTION,
          children: N ? j.Z.Messages.SETTINGS_INVITE_TIP.format({
            onCreateInvite: H
          }) : j.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
        }),
        (h || g || R) && (0, i.jsxs)('div', {
          className: D.inviteDisabledContainer,
          children: [
            (0, i.jsx)(m.Button, {
              size: m.Button.Sizes.SMALL,
              color: R ? m.Button.Colors.BRAND : m.Button.Colors.RED,
              disabled: !E,
              submitting: b,
              onClick: W,
              children: R ? j.Z.Messages.ENABLE_INVITES : j.Z.Messages.DISABLE_INVITES
            }),
            R && (0, i.jsxs)('div', {
              className: D.inviteDisabledTip,
              children: [
                (0, i.jsx)(m.CircleExclamationPointIcon, {
                  size: 'custom',
                  width: 20,
                  height: 20,
                  color: I.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, i.jsx)(m.Text, {
                  variant: 'text-sm/normal',
                  children: j.Z.Messages.INVITES_DISABLED_TIP
                })
              ]
            })
          ]
        }),
        (0, i.jsx)(m.FormDivider, {
          className: D.headerDivider
        }),
        e
      ]
    })
  }, 'header');
},
renderRow: e => {
  let {
    section: n,
    row: t
  } = e;
  if (0 === U.length && 0 === t && _)
    return (0, i.jsx)(m.Spinner, {
      className: B.marginTop20,
      type: m.Spinner.Type.SPINNING_CIRCLE
    }, 'spinner');
  if (n > 0)
    return null;
  let a = U[t];
  return null == a ? null : (0, i.jsx)(G, {
    hide: l,
    invite: a,
    showChannel: c,
    inviteDisabled: R
  }, a.code);
},
rowHeight: (e, n) => e > 0 ? 0 : 0 === U.length && 0 === n && _ ? 62 : null != U[n] ? 62 : 0,
sectionHeight: () => 0 !== U.length || _ ? 120 : 344
  });
}