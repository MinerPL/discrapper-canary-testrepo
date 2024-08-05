n.r(t), n.d(t, {
  default: function() {
return L;
  }
}), n(47120);
var s, a, o = n(735250),
  r = n(470079),
  l = n(120356),
  i = n.n(l),
  c = n(525654),
  d = n.n(c),
  u = n(873546),
  f = n(213919),
  p = n(442837),
  m = n(481060),
  x = n(391650),
  g = n(314897),
  O = n(594174),
  h = n(153124),
  v = n(626135),
  _ = n(361207),
  N = n(792125),
  w = n(981631),
  D = n(689938),
  A = n(59384);
(a = s || (s = {}))[a.OSX = 0] = 'OSX', a[a.WINDOWS = 1] = 'WINDOWS', a[a.LINUX = 2] = 'LINUX', a[a.IOS = 3] = 'IOS', a[a.ANDROID = 4] = 'ANDROID';
let j = [{
  getOs: () => D.Z.Messages.PLATFORM_MACOS,
  icon: A.apple,
  url: () => (0, _.w4)('osx', !1),
  platformKey: 0
},
{
  getOs: () => D.Z.Messages.PLATFORM_WINDOWS,
  icon: A.windows,
  url: () => (0, _.w4)('win', !1),
  platformKey: 1
},
{
  getOs: () => D.Z.Messages.PLATFORM_LINUX,
  icon: A.linux,
  url: [{
      url: () => (0, _.w4)('linux', !1, 'deb'),
      getText: () => D.Z.Messages.DEB
    },
    {
      url: () => (0, _.w4)('linux', !1, 'tar.gz'),
      getText: () => D.Z.Messages.TAR_GZ
    }
  ],
  platformKey: 2
}
  ],
  S = [{
  getOs: () => D.Z.Messages.PLATFORM_IOS,
  icon: A.ios,
  url: () => w.fzT.IOS,
  platformKey: 3
},
{
  getOs: () => D.Z.Messages.PLATFORM_ANDROID,
  icon: A.android,
  url: () => w.fzT.ANDROID,
  platformKey: 4
}
  ],
  M = (0, N.Q)(w.BRd.LIGHT),
  W = e => {
let {
  url: t,
  text: n,
  onClick: s
} = e;
return (0, o.jsx)(m.Anchor, {
  useDefaultUnderlineStyles: !1,
  href: t,
  className: A.downloadButton,
  onClick: s,
  children: n
});
  },
  b = e => {
let t, {
    platform: n,
    onClick: s,
    onMouseEnter: a,
    isActive: r,
    claimed: l
  } = e,
  {
    getOs: c,
    icon: d,
    url: u,
    platformKey: f
  } = n,
  p = c(),
  x = i()(A.icon, d);
if (Array.isArray(u))
  t = u.map((e, t) => {
    let n = l ? e.url() : '';
    return (0, o.jsx)(W, {
      url: n,
      onClick: () => s(p),
      text: e.getText()
    }, ''.concat(n, '-').concat(t));
  });
else {
  let e = l ? u() : void 0;
  t = (0, o.jsx)(W, {
    url: e,
    onClick: () => s(p),
    text: D.Z.Messages.DOWNLOAD
  });
}
return (0, o.jsx)('li', {
  className: i()(A.platform, {
    [A.active]: r
  }),
  onMouseEnter: () => a(f),
  children: (0, o.jsxs)('div', {
    className: A.contentWrapper,
    children: [
      (0, o.jsxs)('div', {
        className: A.iconWrap,
        children: [
          (0, o.jsx)('div', {
            className: x
          }),
          (0, o.jsx)('div', {
            className: i()(A.active, x)
          })
        ]
      }),
      (0, o.jsxs)('div', {
        children: [
          (0, o.jsx)(m.Heading, {
            className: A.platformName,
            variant: 'heading-lg/semibold',
            children: p
          }),
          (0, o.jsx)('div', {
            className: i()(A.downloadButtons, {
              [A.list]: Array.isArray(t)
            }),
            children: t
          })
        ]
      })
    ]
  })
});
  };

function L(e) {
  let {
source: t,
onClose: n,
transitionState: s
  } = e, a = (0, p.e7)([O.default], () => O.default.getCurrentUser()), l = (0, p.e7)([g.default], () => g.default.getFingerprint()), c = null == a || a.isClaimed(), [_, N] = r.useState(function() {
var e;
switch (null === (e = d().os) || void 0 === e ? void 0 : e.family) {
  case 'OS X':
    return 0;
  case 'Windows':
    return 1;
  case 'Ubuntu':
  case 'Debian':
  case 'Fedora':
  case 'Red Hat':
  case 'SuSE':
  case 'Linux':
    return 2;
  case 'iOS':
    return 3;
  case 'Android':
    return 4;
  default:
    return;
}
  }());

  function W(e) {
(null != f.getToken() || null != l) && v.default.track(w.rMx.DOWNLOAD_APP, {
  platform: e,
  ptb: !1,
  released: !0,
  has_e_mail: c,
  referring_location: t,
  qr_code: !1
}), !c && (n(), x.j());
  }

  function L(e) {
N(e);
  }
  r.useEffect(() => {
v.default.track(w.rMx.OPEN_MODAL, {
  type: 'Download App',
  source: {
    location: t
  }
});
  }, [t]);
  let T = (0, h.Dt)();
  return (0, o.jsx)(m.ModalRoot, {
className: i()(A.downloadApps, M),
transitionState: s,
'aria-labelledby': T,
children: (0, o.jsx)('div', {
  className: A.inner,
  children: (0, o.jsxs)(m.HeadingLevel, {
    component: (0, o.jsx)(m.HiddenVisually, {
      children: (0, o.jsx)(m.H, {
        id: T,
        children: D.Z.Messages.DOWNLOAD_APP
      })
    }),
    children: [
      (0, o.jsx)(m.ModalCloseButton, {
        onClick: n,
        className: A.modalCloseButton
      }),
      !u.tq && (0, o.jsx)('div', {
        className: A.platformsWrap,
        children: (0, o.jsx)(m.HeadingLevel, {
          component: (0, o.jsx)(m.Heading, {
            variant: 'heading-lg/semibold',
            className: A.header,
            children: D.Z.Messages.DOWNLOAD_DESKTOP_TITLE
          }),
          children: (0, o.jsx)('ul', {
            className: A.platforms,
            children: j.map(e => (0, o.jsx)(b, {
              isActive: _ === e.platformKey,
              platform: e,
              onClick: W,
              onMouseEnter: L,
              claimed: c
            }, e.platformKey))
          })
        })
      }),
      (0, o.jsx)('div', {
        className: A.platformsWrap,
        children: (0, o.jsxs)(m.HeadingLevel, {
          component: (0, o.jsx)(o.Fragment, {
            children: !u.tq && (0, o.jsx)(m.Heading, {
              variant: 'heading-lg/semibold',
              className: A.header,
              children: D.Z.Messages.DOWNLOAD_MOBILE_TITLE
            })
          }),
          children: [
            (0, o.jsx)('ul', {
              className: A.platforms,
              children: S.map(e => (0, o.jsx)(b, {
                isActive: _ === e.platformKey,
                platform: e,
                onClick: W,
                onMouseEnter: L,
                claimed: c
              }, e.platformKey))
            }),
            (0, o.jsx)(m.Text, {
              className: A.footer,
              variant: 'text-sm/normal',
              children: D.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
            })
          ]
        })
      })
    ]
  })
})
  });
}