"use strict";
n.d(t, {
  Jh: function() {
    return C
  },
  Lk: function() {
    return p
  },
  Xg: function() {
    return g
  },
  ZP: function() {
    return O
  },
  c7: function() {
    return R
  },
  j3: function() {
    return L
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(593473);
if (12633 == n.j) var l = n(266067);
var u = n(729594),
  _ = n(466377),
  d = n(922770),
  c = n(993365),
  E = n(481060),
  I = n(252618),
  T = n(703656),
  h = n(769654),
  S = n(626135),
  f = n(787025),
  N = n(981631),
  A = n(689938),
  m = n(111947);

function O(e) {
  let {
    message: t,
    footer: n,
    headerClassName: r,
    showsCloseWindowText: s,
    spinner: a,
    onClose: l
  } = e;
  return (0, I.Tt)({
    location: A.Z.Messages.OAUTH2_TITLE
  }), (0, i.jsxs)(i.Fragment, {
    children: [null != l ? (0, i.jsx)(_.ol, {
      onClick: l,
      className: m.closeButton
    }) : null, (0, i.jsxs)("div", {
      className: m.wrapper,
      children: [a ? (0, i.jsx)(d.$, {}) : null, (0, i.jsx)("div", {
        className: o()(m.header, r)
      }), (0, i.jsx)(c.x, {
        variant: "text-md/normal",
        className: m.text,
        children: t
      }), null != n ? n : null, s ? (0, i.jsx)(c.x, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: m.cta,
        children: A.Z.Messages.OAUTH2_MESSAGE_CTA
      }) : null]
    })]
  })
}

function R(e) {
  return (0, i.jsx)(O, {
    ...e,
    headerClassName: m.headerSuccess
  })
}

function C(e) {
  let {
    guild: t,
    application: n,
    ...s
  } = e, {
    onClose: o
  } = s, a = A.Z.Messages.AUTHORIZED_SUCCESS, l = r.useCallback(() => {
    if ((null == t ? void 0 : t.id) != null)(0, h.X)(null == t ? void 0 : t.id), null == o || o(), S.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? void 0 : n.id,
      guild_id: null == t ? void 0 : t.id
    })
  }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), u = r.useCallback(() => {
    null == o || o(), S.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? void 0 : n.id
    })
  }, [o, null == n ? void 0 : n.id]), _ = r.useMemo(() => {
    if (null != n) return null != t ? A.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
      installedApplicationName: null == n ? void 0 : n.name,
      guildName: null == t ? void 0 : t.name
    }) : A.Z.Messages.AUTHORIZED_APP.format({
      installedApplicationName: null == n ? void 0 : n.name
    });
    return A.Z.Messages.AUTHORIZED_GENERIC
  }, [n, t]), d = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.x, {
      variant: "text-sm/normal",
      className: m.authorizedSuccessSubtext,
      children: _
    }), (null != t || null != o) && (0, i.jsxs)("div", {
      className: m.buttonsContainer,
      children: [null != t && (0, i.jsx)(E.Button, {
        fullWidth: !0,
        color: E.Button.Colors.BRAND,
        onClick: l,
        className: m.button,
        children: (null == t ? void 0 : t.name.length) > 30 ? A.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : A.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
          guildName: null == t ? void 0 : t.name
        })
      }), null != o && (0, i.jsx)(E.Button, {
        fullWidth: !0,
        color: E.Button.Colors.PRIMARY,
        onClick: u,
        className: m.button,
        children: A.Z.Messages.CLOSE
      })]
    })]
  });
  return r.useEffect(() => {
    S.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? void 0 : n.id
    })
  }, [null == n ? void 0 : n.id]), (0, i.jsx)("div", {
    className: m.authorizedSuccessWrapper,
    children: (0, i.jsx)(R, {
      message: a,
      footer: d,
      ...s
    })
  })
}

function p(e) {
  return (0, i.jsx)(O, {
    ...e,
    headerClassName: m.headerFailure
  })
}

function g() {
  var e, t;
  let n = (0, l.TH)();
  return (0, i.jsx)(f.G, {
    children: (0, i.jsx)(C, {
      guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
      application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
      showsCloseWindowText: !0
    })
  })
}

function L(e) {
  var t, n;
  let {
    location: s
  } = e;
  r.useEffect(() => {
    if (null == s) return;
    let e = null != document.referrer && "" !== document.referrer ? u.parse(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== N.Z5c.OAUTH2_AUTHORIZE) && (0, T.uL)(N.Z5c.INDEX)
  }, [s]);
  let o = null != s ? (0, a.parse)(s.search) : {},
    l = null !== (n = null !== (t = o.error_description) && void 0 !== t ? t : o.error) && void 0 !== n ? n : A.Z.Messages.OAUTH2_UNKNOWN_ERROR;
  return (0, i.jsx)(f.G, {
    children: (0, i.jsx)(p, {
      message: l,
      showsCloseWindowText: !0
    })
  })
}