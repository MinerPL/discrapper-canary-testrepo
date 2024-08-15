var a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(338545),
  o = n(442837),
  c = n(780384),
  d = n(481060),
  u = n(410030),
  m = n(607070),
  h = n(70097),
  _ = n(961675),
  g = n(883429),
  x = n(432771),
  f = n(406074),
  C = n(434404),
  p = n(430824),
  T = n(63063),
  I = n(595433),
  E = n(981631),
  N = n(689938),
  b = n(174038),
  v = n(972268),
  S = n(965358),
  M = n(420196),
  A = n(433075);

function j(e) {
  let {
handleHide: t
  } = e;
  return (0, a.jsx)(d.Clickable, {
onClick: t,
className: b.closeButton,
'aria-label': N.Z.Messages.DISMISS,
children: (0, a.jsx)(d.XSmallIcon, {
  size: 'md',
  color: 'currentColor',
  className: b.closeIcon
})
  });
}

function R(e) {
  let {
username: t,
title: n,
videoSrc: s,
messageCount: r,
reaction: i,
reactionCount: o,
classname: c
  } = e;
  return (0, a.jsxs)('div', {
className: l()(b.videoPreview, c),
children: [
  (0, a.jsx)('div', {
    className: b.authorRow,
    children: (0, a.jsxs)('div', {
      className: b.rowGroup,
      children: [
        (0, a.jsx)(d.Text, {
          tag: 'span',
          className: b.author,
          variant: 'text-sm/semibold',
          children: t
        }),
        (0, a.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'header-secondary',
          className: b.postCreationTimestamp,
          children: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })
      ]
    })
  }),
  (0, a.jsx)(d.Heading, {
    variant: 'heading-md/extrabold',
    className: b.title,
    color: 'header-primary',
    'aria-hidden': !0,
    children: n
  }),
  (0, a.jsx)(d.Spacer, {
    size: 10
  }),
  (0, a.jsx)(h.Z, {
    className: b.video,
    src: s,
    autoPlay: !0,
    loop: !0,
    muted: !0
  }),
  (0, a.jsx)(d.Spacer, {
    size: 10
  }),
  (0, a.jsx)('div', {
    className: b.footer,
    children: (0, a.jsxs)('div', {
      className: b.forumPostControls,
      children: [
        (0, a.jsxs)('div', {
          className: b.messageCountBox,
          children: [
            (0, a.jsx)('span', {
              className: b.messageCountIcon,
              children: (0, a.jsx)(d.ChatIcon, {
                size: 'xs',
                color: 'currentColor'
              })
            }),
            (0, a.jsx)(d.Text, {
              variant: 'text-xs/normal',
              color: 'interactive-normal',
              children: r
            })
          ]
        }),
        (0, a.jsxs)('div', {
          className: b.reactionBox,
          children: [
            (0, a.jsx)('span', {
              role: 'img',
              'aria-label': '',
              children: i
            }),
            (0, a.jsx)(d.Text, {
              variant: 'text-xs/normal',
              color: 'interactive-normal',
              children: o
            })
          ]
        })
      ]
    })
  })
]
  });
}
t.Z = e => {
  var t, n;
  let {
channel: r
  } = e, h = (0, u.ZP)(), O = (0, c.wj)(h), Z = (0, o.e7)([p.Z], () => p.Z.getGuild(r.guild_id)), L = (0, o.e7)([m.Z], () => m.Z.useReducedMotion), P = (0, o.e7)([_.Z], () => _.Z.hasHidden(r.id)), w = (0, f.C)({
guildId: r.guild_id,
channelId: r.id
  }), {
transitions: y,
setVisible: D
  } = (0, I.H)(), F = s.useCallback(() => {
D(!1), g.Z.hideAdminOnboarding(r.id, !0);
  }, [
r,
D
  ]);
  s.useEffect(() => {
!(0, x.c)(r.id) && D(!P);
  }, [
r,
D,
P
  ]);
  let U = s.useMemo(() => [
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG
], []),
k = s.useMemo(() => [
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG,
  N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG
], []),
H = () => {
  C.Z.open(r.guild_id, E.pNK.ROLE_SUBSCRIPTIONS);
},
B = null !== (t = null == Z ? void 0 : Z.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
G = null !== (n = (null == Z ? void 0 : Z.hasFeature(E.oNc.CREATOR_MONETIZABLE)) || (null == Z ? void 0 : Z.hasFeature(E.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== n && n,
z = G ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
V = G ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, a.jsx)(a.Fragment, {
children: y((e, t) => t ? (0, a.jsxs)(i.animated.div, {
  style: e,
  className: b.container,
  children: [
    (0, a.jsxs)('div', {
      className: l()(b.__invalid_wrapper, b.headerRow),
      children: [
        (0, a.jsxs)(d.Text, {
          variant: 'text-xs/normal',
          className: b.visibilityInfo,
          children: [
            (0, a.jsx)(d.CircleInformationIcon, {
              size: 'xxs',
              color: 'currentColor',
              className: b.icon
            }),
            N.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY
          ]
        }),
        (0, a.jsx)(j, {
          handleHide: F
        })
      ]
    }),
    (0, a.jsxs)('div', {
      className: b.contentContainer,
      children: [
        (0, a.jsxs)('div', {
          className: l()(b.contentRow, G && b.contentRowOne),
          children: [
            (0, a.jsx)('div', {
              className: l()(b.contentMediaContainer),
              children: (0, a.jsxs)('div', {
                className: b.contentVideoContainer,
                children: [
                  (0, a.jsx)(R, {
                    username: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                    videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                    title: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                    messageCount: '34',
                    reaction: '\u26A1️',
                    reactionCount: '724',
                    classname: b.backgroundVideo
                  }),
                  (0, a.jsx)(R, {
                    username: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                    videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                    title: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                    messageCount: '34',
                    reactionCount: '84',
                    reaction: '\uD83D\uDC9E',
                    classname: l()(b.backgroundVideo, b.secondaryVideo)
                  }),
                  (0, a.jsx)(R, {
                    username: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                    videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                    title: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                    messageCount: '7,103',
                    reaction: '\u26A1️',
                    reactionCount: '724',
                    classname: b.highlightVideo
                  })
                ]
              })
            }),
            (0, a.jsxs)('article', {
              className: b.contentTextContainer,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: 'heading-lg/semibold',
                  color: 'header-primary',
                  children: z
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 8
                }),
                (0, a.jsx)(d.Text, {
                  variant: 'text-md/normal',
                  color: 'text-muted',
                  children: V
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 16
                }),
                (0, a.jsxs)(d.Clickable, {
                  onClick: () => open(T.Z.getCreatorSupportArticleURL(E.BhN.MEDIA_CHANNEL)),
                  className: b.helpCenterLink,
                  children: [
                    (0, a.jsx)(d.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-link',
                      className: b.__invalid_helpCenterLinkText,
                      children: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
                    }),
                    (0, a.jsx)(d.WindowLaunchIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: b.helpCenterLinkIcon
                    })
                  ]
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 16
                }),
                (0, a.jsx)('div', {
                  className: b.mediaChannelTagsContainer,
                  children: U.map(e => (0, a.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-normal',
                    className: b.mediaChannelTag,
                    children: e
                  }, e))
                })
              ]
            })
          ]
        }),
        G && (0, a.jsxs)('div', {
          className: l()(b.contentRow, b.contentRowTwo),
          children: [
            (0, a.jsx)('div', {
              className: l()(b.contentMediaContainer),
              children: (0, a.jsxs)('div', {
                className: b.contentImageContainer,
                children: [
                  (0, a.jsx)('img', {
                    src: O ? M : A,
                    alt: '',
                    className: l()(b.previewEmbedImage, b.secondaryImage)
                  }),
                  (0, a.jsx)('img', {
                    src: O ? v : S,
                    alt: '',
                    className: b.previewEmbedImage
                  })
                ]
              })
            }),
            (0, a.jsxs)('article', {
              className: b.contentTextContainer,
              children: [
                (0, a.jsxs)(d.Text, {
                  variant: 'text-xxs/bold',
                  className: b.serverSubPill,
                  children: [
                    N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL,
                    ' ',
                    (0, a.jsx)('span', {
                      role: 'img',
                      'aria-label': '',
                      children: '\uD83D\uDD25'
                    })
                  ]
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 10
                }),
                (0, a.jsx)(d.Heading, {
                  variant: 'heading-lg/semibold',
                  color: 'header-primary',
                  children: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 8
                }),
                (0, a.jsx)(d.Text, {
                  variant: 'text-md/normal',
                  color: 'text-muted',
                  children: N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 16
                }),
                (0, a.jsx)('div', {
                  className: b.mediaChannelTagsContainer,
                  children: k.map(e => (0, a.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-normal',
                    className: b.mediaChannelTag,
                    children: e
                  }, e))
                }),
                (0, a.jsx)(d.Spacer, {
                  size: 16
                }),
                0 === w.length && (0, a.jsx)(d.ShinyButton, {
                  size: d.Button.Sizes.MEDIUM,
                  pauseAnimation: L,
                  onClick: H,
                  className: b.addChannelButton,
                  color: d.Button.Colors.CUSTOM,
                  children: B
                })
              ]
            })
          ]
        })
      ]
    })
  ]
}) : null)
  });
};