E.d(_, {
  a: function() {
return a;
  }
});
var s, T, I, n, A = E(442837),
  t = E(570140);
let a = {},
  r = {},
  N = {},
  L = !1,
  D = !1,
  S = !1;

function l(e) {
  let {
guild: _
  } = e.invite;
  return (null == _ ? void 0 : _.welcome_screen) != null && (r[_.id] = _.welcome_screen, !0);
}

function U(e) {
  let {
welcomeScreen: _,
guildId: E
  } = e;
  r[E] = null != _ ? _ : a;
}
class G extends(n = A.ZP.Store) {
  get(e) {
if (null != e)
  return r[e];
  }
  isFetching() {
return D;
  }
  hasError() {
return S;
  }
  hasSeen(e) {
let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && (_ ? L : N[e] || !1);
  }
  isEmpty(e) {
if (null == e)
  return !0;
let _ = r[e];
return null == _ || 0 === _.welcome_channels.length;
  }
}
I = 'WelcomeScreenStore', (T = 'displayName') in(s = G) ? Object.defineProperty(s, T, {
  value: I,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[T] = I, _.Z = new G(t.Z, {
  INVITE_RESOLVE_SUCCESS: l,
  INVITE_ACCEPT_SUCCESS: l,
  WELCOME_SCREEN_SUBMIT_SUCCESS: U,
  WELCOME_SCREEN_UPDATE: U,
  WELCOME_SCREEN_VIEW: function(e) {
let {
  guildId: _,
  isLurking: E
} = e;
N[_] = !0, E && (L = !0);
  },
  GUILD_STOP_LURKING: function() {
L = !1;
  },
  GUILD_DELETE: function(e) {
let {
  guild: {
    id: _
  }
} = e;
N[_] = !1;
  },
  WELCOME_SCREEN_FETCH_START: function() {
D = !0, S = !1;
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
D = !1, S = !1;
let {
  welcomeScreen: _,
  guildId: E
} = e;
r[E] = null != _ ? _ : a;
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
D = !1, S = !0;
  }
});