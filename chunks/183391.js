s(47120);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(643872),
  E = s(481060),
  c = s(570140),
  _ = s(652898),
  o = s(93093),
  I = s(768581),
  A = s(810568),
  d = s(981631),
  u = s(689938),
  O = s(421377);
let R = [
i.p.OFFICIAL,
i.p.TWITTER,
i.p.YOUTUBE
  ],
  N = e => {
let {
  invite: a,
  trackClick: s
} = e, {
  approximate_member_count: t,
  guild: r
} = a;
if (null == r)
  return null;
let i = o.Z.isMember(r.id);
if (!(null == r ? void 0 : r.features.includes('VERIFIED')) && !(null == r ? void 0 : r.features.includes('PARTNER')))
  return null;
let _ = I.ZP.getGuildIconURL({
  id: r.id,
  icon: r.icon,
  size: 32
});
return (0, n.jsxs)('div', {
  className: l()(O.column),
  children: [
    (0, n.jsx)(E.Text, {
      variant: 'text-xs/semibold',
      children: u.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
    }),
    (0, n.jsxs)('div', {
      className: l()(O.row, O.gapMd),
      children: [
        (0, n.jsx)('img', {
          className: O.icon,
          src: _,
          alt: u.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: r.name
          })
        }),
        (0, n.jsxs)('div', {
          className: l()(O.gapNone),
          children: [
            (0, n.jsx)(E.Text, {
              variant: 'text-sm/normal',
              children: r.name
            }),
            null != t && (0, n.jsx)(E.Text, {
              variant: 'text-xxs/normal',
              children: u.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: t
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(E.Button, {
      color: E.ButtonColors.PRIMARY,
      onClick: () => {
        s(A.as.JoinOfficialServer), c.Z.dispatch({
          type: 'INVITE_MODAL_OPEN',
          invite: a,
          code: a.code,
          context: d.IlC.APP
        });
      },
      children: i ? u.Z.Messages.JOINED_GUILD : u.Z.Messages.JOIN_GUILD
    })
  ]
});
  };
a.Z = e => {
  let {
websites: a,
trackClick: s
  } = e, r = null == a ? void 0 : a.find(e => {
let {
  category: a
} = e;
return a === i.p.DISCORD;
  }), [c, o] = t.useState();
  if (t.useEffect(() => {
  let e = async e => {
    let a = e.split('/').pop();
    if (null != a) {
      let e = await (0, _.Z)(a);
      !0 !== e.banned && o(e.invite);
    }
  };
  null != r && e(r.url);
}, [r]), null == a || 0 === a.length)
return null;
  let I = a.filter(e => {
let {
  category: a
} = e;
return R.includes(a);
  }).sort((e, a) => e.category - a.category);
  return (0, n.jsxs)('div', {
className: l()(O.column),
children: [
  null != c && (0, n.jsx)(N, {
    invite: c,
    trackClick: s
  }),
  (0, n.jsxs)('div', {
    className: l()(O.column, O.gapSm),
    children: [
      (0, n.jsx)(E.Text, {
        variant: 'text-xs/semibold',
        children: u.Z.Messages.GAME_PROFILE_LINKS
      }),
      (0, n.jsx)('div', {
        className: O.row,
        children: I.map(e => {
          let a, {
              category: t,
              url: r
            } = e,
            l = null;
          switch (t) {
            case i.p.OFFICIAL:
              l = (0, n.jsx)(E.GlobeEarthIcon, {}), a = A.as.WebsiteLink;
              break;
            case i.p.TWITTER:
              l = (0, n.jsx)(E.XNeutralIcon, {}), a = A.as.XLink;
              break;
            case i.p.YOUTUBE:
              a = A.as.YouTubeLink, l = (0, n.jsx)(E.YouTubeIcon, {});
          }
          return null != l ? (0, n.jsx)(E.Anchor, {
            href: r,
            onClick: () => {
              s(a);
            },
            target: '_blank',
            children: l
          }, r) : null;
        })
      })
    ]
  })
]
  });
};