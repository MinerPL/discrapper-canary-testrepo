n.d(t, {
  Z: function() {
return y;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(772848),
  u = n(831209),
  d = n(399606),
  _ = n(481060),
  E = n(607070),
  I = n(100527),
  m = n(367907),
  T = n(1585),
  h = n(841762),
  N = n(336197),
  C = n(406432),
  f = n(348238),
  p = n(38267),
  g = n(484459),
  S = n(103575),
  A = n(695346),
  R = n(271383),
  O = n(594174),
  x = n(768581),
  M = n(900849),
  v = n(506071),
  L = n(495114),
  Z = n(170140),
  P = n(981631),
  D = n(959517),
  b = n(689938),
  j = n(730752),
  U = n(527455);

function y(e) {
  var t, n, a;
  let {
embedUrl: l,
message: y,
channel: B
  } = e, k = (0, Z.J)(l, y), {
setPopout: G
  } = (0, p.Z)(y.id, D.d$), F = (0, f.qo)(y, B, G, !0), w = A.QK.useSetting(), V = (0, v.n)(), [H, Y] = s.useState(!1), [W, K] = s.useState((null == k ? void 0 : k.coverImage) == null), z = (0, d.e7)([E.Z], () => E.Z.useReducedMotion), Q = (0, d.e7)([
R.ZP,
O.default
  ], () => {
var e;
return R.ZP.isMember(null == k ? void 0 : k.guildId, null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
  }, [k]), q = (0, d.e7)([R.ZP], () => (null == k ? void 0 : k.authorId) != null ? R.ZP.getMember(k.guildId, k.authorId) : null), [X, J] = s.useMemo(() => {
var e;
return [
  null !== (e = null == q ? void 0 : q.colorString) && void 0 !== e ? e : 'inherit',
  null == q ? void 0 : q.colorRoleId
];
  }, [q]), {
reducedMotion: $
  } = s.useContext(_.AccessibilityPreferencesContext), [ee, et] = s.useState(!1), en = s.useCallback(() => {
Y(!0);
  }, [Y]), ei = s.useCallback(() => {
Y(!1);
  }, [Y]), es = s.useCallback(async () => {
null != k && ((0, m.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
  media_post_id: k.threadId,
  channel_id: B.id,
  can_access: k.canAccess,
  is_member: Q
}), k.canAccess ? (0, N.Z)(P.Z5c.CHANNEL(k.guildId, k.threadId, k.messageId)) : Q ? (0, N.Z)(P.Z5c.CHANNEL(k.guildId, k.parentChannelId)) : await M.Ub(k.guildId, {}, {
  channelId: k.parentChannelId
}));
  }, [
k,
B,
Q
  ]), ea = s.useCallback(() => (o()((null == k ? void 0 : k.authorId) != null, 'Author Id cannot be null when loading user profile'), (0, g.W)(k.authorId, k.avatarUrl, {
guildId: k.guildId,
channelId: B.id
  })), [
k,
B
  ]);
  if (null == k)
return null;
  let er = (e, t) => (o()(null != k.authorId, 'Author Id cannot be null when rendering user popout'), (0, i.jsx)(S.Z, {
  ...e,
  location: 'MediaPostEmbed',
  userId: k.authorId,
  guildId: k.guildId,
  channelId: B.id,
  messageId: y.id,
  roleId: J,
  newAnalyticsLocations: t
})),
el = (0, x.NZ)({
  avatarDecoration: (null == q ? void 0 : q.avatarDecoration) != null ? null == q ? void 0 : q.avatarDecoration : null === (t = k.user) || void 0 === t ? void 0 : t.avatarDecoration,
  size: (0, T.y9)(_.AvatarSizes.SIZE_40),
  canAnimate: ee
}),
eo = null === (n = k.user) || void 0 === n ? void 0 : n.getAvatarURL(k.guildId, 40, ee),
ec = () => {
  if (!$.enabled)
    et(e => !e);
},
eu = k.coverImage,
ed = null != eu && (0, C.d$)(eu);
  return (0, i.jsxs)('div', {
className: j.postPreviewContainer,
children: [
  (0, i.jsxs)('div', {
    className: j.thumbnailContainer,
    onMouseEnter: en,
    onMouseLeave: ei,
    children: [
      !W && (!0 === k.shouldShowBlurredThumbnailImage ? (0, i.jsx)('img', {
        src: U,
        alt: b.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: r()(j.thumbnail, {
          [j.spoiler]: k.shouldSpoiler
        }),
        onContextMenu: F,
        onError: () => K(!0)
      }) : (0, i.jsx)(h.Z, {
        src: !(V && (w || H)) && ed ? ''.concat(eu, '?format=png') : eu,
        backgroundSrc: ''.concat(eu, '?format=png'),
        alt: b.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: r()(j.thumbnail, {
          [j.spoiler]: k.shouldSpoiler
        }),
        imageChildClassName: j.thumbnailImage,
        onContextMenu: F,
        onError: () => K(!0)
      })),
      null != k.coverImageOverlayText && (0, i.jsx)(_.Clickable, {
        onClick: es,
        children: (0, i.jsx)('div', {
          className: j.thumbnailOverlay,
          children: (0, i.jsxs)('div', {
            className: j.thumbnailOverlayCta,
            children: [
              (0, i.jsx)(L.Z, {
                color: u.Z.WHITE
              }),
              (0, i.jsx)(_.Text, {
                variant: 'text-sm/semibold',
                color: 'always-white',
                children: k.coverImageOverlayText
              })
            ]
          })
        })
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: j.descriptionContainer,
    children: [
      (0, i.jsxs)('div', {
        className: j.descriptionHeader,
        children: [
          (0, i.jsx)(_.Text, {
            variant: 'text-md/semibold',
            color: 'text-normal',
            className: j.descriptionHeaderText,
            children: k.title
          }),
          (0, i.jsx)(_.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            className: r()(j.descriptionHeaderText, j.descriptionSubtitle),
            children: k.subtitle
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: j.descriptionFooter,
        children: [
          null != eo && (0, i.jsx)(_.Popout, {
            renderPopout: e => er(e, [I.Z.AVATAR]),
            position: 'right',
            spacing: 12,
            preload: null == k.authorId ? void 0 : ea,
            children: e => (0, i.jsx)('div', {
              onMouseEnter: ec,
              onMouseLeave: ec,
              children: (0, i.jsx)(_.Avatar, {
                ...e,
                size: _.AvatarSizes.SIZE_40,
                src: eo,
                'aria-label': b.Z.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
                avatarDecoration: el
              })
            })
          }),
          (0, i.jsxs)('div', {
            className: j.descriptionFooterContainer,
            children: [
              (0, i.jsxs)('div', {
                className: j.descriptionFooterChannelName,
                children: [
                  null != k.channelName && (0, i.jsx)(_.ImageSparkleIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.mediaChannelIcon
                  }),
                  (0, i.jsx)(_.Clickable, {
                    onClick: es,
                    className: j.channelName,
                    children: (0, i.jsx)(_.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'header-primary',
                      children: null !== (a = k.channelName) && void 0 !== a ? a : k.guildName
                    })
                  })
                ]
              }),
              null != k.authorName && (0, i.jsx)(_.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: j.descriptionFooterAuthorContainer,
                children: b.Z.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
                  authorName: k.authorName,
                  authorNameHook: () => (0, i.jsx)(_.Popout, {
                    renderPopout: e => er(e, [I.Z.USERNAME]),
                    position: 'right',
                    preload: null == k.authorId ? void 0 : ea,
                    children: e => (0, i.jsx)(_.NameWithRoleAnchor, {
                      ...e,
                      name: k.authorName,
                      color: X,
                      className: j.authorName
                    })
                  }, (0, c.Z)())
                })
              })
            ]
          }),
          k.canAccess ? (0, i.jsx)(_.Button, {
            color: _.ButtonColors.BRAND,
            onClick: es,
            children: (0, i.jsx)(_.Text, {
              variant: 'text-sm/medium',
              color: 'always-white',
              children: k.ctaText
            })
          }) : (0, i.jsx)(_.ShinyButton, {
            pauseAnimation: z,
            onClick: es,
            className: r()(j.__invalid_ctaButtonContent, j.subscribeButton),
            color: _.Button.Colors.CUSTOM,
            children: (0, i.jsx)(_.Text, {
              variant: 'text-sm/medium',
              color: 'always-white',
              children: k.ctaText
            })
          })
        ]
      })
    ]
  })
]
  });
}