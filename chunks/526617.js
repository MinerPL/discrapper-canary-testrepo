n.d(t, {
  Z: function() {
return K;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(481060),
  u = n(239091),
  c = n(788911),
  d = n(906732),
  _ = n(880949),
  E = n(806966),
  f = n(28546),
  h = n(468954),
  p = n(631771),
  m = n(609218),
  I = n(695346),
  T = n(594174),
  g = n(979651),
  S = n(153124),
  A = n(259580),
  N = n(626135),
  v = n(74538),
  O = n(135869),
  R = n(763296),
  C = n(697426),
  y = n(242291),
  D = n(22382),
  L = n(747071),
  b = n(421673),
  M = n(663215),
  P = n(409673),
  U = n(347072),
  w = n(835648),
  x = n(650743),
  G = n(394740),
  k = n(343747),
  B = n(981631),
  F = n(689938),
  V = n(14338);
let H = [
  8,
  0,
  8,
  8
];

function Z(e) {
  return 0 === e ? 16 : 32;
}

function Y(e) {
  let {
categoryInfo: t,
collapsed: n,
toggleCollapsed: i,
index: a
  } = e;
  return (0, r.jsx)('div', {
className: V.sectionContainer,
children: (0, r.jsx)(l.Clickable, {
  className: o()(V.sectionHeader, {
    [V.notFirstSectionHeader]: 0 !== a
  }),
  onClick: i,
  'aria-expanded': !n,
  children: (0, r.jsxs)('div', {
    className: V.sectionHeaderContent,
    children: [
      function() {
        switch (t.type) {
          case C.bg.FAVORITES:
            return (0, r.jsx)(l.StarIcon, {
              size: 'xs',
              color: 'currentColor',
              className: V.headerIcon
            });
          case C.bg.RECENTLY_HEARD:
            return (0, r.jsx)(l.ClockIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              color: 'currentColor',
              className: V.headerIcon
            });
          case C.bg.FREQUENTLY_USED:
            return (0, r.jsx)(l.AnalyticsIcon, {
              className: V.headerIcon
            });
          case C.bg.GUILD:
            return (0, r.jsx)(_.Z, {
              guild: t.guild,
              height: 16,
              width: 16
            });
          case C.bg.DEFAULTS:
            return (0, r.jsx)(l.ClydeIcon, {
              size: 'custom',
              width: 28,
              height: 28,
              color: 'currentColor',
              className: V.headerIcon
            });
          case C.bg.SEARCH:
            return (0, r.jsx)(l.MagnifyingGlassIcon, {
              size: 'md',
              color: 'currentColor',
              className: V.headerIcon
            });
        }
      }(),
      (0, r.jsx)(l.Heading, {
        variant: 'eyebrow',
        color: 'none',
        className: V.sectionTitle,
        children: function() {
          switch (t.type) {
            case C.bg.FAVORITES:
              return F.Z.Messages.FAVORITES;
            case C.bg.RECENTLY_HEARD:
              return F.Z.Messages.RECENTLY_HEARD;
            case C.bg.FREQUENTLY_USED:
              return F.Z.Messages.FREQUENTLY_USED;
            case C.bg.GUILD:
              return t.guild.name;
            case C.bg.DEFAULTS:
              return F.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
            case C.bg.SEARCH:
              return F.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
          }
        }()
      }),
      (0, r.jsx)(A.Z, {
        className: V.headerIcon,
        direction: n ? A.Z.Directions.RIGHT : A.Z.Directions.DOWN
      })
    ]
  })
})
  });
}

function j() {
  return (0, r.jsx)(c.Z, {
message: F.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  });
}

function W(e) {
  let {
descriptors: t,
soundButtonProps: n,
rowIndex: a,
isUsingKeyboardNavigation: o,
suppressPlaySound: s,
gridRowProps: l,
getItemProps: u,
onSelectItem: c,
onItemMouseEnter: d,
buttonOverlay: _
  } = e, f = E.Wq.useStore(e => e.inspectedExpressionPosition);
  return (0, r.jsx)('ul', {
...l,
className: V.soundRow,
children: t.map((e, t) => {
  let r = 'item-'.concat(t),
    l = o && f.rowIndex === a && f.columnIndex === t;
  switch (e.item.type) {
    case C.vB.SOUND:
      return (0, i.createElement)(P.ZP, {
        ...u(t),
        ...n,
        key: ''.concat(r, '-').concat(e.item.sound.soundId),
        sound: e.item.sound,
        suppressPlaySound: s,
        focused: l,
        onMouseEnter: () => d(t),
        onSelectItem: () => c(e),
        enableSecondaryActions: !0,
        buttonOverlay: _
      });
    case C.vB.ADD_SOUND:
      return (0, i.createElement)(U.Z, {
        ...u(t),
        key: r,
        guild: e.item.guild,
        focused: l
      });
  }
})
  });
}

function K(e) {
  let {
guildId: t,
channel: a,
containerWidth: o,
onClose: c,
onSelect: _,
suppressPlaySound: A = !1,
shouldShowUpsell: P = !0,
gridNotice: U,
soundButtonOverlay: K,
listPadding: z,
renderHeader: q,
defaultSoundsOnly: Q = !1
  } = e, {
currentPreviewRef: X
  } = i.useContext(O.Z), {
analyticsLocations: $
  } = (0, d.ZP)(), [J, ee] = i.useState(null), et = (0, s.e7)([T.default], () => T.default.getCurrentUser()), en = (0, s.e7)([g.Z], () => {
var e;
return g.Z.getVoiceState(t, null !== (e = null == et ? void 0 : et.id) && void 0 !== e ? e : B.lds);
  }), er = (null == en ? void 0 : en.selfDeaf) || (null == en ? void 0 : en.mute) || (null == en ? void 0 : en.suppress), ei = (0, f.Iu)(e => e.searchQuery), ea = (0, S.Dt)(), {
categories: eo
  } = (0, M.ZP)(a, void 0, Q), [es, el] = i.useState([]), eu = (0, M.FS)(eo, es, ei), ec = I.T4.useSetting(), ed = i.useMemo(() => new Set(ec), [ec]), e_ = null == a, eE = v.ZP.canUseCustomCallSounds(et), ef = i.useCallback(e => {
ed.has(e) ? ed.delete(e) : ed.add(e), I.T4.updateSetting(Array.from(ed));
  }, [ed]), eh = i.useCallback((e, t) => {
if (!A && (0, y.Nq)(et, e, a, !1)) {
  var n;
  (0, y.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : B.lds, t), null != ei && '' !== ei && N.default.track(B.rMx.SEARCH_RESULT_SELECTED, {
    search_type: B.aib.SOUNDBOARD,
    channel_id: null == a ? void 0 : a.id,
    query: ei,
    location_stack: t
  });
} else {
  if ((0, y.Nq)(et, e, a))
    return;
  P && ee(e);
}
  }, [
A,
et,
a,
P,
ei
  ]), ep = i.useCallback(e => {
switch (e.item.type) {
  case C.vB.SOUND:
    return null == _ || _(e.item.sound), eh(e.item.sound, $);
  case C.vB.ADD_SOUND:
    return (0, k.Z)(e.item.guild.id);
}
  }, [
$,
eh,
_
  ]), em = i.useCallback((e, t, n, i, o) => (0, r.jsx)(W, {
descriptors: e,
rowIndex: n.rowIndex,
isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
gridRowProps: t,
getItemProps: i,
onItemMouseEnter: o,
suppressPlaySound: A,
onSelectItem: ep,
soundButtonProps: {
  channel: a,
  interactive: e_ ? eE : !er,
  forceSecondaryActions: e_,
  analyticsLocations: $
},
buttonOverlay: K
  }, 'row-'.concat(t['aria-rowindex'])), [
ep,
a,
er,
A,
$,
e_,
eE,
K
  ]), eI = i.useCallback((e, t) => {
let n = ''.concat(e.key);
return (0, r.jsx)(Y, {
  categoryInfo: e.categoryInfo,
  toggleCollapsed: () => ef(n),
  collapsed: ed.has(n),
  index: t
}, 'header-'.concat(n));
  }, [
ed,
ef
  ]), eT = i.useCallback(e => el((0, b.ZP)(e, eo, et, a, $)), [
a,
et,
eo,
$
  ]), eg = i.useCallback(e => {
(0, u.jW)(e, async () => {
  let {
    default: e
  } = await n.e('56049').then(n.bind(n, 338991));
  return t => (0, r.jsx)(e, {
    ...t
  });
});
  }, []), eS = i.useCallback(() => (0, r.jsx)(l.Clickable, {
tabIndex: 0,
className: V.settingsClickArea,
onClick: eg,
'aria-label': F.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
children: (0, r.jsx)(l.VoiceNormalIcon, {
  size: 'md',
  color: 'currentColor',
  className: V.settingsIcon
})
  }), [eg]), eA = i.useCallback(e => (0, r.jsx)(w.Z, {
soundboardListRef: e,
categories: eo,
listPadding: z
  }), [
eo,
z
  ]), eN = i.useCallback(e => {
if ((null == e ? void 0 : e.item.type) === C.vB.SOUND) {
  var t;
  return (0, r.jsx)(x.Z, {
    closePicker: c,
    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
  });
}
return null;
  }, [c]), {
enableRoadblock: ev,
enableRoadblockWithSocialProof: eO
  } = p.Qs.useExperiment({
location: 'Premium Soundboard Roadblock'
  }, {
autoTrackExposure: !0
  }), eR = i.useCallback(() => {
var e;
let t = R.Z.getSoundById('3'),
  n = new Audio((0, D.Z)('3'));
null != X.current && X.current.pause(), X.current = n, n.currentTime = 0, n.volume = (0, L.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1), n.play();
  }, [X]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != J ? ev ? (0, r.jsx)(m.Z, {
    containerContext: m.p.NONE,
    image: {
      url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
      width: 220,
      height: 132
    },
    title: F.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
    description: F.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
    enableSocialProof: eO,
    analyticsLocationSection: B.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
    onClose: () => ee(null),
    onDisplay: eR
  }) : (0, r.jsx)(G.Z, {
    onClose: () => ee(null),
    closePopout: c,
    sound: J,
    channel: a
  }) : void 0,
  (0, r.jsx)(h.Z, {
    categories: eu,
    collapsedCategories: ed,
    containerWidth: o,
    store: E.Wq,
    onSelectItem: ep,
    onSearchExpressions: eT,
    hasSearchResults: es.length > 0,
    defaultSearchPlaceholder: F.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
    renderRow: em,
    renderSectionHeader: eI,
    renderCategoryList: eA,
    renderHeaderAccessories: eS,
    rowHeight: 48,
    sectionHeaderHeight: Z,
    listPadding: H,
    itemNodeWidth: 150,
    gridNavigatorId: ea,
    renderEmptySearchState: j,
    renderInspector: eN,
    gridNotice: U,
    renderHeader: q
  })
]
  });
}