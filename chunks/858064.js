n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var l = n(442837),
    r = n(481060),
    a = n(230711),
    s = n(314897),
    o = n(626135),
    c = n(730417),
    u = n(524347),
    d = n(288836),
    h = n(981631),
    p = n(689938),
    _ = n(745438);
let f = (e, t, n) => {
    let i = t.assets.tooltipSrc;
    switch (e) {
        case d._e.STREAM_CTA:
            return {
                header: p.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({ gameName: t.title }),
                body: t.messages.enrollmentTooltip(n),
                imgSrc: i,
                imgStyle: _.dropImgPreStreamNotice
            };
        case d._e.TRACK_PROGRESS:
            return {
                header: p.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({ gameName: t.title }),
                body: '',
                imgSrc: i,
                imgStyle: _.dropImgProgressTracker
            };
        case d._e.QUEST_COMPLETION:
            return {
                header: p.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER,
                body: t.messages.completionTooltip(n),
                imgSrc: i,
                imgStyle: _.dropImgQuestCompletion
            };
        case d._e.LOADING_INITIAL_PROGRESS:
            return {
                header: '',
                body: '',
                imgSrc: i,
                imgStyle: _.dropImgPreStreamNotice
            };
    }
};
function g(e) {
    let { streamLengthRequirement: t, viewerCountRequirement: n } = e,
        a = (0, l.e7)([u.Z], () => u.Z.currentDropQuestStreamProgress),
        s = Math.floor((a / 100) * t).toString();
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/bold',
                className: _.progressBarCount,
                children: p.Z.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
                    minutesStreamed: s,
                    streamLengthRequirement: t
                })
            }),
            (0, i.jsx)('div', {
                className: _.progressBarContainer,
                children: (0, i.jsx)('div', {
                    className: _.progressBarOuter,
                    children: (0, i.jsx)('div', {
                        className: _.progressBarInner,
                        style: { width: ''.concat(a, '%') }
                    })
                })
            }),
            (0, i.jsxs)(r.Text, {
                variant: 'text-xs/medium',
                className: _.viewerCount,
                children: ['*', p.Z.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({ numViewers: n }), '*']
            })
        ]
    });
}
function m(e) {
    let { onClose: t, tooltipAction: n, partnerGame: u } = e,
        m = (0, c.au)(u);
    (0, c.op)(u);
    let C = (0, l.e7)([s.default], () => s.default.getId());
    if (null == m) return null;
    let { streamLengthRequirement: I, viewerCountRequirement: E } = m.config,
        N = m.drop,
        { header: x, body: S, imgSrc: v, imgStyle: Z } = f(n, N, I),
        T = () => {
            o.default.track(h.rMx.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
                user_id: C,
                drops_quest_id: N.dropsQuestId,
                game_id: N.dropsGameId,
                game_name: N.title.toLowerCase(),
                tooltip_action: n
            });
        },
        L = () => {
            t();
        };
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('img', {
                src: v,
                alt: '',
                className: Z
            }),
            (0, i.jsx)(r.Clickable, {
                className: _.__invalid_buttonClose,
                'aria-label': p.Z.Messages.CLOSE,
                onClick: L,
                children: (0, i.jsx)(r.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.closeIcon
                })
            }),
            n === d._e.LOADING_INITIAL_PROGRESS
                ? (0, i.jsx)(r.Spinner, { className: _.spinner })
                : (0, i.jsx)(r.Heading, {
                      className: _.title,
                      variant: 'heading-md/extrabold',
                      children: x
                  }),
            n === d._e.TRACK_PROGRESS
                ? (0, i.jsx)(g, {
                      streamLengthRequirement: I,
                      viewerCountRequirement: E
                  })
                : (0, i.jsx)(r.Text, {
                      variant: 'text-sm/medium',
                      className: _.subTitle,
                      children: S
                  }),
            n === d._e.QUEST_COMPLETION
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.Button, {
                              color: r.Button.Colors.BRAND_INVERTED,
                              fullWidth: !0,
                              onClick: () => {
                                  t(), a.Z.open(h.oAB.INVENTORY), T();
                              },
                              children: p.Z.Messages.REDEEM
                          }),
                          (0, i.jsx)(r.Button, {
                              className: _.linkButtonContainer,
                              innerClassName: _.linkButton,
                              onClick: L,
                              look: r.Button.Looks.LINK,
                              fullWidth: !0,
                              color: r.Button.Colors.WHITE,
                              children: p.Z.Messages.NOT_NOW
                          })
                      ]
                  })
                : (0, i.jsx)(r.Button, {
                      color: r.Button.Colors.BRAND_INVERTED,
                      fullWidth: !0,
                      onClick: () => {
                          t(), a.Z.open(h.oAB.INVENTORY), T();
                      },
                      children: p.Z.Messages.LEARN_MORE
                  }),
            (0, i.jsx)('div', { className: _.pointer })
        ]
    });
}
