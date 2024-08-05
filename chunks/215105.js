n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(106351),
  l = n(507274),
  u = n(541716),
  c = n(752305),
  d = n(893718),
  _ = n(131704),
  E = n(699516),
  f = n(823379),
  h = n(5192),
  p = n(51144),
  m = n(785717),
  I = n(485216),
  T = n(228168),
  g = n(689938),
  S = n(628372);
let A = (0, _.kt)({
id: '1',
type: o.d.DM
  }),
  N = e => {
let {
  input: t,
  username: n,
  sourceType: r,
  sourceDetails: i
} = e;
switch (r) {
  case T.N9.ACTIVITY:
    let a = g.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({
      username: n
    });
    return '> -# *'.concat(a, '*\n').concat(t);
  case T.N9.AVATAR:
    let s = g.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({
      username: n
    });
    return '> -# *'.concat(s, '*\n').concat(t);
  case T.N9.STATUS:
    let o = g.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({
      username: n
    });
    return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
  default:
    (0, f.vE)(r);
}
  };

function v(e) {
  let {
user: t,
guildId: n,
channelId: a,
profileType: o,
sourceType: _,
sourceDetails: f,
onReply: v,
setPopoutRef: O,
modalKey: R
  } = e, {
trackUserProfileAction: C
  } = (0, m.KZ)(), [y, D] = i.useState(''), [L, b] = i.useState((0, c.JM)(y)), M = i.useRef(!1), P = i.useRef(null);
  i.useEffect(() => {
null == O || O(null == P ? void 0 : P.current);
  }, [
P,
O
  ]);
  let U = async e => {
var n;
if (null == e)
  return;
C({
  action: 'PRESS_REPLY'
});
let r = N({
  input: e,
  username: null !== (n = E.Z.getNickname(t.id)) && void 0 !== n ? n : p.ZP.getName(t),
  sourceType: _,
  sourceDetails: f
});
await (0, I.Z)({
  userId: t.id,
  content: r,
  location: 'UserProfileReplyPopout'
});
  };
  return (0, r.jsx)(l.V, {
ref: P,
children: (0, r.jsx)('div', {
  className: s()(S.container, {
    [S.panel]: o === T.y0.PANEL
  }),
  children: (0, r.jsx)(d.Z, {
    parentModalKey: R,
    emojiPickerCloseOnModalOuterClick: !0,
    innerClassName: S.inner,
    editorClassName: S.editor,
    type: u.I.USER_PROFILE_REPLY,
    placeholder: g.Z.Messages.QUICK_DM_USER.format({
      name: h.ZP.getName(n, a, t)
    }),
    channel: A,
    textValue: y,
    richValue: L,
    onChange: (e, t, n) => {
      if (t !== y)
        D(t), b(n);
    },
    focused: M.current,
    onFocus: () => {
      M.current = !0;
    },
    onBlur: e => {
      var t;
      if (null === (t = P.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
        M.current = !1;
        return;
      }
      null !== P.current && (M.current = !1, null == v || v(null));
    },
    onSubmit: async e => {
      let {
        value: t
      } = e;
      try {
        return C({
          action: 'SEND_STATUS_REPLY'
        }), await U(t.trim()), null == v || v(null), {
          shouldClear: !0,
          shouldRefocus: !1
        };
      } catch {
        return {
          shouldClear: !1,
          shouldRefocus: !1
        };
      }
    }
  })
})
  });
}