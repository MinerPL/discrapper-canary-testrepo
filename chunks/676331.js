var r = /;\n/,
    n = function (e) {
        for (var t = {}, n = e.split(r), i = 0; i < n.length; i++) {
            var o = (n[i] || '').trim();
            if (o) {
                var s = o.indexOf(':');
                if (-1 === s) continue;
                var a = o.substr(0, s).trim(),
                    u = o.substr(s + 1).trim();
                t[a] = u;
            }
        }
        return t;
    },
    i = function (e) {
        'string' == typeof e.style && (e.style = n(e.style));
    };
t.Z = function () {
    return { onProcessRule: i };
};
