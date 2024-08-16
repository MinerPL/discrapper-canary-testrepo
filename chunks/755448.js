e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, N, v, O, R;
    (n = e.state), (r = e.next_in), (O = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (R = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (_ = n.window), (E = n.hold), (f = n.bits), (h = n.lencode), (p = n.distcode), (m = (1 << n.lenbits) - 1), (I = (1 << n.distbits) - 1);
    n: do
        for (f < 15 && ((E += O[r++] << f), (f += 8), (E += O[r++] << f), (f += 8)), T = h[E & m]; ; ) {
            if (((E >>>= g = T >>> 24), (f -= g), 0 == (g = (T >>> 16) & 255))) R[a++] = 65535 & T;
            else if (16 & g)
                for (S = 65535 & T, (g &= 15) && (f < g && ((E += O[r++] << f), (f += 8)), (S += E & ((1 << g) - 1)), (E >>>= g), (f -= g)), f < 15 && ((E += O[r++] << f), (f += 8), (E += O[r++] << f), (f += 8)), T = p[E & I]; ; ) {
                    if (((E >>>= g = T >>> 24), (f -= g), 16 & (g = (T >>> 16) & 255))) {
                        if (((A = 65535 & T), f < (g &= 15) && ((E += O[r++] << f), (f += 8) < g && ((E += O[r++] << f), (f += 8))), (A += E & ((1 << g) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((E >>>= g), (f -= g), A > (g = a - s))) {
                            if ((g = A - g) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((N = 0), (v = _), 0 === d)) {
                                if (((N += u - g), g < S)) {
                                    S -= g;
                                    do R[a++] = _[N++];
                                    while (--g);
                                    (N = a - A), (v = R);
                                }
                            } else if (d < g) {
                                if (((N += u + d - g), (g -= d) < S)) {
                                    S -= g;
                                    do R[a++] = _[N++];
                                    while (--g);
                                    if (((N = 0), d < S)) {
                                        S -= g = d;
                                        do R[a++] = _[N++];
                                        while (--g);
                                        (N = a - A), (v = R);
                                    }
                                }
                            } else if (((N += d - g), g < S)) {
                                S -= g;
                                do R[a++] = _[N++];
                                while (--g);
                                (N = a - A), (v = R);
                            }
                            for (; S > 2; ) (R[a++] = v[N++]), (R[a++] = v[N++]), (R[a++] = v[N++]), (S -= 3);
                            S && ((R[a++] = v[N++]), S > 1 && (R[a++] = v[N++]));
                        } else {
                            N = a - A;
                            do (R[a++] = R[N++]), (R[a++] = R[N++]), (R[a++] = R[N++]), (S -= 3);
                            while (S > 2);
                            S && ((R[a++] = R[N++]), S > 1 && (R[a++] = R[N++]));
                        }
                    } else if ((64 & g) == 0) {
                        T = p[(65535 & T) + (E & ((1 << g) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (n.mode = 30);
                        break n;
                    }
                    break;
                }
            else if ((64 & g) == 0) {
                T = h[(65535 & T) + (E & ((1 << g) - 1))];
                continue;
            } else if (32 & g) {
                n.mode = 12;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (n.mode = 30);
                break n;
            }
            break;
        }
    while (r < i && a < o);
    (r -= S = f >> 3), (f -= S << 3), (E &= (1 << f) - 1), (e.next_in = r), (e.next_out = a), (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)), (e.avail_out = a < o ? 257 + (o - a) : 257 - (a - o)), (n.hold = E), (n.bits = f);
};
