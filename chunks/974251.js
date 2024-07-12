n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(704215),
  c = n(481060),
  d = n(53281),
  u = n(110924),
  h = n(40851),
  p = n(595519),
  m = n(620662),
  _ = n(924557),
  f = n(435064),
  E = n(712114),
  C = n(605236),
  g = n(536442),
  I = n(79390),
  x = n(665906),
  T = n(695346),
  v = n(433355),
  N = n(819640),
  S = n(375954),
  Z = n(496675),
  A = n(885110),
  M = n(627553),
  b = n(38761),
  R = n(585483),
  j = n(358085),
  L = n(127654),
  P = n(316595),
  O = n(193910),
  y = n(951211),
  D = n(981631),
  k = n(356659),
  U = n(921944),
  w = n(689938),
  B = n(72704);
t.Z = a.memo(function(e) {
  var t, l;
  let H, {
  className: G,
  channel: V,
  draftType: F,
  editorTextContent: W,
  setValue: z,
  canOnlyUseTextCommands: Y
} = e,
K = (0, h.bp)(),
q = a.useRef(null),
X = (0, r.e7)([A.Z], () => A.Z.getActivities()),
Q = (0, r.e7)([f.Z], () => f.Z.getSettings().clipsEnabled),
J = (0, r.e7)([f.Z], () => f.Z.getLastClipsSession()),
$ = (0, r.Wu)([f.Z], () => f.Z.getNewClipIds()),
ee = (0, r.e7)([v.ZP], () => null == v.ZP.getCurrentSidebarChannelId(V.id)),
{
  showClipsHeaderEntrypoint: et
} = _.NV.useExperiment({
  location: 'ChannelAttachButton'
}, {
  autoTrackExposure: !1
}),
en = (0, r.e7)([g.qc], () => g.qc.hasHotspot(g.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
ei = (0, c.useModalsStore)(e => (0, c.hasModalOpenSelector)(e, k.Qr)),
ea = (0, r.e7)([N.Z], () => N.Z.hasLayers()),
el = (0, r.e7)([f.Z], () => f.Z.hasClips()),
[es, er] = a.useState(null),
eo = (0, _.Go)() && (Q || el),
ec = V.isPrivate(),
ed = (0, r.e7)([Z.Z], () => ec || Z.Z.can(D.Plq.ATTACH_FILES, V) && Z.Z.can(D.Plq.SEND_MESSAGES, V)),
eu = (0, u.Z)(J);
  (null == eu ? void 0 : eu.newClipIds.length) !== (null == J ? void 0 : J.newClipIds.length) && (null !== (t = null == J ? void 0 : J.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == es && en && ee && !ei && !et && !ea && er('recentClips');
  let eh = (e, t, n) => {
  null != t && 'ETOOLARGE' === t.code ? (0, L.G)(V, []) : (0, L.d)(e, V, F, {
    requireConfirm: !0,
    showLargeMessageDialog: n
  }), R.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS);
},
ep = (0, r.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());

  function em() {
(0, c.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('2668'),
    n.e('93932')
  ]).then(n.bind(n, 542055));
  return t => (0, i.jsx)(e, {
    ...t,
    channelId: V.id
  });
}, {
  modalKey: k.Qr
}), er(null);
  }
  a.useEffect(() => {
let e = () => {
  var e;
  return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
};
return R.S.subscribe(D.CkL.UPLOAD_FILE, e), () => {
  R.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
};
  });
  let e_ = (0, x.NE)(V),
ef = (0, x.Xu)(V),
eE = !T.dN.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
eC = (0, I.UI)(null != V ? V : void 0),
eg = (0, c.useRedesignIconContext)().enabled,
eI = (0, p.qB)(V.id, 'ChannelAttachButton'),
ex = null !== (l = null == $ ? void 0 : $.length) && void 0 !== l ? l : 0,
eT = (0, y.Z)({
  canAttachFiles: ed,
  canStartThreads: e_ || ef,
  useSlate: eE,
  hasClips: eo,
  canUseApplicationCommands: !Y,
  channel: V,
  activities: X,
  newClipsCount: ex,
  canPostPolls: eC,
  canLaunchActivities: eI,
  appContext: K
});
  if (0 === eT.length)
return null;
  let ev = X.some(e => (0, m.Z)(e, D.xjy.SYNC)),
eN = X.some(e => (0, m.Z)(e, D.xjy.JOIN) && !(0, m.Z)(e, D.xjy.EMBEDDED)) || ev;
  H = eg ? (0, i.jsx)(c.CirclePlusIcon, {
className: B.__invalid_attachButtonIcon,
colorClass: B.attachButtonPlus
  }) : eN ? (0, i.jsx)(b.Z, {
className: B.__invalid_attachButtonIcon,
foreground: B.attachButtonPlay,
background: B.attachButtonPlus,
width: 24,
height: 24
  }) : ex > 0 ? (0, i.jsx)(M.Z, {
className: B.__invalid_attachButtonIcon,
foreground: B.attachButtonClip,
background: B.attachButtonPlus,
width: 24,
height: 24
  }) : (0, i.jsx)(c.CirclePlusIcon, {
size: 'md',
color: 'currentColor',
className: B.__invalid_attachButtonIcon,
colorClass: B.attachButtonPlus
  });
  let eS = (0, i.jsx)(c.Popout, {
shouldShow: null != es,
animation: c.Popout.Animation.NONE,
align: 'recentClips' === es ? 'center' : 'left',
position: 'top',
positionKey: null != es ? es : 'null',
onRequestOpen: () => {
  ep && (0, C.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
    dismissAction: U.L.TAKE_ACTION
  }), er('attachMenu');
},
onRequestClose: () => {
  !(0, c.hasAnyModalOpen)() && (ep && (0, C.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
    dismissAction: U.L.TAKE_ACTION
  }), er(null));
},
renderPopout: e => {
  switch (es) {
    case 'recentClips':
      return (0, i.jsx)(E.Z, {
        ...e,
        onOpenClips: em,
        lastClipsSession: J
      });
    case 'attachMenu':
      return (0, i.jsx)(O.Z, {
        ...e,
        onClose: () => er(null),
        options: eT,
        channel: V,
        onFileUpload: () => {
          var e;
          return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        },
        draftType: F,
        editorTextContent: W,
        setValue: z,
        openClips: em
      });
    default:
      throw Error('Invalid popout type provided');
  }
},
children: e => (0, i.jsx)(c.Button, {
  look: c.Button.Looks.BLANK,
  size: c.Button.Sizes.NONE,
  className: s()(B.attachButton, G),
  innerClassName: B.attachButtonInner,
  'aria-label': w.Z.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
  onDoubleClick: ed ? () => {
    var e;
    return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
  } : void 0,
  ...e,
  children: H
})
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: B.uploadInput,
    children: (0, i.jsx)(d.Z, {
      ref: q,
      onChange: e => {
        eh(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = '';
      },
      multiple: V.rateLimitPerUser <= 0,
      tabIndex: -1,
      'aria-hidden': !0
    })
  }),
  (0, i.jsx)('div', {
    className: B.attachWrapper,
    children: (0, i.jsx)(P.Z, {
      channel: V,
      isOmniMenuOpen: 'attachMenu' === es,
      openOmniMenu: () => er('attachMenu'),
      children: eS
    })
  })
]
  });
});