n.r(t), n.d(t, {
  default: function() {
return k;
  }
}), n(47120), n(653041);
var a = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(990547),
  o = n(442837),
  c = n(477690),
  d = n(481060),
  u = n(110924),
  g = n(40851),
  v = n(367907),
  m = n(565384),
  p = n(906732),
  f = n(835473),
  I = n(600164),
  x = n(592125),
  _ = n(451478),
  h = n(626135),
  C = n(585483),
  T = n(624138),
  E = n(115130),
  S = n(566620),
  b = n(421),
  N = n(895395),
  j = n(49978),
  M = n(427996),
  A = n(701488),
  Z = n(981631),
  y = n(689938),
  D = n(226786),
  L = n(361205),
  O = n(812320);
let B = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  V = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  R = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function k(e) {
  let {
channel: t,
guildId: n,
locationObject: l,
onClose: c,
initialSelectedApplicationId: g,
initialSlide: _ = A.ag.DIRECTORY,
enableSelectedTextChannelInvite: T,
analyticsLocations: B,
...R
  } = e, k = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), {
analyticsLocations: H
  } = (0, p.ZP)(B), [F, U] = i.useState(_), w = (0, u.Z)(F), [Y, G] = i.useState(null), [W, z] = i.useState(g), [q, J] = i.useState(void 0), [K] = (0, f.Z)(null == W ? [] : [W]), X = i.useRef(null), $ = i.useMemo(() => ({
application_id: W,
source_section: l.section,
impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [
l.section,
W
  ]);
  i.useEffect(() => {
if (F === A.ag.DIRECTORY && null != w && w !== A.ag.DIRECTORY && null != Y) {
  var e;
  null === (e = X.current) || void 0 === e || e.scrollTo({
    top: Y
  });
}
  }, [
Y,
w,
F
  ]);
  let Q = i.useCallback(e => {
  var t;
  let {
    applicationId: n
  } = e, a = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
  null != a && G(a), z(n), U(A.ag.SELECT_CHANNEL);
}, []),
ee = i.useCallback(e => {
  let {
    applicationId: t
  } = e;
  z(t), U(A.ag.DETAIL_PAGE);
}, []);
  i.useEffect(() => {
h.default.track(Z.rMx.OPEN_MODAL, {
  type: 'Activity Shelf',
  channel_id: null == t ? void 0 : t.id,
  guild_id: n
});
  }, [
t,
n
  ]), i.useEffect(() => (C.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q), () => {
C.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
  }), [Q]), i.useEffect(() => (C.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee), () => {
C.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
  }), [ee]), i.useEffect(() => {
S.ux();
  }, []);
  let et = () => {
  U(A.ag.DIRECTORY);
},
en = i.useRef(Date.now()),
ea = i.useRef(!1),
ei = i.useRef([]),
el = i.useCallback(e => {
  null == ei.current.find(t => t === e.applicationId) && ei.current.push(e.applicationId);
}, []);
  return i.useEffect(() => {
let e = X.current;
if (null != e) {
  let t = () => ea.current = !0;
  return null != e && e.addEventListener('scroll', t), () => {
    null != e && e.removeEventListener('scroll', t);
  };
}
  }, []), i.useEffect(() => () => {
let e = {
    activity_tiles_viewed: ei.current,
    duration_ms: Date.now() - en.current,
    scrolled: ea.current
  },
  a = {
    channel_id: null == t ? void 0 : t.id,
    guild_id: n,
    location: (0, m.k$)(),
    ...(0, v.hH)(n),
    ...(0, v.v_)(x.Z.getChannel(null == t ? void 0 : t.id)),
    ...$,
    ...e
  };
h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, a);
  }, [
null == t ? void 0 : t.id,
$,
n
  ]), (0, a.jsx)(p.Gt, {
value: H,
children: (0, a.jsxs)(d.ModalRoot, {
  className: s()(D.root),
  'aria-label': y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
  ...R,
  children: [
    (0, a.jsx)('img', {
      alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
      src: L,
      className: D.shelfTopBackground
    }),
    (0, a.jsx)('img', {
      alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
      src: O,
      className: D.shelfTopForeground
    }),
    (0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      justify: I.Z.Justify.BETWEEN,
      className: s()(D.modalHeader),
      children: [
        (0, a.jsxs)('div', {
          className: D.headerTextContainer,
          children: [
            (() => {
              if (F === A.ag.DETAIL_PAGE)
                return null == K ? null : (0, a.jsxs)('div', {
                  className: D.activityShelfTitle,
                  children: [
                    (0, a.jsx)(d.Heading, {
                      variant: 'heading-xl/extrabold',
                      children: K.name
                    }),
                    (0, a.jsxs)(d.Clickable, {
                      className: D.headerBackButton,
                      onClick: et,
                      children: [
                        (0, a.jsx)(d.ChevronSmallLeftIcon, {
                          size: 'md',
                          color: 'currentColor'
                        }),
                        (0, a.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: y.Z.Messages.BACK
                        })
                      ]
                    })
                  ]
                });
              return (0, a.jsx)('div', {
                className: D.activityShelfTitle,
                children: (0, a.jsx)(d.Heading, {
                  variant: 'heading-xl/extrabold',
                  children: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                })
              });
            })(),
            (() => {
              if (F === A.ag.DIRECTORY)
                return (0, a.jsx)(d.Text, {
                  variant: 'text-sm/normal',
                  children: k ? y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                });
              return null;
            })()
          ]
        }),
        (0, a.jsx)(d.ModalCloseButton, {
          className: D.modalCloseButton,
          onClick: c
        })
      ]
    }),
    F === A.ag.DIRECTORY && k ? (0, a.jsx)(M.W, {}) : null,
    (0, a.jsx)('div', {
      className: D.modalDivider
    }),
    (0, a.jsxs)(d.Slides, {
      activeSlide: F,
      centered: !1,
      width: V,
      children: [
        (0, a.jsx)(d.Slide, {
          id: A.ag.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: l.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, a.jsx)(P, {
            slide: F,
            children: (0, a.jsx)(N.Z, {
              scrollerRef: X,
              channel: t,
              guildId: n,
              locationObject: l,
              onActivityItemVisible: el,
              onClose: c
            })
          })
        }),
        (0, a.jsx)(d.Slide, {
          id: A.ag.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: l.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: W
          },
          children: (0, a.jsx)(P, {
            slide: F,
            children: (0, a.jsx)(j.Z, {
              applicationId: W,
              selectedChannelId: q,
              setSelectedChannelId: J,
              guildId: n,
              enableSelectedTextChannelInvite: T
            })
          })
        }),
        (0, a.jsx)(d.Slide, {
          id: A.ag.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: $,
          children: (0, a.jsx)(P, {
            slide: F,
            children: null == W ? null : (0, a.jsx)(b.Z, {
              applicationId: W,
              channelId: null == t ? void 0 : t.id,
              guildId: n,
              onActivityLaunch: c
            })
          })
        })
      ]
    }),
    (0, a.jsx)('div', {
      className: D.modalDivider
    }),
    (0, a.jsx)(d.ModalFooter, {
      separator: !1,
      className: D.footer,
      children: (() => {
        switch (F) {
          case A.ag.DIRECTORY:
            return (0, a.jsx)(N.d, {});
          case A.ag.SELECT_CHANNEL:
            return (0, a.jsx)(j.q, {
              onBack: et,
              onClose: c,
              guildId: n,
              applicationId: W,
              locationObject: l,
              selectedChannelId: q,
              enableSelectedTextChannelInvite: T
            });
          case A.ag.DETAIL_PAGE:
          case A.ag.DIRECTORY:
          default:
            return null;
        }
      })()
    })
  ]
})
  });
}
let P = e => {
  let {
children: t,
slide: n
  } = e, l = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), r = i.useContext(g.ZP), c = (0, o.e7)([_.Z], () => _.Z.windowSize(r.windowId).height, [r.windowId]);
  return (0, a.jsx)('div', {
className: s()(D.slideContentOuterContainerSquished, {
  [D.slideContentOuterContainerSquishedWithDev]: n === A.ag.DIRECTORY && l,
  [D.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > R,
  [D.slideContentOuterContainerTallWithDev]: n === A.ag.DIRECTORY && c > R && l,
  [D.slideContentOuterContainerNoMetaTextSquished]: n === A.ag.SELECT_CHANNEL,
  [D.slideContentOuterContainerNoMetaTextTall]: n === A.ag.SELECT_CHANNEL && c > R,
  [D.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === A.ag.DETAIL_PAGE,
  [D.slideContentOuterContainerNoMetaTextNoFooterTall]: n === A.ag.DETAIL_PAGE && c > R
}),
children: t
  });
};