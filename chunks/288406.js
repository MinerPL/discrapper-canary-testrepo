var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(481060), c = n(633302), d = n(334920), _ = n(768581), E = n(185923), f = n(212645);
let h = l().memoize(e => ''.concat(e * E.DC.NonDiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numNonDiversitySprites / E.DC.NonDiversityPerRow), 'px')), p = l().memoize(e => ''.concat(e * E.DC.DiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numDiversitySprites / E.DC.DiversityPerRow), 'px')), m = (e, t, r) => {
        let i, a, o;
        if (!e.useSpriteSheet)
            return;
        let s = null != e.index ? e.index : 0;
        e.hasDiversity ? (i = n(735800)('./spritesheet-'.concat(t, '-').concat(r, '.png')), a = p(r), o = E.DC.DiversityPerRow) : (i = n(604901)('./spritesheet-emoji-'.concat(r, '.png')), a = h(r), o = E.DC.NonDiversityPerRow);
        let l = -s % o * r, u = -Math.floor(s / o) * r;
        return {
            backgroundImage: 'url(\''.concat(i, '\')'),
            backgroundPosition: ''.concat(l, 'px ').concat(u, 'px'),
            backgroundSize: a,
            height: r,
            width: r
        };
    }, I = i.memo(function (e) {
        let {
                emoji: t,
                size: n,
                surrogateCodePoint: a,
                allowAnimatedEmoji: s,
                'aria-label': l,
                isLocked: c
            } = e, h = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let i = null == t.id ? t.url : _.ZP.getEmojiURL({
                        id: t.id,
                        animated: s && t.animated,
                        size: E.$U
                    });
                    return null != i ? (0, r.jsx)(d.Z, {
                        className: f.lockedEmoji,
                        'aria-label': l,
                        src: i,
                        size: n,
                        alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ''
                    }) : null;
                }
                return (0, r.jsx)('div', {
                    className: o()(f.emojiSpriteImage, { [f.lockedEmoji]: c }),
                    style: m(t, a, n),
                    children: (0, r.jsx)(u.HiddenVisually, { children: l })
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                h,
                c ? (0, r.jsx)('div', {
                    className: f.emojiLockIconContainer,
                    children: (0, r.jsx)(u.LockIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.emojiLockIcon
                    })
                }) : null
            ]
        });
    });
t.Z = I;
