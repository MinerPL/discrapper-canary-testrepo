n.d(t, {
  YN: function() {
return M;
  },
  iZ: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(91192),
  o = n(876215),
  c = n(442837),
  d = n(481060),
  u = n(239091),
  h = n(607070),
  p = n(439170),
  m = n(594174),
  _ = n(687694),
  f = n(69259),
  E = n(91140),
  C = n(227172),
  g = n(551228),
  I = n(678869),
  x = n(278399),
  T = n(886217),
  v = n(555672),
  N = n(644548),
  S = n(335326),
  Z = n(268010),
  A = n(206583);
let M = 72;

function b(e) {
  return (null == e ? void 0 : e.type) === p.so.CONTENT_INVENTORY ? M : 0;
}
let R = s().throttle(e => {
(0, f.L)(A.xP.CARD_HOVER, e);
  }, 5000, {
leading: !0,
trailing: !1
  }),
  j = e => {
let {
  entry: t,
  ...n
} = e;
switch (t.content_type) {
  case o.s.PLAYED_GAME:
    return (0, i.jsx)(E.Z, {
      ...n,
      entry: t
    });
  case o.s.WATCHED_MEDIA:
    return (0, i.jsx)(S.ZP, {
      ...n,
      entry: t
    });
  case o.s.TOP_GAME:
    return (0, i.jsx)(v.ZP, {
      ...n,
      entry: t
    });
  case o.s.TOP_ARTIST:
    return (0, i.jsx)(x.ZP, {
      ...n,
      entry: t
    });
  case o.s.LISTENED_SESSION:
    return (0, i.jsx)(g.ZP, {
      ...n,
      entry: t
    });
  default:
    return null;
}
  },
  L = e => {
let {
  entry: t,
  ...n
} = e;
switch (t.content_type) {
  case o.s.PLAYED_GAME:
    return (0, i.jsx)(C.Z, {
      ...n,
      entry: t
    });
  case o.s.WATCHED_MEDIA:
    return (0, i.jsx)(Z.Z, {
      ...n,
      entry: t
    });
  case o.s.TOP_GAME:
    return (0, i.jsx)(N.Z, {
      ...n,
      entry: t
    });
  case o.s.TOP_ARTIST:
    return (0, i.jsx)(T.Z, {
      ...n,
      entry: t
    });
  case o.s.LISTENED_SESSION:
    return (0, i.jsx)(I.Z, {
      ...n,
      entry: t
    });
  default:
    return null;
}
  };
t.ZP = a.memo(e => {
  var t;
  let {
index: l,
...s
  } = e, [o, p] = a.useState('default'), E = (0, r.JA)(''.concat(l)), C = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), g = {
entry: s.entry,
channelId: s.channel.id,
guildId: s.channel.guild_id,
requestId: s.requestId
  }, {
openOnHover: I
  } = (0, _.C)({
location: 'MemberListContentRow'
  }), x = a.useRef(!1), [T, v] = a.useState(!1), [N, S] = a.useState(!1), [Z, M] = a.useState(!1), b = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
  a.useEffect(() => {
T && b && M(!0);
  }, [
T,
b
  ]);
  let P = a.useCallback(e => {
  if (!!C)
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e('153').then(n.bind(n, 330150));
      return () => (0, i.jsx)(e, {
        entry: s.entry,
        requestId: s.requestId
      });
    });
}, [
  s,
  C
]),
O = a.useCallback(() => {
  p(String(Date.now()));
}, []),
y = () => {
  x.current = !1, setTimeout(() => {
    !x.current && (v(!1), M(b));
  }, 100);
};
  return (0, i.jsx)('div', {
onMouseEnter: () => {
  x.current = !0, setTimeout(() => {
    x.current && v(!0), I && (0, f.L)(A.xP.CARD_CLICK, g);
  }, 100);
},
onMouseLeave: y,
children: (0, i.jsx)(d.Popout, {
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(L, {
      closePopout: t,
      updatePopoutPosition: O,
      ...s
    });
  },
  position: 'left',
  shouldShow: I ? T : N,
  positionKey: o,
  onRequestOpen: () => (0, f.L)(A.xP.CARD_CLICK, g),
  onRequestClose: () => {
    Z && y(), !I && (v(!1), S(!1));
  },
  spacing: 8,
  children: (e, t) => {
    let {
      isShown: n
    } = t;
    return (0, i.jsx)(d.Clickable, {
      onClick: () => {
        I && !T && v(!0), !I && S(e => !e);
      },
      children: (0, i.jsx)(d.FocusRing, {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        },
        children: (0, i.jsx)('div', {
          ...e,
          ...E,
          onMouseEnter: () => {
            R(g);
          },
          onContextMenu: P,
          children: (0, i.jsx)(j, {
            ...s,
            selected: n,
            hovered: x.current
          })
        })
      })
    });
  }
})
  });
});