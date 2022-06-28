function trapezoidal(n, a, b) {
    let h = (b - a) / n;
    let s = f(a) + f(b);
    let x = a + h;
    let i;
    for (i = 1; i < n; i++) {
        s += 2 * f(x);
        x += h;
    }
    return s * h / 2;
}
let f = x => ... /* Inserisci la funzione 'f' della quale vuoi calcolare l'integrale definito nell'intervallo specificato con gli argomenti 'a' e 'b' della funzione 'trapezoidal' */