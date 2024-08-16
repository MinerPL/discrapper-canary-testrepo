var r = n(735250);
n(470079);
var i = n(366040),
    a = n(293335),
    s = n(360850);
t.Z = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: o, setPending: l } = (0, a.Z)(t.effects, n);
    return (0, i.nY)('Profile Effect - Web')
        ? (0, r.jsx)('div', {
              className: s.profileEffects,
              children: (0, r.jsx)('div', {
                  className: s.inner,
                  children: t.effects.map((e) =>
                      (0, r.jsx)(
                          'video',
                          {
                              muted: !0,
                              autoPlay: !0,
                              src: e.src,
                              'aria-hidden': !0,
                              style: {
                                  opacity: 0,
                                  position: 'absolute'
                              },
                              onLoadedData: () => {
                                  l(o.current - 1), (o.current = o.current - 1);
                              }
                          },
                          e.src
                      )
                  )
              })
          })
        : (0, r.jsx)('div', {
              className: s.profileEffects,
              children: (0, r.jsx)('div', {
                  className: s.inner,
                  children: t.effects.map((e) =>
                      (0, r.jsx)(
                          'img',
                          {
                              src: e.src,
                              alt: 'Preload Profile Effect Asset',
                              'aria-hidden': !0,
                              style: {
                                  opacity: 0,
                                  position: 'absolute'
                              },
                              onLoad: () => {
                                  l(o.current - 1), (o.current = o.current - 1);
                              }
                          },
                          e.src
                      )
                  )
              })
          });
};
