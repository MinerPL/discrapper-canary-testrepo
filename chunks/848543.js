n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(399606),
  o = n(704215),
  c = n(923462),
  d = n(481060),
  u = n(239091),
  _ = n(100527),
  E = n(906732),
  h = n(706140),
  m = n(294629),
  I = n(131951),
  g = n(459273),
  p = n(242291),
  T = n(792165),
  S = n(603074),
  f = n(981631),
  C = n(921944),
  N = n(689938),
  A = n(532140);

function v(e) {
  let {
channel: t,
iconClassName: s,
className: v,
innerClassName: Z,
...L
  } = e, {
mute: O,
suppress: R
  } = (0, m.Z)(t), x = (0, l.e7)([I.Z], () => I.Z.isDeaf()), b = O || R || x, [P, M] = a.useState(!1), D = t.getGuildId(), y = (0, p.sR)({
isSoundboardButtonDisabled: b
  }), [j, U] = (0, h.cv)(y), {
analyticsLocations: G
  } = (0, E.ZP)(_.Z.SOUNDBOARD_BUTTON);

  function k(e) {
null != D && (0, u.jW)(e, async () => {
  let {
    default: e
  } = await n.e('56049').then(n.bind(n, 338991));
  return t => (0, i.jsx)(e, {
    guildId: D,
    ...t
  });
});
  }
  let {
Component: w,
play: B,
events: {
  onMouseEnter: H,
  onMouseLeave: V
}
  } = (0, c.j)(), F = e => (0, i.jsx)(d.Popout, {
animation: d.Popout.Animation.FADE,
shouldShow: P,
position: 'top',
onRequestClose: () => M(!1),
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(S.Z, {
    guildId: D,
    channel: t,
    onClose: n,
    gridNotice: j === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(T.o, {
      onClose: n,
      markAsDismissed: U
    }),
    analyticsSource: 'rtc panel'
  });
},
children: t => (0, i.jsx)('div', {
  children: (0, i.jsx)(d.Button, {
    ...e,
    ...t,
    className: r()(v, {
      [A.buttonActive]: P,
      [A.disabled]: b
    }),
    wrapperClassName: v,
    innerClassName: Z,
    disabled: b,
    onClick: () => {
      var t, n;
      null != j && j !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(C.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!P), B();
    },
    onMouseEnter: t => {
      var n, i;
      null === (n = L.onMouseEnter) || void 0 === n || n.call(L, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), H();
    },
    onMouseLeave: t => {
      var n, i;
      null === (n = L.onMouseLeave) || void 0 === n || n.call(L, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), V();
    },
    onContextMenu: k,
    fullWidth: !0,
    size: d.Button.Sizes.SMALL,
    ...L,
    children: (0, i.jsx)(w, {
      className: s,
      size: 'sm',
      color: P ? 'white' : d.tokens.colors.INTERACTIVE_ACTIVE
    })
  })
})
  }), Y = a.useCallback(() => {
!b && M(!P);
  }, [
b,
P
  ]);
  return (0, g.yp)({
event: f.CkL.TOGGLE_SOUNDBOARD,
handler: Y
  }), (0, i.jsx)(E.Gt, {
value: G,
children: (0, i.jsx)(d.Tooltip, {
  text: function() {
    if (O)
      return N.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
    if (R)
      return N.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
    if (x)
      return N.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
    return N.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD;
  }(),
  children: e => F(e)
})
  });
}