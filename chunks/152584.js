"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return N
  },
  accountDetailsClose: function() {
    return c
  },
  disableAccount: function() {
    return C
  },
  saveAccountRequest: function() {
    return A
  },
  saveAccountChanges: function() {
    return I
  },
  getHarvestStatus: function() {
    return f
  },
  requestHarvest: function() {
    return R
  },
  setPendingAvatar: function() {
    return U
  },
  setPendingGlobalNameName: function() {
    return O
  },
  setPendingAvatarDecoration: function() {
    return m
  },
  setPendingProfileEffectId: function() {
    return p
  },
  clearErrors: function() {
    return M
  },
  resetPendingAccountChanges: function() {
    return h
  },
  resetAllPending: function() {
    return v
  },
  resetAndCloseUserProfileForm: function() {
    return g
  },
  setDisableSubmit: function() {
    return G
  }
});
var s = n("872717"),
  o = n("95410"),
  a = n("819855"),
  r = n("913144"),
  l = n("393414"),
  i = n("599110"),
  E = n("315102"),
  _ = n("730622"),
  u = n("437822"),
  T = n("49111"),
  d = n("191349"),
  S = n("782340");

function N() {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function c() {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function C(e, t) {
  let n = t ? S.default.Messages.DELETE_ACCOUNT : S.default.Messages.DISABLE_ACCOUNT,
    o = t ? T.Endpoints.DELETE_ACCOUNT : T.Endpoints.DISABLE_ACCOUNT;
  return (0, _.default)(t => s.HTTP.post({
    url: o,
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
    u.default.logoutInternal(), (0, l.transitionTo)(T.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function A(e) {
  let t = await s.HTTP.patch({
      url: T.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, r.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && r.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return r.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function I(e) {
  let {
    username: t,
    discriminator: n,
    email: s,
    emailToken: a,
    password: l,
    avatar: u,
    avatarDecoration: N,
    newPassword: c,
    globalName: C
  } = e;
  return r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, _.default)(e => {
    let r = {
      username: t,
      email: s,
      email_token: a,
      password: l,
      avatar: u,
      discriminator: n,
      global_name: C,
      new_password: c,
      ...e
    };
    null === N && (r.avatar_decoration_id = null), null != N && (r.avatar_decoration_id = N.id, r.avatar_decoration_sku_id = N.skuId);
    let i = o.default.get(T.DEVICE_TOKEN),
      E = (0, d.getDevicePushProvider)();
    null != E && null != i && (r.push_provider = E, r.push_token = i);
    let _ = o.default.get(T.DEVICE_VOIP_TOKEN);
    return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (r.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, r.push_voip_token = _), A(r)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: S.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => r.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return i.default.track(T.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, E.isAnimatedIconHash)(t.avatar)
    }), r.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function f() {
  return s.HTTP.get({
    url: T.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function R() {
  return s.HTTP.post({
    url: T.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function U(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? a.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function O(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function m(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function p(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function M() {
  r.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function h() {
  r.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function v() {
  r.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function g() {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function G(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}