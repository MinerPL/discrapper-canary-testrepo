"use strict";
n(47120);
var i, r, s = n(544891),
  o = n(780384),
  a = n(570140),
  l = n(391650),
  u = n(877215),
  _ = n(895886),
  d = n(397550),
  c = n(594174),
  E = n(657682),
  I = n(51144),
  T = n(668781),
  h = n(239091),
  S = n(981631),
  f = n(689938);

function N(e) {
  (0, h.Zy)(), T.Z.show(e)
}

function A(e, t, n) {
  let {
    status: i,
    body: r
  } = e, s = r && r.code;
  switch (i) {
    case 429:
      0 === t && N({
        title: f.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
        body: f.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
        confirmText: f.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
      });
      break;
    case 403:
      if (s === S.evJ.EMAIL_VERIFICATION_REQUIRED) {
        N({
          title: f.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
          body: f.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
          confirmText: f.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
          onConfirm: () => {
            l.j()
          }
        });
        break
      }
    default:
      if (s === S.evJ.USER_QUARANTINED)(0, h.Zy)(), (0, _.default)();
      else if ((0, d.b)(i, s)) break;
      else if (0 === t) {
        let e = null != n ? (0, E.NF)(s || 0, n) : f.Z.Messages.POMELO_ADD_FRIEND_ERROR;
        N({
          title: f.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
          body: e,
          confirmText: f.Z.Messages.OKAY
        })
      }
  }
  throw e
}(r = i || (i = {}))[r.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", r[r.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
let m = {
  sendRequest(e) {
    let {
      discordTag: t,
      context: n,
      captchaPayload: i,
      errorUxConfig: r = 0
    } = e, [o, a] = t.split("#");
    return s.tn.post({
      url: S.ANM.USER_RELATIONSHIPS(),
      body: {
        username: o,
        discriminator: parseInt(a),
        ...i
      },
      context: n,
      oldFormErrors: !0
    }).catch(e => {
      A(e, r, t)
    })
  },
  addRelationship(e, t) {
    let {
      userId: n,
      context: i,
      type: r,
      friendToken: o,
      fromFriendSuggestion: a,
      captchaPayload: l
    } = e, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, _ = c.default.getUser(n);
    return s.tn.put({
      url: S.ANM.USER_RELATIONSHIP(n),
      body: {
        type: r,
        friend_token: o,
        from_friend_suggestion: a,
        ...l
      },
      context: i,
      oldFormErrors: !0
    }).then(() => {
      null == t || t()
    }).catch(e => {
      A(e, u, I.ZP.getUserTag(_))
    })
  },
  acceptFriendRequest: e => m.addRelationship(e, function() {
    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
  }),
  cancelFriendRequest: (e, t) => m.removeRelationship(e, t, function() {
    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
  }),
  removeFriend(e, t) {
    m.removeRelationship(e, t, function() {
      o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
    })
  },
  unblockUser(e, t) {
    m.removeRelationship(e, t, function() {
      o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
    })
  },
  removeRelationship: (e, t, n) => s.tn.del({
    url: S.ANM.USER_RELATIONSHIP(e),
    context: t,
    oldFormErrors: !0
  }).then(() => {
    null == n || n()
  }).catch(() => {
    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
  }),
  updateRelationship: (e, t) => s.tn.patch({
    url: S.ANM.USER_RELATIONSHIP(e),
    body: {
      nickname: t
    }
  }),
  fetchRelationships() {
    s.tn.get({
      url: S.ANM.USER_RELATIONSHIPS(),
      oldFormErrors: !0
    }).then(e => a.Z.dispatch({
      type: "LOAD_RELATIONSHIPS_SUCCESS",
      relationships: e.body
    }), () => a.Z.dispatch({
      type: "LOAD_RELATIONSHIPS_FAILURE"
    }))
  },
  confirmClearPendingRelationships(e) {
    (0, u.Z)(e)
  },
  clearPendingRelationships: () => s.tn.del({
    url: S.ANM.USER_RELATIONSHIPS(),
    query: {
      relationship_type: S.OGo.PENDING_INCOMING
    }
  }).then(() => {
    a.Z.dispatch({
      type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
    })
  }).catch(() => {
    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
  })
};
t.Z = m