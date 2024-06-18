"use strict";
n.d(t, {
  FD: function() {
    return T
  },
  I5: function() {
    return O
  },
  Mn: function() {
    return N
  },
  P6: function() {
    return D
  },
  S2: function() {
    return f
  },
  UZ: function() {
    return R
  },
  V3: function() {
    return m
  },
  W3: function() {
    return v
  },
  Zy: function() {
    return h
  },
  b9: function() {
    return g
  },
  cV: function() {
    return C
  },
  ol: function() {
    return A
  },
  si: function() {
    return L
  },
  ss: function() {
    return S
  },
  xn: function() {
    return p
  }
});
var i = n(544891),
  r = n(433517),
  s = n(780384),
  o = n(570140),
  a = n(703656),
  l = n(626135),
  u = n(768581),
  _ = n(546796),
  d = n(893776),
  c = n(981631),
  E = n(792101),
  I = n(689938);

function T() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function h() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function S(e, t) {
  let n = t ? I.Z.Messages.DELETE_ACCOUNT : I.Z.Messages.DISABLE_ACCOUNT,
    r = t ? c.ANM.DELETE_ACCOUNT : c.ANM.DISABLE_ACCOUNT;
  return (0, _.Z)(t => i.tn.post({
    url: r,
    body: {
      password: e,
      ...t
    },
    oldFormErrors: !0
  }), {
    modalProps: {
      title: n
    },
    checkEnabled: !1
  }).then(() => {
    d.Z.logoutInternal(), (0, a.uL)(c.Z5c.DEFAULT_LOGGED_OUT)
  })
}
async function f(e) {
  let t = await i.tn.patch({
      url: c.ANM.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, o.Z.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.Z.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return o.Z.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function N(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: s,
    password: a,
    avatar: d,
    avatarDecoration: T,
    newPassword: h,
    globalName: S
  } = e;
  return o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, _.Z)(e => {
    let o = {
      username: t,
      email: i,
      email_token: s,
      password: a,
      avatar: d,
      discriminator: n,
      global_name: S,
      new_password: h,
      ...e
    };
    null === T && (o.avatar_decoration_id = null), null != T && (o.avatar_decoration_id = T.id, o.avatar_decoration_sku_id = T.skuId);
    let l = r.K.get(c.JkL),
      u = (0, E.xJ)();
    null != u && null != l && (o.push_provider = u, o.push_token = l);
    let _ = r.K.get(c.scU);
    return null != E.mv && null != _ && (o.push_voip_provider = E.mv, o.push_voip_token = _), f(o)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: I.Z.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return l.default.track(c.rMx.USER_AVATAR_UPDATED, {
      animated: (0, u.xR)(t.avatar)
    }), o.Z.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function A() {
  return i.tn.get({
    url: c.ANM.USER_HARVEST,
    oldFormErrors: !0
  })
}

function m(e) {
  return i.tn.post({
    url: c.ANM.USER_HARVEST,
    body: {
      backends: e
    },
    oldFormErrors: !0
  })
}

function O(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? s.uv.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : s.uv.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function R(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function C(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function p(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function g() {
  o.Z.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function L() {
  o.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function v() {
  o.Z.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function D() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}