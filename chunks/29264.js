t.d(n, {
    Z: function () {
        return T;
    }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(481060), r = t(668781), l = t(829883), o = t(976853), s = t(626135), u = t(358085), c = t(960048), d = t(591759), E = t(998502), f = t(36998), M = t(981631), I = t(689938);
let g = 'https://media.discordapp.net', m = /^.*\.discordapp\.net$/, _ = 'cdn.discordapp.com', Z = ''.concat(g, '/stickers'), S = new Set([
        'jpg',
        'jpeg',
        'png',
        'webp',
        'gif',
        'tiff',
        'bmp'
    ]), v = new Set([
        'jpg',
        'jpeg',
        'png'
    ]), A = e => {
        var n, t, i, a;
        return null === (a = d.Z.toURLSafe(e)) || void 0 === a ? void 0 : null === (i = a.pathname) || void 0 === i ? void 0 : null === (t = i.split('.')) || void 0 === t ? void 0 : null === (n = t.pop()) || void 0 === n ? void 0 : n.toLowerCase();
    };
function O(e, n) {
    r.Z.show({
        title: I.Z.Messages.ERROR,
        body: e
    }), c.Z.captureException(n);
}
function T(e, n, t) {
    if ((0, o.Z)(null == n ? void 0 : n.getChannelId()) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0 || !u.isPlatformEmbedded || null == e || !function (e) {
            let n = d.Z.toURLSafe(e);
            if (null == n)
                return !1;
            let t = A(e);
            return (m.test(n.hostname) || n.host === _) && !e.startsWith(Z) && !(0, l.zt)(e) && null != t && S.has(t);
        }(e))
        return null;
    let r = function (e) {
            let n = d.Z.toURLSafe(e);
            return null == n || n.host === _ ? e : n.origin === g ? (n.host = _, n.searchParams.delete('size'), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), n.toString()) : (n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.set('quality', 'lossless'), n.toString());
        }(e), c = async () => {
            try {
                await E.ZP.saveImage(r), s.default.track(M.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, f.v)() });
            } catch (e) {
                s.default.track(M.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, f.v)() }), O(I.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
        }, T = async () => {
            try {
                await E.ZP.copyImage(r), s.default.track(M.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, f.v)() });
            } catch (e) {
                O(I.Z.Messages.ERROR_COPYING_IMAGE, e), s.default.track(M.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, f.v)() });
            }
        };
    return [
        E.ZP.canCopyImage() && function (e) {
            let n = A(e);
            return null != n && v.has(n);
        }(e) ? (0, i.jsx)(a.MenuItem, {
            id: 'copy-image',
            label: I.Z.Messages.COPY_IMAGE_MENU_ITEM,
            action: T
        }, 'copy-image') : null,
        (0, i.jsx)(a.MenuItem, {
            id: 'save-image',
            label: I.Z.Messages.SAVE_IMAGE_MENU_ITEM,
            action: c
        }, 'save-image')
    ];
}
