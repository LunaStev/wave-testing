# Wave Testing

A website that shows the results of testing elements in the test/directory of the Wave repository.

---

## ![Latest version](https://img.shields.io/github/v/release/LunaStev/Wave?style=for-the-badge&include_prereleases)

---

## `test.wave` (❌)


```wave
fun main() {
    var a: i32 = 10;
    var b: f32 = 3.14;
    println("Hello World {}");
    if (a == 10) {
        println("fwf");
    } else if (a > 10) {
        println("fef");
    } else {
        println("ewe");
    }

    for (i :i32 = 0; i <= 10; i++) {
        var j :i32 = 0;
        while (j <= 10) {
            println("{}", j);
            j++;
        }
    }

}
```

```text
Error: Expected 1 arguments, found 0
❌ Failed to parse function

thread 'main' panicked at src/runner.rs:17:34:
Failed to parse Wave code
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test2.wave` (⭕)

```wave
fun main() {
    println("Hello World");
}
```

```text
Hello World
```

---

## `test3.wave` (❌)

```wave
import("iosys");

fun main() {
    var imm a :i32 = 10;
    var b :i32 = 5;
    println("Hello World");
}
```

```text
luna@DESKTOP-VSM7GMK:/mnt/d/Programming/Wave$ wavec run test/test3.wave
Expected ':' after identifier
❌ Failed to parse function

thread 'main' panicked at src/runner.rs:17:34:
Failed to parse Wave code
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test4.wave` (⭕)

```wave
fun main() {
    var a :i8 = 4;
    var b :i64 = 2341324;
    var c :i128 = 3;
    var d :i1024 = 2342342;
    println("a = {}", a);
    println("b = {}", b);
    println("c = {}", c);
    println("d = {}", d);
}
```

```text
a = 4
b = 2341324
c = 3
d = 2342342
```

