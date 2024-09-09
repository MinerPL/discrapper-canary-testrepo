t.d(s, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(570140),
    l = t(2052),
    c = t(932724),
    d = t(716161),
    _ = t(672339),
    E = t(747545),
    u = t(131951),
    I = t(594174),
    T = t(981631),
    S = t(689938),
    N = t(133953);
let C = 387,
    m = 218;
function A(e) {
    let { previewEnabled: s, onEnablePreview: t } = e,
        A = u.Z.getCameraComponent(),
        [O, g] = a.useState((0, c.P)(I.default.getCurrentUser())),
        h = a.useRef(!1),
        p = a.useRef(O),
        R = (0, l.O)(),
        x = (0, i.e7)([u.Z], () => Object.values(u.Z.getVideoDevices()).length > 0);
    return (
        a.useEffect(
            () => () => {
                h.current && o.Z.wait(() => (0, d.Up)(p.current));
            },
            []
        ),
        (0, n.jsx)(E.Z, {
            selectedBackgroundOption: O,
            onSelectBackgroundOption: (e) => {
                (h.current = !0), (p.current = e), g(e), (0, _.wG)(e, { location: R.location }).catch(T.dG4);
            },
            renderCamera: (e) =>
                s
                    ? (0, n.jsx)('div', {
                          className: N.cameraWrapper,
                          children: (0, n.jsxs)('div', {
                              className: N.camera,
                              children: [
                                  (0, n.jsx)(A, {
                                      deviceId: e,
                                      width: C,
                                      height: m,
                                      disabled: !s
                                  }),
                                  (0, n.jsx)(E.S, {})
                              ]
                          })
                      })
                    : (0, n.jsxs)('div', {
                          className: N.cameraWrapper,
                          children: [
                              (0, n.jsx)('div', { className: N.previewImage }),
                              (0, n.jsx)(r.Tooltip, {
                                  text: x ? null : S.Z.Messages.CAMERA_UNAVAILABLE,
                                  children: (e) =>
                                      (0, n.jsx)(r.Button, {
                                          ...e,
                                          onClick: t,
                                          disabled: !x,
                                          children: S.Z.Messages.TEST_VIDEO
                                      })
                              })
                          ]
                      })
        })
    );
}
