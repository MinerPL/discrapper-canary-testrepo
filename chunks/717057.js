n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(410030),
  h = n(271383),
  p = n(430824),
  m = n(594174),
  _ = n(153124),
  f = n(709054),
  E = n(931240),
  g = n(645896),
  C = n(603368),
  I = n(532490),
  x = n(380365),
  T = n(979264),
  N = n(620929),
  v = n(284019),
  S = n(308083),
  Z = n(981631),
  A = n(689938),
  M = n(560666);

function b(e) {
  var t;
  let {
guildId: n,
clanInfo: s,
onSignCharter: r
  } = e, c = a.useMemo(() => {
let e = f.default.extractTimestamp(n);
return o()(new Date(e)).format('MMMM YYYY');
  }, [n]), d = a.useMemo(() => new Set(s.games), [s.games]);
  return (0, i.jsx)(I.Z, {
guildId: n,
signHintPosition: I.p.LEFT,
primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
onSignCharter: r,
children: (0, i.jsxs)('div', {
  className: M.scrollContentsContainer,
  children: [
    (0, i.jsx)(T.aG, {
      guildId: n,
      clanBadge: s.badge.imageHash,
      clanTag: s.tag,
      textVariant: 'heading-lg/semibold',
      badgeSize: S.NC.SIZE_24,
      className: M.clanTagChiplet
    }),
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(u.Heading, {
          variant: 'heading-xxl/normal',
          color: 'text-muted',
          className: M.charterHeaderText,
          children: A.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }),
        (0, i.jsx)(u.Heading, {
          variant: 'heading-xxl/bold',
          color: 'interactive-active',
          className: M.charterHeaderText,
          children: s.name
        }),
        (0, i.jsx)(u.Text, {
          variant: 'text-md/normal',
          color: 'text-muted',
          className: M.establishedDate,
          children: A.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: c
          })
        })
      ]
    }),
    (0, i.jsx)(N.p, {
      applicationIds: d,
      playstyle: s.playstyle,
      className: l()(M.charterBodyText, M.gameSection)
    }),
    (0, i.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'text-muted',
      className: M.charterBodyText,
      children: A.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
    })
  ]
})
  });
}

function R(e) {
  var t;
  let {
guildId: n,
onClose: s,
onAccept: r,
...o
  } = e, f = (0, _.Dt)(), I = (0, g.Cc)(n), T = (0, g.E8)(n), [N, S] = a.useState(!0), [R, j] = a.useState(!1), L = a.useCallback(() => {
r(), s();
  }, [
r,
s
  ]);
  a.useEffect(() => {
null == I && !T && L();
  }, [
I,
L,
T
  ]);
  let P = a.useCallback(() => {
  N && (0, E.nE)(n, N, Z.Sbl.CREATE_JOIN_GUILD_MODAL), L();
}, [
  n,
  L,
  N
]),
O = a.useCallback(() => {
  j(!0);
}, []),
y = (0, c.e7)([p.Z], () => p.Z.getGuild(n)),
D = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
k = (0, c.e7)([h.ZP], () => null != D ? h.ZP.getMember(n, D.id) : null),
U = (0, d.ZP)(),
w = (0, C.nP)(null == I ? void 0 : null === (t = I.branding) || void 0 === t ? void 0 : t.primaryColor, [
  u.tokens.colors.BG_BRAND,
  0.7
]),
B = u.tokens.colors.BG_SURFACE_OVERLAY.resolve({
  theme: U,
  saturation: 1
}).hex(),
H = (0, C.nj)(w, B, 'top center');
  return null == y || null == D || null == k || null == I ? null : (0, i.jsx)(u.ModalRoot, {
...o,
transitionState: o.transitionState,
'aria-labelledby': f,
className: M.modal,
size: u.ModalSize.DYNAMIC,
children: (0, i.jsxs)(u.ModalContent, {
  className: M.content,
  style: H,
  children: [
    (0, i.jsxs)('div', {
      className: M.infoSide,
      children: [
        (0, i.jsxs)('div', {
          className: M.titlesContainer,
          children: [
            (0, i.jsx)('div', {
              className: M.title,
              children: (0, i.jsx)(u.Heading, {
                variant: 'heading-xxl/medium',
                children: A.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                  name: y.name
                })
              })
            }),
            (0, i.jsx)(u.Text, {
              className: M.subtitle,
              variant: 'text-md/normal',
              children: A.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
            })
          ]
        }),
        (0, i.jsx)(x.Z, {
          guildId: n,
          isTagAdopted: N,
          onChangeUseTag: S
        })
      ]
    }),
    (0, i.jsx)('div', {
      className: M.scrollMainContainer,
      children: (0, i.jsx)(b, {
        guildId: n,
        clanInfo: I,
        onSignCharter: O
      })
    }),
    (0, i.jsx)(v.Z, {
      onClick: P,
      color: u.Button.Colors.BRAND,
      themeColor: w,
      fullWidth: !1,
      className: l()(M.ctaButton, R ? M.ctaButtonSigned : null),
      children: (0, i.jsxs)('div', {
        className: M.ctaButtonInner,
        children: [
          (0, i.jsx)(u.Text, {
            color: 'currentColor',
            variant: 'text-md/medium',
            children: A.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }),
          (0, i.jsx)(u.ArrowLargeRightIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: null == w ? void 0 : (0, C.$0)(w).hex()
          })
        ]
      })
    })
  ]
})
  });
}