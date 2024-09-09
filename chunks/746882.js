n.r(t),
    n.d(t, {
        default: function () {
            return C;
        }
    }),
    n(47120);
var a,
    r,
    o = n(735250),
    l = n(470079),
    s = n(512722),
    i = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    _ = n(481060),
    h = n(749210),
    E = n(600164),
    f = n(313201),
    A = n(592125),
    p = n(944486),
    m = n(594174),
    b = n(626135),
    v = n(63063),
    g = n(771308),
    T = n(758119),
    M = n(13430),
    x = n(723359),
    G = n(981631),
    y = n(689938),
    R = n(953847);
function C(e) {
    let { transitionState: t, source: a } = e,
        r = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        s = (0, d.e7)([p.Z, A.Z], () => A.Z.getChannel(p.Z.getChannelId())),
        [c, C] = l.useState(null),
        [N, O] = l.useState(null),
        [k, S] = l.useState(!1),
        [D, Z] = l.useState(0),
        I = l.createRef(),
        B = l.createRef(),
        j = (0, f.Dt)(),
        w = null != c ? u()().diff(c, 'years') : null;
    function F() {
        let e = null == s ? void 0 : s.getGuildId();
        h.Z.nsfwReturnToSafety(e), (0, T.qV)(a);
    }
    async function L() {
        i()(null != c, 'Cannot submit null birthday.');
        try {
            return O(null), S(!0), await (0, g.Av)(c, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, T.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? O(y.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : O(null == t ? void 0 : t.body.message), S(!1);
            }
        }
    }
    async function Y() {
        if ((i()(null != w, "Cannot submit if we haven't been able to calculate age."), w < 18)) {
            Z(1);
            return;
        }
        await L();
    }
    async function U(e) {
        e.preventDefault(), !k && null != c && (await Y());
    }
    async function P() {
        null == (await L()) && Z(0);
    }
    l.useEffect(() => {
        null != r && null != r.nsfwAllowed && (0, T.qq)(a);
    }),
        l.useEffect(() => {
            b.default.track(G.rMx.AGE_GATE_ACTION, {
                source: a,
                action: x.Al.AGE_GATE_OPEN
            });
        }, [a]);
    let H = l.useCallback(
            (e) => {
                C(e);
            },
            [C]
        ),
        z = l.useCallback(() => {
            var e;
            null === (e = B.current) || void 0 === e || e.focus();
        }, [B]);
    return 0 === D
        ? (function () {
              let e = (() => {
                      if (a === x.L0.FAMILY_CENTER) return y.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                      return y.Z.Messages.AGE_GATE_EXISTING_HEADER;
                  })(),
                  r = (() => {
                      switch (a) {
                          case x.L0.FAMILY_CENTER:
                              return y.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                          case x.L0.DEEP_LINK_PROMPT:
                              return y.Z.Messages.AGE_GATE_DEEP_LINK_BODY.format({ helpURL: v.Z.getArticleURL(G.BhN.AGE_GATE) });
                          default:
                              return y.Z.Messages.AGE_GATE_NSFW_BODY.format({ helpURL: v.Z.getArticleURL(G.BhN.AGE_GATE) });
                      }
                  })();
              return (0, o.jsxs)(_.ModalRoot, {
                  transitionState: t,
                  size: _.ModalSize.SMALL,
                  'aria-labelledby': j,
                  children: [
                      (0, o.jsxs)(_.ModalContent, {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: R.container,
                                  children: [
                                      (0, o.jsx)('img', {
                                          alt: '',
                                          src: n(462991),
                                          className: R.img
                                      }),
                                      (0, o.jsx)(_.Heading, {
                                          variant: 'heading-xl/semibold',
                                          className: R.title,
                                          id: j,
                                          children: e
                                      }),
                                      (0, o.jsx)(_.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: r
                                      })
                                  ]
                              }),
                              (0, o.jsx)('form', {
                                  onSubmit: U,
                                  children: (0, o.jsx)(M.Z, {
                                      label: y.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                      wrapperClassName: R.birthday,
                                      name: 'date_of_birth',
                                      onChange: H,
                                      onPopulated: z,
                                      error: N,
                                      value: c,
                                      ref: I,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, o.jsxs)(_.ModalFooter, {
                          justify: E.Z.Justify.BETWEEN,
                          children: [
                              (0, o.jsx)(_.Button, {
                                  buttonRef: B,
                                  submitting: k,
                                  disabled: null == c,
                                  size: _.ButtonSizes.SMALL,
                                  onClick: Y,
                                  children: y.Z.Messages.AGE_GATE_SUBMIT
                              }),
                              (0, o.jsx)(_.Button, {
                                  look: _.Button.Looks.LINK,
                                  size: _.Button.Sizes.NONE,
                                  color: _.Button.Colors.PRIMARY,
                                  onClick: F,
                                  children: y.Z.Messages.AGE_GATE_GO_BACK
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, o.jsxs)(_.ModalRoot, {
              transitionState: _.ModalTransitionState.ENTERED,
              size: _.ModalSize.SMALL,
              'aria-labelledby': j,
              children: [
                  (0, o.jsx)(_.ModalContent, {
                      children: (0, o.jsxs)('div', {
                          className: R.confirmContainer,
                          children: [
                              (0, o.jsx)(_.Heading, {
                                  variant: 'heading-xl/semibold',
                                  className: R.confirmTitle,
                                  id: j,
                                  children: y.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({ age: w })
                              }),
                              (0, o.jsx)(_.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: y.Z.Messages.AGE_GATE_NSFW_BODY.format({ helpURL: v.Z.getArticleURL(G.BhN.AGE_GATE) })
                              })
                          ]
                      })
                  }),
                  (0, o.jsxs)(_.ModalFooter, {
                      className: R.confirmFooter,
                      children: [
                          (0, o.jsx)(_.Button, {
                              look: _.Button.Looks.LINK,
                              size: _.Button.Sizes.NONE,
                              color: _.Button.Colors.PRIMARY,
                              onClick: () => Z(0),
                              children: y.Z.Messages.AGE_GATE_CONFIRM_GO_BACK
                          }),
                          (0, o.jsx)(_.Button, {
                              color: _.Button.Colors.BRAND,
                              onClick: P,
                              children: y.Z.Messages.AGE_GATE_CONFIRM_BUTTON
                          })
                      ]
                  })
              ]
          });
}
((r = a || (a = {}))[(r.AGE_GATE_FORM = 0)] = 'AGE_GATE_FORM'), (r[(r.CONFIRM = 1)] = 'CONFIRM');
