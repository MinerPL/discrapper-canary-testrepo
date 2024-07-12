t.r(n), t.d(n, {
  default: function() {
return k;
  }
}), t(47120), t(653041);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  s = t.n(l),
  r = t(990547),
  o = t(442837),
  c = t(477690),
  d = t(481060),
  u = t(110924),
  g = t(40851),
  p = t(367907),
  v = t(565384),
  m = t(906732),
  x = t(835473),
  I = t(592125),
  f = t(451478),
  _ = t(285952),
  h = t(626135),
  C = t(585483),
  T = t(624138),
  E = t(115130),
  S = t(566620),
  j = t(421),
  N = t(895395),
  b = t(49978),
  M = t(427996),
  A = t(701488),
  Z = t(981631),
  y = t(689938),
  D = t(626213),
  L = t(361205),
  O = t(812320);
let B = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  V = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  R = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function k(e) {
  let {
channel: n,
guildId: t,
locationObject: l,
onClose: c,
initialSelectedApplicationId: g,
initialSlide: f = A.ag.DIRECTORY,
enableSelectedTextChannelInvite: T,
analyticsLocations: B,
...R
  } = e, k = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), {
analyticsLocations: P
  } = (0, m.ZP)(B), [F, Y] = a.useState(f), w = (0, u.Z)(F), [U, G] = a.useState(null), [W, z] = a.useState(g), [q, J] = a.useState(void 0), [K] = (0, x.Z)(null == W ? [] : [W]), X = a.useRef(null), $ = a.useMemo(() => ({
application_id: W,
source_section: l.section,
impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [
l.section,
W
  ]);
  a.useEffect(() => {
if (F === A.ag.DIRECTORY && null != w && w !== A.ag.DIRECTORY && null != U) {
  var e;
  null === (e = X.current) || void 0 === e || e.scrollTo({
    top: U
  });
}
  }, [
U,
w,
F
  ]);
  let Q = a.useCallback(e => {
  var n;
  let {
    applicationId: t
  } = e, i = null === (n = X.current) || void 0 === n ? void 0 : n.scrollTop;
  null != i && G(i), z(t), Y(A.ag.SELECT_CHANNEL);
}, []),
ee = a.useCallback(e => {
  let {
    applicationId: n
  } = e;
  z(n), Y(A.ag.DETAIL_PAGE);
}, []);
  a.useEffect(() => {
h.default.track(Z.rMx.OPEN_MODAL, {
  type: 'Activity Shelf',
  channel_id: null == n ? void 0 : n.id,
  guild_id: t
});
  }, [
n,
t
  ]), a.useEffect(() => (C.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q), () => {
C.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
  }), [Q]), a.useEffect(() => (C.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee), () => {
C.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
  }), [ee]), a.useEffect(() => {
S.ux();
  }, []);
  let en = () => {
  Y(A.ag.DIRECTORY);
},
et = a.useRef(Date.now()),
ei = a.useRef(!1),
ea = a.useRef([]),
el = a.useCallback(e => {
  null == ea.current.find(n => n === e.applicationId) && ea.current.push(e.applicationId);
}, []);
  return a.useEffect(() => {
let e = X.current;
if (null != e) {
  let n = () => ei.current = !0;
  return null != e && e.addEventListener('scroll', n), () => {
    null != e && e.removeEventListener('scroll', n);
  };
}
  }, []), a.useEffect(() => () => {
let e = {
    activity_tiles_viewed: ea.current,
    duration_ms: Date.now() - et.current,
    scrolled: ei.current
  },
  i = {
    channel_id: null == n ? void 0 : n.id,
    guild_id: t,
    location: (0, v.k$)(),
    ...(0, p.hH)(t),
    ...(0, p.v_)(I.Z.getChannel(null == n ? void 0 : n.id)),
    ...$,
    ...e
  };
h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
  }, [
null == n ? void 0 : n.id,
$,
t
  ]), (0, i.jsx)(m.Gt, {
value: P,
children: (0, i.jsxs)(d.ModalRoot, {
  className: s()(D.root),
  'aria-label': y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
  ...R,
  children: [
    (0, i.jsx)('img', {
      alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
      src: L,
      className: D.shelfTopBackground
    }),
    (0, i.jsx)('img', {
      alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
      src: O,
      className: D.shelfTopForeground
    }),
    (0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      justify: _.Z.Justify.BETWEEN,
      className: s()(D.modalHeader),
      children: [
        (0, i.jsxs)('div', {
          className: D.headerTextContainer,
          children: [
            (() => {
              if (F === A.ag.DETAIL_PAGE)
                return null == K ? null : (0, i.jsxs)('div', {
                  className: D.activityShelfTitle,
                  children: [
                    (0, i.jsx)(d.Heading, {
                      variant: 'heading-xl/extrabold',
                      children: K.name
                    }),
                    (0, i.jsxs)(d.Clickable, {
                      className: D.headerBackButton,
                      onClick: en,
                      children: [
                        (0, i.jsx)(d.ChevronSmallLeftIcon, {
                          size: 'md',
                          color: 'currentColor'
                        }),
                        (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: y.Z.Messages.BACK
                        })
                      ]
                    })
                  ]
                });
              return (0, i.jsx)('div', {
                className: D.activityShelfTitle,
                children: (0, i.jsx)(d.Heading, {
                  variant: 'heading-xl/extrabold',
                  children: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                })
              });
            })(),
            (() => {
              if (F === A.ag.DIRECTORY)
                return (0, i.jsx)(d.Text, {
                  variant: 'text-sm/normal',
                  children: k ? y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                });
              return null;
            })()
          ]
        }),
        (0, i.jsx)(d.ModalCloseButton, {
          className: D.modalCloseButton,
          onClick: c
        })
      ]
    }),
    F === A.ag.DIRECTORY && k ? (0, i.jsx)(M.W, {}) : null,
    (0, i.jsx)('div', {
      className: D.modalDivider
    }),
    (0, i.jsxs)(d.Slides, {
      activeSlide: F,
      centered: !1,
      width: V,
      children: [
        (0, i.jsx)(d.Slide, {
          id: A.ag.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: l.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, i.jsx)(H, {
            slide: F,
            children: (0, i.jsx)(N.Z, {
              scrollerRef: X,
              channel: n,
              guildId: t,
              locationObject: l,
              onActivityItemVisible: el,
              onClose: c
            })
          })
        }),
        (0, i.jsx)(d.Slide, {
          id: A.ag.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: l.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: W
          },
          children: (0, i.jsx)(H, {
            slide: F,
            children: (0, i.jsx)(b.Z, {
              applicationId: W,
              selectedChannelId: q,
              setSelectedChannelId: J,
              guildId: t,
              enableSelectedTextChannelInvite: T
            })
          })
        }),
        (0, i.jsx)(d.Slide, {
          id: A.ag.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: $,
          children: (0, i.jsx)(H, {
            slide: F,
            children: null == W ? null : (0, i.jsx)(j.Z, {
              applicationId: W,
              channelId: null == n ? void 0 : n.id,
              guildId: t,
              onActivityLaunch: c
            })
          })
        })
      ]
    }),
    (0, i.jsx)('div', {
      className: D.modalDivider
    }),
    (0, i.jsx)(d.ModalFooter, {
      separator: !1,
      className: D.footer,
      children: (() => {
        switch (F) {
          case A.ag.DIRECTORY:
            return (0, i.jsx)(N.d, {});
          case A.ag.SELECT_CHANNEL:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)('div', {
                  className: D.modalDivider
                }),
                (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: D.footer,
                  children: (0, i.jsx)(b.q, {
                    onBack: en,
                    onClose: c,
                    guildId: t,
                    applicationId: W,
                    locationObject: l,
                    selectedChannelId: q,
                    enableSelectedTextChannelInvite: T
                  })
                })
              ]
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
let H = e => {
  let {
children: n,
slide: t
  } = e, l = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), r = a.useContext(g.ZP), c = (0, o.e7)([f.Z], () => f.Z.windowSize(r.windowId).height, [r.windowId]);
  return (0, i.jsx)('div', {
className: s()(D.slideContentOuterContainerSquished, {
  [D.slideContentOuterContainerSquishedWithDev]: t === A.ag.DIRECTORY && l,
  [D.slideContentOuterContainerTall]: t === A.ag.DIRECTORY && c > R,
  [D.slideContentOuterContainerTallWithDev]: t === A.ag.DIRECTORY && c > R && l,
  [D.slideContentOuterContainerNoMetaTextSquished]: t === A.ag.SELECT_CHANNEL,
  [D.slideContentOuterContainerNoMetaTextTall]: t === A.ag.SELECT_CHANNEL && c > R,
  [D.slideContentOuterContainerNoMetaTextNoFooterSquished]: t === A.ag.DETAIL_PAGE,
  [D.slideContentOuterContainerNoMetaTextNoFooterTall]: t === A.ag.DETAIL_PAGE && c > R
}),
children: n
  });
};