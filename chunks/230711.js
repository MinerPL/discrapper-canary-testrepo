"use strict";
var i = n(544891),
  r = n(433517),
  s = n(570140),
  o = n(443684),
  a = n(663389),
  l = n(626135),
  u = n(768581),
  _ = n(546796),
  d = n(981631),
  c = n(792101),
  E = n(689938);
t.Z = {
  open() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        openWithoutBackstack: !1
      };
    (0, o.Z)(e, t, n)
  },
  init: function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : void 0;
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_INIT",
      section: e,
      subsection: t,
      ...n
    })
  },
  close() {
    let e = a.Z.onClose;
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    }), null != e && e()
  },
  setSection(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SET_SECTION",
      section: e,
      subsection: t,
      ...n
    })
  },
  clearSubsection(e) {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
      forSection: e
    })
  },
  clearScrollPosition(e) {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
      forSection: e
    })
  },
  updateAccount(e) {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
      settings: e
    })
  },
  submitComplete() {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
    })
  },
  reset() {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_RESET"
    })
  },
  saveAccountChanges(e, t) {
    s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT"
    });
    let {
      username: n,
      email: o,
      emailToken: a,
      password: I,
      avatar: T,
      newPassword: h,
      discriminator: S
    } = e, {
      close: f
    } = t;
    return (0, _.Z)(e => {
      let t = {
          username: n,
          email: o,
          email_token: a,
          password: I,
          avatar: T,
          new_password: h,
          ...e,
          discriminator: null != S && "" !== S ? S : void 0
        },
        s = r.K.get(d.JkL),
        l = (0, c.xJ)();
      null != l && null != s && (t.push_provider = l, t.push_token = s);
      let u = r.K.get(d.scU);
      return null != c.mv && null != u && (t.push_voip_provider = c.mv, t.push_voip_token = u), i.tn.patch({
        url: d.ANM.ME,
        oldFormErrors: !0,
        body: t
      })
    }, {
      checkEnabled: !1,
      modalProps: {
        title: E.Z.Messages.TWO_FA_CHANGE_ACCOUNT
      },
      hooks: {
        onEarlyClose: () => s.Z.dispatch({
          type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
          errors: {}
        })
      }
    }).then(e => {
      let t = e.body,
        n = t.token;
      return l.default.track(d.rMx.USER_AVATAR_UPDATED, {
        animated: (0, u.xR)(t.avatar)
      }), delete t.token, s.Z.dispatch({
        type: "UPDATE_TOKEN",
        token: n,
        userId: t.id
      }), s.Z.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: t
      }), null != h && s.Z.dispatch({
        type: "USER_PASSWORD_UPDATE",
        user: t,
        newPassword: h
      }), null != I && null != h && s.Z.dispatch({
        type: "PASSWORD_UPDATED",
        userId: t.id
      }), f ? this.close() : this.submitComplete(), e
    }, e => (s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
      errors: e.body
    }), e))
  }
}