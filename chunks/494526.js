"use strict";
n.d(t, {
  Z: function() {
    return P
  }
}), n(411104), n(47120);
var s, r, i, a, l = n(735250),
  o = n(470079),
  u = n(615231),
  c = n(261470),
  d = n(399606),
  h = n(544891),
  E = n(481060),
  _ = n(893776),
  m = n(99690),
  g = n(937154),
  f = n(710845),
  p = n(314897),
  I = n(277390),
  N = n(819570),
  A = n(585483),
  T = n(358085),
  R = n(172517),
  S = n(51144),
  C = n(998502),
  x = n(981631),
  O = n(231338),
  Z = n(689938),
  L = n(531690),
  M = n(611273);
(i = s || (s = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (a = r || (r = {}))[a.QR_CODE = 0] = "QR_CODE", a[a.CONFIRM = 1] = "CONFIRM";
let v = n(515695),
  D = new f.Z("LoginQRSocket");

function b(e) {
  let {
    text: t = ""
  } = e, [n, s] = o.useState(!1);
  return o.useEffect(() => {
    let e = new Image;
    e.src = v, e.onload = () => s(!0), e.onerror = () => s(!0)
  }, [v]), o.useEffect(() => {
    n && E.AccessibilityAnnouncer.announce(Z.Z.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
  }, [n]), (0, l.jsx)("div", {
    className: L.qrCodeContainer,
    children: "" !== t && n ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.ZP, {
        className: L.qrCode,
        size: 160,
        text: t
      }), (0, l.jsx)("div", {
        className: L.qrCodeOverlay,
        children: (0, l.jsx)("img", {
          src: v,
          alt: ""
        })
      })]
    }) : (0, l.jsx)("div", {
      className: L.qrCodeOverlay,
      "aria-label": Z.Z.Messages.LOGIN_WITH_QR_LOADING_LABEL,
      "aria-busy": !0,
      children: (0, l.jsx)(E.Spinner, {
        className: L.qrCode,
        type: E.Spinner.Type.WANDERING_CUBES,
        "aria-hidden": !0
      })
    })
  })
}
let y = e => {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)(E.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: t,
    children: n
  })
};

function j(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: s,
    hasPasswordlessExperiment: r,
    conditionalMediationAbortController: i,
    isPasswordlessActive: a
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(b, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, l.jsx)(N.Dx, {
          className: M.marginBottom8,
          children: Z.Z.Messages.LOGIN_WITH_QR
        }), null != s ? (0, l.jsx)(y, {
          children: s
        }) : (0, l.jsx)(N.DK, {
          children: Z.Z.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
        }), r && (0, l.jsx)(E.Button, {
          size: E.ButtonSizes.LARGE,
          look: E.ButtonLooks.LINK,
          color: E.ButtonColors.LINK,
          disabled: a,
          onClick: () => (function(e) {
            let t = T.isPlatformEmbedded && C.ZP.supportsFeature(x.eRX.WEBAUTHN) ? C.ZP.webAuthnAuthenticate : e => {
              let t = (0, u.wz)(JSON.parse(e));
              return (0, u.U2)(t).then(e => JSON.stringify(e))
            };
            _.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(i),
          children: Z.Z.Messages.SIGN_IN_WITH_PASSKEY
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m.Z, {
          className: L.qrAvatar,
          user: e,
          size: E.AvatarSizes.SIZE_120,
          isMobile: !0,
          status: O.Sk.ONLINE
        }), (0, l.jsx)(N.Dx, {
          className: M.marginBottom8,
          children: Z.Z.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
        }), (0, l.jsx)(N.DK, {
          children: Z.Z.Messages.LOGIN_AS.format({
            username: "".concat(S.ZP.getUserTag(e))
          })
        }), (0, l.jsx)(E.Button, {
          look: E.Button.Looks.BLANK,
          color: E.Button.Colors.LINK,
          size: E.Button.Sizes.MIN,
          onClick: n,
          className: L.startOverButton,
          children: Z.Z.Messages.QR_CODE_LOGIN_START_OVER
        })]
      })
    }
    case 4:
    case 5:
      return (0, l.jsx)(E.Spinner, {
        type: E.Spinner.Type.WANDERING_CUBES
      })
  }
}

function P(e) {
  let {
    authTokenCallback: t,
    hasPasswordlessExperiment: n,
    conditionalMediationAbortController: s
  } = e, r = (0, d.e7)([p.default], () => p.default.getIsPasswordlessActive()), {
    state: i,
    rsaKeyPair: a,
    cancel: u,
    handleFailure: _
  } = function(e) {
    let [t, n] = o.useState(0), [s, r] = o.useState(!1), [i, a] = o.useState({
      step: 0
    }), [l, u] = o.useState(null), d = (0, g.Z)(), h = o.useMemo(() => new c.Z(1500, 3e4), []), E = o.useRef();
    E.current = o.useCallback(() => {
      a({
        step: 0
      }), d ? n(e => e + 1) : (D.info("document is not visible, will defer reconnection when document becomes visible."), r(!0))
    }, [d]);
    let _ = o.useCallback(() => {
        (function(e) {
          let {
            current: t
          } = e;
          if (void 0 === t) throw Error("tried to unwrap an undefined value.");
          return t
        })(E)()
      }, [E]),
      m = o.useCallback(() => {
        D.error("Could not complete QR code login, trying to restart with a new QR code."), a({
          step: 0
        }), !h.pending && h.fail(_)
      }, [_, h]);
    return o.useEffect(() => {
      d && s && 0 === i.step && (D.info("reconnecting, now that document is visible"), r(!1), n(e => e + 1))
    }, [i, d, s, r]), o.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        r = new WebSocket(s);
      D.info("[0ms] connecting to ".concat(s));
      let i = e => D.info("[".concat(n(), "] ").concat(e)),
        l = null,
        o = null,
        c = null,
        d = null,
        E = !0;

      function g() {
        if (null != l) return l;
        throw Error("No key pair set")
      }
      let f = () => {
        E ? (E = !1, r.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), r.close(), m())
      };
      return r.onmessage = async t => {
        let {
          data: n
        } = t, s = JSON.parse(n);
        switch (s.op) {
          case "nonce_proof": {
            let e = s.encrypted_nonce,
              t = await (0, R.qd)(g(), e);
            i("computed nonce proof"), r.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), A.S.dispatch(x.CkL.WAVE_EMPHASIZE);
            let e = await (0, R.Pk)(g());
            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
            i("handshake complete awaiting remote auth."), a({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = s.ticket;
            null == e && m(), a({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = s.encrypted_user_payload;
            a({
              step: 3,
              user: await (0, R.Rq)(g(), e)
            });
            return
          }
          case "pending_finish": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = s.encrypted_user_payload;
            a({
              step: 2,
              user: await (0, R.Rq)(g(), e)
            });
            return
          }
          case "finish": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = s.encrypted_token;
            a({
              step: 5
            }), e(await (0, R.FW)(g(), t));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), _();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
            let e = s.heartbeat_interval;
            d = setTimeout(() => {
              d = null, f(), c = setInterval(f, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            E = !0
        }
      }, r.onopen = async () => {
        l = await (0, R.W_)(), o = await (0, R.dK)(l);
        let e = await (0, R.Pk)(l);
        i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
          op: "init",
          encoded_public_key: o
        })), u(l)
      }, r.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m()
      }, r.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), m()
      }, () => {
        i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), h.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c)
      }
    }, [_, e, t, h, m]), {
      state: i,
      rsaKeyPair: l,
      cancel: _,
      handleFailure: m
    }
  }(t), m = function(e) {
    switch (e) {
      case 0:
      case 1:
        return 0;
      case 3:
      case 2:
      case 4:
      case 5:
        return 1
    }
  }(i.step);
  return o.useEffect(() => {
    4 === i.step && null != i.ticket && h.tn.post({
      url: x.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: i.ticket
      },
      oldFormErrors: !0
    }).then(async e => {
      if (null != a) try {
        let n = await (0, R.FW)(a, e.body.encrypted_token);
        t(n)
      } catch (e) {
        _()
      } else _()
    }).catch(() => {
      _()
    })
  }, [i, t, a, _]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: L.verticalSeparator
    }), (0, l.jsx)(E.Sequencer, {
      fillParent: !0,
      className: L.qrLogin,
      step: m,
      steps: [0, 1],
      children: (0, l.jsx)("div", {
        className: L.qrLoginInner,
        children: (0, l.jsx)(j, {
          state: i,
          cancel: u,
          hasPasswordlessExperiment: n,
          conditionalMediationAbortController: s,
          isPasswordlessActive: r
        })
      })
    })]
  })
}