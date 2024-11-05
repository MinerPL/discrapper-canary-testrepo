t(47120);
var r = t(200651),
    i = t(192379),
    l = t(481060),
    a = t(346610),
    o = t(868643),
    s = t(912332),
    u = t(378409),
    c = t(49012),
    d = t(358085),
    m = t(998502),
    h = t(212459),
    f = t(701865),
    p = t(388032),
    g = t(92718);
function _() {
    (0, l.closeModal)(f.U);
}
function x(e) {
    let { onClick: n, tooltipText: t, children: i, ...a } = e;
    return (0, r.jsx)(l.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(l.Button, {
                ...t,
                onClick: n,
                look: l.ButtonLooks.BLANK,
                size: l.ButtonSizes.ICON,
                color: l.ButtonColors.CUSTOM,
                className: g.actionButton,
                ...a,
                children: i
            });
        }
    });
}
function C() {
    let { zoomed: e, setZoomed: n } = (0, h.Y)();
    return (0, r.jsx)(x, {
        onClick: () => n(!e),
        tooltipText: e ? p.intl.string(p.t.vOFof3) : p.intl.string(p.t.Kt4gZ2),
        children: e ? (0, r.jsx)(l.MagnifyingGlassMinusIcon, {}) : (0, r.jsx)(l.MagnifyingGlassPlusIcon, {})
    });
}
function S(e) {
    var n, t;
    let { item: u } = e,
        c = null === (n = u.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = u.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        m = i.useCallback(() => {
            if (null != c && null != d) {
                if ('embed' === d.type) {
                    (0, s.l8)({
                        messageId: c.id,
                        channelId: c.channel_id,
                        message: c,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                        onRequestSent: _
                    });
                    return;
                }
                (0, s.l8)({
                    messageId: c.id,
                    channelId: c.channel_id,
                    message: c,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                    onRequestSent: _
                });
            }
        }, [c, d]),
        { canForwardMessages: h } = (0, a.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != c && h && (0, o.h)(c)
        ? (0, r.jsx)(x, {
              onClick: m,
              tooltipText: p.intl.string(p.t.I3ltXF),
              children: (0, r.jsx)(l.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function v(e) {
    let { item: n } = e;
    if (!('VIDEO' === n.type || (d.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, u.gS)(n.url)))) return null;
    let t = (0, u.s$)(n.url);
    async function i() {
        if (('VIDEO' === n.type && (0, c.q)({ href: t }), 'IMAGE' === n.type))
            try {
                await m.ZP.saveImage(t);
            } catch (e) {
                (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE));
            }
    }
    return (0, r.jsx)(x, {
        onClick: i,
        tooltipText: p.intl.string(p.t['1WjMbG']),
        children: (0, r.jsx)(l.DownloadIcon, {})
    });
}
function E(e) {
    var n;
    let { item: t } = e;
    if (!(0, u.Jj)(t.url)) return null;
    let i = (0, u.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, r.jsx)(x, {
        onClick: () => (0, c.q)({ href: i }),
        tooltipText: p.intl.string(p.t.wuRE8P),
        children: (0, r.jsx)(l.WindowLaunchIcon, {})
    });
}
function L(e) {
    let { item: n, canCopyImage: t, canCopyLink: i, onClose: a, onSelect: o } = e;
    async function s() {
        let e = (0, u.s$)(n.url);
        try {
            await m.ZP.copyImage(e), (0, l.showToast)((0, l.createToast)(p.intl.string(p.t['t5VZ8/']), l.ToastType.SUCCESS));
        } catch (e) {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE));
        }
    }
    return (0, r.jsx)(l.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: a,
        onSelect: o,
        children: (0, r.jsxs)(l.MenuGroup, {
            children: [
                t &&
                    (0, r.jsx)(
                        l.MenuItem,
                        {
                            label: p.intl.string(p.t.tvUqWl),
                            id: 'media-viewer-copy-image',
                            action: s
                        },
                        'media-viewer-copy-image'
                    ),
                i &&
                    (0, r.jsx)(
                        l.MenuItem,
                        {
                            id: 'media-viewer-copy-link',
                            label: p.intl.string(p.t.WqhZsr),
                            action: function () {
                                var e;
                                let t = (0, u.s$)(null !== (e = n.original) && void 0 !== e ? e : n.url);
                                try {
                                    d.isPlatformEmbedded ? m.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, l.showToast)((0, l.createToast)(p.intl.string(p.t['L/PwZW']), l.ToastType.SUCCESS));
                                } catch (e) {
                                    (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE));
                                }
                            }
                        },
                        'media-viewer-copy-link'
                    )
            ]
        })
    });
}
function y(e) {
    let { item: n } = e,
        [t, a] = i.useState(!1),
        o = 'IMAGE' === n.type && d.isPlatformEmbedded && null == n.children && m.ZP.canCopyImage() && (0, u.Lz)(n.url),
        s = (0, u.Jj)(n.url);
    return o || s
        ? (0, r.jsx)(l.Popout, {
              shouldShow: t,
              align: 'left',
              position: 'top',
              spacing: 18,
              renderPopout: () =>
                  (0, r.jsx)(L, {
                      item: n,
                      canCopyImage: o,
                      canCopyLink: s,
                      onClose: () => a(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(x, {
                      tooltipText: p.intl.string(p.t.UKOtz8),
                      onClick: () => a(!t),
                      children: (0, r.jsx)(l.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = i.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (0, r.jsxs)('div', {
        className: g.actionButtons,
        children: [
            (0, r.jsx)(C, {}),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(S, { item: n }), (0, r.jsx)(v, { item: n }), (0, r.jsx)(E, { item: n }), (0, r.jsx)(y, { item: n })]
                })
        ]
    });
});
