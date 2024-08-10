a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(643872),
  o = a(481060),
  E = a(570140),
  c = a(652898),
  _ = a(93093),
  I = a(768581),
  u = a(810568),
  d = a(981631),
  A = a(689938),
  R = a(421377);
let N = [
i.p.OFFICIAL,
i.p.TWITTER,
i.p.YOUTUBE
  ],
  O = e => {
let {
  invite: s,
  trackClick: a
} = e, {
  approximate_member_count: l,
  guild: r
} = s;
if (null == r)
  return null;
let i = _.Z.isMember(r.id);
if (!(null == r ? void 0 : r.features.includes('VERIFIED')) && !(null == r ? void 0 : r.features.includes('PARTNER')))
  return null;
let c = I.ZP.getGuildIconURL({
  id: r.id,
  icon: r.icon,
  size: 32
});
return (0, n.jsxs)('div', {
  className: t()(R.column),
  children: [
    (0, n.jsx)(o.Heading, {
      variant: 'text-xs/semibold',
      color: 'header-secondary',
      children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
    }),
    (0, n.jsxs)('div', {
      className: t()(R.row, R.gapMd),
      children: [
        (0, n.jsx)('img', {
          className: R.icon,
          src: c,
          alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: r.name
          })
        }),
        (0, n.jsxs)('div', {
          className: t()(R.gapNone),
          children: [
            (0, n.jsx)(o.Text, {
              variant: 'text-sm/normal',
              children: r.name
            }),
            null != l && (0, n.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: l
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(o.Button, {
      color: o.ButtonColors.PRIMARY,
      onClick: () => {
        a(u.as.JoinOfficialServer), E.Z.dispatch({
          type: 'INVITE_MODAL_OPEN',
          invite: s,
          code: s.code,
          context: d.IlC.APP
        });
      },
      children: i ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
    })
  ]
});
  };
s.Z = e => {
  let {
websites: s,
trackClick: a
  } = e, r = null == s ? void 0 : s.find(e => {
let {
  category: s
} = e;
return s === i.p.DISCORD;
  }), [E, _] = l.useState();
  if (l.useEffect(() => {
  let e = async e => {
    let s = e.split('/').pop();
    if (null != s) {
      let e = await (0, c.Z)(s);
      !0 !== e.banned && _(e.invite);
    }
  };
  null != r && e(r.url);
}, [r]), null == s || 0 === s.length)
return null;
  let I = s.filter(e => {
let {
  category: s
} = e;
return N.includes(s);
  }).sort((e, s) => e.category - s.category);
  return (0, n.jsxs)('div', {
className: t()(R.column),
children: [
  null != E && (0, n.jsx)(O, {
    invite: E,
    trackClick: a
  }),
  (0, n.jsxs)('div', {
    className: t()(R.column, R.gapSm),
    children: [
      (0, n.jsx)(o.Heading, {
        variant: 'text-xs/semibold',
        color: 'header-secondary',
        children: A.Z.Messages.GAME_PROFILE_LINKS
      }),
      (0, n.jsx)('div', {
        className: R.row,
        children: I.map(e => {
          let s, l, {
              category: r,
              url: t
            } = e,
            E = null;
          switch (r) {
            case i.p.OFFICIAL:
              E = (0, n.jsx)(o.GlobeEarthIcon, {
                colorClass: R.linkIcon
              }), l = u.as.WebsiteLink, s = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL;
              break;
            case i.p.TWITTER:
              E = (0, n.jsx)(o.XNeutralIcon, {
                colorClass: R.linkIcon
              }), l = u.as.XLink, s = A.Z.Messages.GAME_PROFILE_LINK_TWITTER;
              break;
            case i.p.YOUTUBE:
              l = u.as.YouTubeLink, E = (0, n.jsx)(o.YoutubeNeutralIcon, {
                colorClass: R.linkIcon
              }), s = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE;
          }
          return null != E ? (0, n.jsx)(o.Anchor, {
            className: R.linkAnchor,
            title: s,
            href: t,
            onClick: () => {
              a(l);
            },
            target: '_blank',
            children: E
          }, t) : null;
        })
      })
    ]
  })
]
  });
};