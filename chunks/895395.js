t.d(n, {
  Z: function() {
return y;
  },
  d: function() {
return D;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  s = t.n(l),
  r = t(468194),
  o = t(442837),
  c = t(477690),
  d = t(481060),
  u = t(100527),
  g = t(906732),
  p = t(703656),
  v = t(430824),
  m = t(594174),
  x = t(115130),
  I = t(566620),
  f = t(520599),
  _ = t(127255),
  h = t(880308),
  C = t(451576),
  T = t(439934),
  E = t(701488),
  S = t(981631),
  j = t(689938),
  N = t(216200),
  b = t(932463);
let M = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  Z = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function y(e) {
  let {
channel: n,
guildId: t,
locationObject: l,
onClose: r,
onActivityItemVisible: c,
scrollerRef: y
  } = e, [D, L] = a.useState(0), O = (0, _.Z)({
guildId: t,
enableFilter: !0,
channel: n
  }), B = (0, o.e7)([m.default], () => m.default.getCurrentUser()), V = (0, o.e7)([v.Z], () => v.Z.getGuild(t), [t]), {
analyticsLocations: R
  } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY), k = (0, C.Z)(null == n ? void 0 : n.id), {
enableAmazonMusicShelfPoster: H
  } = f.p.useExperiment({
location: 'ActivitiesShelf'
  }, {
autoTrackExposure: !0
  }), {
isDeveloperActivityShelfEnabled: P,
filter: F
  } = (0, o.cj)([x.Z], () => ({
filter: x.Z.getFilter(),
isDeveloperActivityShelfEnabled: x.Z.getIsEnabled()
  }));
  if (a.useEffect(() => {
  let e = y.current;
  if (null != e)
    return e.addEventListener('scroll', n, !1), () => {
      if (null != e)
        e.removeEventListener('scroll', n, !1);
    };

  function n() {
    var e, n;
    L(null !== (n = null === (e = y.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== n ? n : 0);
  }
}, [y]), a.useEffect(() => {
  (k || null != t) && (0, I.w1)({
    guildId: t,
    force: !0
  });
}, [
  t,
  k
]), (0, h.g)(), null == V && !k || null == B)
return null;
  let Y = O.length > 0;

  function w(e) {
r();
  }
  return (0, i.jsx)(g.Gt, {
value: R,
children: (0, i.jsxs)('div', {
  className: N.scrollContainer,
  children: [
    Y ? (0, i.jsx)('div', {
      className: N.scrollBackgroundContainer,
      style: {
        top: -D
      },
      children: (0, i.jsx)('div', {
        className: s()(N.scrollTierBackground),
        style: {
          height: (e => {
            let n = 1 === e.length;
            return M + Math.ceil(e.length / 2) * (n ? Z : A);
          })(O)
        }
      })
    }) : null,
    (0, i.jsxs)(d.Scroller, {
      ref: y,
      className: N.scroller,
      children: [
        function() {
          if (H) {
            let e = j.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
            return (0, i.jsxs)(d.Clickable, {
              className: N.posterClickable,
              'aria-label': e,
              onClick: () => {
                var e;
                e = E.Fu, r(), (0, p.uL)(S.Z5c.ACTIVITY_DETAILS(E.Fu), {
                  sourceLocationStack: R
                });
              },
              children: [
                (0, i.jsx)('div', {
                  className: N.poster,
                  children: (0, i.jsx)('img', {
                    className: N.posterBackground,
                    src: b,
                    alt: e
                  })
                }),
                (0, i.jsx)('div', {
                  className: N.posterDivider
                })
              ]
            });
          }
          return null;
        }(),
        Y ? (0, i.jsx)('div', {
          className: N.scrollSection,
          children: (0, i.jsx)('div', {
            className: s()(N.shelf),
            children: O.map(e => (0, i.jsx)(T.Z, {
              large: 1 === O.length,
              activityItem: e,
              channel: n,
              guildId: t,
              locationObject: l,
              onActivityItemVisible: c,
              onActivityItemSelected: () => {
                var n;
                n = e.application.id, r();
              }
            }, 'activity-shelf-item-'.concat(e.application.id)))
          })
        }) : P && F.length > 0 ? (0, i.jsx)(d.Text, {
          variant: 'text-md/normal',
          className: N.filterError,
          children: j.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: F
          })
        }) : (0, i.jsx)('div', {
          className: N.spinnerContainer,
          children: (0, i.jsx)(d.Spinner, {})
        })
      ]
    })
  ]
})
  });
}

function D() {
  return (0, i.jsx)(d.Text, {
variant: 'text-sm/normal',
children: j.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
  surveyURL: E.Es
})
  });
}