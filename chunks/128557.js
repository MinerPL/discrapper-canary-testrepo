n.d(t, {
  Z: function() {
return L;
  },
  i: function() {
return j;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(77866),
  o = n(748780),
  c = n(442837),
  d = n(704215),
  u = n(481060),
  h = n(699682),
  p = n(367907),
  m = n(812206),
  _ = n(644914),
  f = n(434404),
  E = n(330010),
  C = n(314897),
  g = n(430824),
  I = n(594174),
  x = n(259580),
  T = n(585483),
  v = n(63063),
  N = n(358085),
  S = n(709054),
  Z = n(967128),
  A = n(981631),
  M = n(231873),
  b = n(689938),
  R = n(454229);

function j(e) {
  let {
className: t,
iconUrl: n,
icon: l,
header: r,
completed: o,
onClick: c
  } = e, [d, p] = a.useState(!1), m = (0, h.Z)(o);
  return a.useEffect(() => {
null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
  }, [
o,
m
  ]), (0, i.jsxs)(u.Clickable, {
className: s()(t, R.card, {
  [R.completed]: o
}),
onClick: c,
children: [
  null != l ? l : (0, i.jsx)('div', {
    className: R.icon,
    style: {
      backgroundImage: 'url(\''.concat(n, '\')')
    }
  }),
  (0, i.jsx)(u.Text, {
    color: 'header-primary',
    className: s()(R.cardTextContainer, R.cardHeader),
    variant: 'text-sm/normal',
    children: r
  }),
  o ? (0, i.jsx)(u.CheckmarkLargeIcon, {
    size: 'md',
    color: 'currentColor',
    className: s()(R.checkmark, {
      [R.animate]: d
    })
  }) : (0, i.jsx)(x.Z, {
    className: R.arrow,
    direction: x.Z.Directions.RIGHT
  })
]
  });
}

function L(e) {
  let {
channel: t
  } = e, l = (0, c.e7)([g.Z], () => null != t ? g.Z.getGuild(t.getGuildId()) : null, [t]), h = null != l && S.default.extractTimestamp(l.id) < Date.now() - A._8R, x = (0, c.e7)([C.default], () => (null == l ? void 0 : l.ownerId) === C.default.getId(), [l]), {
canInvite: L,
canManageGuild: P,
canMessage: O
  } = (0, _.TE)(t, l), y = (0, c.e7)([I.default], () => {
var e, t;
return (null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
  }), {
guildPopulated: D,
guildMessaged: k,
guildPersonalized: U
  } = (0, _.h_)(l), {
handleInvite: w,
handleMessage: B,
handlePersonalize: H,
handleDownload: G,
handleAddApplication: V
  } = function(e) {
let t = a.useCallback(() => {
    p.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
      setup_type: M.Ft.CHANNEL_WELCOME,
      action: M.j7.INVITE
    }), null != e && (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([
        n.e('7654'),
        n.e('21026')
      ]).then(n.bind(n, 560114));
      return n => (0, i.jsx)(t, {
        ...n,
        guild: e,
        source: A.t4x.CHANNEL_WELCOME,
        analyticsLocation: {
          section: A.jXE.CHANNEL_WELCOME_CTA
        }
      });
    });
  }, [e]),
  l = a.useCallback(() => {
    p.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
      setup_type: M.Ft.CHANNEL_WELCOME,
      action: M.j7.SEND_MESSAGE
    }), T.S.dispatch(A.CkL.TEXTAREA_FOCUS, {
      highlight: !0,
      channelId: A.lds
    });
  }, []),
  s = a.useCallback(() => {
    p.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
      setup_type: M.Ft.CHANNEL_WELCOME,
      action: M.j7.PERSONALIZE_SERVER
    }), null != e && f.Z.open(e.id, A.pNK.OVERVIEW, {
      section: A.jXE.CHANNEL_WELCOME_CTA
    });
  }, [e]),
  r = a.useCallback(() => {
    p.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
      setup_type: M.Ft.CHANNEL_WELCOME,
      action: M.j7.DOWNLOAD
    }), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 431583));
      return t => (0, i.jsx)(e, {
        source: A.jXE.CHANNEL_WELCOME_CTA,
        ...t
      });
    });
  }, []);
return {
  handleInvite: t,
  handleMessage: l,
  handlePersonalize: s,
  handleDownload: r,
  handleAddApplication: a.useCallback(() => {
    null != e && (p.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
      setup_type: M.Ft.CHANNEL_WELCOME,
      action: M.j7.ADD_APP
    }), (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('77875').then(n.bind(n, 657300));
      return n => {
        var a;
        return (0, i.jsx)(t, {
          guildId: null !== (a = e.id) && void 0 !== a ? a : '',
          ...n,
          analyticsType: d.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
        });
      };
    }));
  }, [e])
};
  }(l), F = !(y || D || k || U), {
titleAnimatedStyle: W,
opacities: z
  } = function(e) {
let t = (0, r.Z)(() => new o.Z.Value(0)),
  n = (0, r.Z)(() => new o.Z.Value(0)),
  i = [];
return i.push((0, r.Z)(() => new o.Z.Value(0))), i.push((0, r.Z)(() => new o.Z.Value(0))), i.push((0, r.Z)(() => new o.Z.Value(0))), i.push((0, r.Z)(() => new o.Z.Value(0))), a.useEffect(() => {
  o.Z.stagger(300, [
    o.Z.parallel([
      o.Z.timing(n, {
        toValue: 1,
        duration: 450
      }),
      o.Z.timing(t, {
        toValue: 1,
        duration: 450
      })
    ]),
    o.Z.stagger(100, [
      o.Z.timing(i[0], {
        toValue: 1,
        duration: 300
      }),
      o.Z.timing(i[1], {
        toValue: 1,
        duration: 300
      }),
      o.Z.timing(i[2], {
        toValue: 1,
        duration: 300
      }),
      o.Z.timing(i[3], {
        toValue: 1,
        duration: 300
      })
    ])
  ]).start();
}, [
  n,
  t,
  i
]), {
  titleAnimatedStyle: e ? {
    transform: [{
      translateY: t.interpolate({
        inputRange: [
          0,
          1
        ],
        outputRange: [
          '-20px',
          '0px'
        ]
      })
    }],
    opacity: n
  } : {},
  opacities: i
};
  }(F), Y = (0, c.e7)([m.Z], () => m.Z.getGuildApplicationIds(null == l ? void 0 : l.id)).length > 0;
  if (a.useEffect(() => {
  var e;
  (0, E.i)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : A.lds);
}, [l]), null == l)
return null;
  let K = [];
  !h && (L && K.push((0, i.jsx)(o.Z.div, {
className: R.cardWrapper,
style: F ? {
  opacity: z[K.length]
} : {},
children: (0, i.jsx)(j, {
  iconUrl: n(538548),
  header: b.Z.Messages.WELCOME_CTA_INVITE_TITLE,
  completed: D,
  onClick: w
})
  }, 'invite')), P && K.push((0, i.jsx)(o.Z.div, {
className: R.cardWrapper,
style: F ? {
  opacity: z[K.length]
} : {},
children: (0, i.jsx)(j, {
  iconUrl: n(753033),
  header: b.Z.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
  completed: U,
  onClick: H
})
  }, 'customize')), O && K.push((0, i.jsx)(o.Z.div, {
className: R.cardWrapper,
style: F ? {
  opacity: z[K.length]
} : {},
children: (0, i.jsx)(j, {
  iconUrl: n(15717),
  header: b.Z.Messages.WELCOME_CTA_MESSAGE_TITLE,
  completed: k,
  onClick: B
})
  }, 'message')), (0, N.isWeb)() && K.push((0, i.jsx)(o.Z.div, {
className: R.cardWrapper,
style: F ? {
  opacity: z[K.length]
} : {},
children: (0, i.jsx)(j, {
  iconUrl: n(435921),
  header: b.Z.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
  completed: y,
  onClick: G
})
  }, 'download')), K.push((0, i.jsx)(o.Z.div, {
className: R.cardWrapper,
style: F ? {
  opacity: z[K.length]
} : {},
children: (0, i.jsx)(j, {
  iconUrl: n(881454),
  header: b.Z.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
  completed: Y,
  onClick: V
})
  }, 'addapp')));
  let q = x ? b.Z.Messages.WELCOME_CTA_SUBTITLE_OWNER : b.Z.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  h && (q = b.Z.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let X = ''.concat(v.Z.getArticleURL(A.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
  return (0, i.jsx)(Z.ZP, {
channelId: t.id,
children: (0, i.jsx)('div', {
  className: R.container,
  children: (0, i.jsxs)('div', {
    className: R.inner,
    children: [
      (0, i.jsxs)(o.Z.div, {
        style: W,
        children: [
          (0, i.jsx)(u.Heading, {
            className: R.titleName,
            variant: 'heading-xxl/semibold',
            children: b.Z.Messages.WELCOME_CTA_TITLE.format({
              guildName: l.name
            })
          }),
          (0, i.jsxs)(u.Text, {
            color: 'header-secondary',
            className: s()({
              [R.subtitle]: !0,
              [R.noChildren]: 0 === K.length
            }),
            variant: 'text-sm/normal',
            children: [
              q,
              ' ',
              K.length > 0 ? b.Z.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
                guideURL: X
              }) : null
            ]
          })
        ]
      }),
      K
    ]
  })
})
  });
}