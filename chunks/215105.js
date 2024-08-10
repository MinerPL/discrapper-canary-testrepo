n.d(t, {
  Z: function() {
return R;
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
  I = n(448520),
  T = n(485216),
  g = n(228168),
  S = n(689938),
  A = n(628372);
let N = (0, _.kt)({
id: '1',
type: o.d.DM
  }),
  v = e => {
let {
  input: t,
  username: n,
  sourceType: r,
  sourceDetails: i
} = e;
switch (r) {
  case g.N9.ACTIVITY:
    let a = S.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({
      username: n
    });
    return '> -# *'.concat(a, '*\n').concat(t);
  case g.N9.AVATAR:
    let s = S.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({
      username: n
    });
    return '> -# *'.concat(s, '*\n').concat(t);
  case g.N9.STATUS:
    let o = S.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({
      username: n
    });
    return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
  default:
    (0, f.vE)(r);
}
  },
  O = e => {
switch (e) {
  case g.N9.ACTIVITY:
    return S.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
  case g.N9.AVATAR:
    return S.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
  case g.N9.STATUS:
    return S.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
  default:
    (0, f.vE)(e);
}
  };

function R(e) {
  let {
user: t,
guildId: n,
channelId: a,
profileType: o,
sourceType: _,
sourceDetails: f,
onReply: S,
setPopoutRef: R,
modalKey: C
  } = e, {
trackUserProfileAction: y
  } = (0, m.KZ)(), {
sendReply: D
  } = (0, I.D)(_), [L, b] = i.useState(''), [M, P] = i.useState((0, c.JM)(L)), U = i.useRef(!1), w = i.useRef(null);
  i.useEffect(() => {
null == R || R(null == w ? void 0 : w.current);
  }, [
w,
R
  ]);
  let x = async e => {
var n;
if (null == e)
  return;
y({
  action: D
});
let r = v({
  input: e,
  username: null !== (n = E.Z.getNickname(t.id)) && void 0 !== n ? n : p.ZP.getName(t),
  sourceType: _,
  sourceDetails: f
});
await (0, T.Z)({
  userId: t.id,
  content: r,
  location: 'UserProfileReplyPopout',
  openChannel: !1,
  whenReady: !1
});
  };
  return (0, r.jsx)(l.V, {
ref: w,
children: (0, r.jsx)('div', {
  className: s()(A.container, {
    [A.panel]: o === g.y0.PANEL
  }),
  children: (0, r.jsx)(d.Z, {
    parentModalKey: C,
    emojiPickerCloseOnModalOuterClick: !0,
    innerClassName: A.inner,
    editorClassName: A.editor,
    type: u.I.USER_PROFILE_REPLY,
    placeholder: O(_).format({
      username: h.ZP.getName(n, a, t)
    }),
    channel: N,
    textValue: L,
    richValue: M,
    onChange: (e, t, n) => {
      if (t !== L)
        b(t), P(n);
    },
    focused: U.current,
    onFocus: () => {
      U.current = !0;
    },
    onBlur: e => {
      var t;
      if (null === (t = w.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
        U.current = !1;
        return;
      }
      null !== w.current && (U.current = !1, null == S || S(null));
    },
    onSubmit: async e => {
      let {
        value: t
      } = e;
      try {
        return await x(t.trim()), null == S || S(null), {
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