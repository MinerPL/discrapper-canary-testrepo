"use strict";
n.d(t, {
  CM: function() {
    return f
  },
  Cf: function() {
    return h
  },
  ID: function() {
    return S
  },
  Xz: function() {
    return m
  },
  Z: function() {
    return E
  },
  c_: function() {
    return A
  },
  f4: function() {
    return O
  },
  g_: function() {
    return T
  },
  pG: function() {
    return I
  },
  rf: function() {
    return R
  },
  z5: function() {
    return N
  }
});
var i = n(544891),
  r = n(570140),
  s = n(881052),
  o = n(957730),
  a = n(695346),
  l = n(594174),
  u = n(626135),
  _ = n(981631),
  d = n(474936);

function c(e) {
  u.default.track(_.rMx.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: d.h1.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, u;
  let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == d) return;
  let c = a.dN.getSetting();
  null != e.bio && c && (e.bio = o.ZP.parse(void 0, e.bio).content);
  try {
    r.Z.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: d
    });
    let n = await i.tn.patch({
      url: null != t ? _.ANM.GUILD_PROFILE(t, _.ME) : _.ANM.USER_PROFILE(_.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
      r.Z.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: d,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new s.Hx(n);
      r.Z.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new s.Hx(t);
    return r.Z.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    }), t
  }
}

function I() {
  r.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function T(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function h(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function S(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function f(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function N(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function A(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), c(d.QP.ANIMATED_AVATAR)
}

function m(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), c(d.QP.AVATAR_DECORATION)
}

function O(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), c(d.QP.PROFILE_BANNER)
}

function R(e) {
  r.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), c(d.QP.PROFILE_THEME_COLOR)
}