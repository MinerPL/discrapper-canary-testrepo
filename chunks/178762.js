n.d(t, {
  YN: function() {
return b;
  },
  iZ: function() {
return R;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  l = n.n(s),
  r = n(91192),
  o = n(876215),
  c = n(442837),
  u = n(481060),
  d = n(239091),
  h = n(607070),
  p = n(439170),
  m = n(594174),
  _ = n(687694),
  f = n(69259),
  E = n(91140),
  g = n(227172),
  C = n(551228),
  I = n(678869),
  x = n(278399),
  T = n(886217),
  N = n(555672),
  v = n(644548),
  S = n(335326),
  Z = n(268010),
  A = n(797342),
  M = n(206583);
let b = 72;

function R(e) {
  return (null == e ? void 0 : e.type) === p.so.CONTENT_INVENTORY ? b : 0;
}
let j = l().throttle(e => {
(0, f.L)(M.xP.CARD_HOVER, e);
  }, 5000, {
leading: !0,
trailing: !1
  }),
  L = e => {
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
    return (0, i.jsx)(N.ZP, {
      ...n,
      entry: t
    });
  case o.s.TOP_ARTIST:
    return (0, i.jsx)(x.ZP, {
      ...n,
      entry: t
    });
  case o.s.LISTENED_SESSION:
    return (0, i.jsx)(C.ZP, {
      ...n,
      entry: t
    });
  default:
    return null;
}
  },
  P = e => {
let {
  entry: t,
  ...n
} = e;
switch (t.content_type) {
  case o.s.PLAYED_GAME:
    return (0, i.jsx)(g.Z, {
      ...n,
      entry: t
    });
  case o.s.WATCHED_MEDIA:
    return (0, i.jsx)(Z.Z, {
      ...n,
      entry: t
    });
  case o.s.TOP_GAME:
    return (0, i.jsx)(v.Z, {
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
index: s,
...l
  } = e, [o, p] = a.useState('default'), E = (0, r.JA)(''.concat(s)), g = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), {
isRich: C,
appName: I
  } = (0, A.n)(l.entry), x = {
entry: l.entry,
channelId: l.channel.id,
guildId: l.channel.guild_id,
requestId: l.requestId,
richPresenceName: C ? I : void 0
  }, {
openOnHover: T
  } = (0, _.C)({
location: 'MemberListContentRow'
  }), N = a.useRef(!1), [v, S] = a.useState(!1), [Z, b] = a.useState(!1), [R, O] = a.useState(!1), y = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
  a.useEffect(() => {
v && y && O(!0);
  }, [
v,
y
  ]);
  let D = a.useCallback(e => {
  if (!!g)
    (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e('153').then(n.bind(n, 330150));
      return () => (0, i.jsx)(e, {
        entry: l.entry,
        requestId: l.requestId
      });
    });
}, [
  l,
  g
]),
k = a.useCallback(() => {
  p(String(Date.now()));
}, []),
U = () => {
  N.current = !1, setTimeout(() => {
    !N.current && (S(!1), O(y));
  }, 100);
};
  return (0, i.jsx)('div', {
onMouseEnter: () => {
  N.current = !0, setTimeout(() => {
    N.current && S(!0), T && (0, f.L)(M.xP.CARD_CLICK, x);
  }, 100);
},
onMouseLeave: U,
children: (0, i.jsx)(u.Popout, {
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(P, {
      closePopout: t,
      updatePopoutPosition: k,
      ...l
    });
  },
  position: 'left',
  shouldShow: T ? v : Z,
  positionKey: o,
  onRequestOpen: () => (0, f.L)(M.xP.CARD_CLICK, x),
  onRequestClose: () => {
    R && U(), !T && (S(!1), b(!1));
  },
  spacing: 8,
  children: (e, t) => {
    let {
      isShown: n
    } = t;
    return (0, i.jsx)(u.Clickable, {
      onClick: () => {
        T && !v && S(!0), !T && b(e => !e);
      },
      children: (0, i.jsx)(u.FocusRing, {
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
            j(x);
          },
          onContextMenu: D,
          children: (0, i.jsx)(L, {
            ...l,
            selected: n,
            hovered: N.current
          })
        })
      })
    });
  }
})
  });
});