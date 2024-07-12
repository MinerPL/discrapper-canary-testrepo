n.d(t, {
  Z: function() {
return S;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(704215),
  r = n(481060),
  o = n(358221),
  c = n(243778),
  d = n(390322),
  u = n(871499),
  h = n(819640),
  p = n(797258),
  m = n(446226),
  _ = n(937393),
  f = n(43982),
  E = n(721351),
  C = n(420529),
  g = n(927923),
  I = n(981631),
  x = n(921944),
  T = n(689938),
  v = n(646897);

function N(e) {
  let {
onClose: t,
channel: n
  } = e, a = (0, C.Z)(n);
  return (0, i.jsx)(r.Menu, {
onClose: t,
onSelect: () => null,
navId: 'transfer-menu',
'aria-label': T.Z.Messages.TRANSFER,
children: a
  });
}

function S(e) {
  let {
channel: t,
showLeftDivider: n = !1,
...C
  } = e, S = (0, m.Z)(), Z = (0, l.e7)([p.Z], () => {
var e, t;
return null === (e = p.Z.getSessionById(null !== (t = null == S ? void 0 : S.sessionId) && void 0 !== t ? t : '')) || void 0 === e ? void 0 : e.clientInfo.os;
  }), A = (0, l.e7)([h.Z], () => h.Z.hasLayers()), [M, b] = (0, l.Wu)([o.Z], () => [
o.Z.getMode(t.id),
o.Z.getLayout(t.id)
  ]), R = (0, r.useModalsStore)(r.hasAnyModalOpenSelector), j = (0, _.Z)(), L = j.filter(e => e.twoWayLink), [P, O] = a.useState(!1);
  if (null == S && 0 === j.length || t.isBroadcastChannel())
return null;
  let y = I.WtW.VOICE !== M && [
  I.AEg.NO_CHAT,
  I.AEg.FULL_SCREEN
].includes(b) ? 'top' : 'bottom',
D = [];
  return L.length > 0 && D.push(s.z.DONUT_DESKTOP_NUX), (0, i.jsx)(c.Z, {
contentTypes: D,
children: e => {
  let {
    visibleContent: a,
    markAsDismissed: l
  } = e, o = a === s.z.DONUT_DESKTOP_NUX;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      n ? (0, i.jsx)('div', {
        className: v.leftDivider
      }) : null,
      (0, i.jsx)(r.Popout, {
        position: y,
        spacing: o ? 16 : void 0,
        positionKey: ''.concat(M, ':').concat(b),
        onRequestClose: () => O(!1),
        shouldShow: (o || P) && !A && !R,
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, i.jsx)(d.Z, {
            children: o ? (0, i.jsx)(f.Z, {
              popoutPosition: y,
              onDismiss: () => l(x.L.UNKNOWN),
              onAccept: () => {
                l(x.L.UNKNOWN), O(!0);
              },
              gameConsoleAccounts: L
            }) : (0, i.jsx)(N, {
              onClose: () => {
                n();
              },
              channel: t
            })
          });
        },
        children: e => {
          var t;
          return (0, i.jsx)(u.Z, {
            ...e,
            ...C,
            onClick: () => O(!0),
            label: null != (t = Z) ? t === g.YE.XBOX ? T.Z.Messages.XBOX_REMOTE_CONNECTED_RAW : T.Z.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW : T.Z.Messages.CONSOLE_TRANSFER,
            iconComponent: (0, E.Z)(Z)
          });
        }
      })
    ]
  });
}
  });
}