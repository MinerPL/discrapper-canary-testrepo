n.d(t, {
  $3: function() {
return G;
  },
  Go: function() {
return y;
  },
  NU: function() {
return P;
  },
  Nk: function() {
return M;
  },
  R9: function() {
return L;
  },
  RN: function() {
return j;
  },
  Wl: function() {
return x;
  },
  XO: function() {
return O;
  },
  Xn: function() {
return F;
  },
  bb: function() {
return k;
  },
  qo: function() {
return D;
  },
  rY: function() {
return Z;
  },
  sR: function() {
return U;
  },
  tn: function() {
return B;
  },
  wq: function() {
return b;
  }
}), n(789020), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(668781),
  r = n(239091),
  l = n(904245),
  o = n(144144),
  c = n(40851),
  u = n(592125),
  d = n(323873),
  _ = n(375954),
  E = n(594174),
  I = n(585483),
  m = n(5967),
  T = n(630388),
  h = n(358085),
  N = n(51144),
  C = n(91047),
  f = n(901461),
  p = n(50284),
  g = n(981631),
  S = n(689938);

function A(e, t, n) {
  return s.useCallback(() => {
n({
  [e]: !t
});
  }, [
e,
n,
t
  ]);
}

function R(e, t, n) {
  return s.useCallback(i => {
let s = E.default.getUser(e);
if (null == s)
  return;
if (i.preventDefault(), i.stopPropagation(), !i.shiftKey) {
  n();
  return;
}
let a = '@'.concat(N.ZP.getUserTag(s, {
    decoration: 'never'
  })),
  r = '<@'.concat(e, '>');
I.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
  plainText: a,
  rawText: r
}), o.Z.startTyping(t);
  }, [
e,
t,
n
  ]);
}

function O(e, t, n, i) {
  let s = A('usernameProfile', n, i);
  return R(e.author.id, t.id, s);
}

function x(e, t, n, i) {
  let s = A('referencedUsernameProfile', n, i);
  return R(null == e ? void 0 : e.author.id, t.id, s);
}

function M(e, t, n, i) {
  let s = A('interactionUsernameProfile', n, i);
  return R(null == e ? void 0 : e.user.id, t.id, s);
}

function v(e) {
  return s.useCallback(t => {
t.preventDefault(), t.stopPropagation(), e();
  }, [e]);
}

function L(e, t) {
  return v(A('avatarProfile', e, t));
}

function Z(e, t) {
  return v(A('referencedAvatarProfile', e, t));
}

function P(e, t) {
  return v(A('interactionAvatarProfile', e, t));
}

function D(e, t, a, l) {
  let {
id: o
  } = t, {
id: E,
flags: I
  } = e, m = (0, T.yE)(I, g.iLy.EPHEMERAL), N = (0, f.Z)(e), C = (0, c.bp)();
  return s.useCallback((e, t) => {
if (m)
  return;
if (!h.isPlatformEmbedded) {
  let t = e.target;
  if ('A' === t.tagName && '' !== t.textContent || null == window.getSelection)
    return;
  let n = window.getSelection();
  if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode)))
    return;
}
let s = u.Z.getChannel(o),
  c = _.Z.getMessage(o, E),
  I = d.Z.isEditing(o, E);
if (null != s && null != c && !I)
  a({
    contextMenu: !0
  }), (0, r.jW)(e, async () => {
    if (N) {
      let {
        default: e
      } = await Promise.all([
        n.e('29975'),
        n.e('47919')
      ]).then(n.bind(n, 240678));
      return n => (0, i.jsx)(e, {
        ...n,
        message: c,
        channel: s,
        mediaItem: t
      });
    } {
      let {
        default: e
      } = await Promise.all([
        n.e('92557'),
        n.e('29975'),
        n.e('37220'),
        n.e('55261')
      ]).then(n.bind(n, 225138));
      return n => (0, i.jsx)(e, {
        ...n,
        message: c,
        channel: s,
        mediaItem: t,
        shouldHideMediaOptions: l
      });
    }
  }, {
    onClose: () => a({
      contextMenu: !1
    }),
    context: C
  });
  }, [
m,
o,
E,
a,
C,
N,
l
  ]);
}

function b(e, t) {
  return s.useCallback(n => {
let i = E.default.getUser(e),
  s = u.Z.getChannel(t);
null != i && null != s && (n.stopPropagation(), (0, C.Pv)(n, i, s));
  }, [
e,
t
  ]);
}

function j(e, t, n) {
  return s.useCallback(i => {
let s = E.default.getUser(e),
  a = u.Z.getChannel(t);
null != s && null != a && (i.stopPropagation(), (0, C._j)(i, {
  user: s,
  channel: a,
  moderationAlertId: n
}));
  }, [
e,
t,
n
  ]);
}

function U(e, t) {
  return s.useCallback(n => {
let i = E.default.getUser(e),
  s = u.Z.getChannel(t);
null != i && null != s && (n.stopPropagation(), (0, C.xS)(n, i, s.guild_id));
  }, [
e,
t
  ]);
}

function y(e, t) {
  let {
id: n
  } = e, {
id: i
  } = t;
  return s.useCallback(e => {
e.altKey && (e.preventDefault(), (0, p.Z)(i, n));
  }, [
i,
n
  ]);
}

function B(e, t, n) {
  let i = ''.concat(e, ':').concat(t),
a = s.useRef(n),
[r, l] = s.useState(n);
  a.current = r || a.current;
  let o = s.useCallback(() => {
  !r && (I.S.dispatchKeyed(g.LPv.ANIMATE_CHAT_AVATAR, i, !0), l(!0));
}, [
  r,
  i
]),
c = s.useCallback(() => {
  I.S.dispatchKeyed(g.LPv.ANIMATE_CHAT_AVATAR, i, !1), l(!1);
}, [i]);
  return {
hasHovered: a.current,
isHovered: r,
handleMouseEnter: o,
handleMouseLeave: c
  };
}

function k(e, t) {
  let [n, i] = s.useState(!1), [a, r] = s.useState(!1), l = s.useCallback(t => {
var n, s;
let a = null !== (s = null === (n = (0, m.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
(t.target === t.currentTarget || t.currentTarget.contains(a)) && (r(!0), i(!0)), null != e && e(t);
  }, [e]);
  return {
handleFocus: l,
handleBlur: s.useCallback(e => {
  var n, s;
  let a = null !== (s = null === (n = (0, m.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
  (e.target === e.currentTarget || !e.currentTarget.contains(a)) && i(!1), null != t && t(e);
}, [t]),
isFocused: n,
hasFocused: a
  };
}

function G(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return s.useCallback(() => {
null != t && (n ? a.Z.show({
  title: S.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
  body: S.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
    name: t.author.username
  }),
  confirmText: S.Z.Messages.OKAY
}) : l.Z.jumpToMessage({
  channelId: t.channel_id,
  messageId: t.id,
  flash: !0,
  returnMessageId: e.id
}));
  }, [
n,
e.id,
t
  ]);
}

function F(e, t) {
  let n = A('interactionData', e, t);
  return s.useCallback(e => {
e.preventDefault(), e.stopPropagation(), n();
  }, [n]);
}