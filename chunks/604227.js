t.d(s, {
    Z: function () {
        return u;
    }
}),
    t(47120),
    t(757143),
    t(653041);
var n = t(735250);
t(470079);
var a = t(525654),
    i = t.n(a),
    r = t(481060),
    o = t(579806),
    l = t(304761),
    c = t(320161),
    d = t(689938),
    _ = t(844185);
function u() {
    var e, s, t, a, u, E;
    let T = window.GLOBAL_ENV.RELEASE_CHANNEL,
        S = '325594',
        I = ((e = '8e2642069b896f17ea53c450878b354f838fc011'), e.substring(0, 7)),
        N = null === o.Z || void 0 === o.Z ? void 0 : o.Z.remoteApp.getVersion(),
        m = null === o.Z || void 0 === o.Z ? void 0 : null === (s = (t = o.Z.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(t),
        C = null === o.Z || void 0 === o.Z ? void 0 : null === (a = (u = o.Z.remoteApp).getAppArch) || void 0 === a ? void 0 : a.call(u),
        A = null === (E = l.C.getCurrentBuildOverride().overrides) || void 0 === E ? void 0 : E.discord_web,
        g = (function () {
            var e;
            let s = null === i() || void 0 === i() ? void 0 : null === (e = i().os) || void 0 === e ? void 0 : e.toString();
            if (null == s || null == o.Z) return null;
            let t = o.Z.os.release,
                [n, a, r] = t.split('.').map((e) => parseInt(e, 10));
            return s.includes('Windows 10') && void 0 !== r && r >= 22000 && (s = s.replace('Windows 10', 'Windows 11')), s.includes('OS X 10.15.7') && void 0 !== n && n >= 20 && (s = 'macOS '.concat(n - 9)), ''.concat(s, ' (').concat(t, ')');
        })(),
        h = [T, S, '('.concat(I, ')')];
    return (
        null != N && (h.push('Host '.concat(N)), null != C && h.push(C.toLowerCase()), null != m && h.push('('.concat(m, ')'))),
        h.push('Build Override: '.concat(null != A ? A.id : 'N/A')),
        null != g && h.push(g),
        (0, n.jsx)(c.Z, {
            copyValue: h.join(' '),
            text: d.Z.Messages.COPY_VERSION,
            'aria-label': !1,
            children: (e) =>
                (0, n.jsx)(r.Clickable, {
                    ...e,
                    'aria-label': d.Z.Messages.COPY_VERSION,
                    className: _.clickable,
                    children: (0, n.jsxs)('div', {
                        className: _.info,
                        children: [
                            (0, n.jsxs)(r.Text, {
                                tag: 'span',
                                className: _.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    T,
                                    ' ',
                                    S,
                                    ' ',
                                    (0, n.jsxs)('span', {
                                        className: _.versionHash,
                                        children: ['(', I, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != N
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsxs)(r.Text, {
                                              tag: 'span',
                                              className: _.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  N,
                                                  ' ',
                                                  null != C
                                                      ? (0, n.jsxs)('span', {
                                                            className: _.appArch,
                                                            children: [C.toLowerCase(), ' ']
                                                        })
                                                      : null,
                                                  null != m
                                                      ? (0, n.jsxs)('span', {
                                                            children: ['(', m, ')']
                                                        })
                                                      : null
                                              ]
                                          }),
                                          ' '
                                      ]
                                  })
                                : null,
                            null != g
                                ? (0, n.jsx)(r.Text, {
                                      tag: 'span',
                                      className: _.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: g
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
