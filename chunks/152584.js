"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return S
  },
  accountDetailsClose: function() {
    return T
  },
  disableAccount: function() {
    return A
  },
  saveAccountRequest: function() {
    return p
  },
  saveAccountChanges: function() {
    return g
  },
  getHarvestStatus: function() {
    return I
  },
  requestHarvest: function() {
    return N
  },
  setPendingAvatar: function() {
    return C
  },
  setPendingGlobalNameName: function() {
    return O
  },
  setPendingAvatarDecoration: function() {
    return m
  },
  setPendingProfileEffectId: function() {
    return U
  },
  clearErrors: function() {
    return R
  },
  resetPendingAccountChanges: function() {
    return v
  },
  resetAllPending: function() {
    return h
  },
  resetAndCloseUserProfileForm: function() {
    return y
  },
  setDisableSubmit: function() {
    return P
  }
});
var l = n("872717"),
  i = n("95410"),
  a = n("819855"),
  u = n("913144"),
  o = n("393414"),
  d = n("599110"),
  r = n("315102"),
  s = n("730622"),
  c = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function S() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function T() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function A(e, t) {
  let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, s.default)(t => l.default.post({
    url: i,
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
    c.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function p(e) {
  let t = await l.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, u.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return u.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function g(e) {
  let {
    username: t,
    discriminator: n,
    email: l,
    emailToken: a,
    password: o,
    avatar: c,
    avatarDecoration: S,
    newPassword: T,
    globalName: A
  } = e;
  return u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, s.default)(e => {
    let u = {
      username: t,
      email: l,
      email_token: a,
      password: o,
      avatar: c,
      discriminator: n,
      global_name: A,
      new_password: T,
      ...e
    };
    null === S && (u.avatar_decoration_id = null), null != S && (u.avatar_decoration_id = S.id, u.avatar_decoration_sku_id = S.skuId);
    let d = i.default.get(f.DEVICE_TOKEN),
      r = (0, E.getDevicePushProvider)();
    null != r && null != d && (u.push_provider = r, u.push_token = d);
    let s = i.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = s), p(u)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => u.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return d.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, r.isAnimatedIconHash)(t.avatar)
    }), u.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function I() {
  return l.default.get({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function N() {
  return l.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function C(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function O(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function m(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function U(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function R() {
  u.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function v() {
  u.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function h() {
  u.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function y() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function P(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}