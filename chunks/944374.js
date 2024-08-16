let r = n(689118),
    i = n(988324).Buffer,
    a = n(1199);
function s(e) {
    a.call(this, e), (this.enc = 'pem');
}
r(s, a),
    (e.exports = s),
    (s.prototype.decode = function (e, t) {
        let n = e.toString().split(/[\r\n]+/g),
            r = t.label.toUpperCase(),
            s = /^-----(BEGIN|END) ([^-]+)-----$/,
            o = -1,
            l = -1;
        for (let e = 0; e < n.length; e++) {
            let t = n[e].match(s);
            if (null !== t) {
                if (t[2] === r) {
                    if (-1 === o) {
                        if ('BEGIN' !== t[1]) break;
                        o = e;
                    } else {
                        if ('END' !== t[1]) break;
                        l = e;
                        break;
                    }
                }
            }
        }
        if (-1 === o || -1 === l) throw Error('PEM section not found for: ' + r);
        let u = n.slice(o + 1, l).join('');
        u.replace(/[^a-z0-9+/=]+/gi, '');
        let c = i.from(u, 'base64');
        return a.prototype.decode.call(this, c, t);
    });
