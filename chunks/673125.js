n(653041), n(47120);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(570140),
    c = n(633302),
    u = n(594174),
    d = n(176354),
    h = n(292793),
    m = n(88315),
    p = n(813900);
let _ = {},
    E = {},
    f = {},
    C = !0,
    g = null;
function I(e) {
    if (null == E[e]) {
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
        (i.src = n), (E[e] = i);
    }
}
class x extends (i = r.ZP.Store) {
    get visibleOverlayCanvas() {
        return C;
    }
    getDrawables(e) {
        return null != _[e] ? _[e] : [];
    }
    getAvatarImage(e) {
        return E[e];
    }
    getEmojiImage(e) {
        return f[e];
    }
    getDrawMode() {
        return g;
    }
}
(l = 'SharedCanvasStore'),
    (s = 'displayName') in (a = x)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l);
let T = new x(o.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: a } = e,
            s = _[a];
        if (null == s)
            _[a] = [
                {
                    type: h.W.LINE,
                    id: t,
                    userId: i,
                    points: n
                }
            ];
        else {
            let e = s.find((e) => e.id === t);
            null == e
                ? s.push({
                      type: h.W.LINE,
                      id: t,
                      userId: i,
                      points: n
                  })
                : (0, m.P7)(e) && e.points.push(...n);
        }
        I(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, i;
        let { emojiHose: a, streamerId: s, userId: l } = e,
            r = {
                ...a,
                type: h.W.EMOJI_HOSE
            };
        if (null == _[s]) _[s] = [r];
        else {
            let e = _[s].findIndex((e) => e.id === a.id);
            e >= 0
                ? (_[s][e] = {
                      ..._[s][e],
                      ...r
                  })
                : _[s].push(r);
        }
        let o = null !== (n = null !== (t = a.emojiId) && void 0 !== t ? t : a.emojiName) && void 0 !== n ? n : '';
        if (null == f[o]) {
            let e = null != a.emojiName ? c.ZP.convertNameToSurrogate(a.emojiName) : null;
            (f[o] = new Image()),
                (f[o].src = (0, d.qc)(
                    {
                        id: a.emojiId,
                        name: null !== (i = null != e ? e : a.emojiName) && void 0 !== i ? i : '',
                        animated: !1
                    },
                    p.qh
                ));
        }
        I(l);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != _[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (_[n] = _[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        g = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        C = !C;
    }
});
t.Z = T;
