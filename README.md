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

## `test2.wave` (✔)

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

## `test4.wave` (✔)

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

---

## `test5.wave` (❌)

```wave
fun main() {
    var a: i32 = 10;
    if (a == 10) {
        println("fwf");
    } else if (a > 10) {
        println("fef");
    } else {
        println("ewe");
    }
}
```

```text
clang failed: target/temp.ll:13:30: error: expected value token
  %cmptmp = icmp eq i32 %a1, i64 10
                             ^
1 error generated.

Failed to generate machine code
```

---

## `test6.wave` (❌)

```wave
fun main() {
    var a :i8 = 4;
    var b :i64 = 2341324;
    var c :i128 = 3;
    var d :i1024 = 2342342;
    println("a = {}", a + a);
    println("b = {}", b + b);
    println("c = {}", c + c);
    println("d = {}", d + d);
}
```

```text
a = 8
b = 4682648
c = 6
d = 4684684
```

---

## `test7.wave` (✔)

```wave
fun main() {
    var a :i32 = 20;
    var b :i32 = 20;

    if (a > 30) {
        println("a is greater than 30");
    } else {
        println("a is less than or equal to 30");
    }

    if (b < a) {
        println("b is less than a");
    } else if (b == a) {
        println("b is equal to a");
    } else {
        println("b is greater than a");
    }

}
```

```text
clang failed: target/temp.ll:17:31: error: expected value token
  %cmptmp = icmp sgt i32 %a1, i64 30
                              ^
1 error generated.

Failed to generate machine code
```

---

## `test7.wave` (❌)

```wave
fun main() {
    var a :i32 = 20;
    var b :i32 = 20;

    if (a > 30) {
        println("a is greater than 30");
    } else {
        println("a is less than or equal to 30");
    }

    if (b < a) {
        println("b is less than a");
    } else if (b == a) {
        println("b is equal to a");
    } else {
        println("b is greater than a");
    }

}
```

```text
clang failed: target/temp.ll:17:31: error: expected value token
  %cmptmp = icmp sgt i32 %a1, i64 30
                              ^
1 error generated.

Failed to generate machine code
```

---

## `test8.wave` (❌)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 50;

    if (a > 30) {
        println("a is greater than 30");
    } else {
        println("a is less than or equal to 30");
    }

    if (b > 30) {
        println("b is greater than 30");
    } else {
        println("b is less than or equal to 30");
    }
}
```

```text
clang failed: target/temp.ll:16:31: error: expected value token
  %cmptmp = icmp sgt i32 %a1, i64 30
                              ^
1 error generated.

Failed to generate machine code
```

---

## `test9.wave` (✔)

```wave
fun main() {
    var a: i32 = 35;
    var b: i32 = 15;
    var c: i32 = 5;

    if (a == b) {
        println("a == b");
    } else {
        println("a != b");
    }

    if (a > b) {
        println("a > b");
    } else {
        println("a <= b");
    }

    if (a < b) {
        println("a < b");
    } else {
        println("a >= b");
    }

    if (a == c) {
        println("a == c");
    } else {
        println("a != c");
    }

    if (a > c) {
        println("a > c");
    } else {
        println("a <= c");
    }

    if (a < c) {
        println("a < c");
    } else {
        println("a >= c");
    }

    if (b == c) {
        println("b == c");
    } else {
        println("b != c");
    }

    if (b > c) {
        println("b > c");
    } else {
        println("b <= c");
    }

    if (b < c) {
        println("b < c");
    } else {
        println("b >= c");
    }

    if (a == a) {
        println("a == a");
    } else {
        println("a != a");
    }

    if (b == b) {
        println("b == b");
    } else {
        println("b != b");
    }

    if (c == c) {
        println("c == c");
    } else {
        println("c != c");
    }
}
```

```text
a != b
a > b
a >= b
a != c
a > c
a >= c
b != c
b > c
b >= c
a == a
b == b
c == c
```

---

## `test10.wave` (✔)

```wave
fun main() {
    var a: i32 = 15;
    var b: i32 = 40;
    var c: i32 = 30;

    if (a <= b) {
        if (b <= c) {
            println("{}", a);
            println("{}", b);
            println("{}", c);
        } else {
            if (a <= c) {
                println("{}", a);
                println("{}", c);
                println("{}", b);
            } else {
                println("{}", c);
                println("{}", a);
                println("{}", b);
            }
        }
    } else {
        if (a <= c) {
            println("{}", b);
            println("{}", a);
            println("{}", c);
        } else {
            if (b <= c) {
                println("{}", b);
                println("{}", c);
                println("{}", a);
            } else {
                println("{}", c);
                println("{}", b);
                println("{}", a);
            }
        }
    }
}
```

```text
15
30
40
```

---

## `test11.wave` (❌)

```wave
fun main() {
    var i: i32 = 1;

    while (i <= 5) {
        var j: i32 = 1;

        while (j <= i) {
            print("*");
            j = j + 1;
        }

        println(" ");
        i = i + 1;
    }
}
```

```text
clang failed: target/temp.ll:15:31: error: expected value token
  %cmptmp = icmp sle i32 %i1, i64 5
                              ^
1 error generated.

Failed to generate machine code
```

---

## `test12.wave` (✔)

```wave
fun main(q :i32 = 0; w :i32 = 10;) {
    var a :str = "World";
    var b :i32 = 2;
    var c :i32 = 3;
    println("Hello {} {} {}", a, q, w);
}
```

```text
Hello World 0 10
```

---

## `test13.wave` (❌)

```wave
fun main() {
    var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
    println("First = {}", numbers[0]);
}
```

```text
clang failed: warning: overriding the module target triple with x86_64-pc-linux-gnu [-Woverride-module]
1 warning generated.
/usr/bin/ld: /tmp/temp-280703.o: in function `main':
main:(.text+0x4b): undefined reference to `trap'
/usr/bin/ld: main:(.text+0x67): undefined reference to `trap'
clang: error: linker command failed with exit code 1 (use -v to see invocation)

Failed to generate machine code
```

---

## `test14.wave` (❌)

```wave
fun hello(name :i32; namea :i32; nameb :str;) {
    if (name > 10) {
        println("name is greater than 10");
    } else {
        println("name is 10 or less");
    }

    var counter: i32 = 0;

    while (counter < name) {
        println("Current: {}", counter);
        counter = counter + 1;
    }

    println("Hello {}", name);
    println("Hello {}", namea);
    println("Hello {}", nameb);
}

fun main() {
    hello(5, 2, "World");
}
```

```text
clang failed: target/temp.ll:21:34: error: expected value token
  %cmptmp = icmp sgt i32 %name1, i64 10
                                 ^
1 error generated.

Failed to generate machine code
```

---

## `test15.wave` (❌)

```wave
fun add(a :i32; b :i32;) -> i32 {
    return a + b;
}

fun main() {
    println("{}", add(4, 5));
}
```

```text
clang failed: target/temp.ll:20:23: error: '@add' defined with type 'i32 (i32, i32)*' but expected 'i32 (i64, i64)*'
  %calltmp = call i32 @add(i64 4, i64 5)
                      ^
1 error generated.

Failed to generate machine code
```

---

## `test16.wave` (❌)

```wave
fun main() {
    var i: i32 = 0;

    while (i < 5) {
        i = i + 1;
        if (i == 3) {
            continue;
        }
        println("Value: {}", i);
    }
}
```

```text
clang failed: target/temp.ll:14:31: error: expected value token
  %cmptmp = icmp slt i32 %i1, i64 5
                              ^
1 error generated.

Failed to generate machine code
```

---

## `test17.wave` (❌)

```wave
fun add(a: i32; b: i32) -> i32 {
    return a + b;
}

fun complex(x: i32; y: i32; msg: str; sum: i32) {
    println("START COMPLEX FUNCTION");

    if (x > y) {
        println("{} is greater than {}", x, y);
        var cnt: i32 = 0;
        while (cnt < x) {
            if (cnt == 2) {
                cnt = cnt + 1;
                continue;
            }
            println("Loop1 cnt: {}", cnt);
            cnt = cnt + 1;
        }
    } else {
        println("{} is less than or equal to {}", x, y);
    }

    var i: i32 = 1;
    while (i <= 5) {
        var j: i32 = 1;
        while (j <= i) {
            print("*");
            j = j + 1;
        }
        println(" ");
        i = i + 1;
    }

    println("Sum from main: {}", sum);
    println("Message: {}", msg);
    println("END COMPLEX FUNCTION");
}

fun main() {
    var a: i32 = 5;
    var b: i32 = 10;

    var small: i32 = 3;
    var big: i32 = 100000;
    var huge: i32 = 5000;
    var insane: i32 = 999999;

    println("Types: {} {} {} {}", small, big, huge, insane);

    if (a == b) {
        println("{} == {}", a, b);
    } else if (a > b) {
        println("{} > {}", a, b);
    } else {
        println("{} < {}", a, b);
    }

    if (a <= b) {
        if (b <= 30) {
            println("{} <= 30", b);
        } else {
            println("{} > 30", b);
        }
    }

    var result :i32;
    result = add(a, b);

    println("add({}, {}) = {}", a, b, result);

    complex(a, b, "Hello From Wave!", result);

    println("END MAIN FUNCTION");
}
```

```text
clang failed: target/temp.ll:83:35: error: expected value token
  %cmptmp12 = icmp eq i32 %cnt11, i64 2
                                  ^
1 error generated.

Failed to generate machine code
```

---

## `test18.wave` (❌)

```wave
fun add(a :i32; b :i32;) -> i32 {
    return a + b;
}

fun main() {
    var result: i32;
    result = add(4, 5);
    println("{}", result);
}
```

```text
clang failed: target/temp.ll:21:23: error: '@add' defined with type 'i32 (i32, i32)*' but expected 'i32 (i64, i64)*'
  %calltmp = call i32 @add(i64 4, i64 5)
                      ^
1 error generated.

Failed to generate machine code
```

---

## `test19.wave` (✔)

```wave
fun add(a :i32; b :i32;) -> i32 {
    return a + b;
}

fun main() {
    var a :i32 = 1;
    var b :i32 = 2;
    var result: i32;
    result = add(a, b);
    println("{}", result);
}
```

```text
3
```

---

## `test19.wave` (✔)

```wave
fun add(a :i32; b :i32;) -> i32 {
    return a + b;
}

fun main() {
    var a :i32 = 1;
    var b :i32 = 2;
    var result: i32;
    result = add(a, b);
    println("{}", result);
}
```

```text
3
```

---

## `test20.wave` (❌)

```wave
fun fibonacci(n: i32) -> i32 {
    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    var prev :i32 = 0;
    var curr :i32 = 1;
    var next :i32;
    var i :i32 = 2;

    while (i <= n) {
        next = prev + curr;
        prev = curr;
        curr = next;
        i = i + 1;
    }

    return curr;
}

fun main() {
    var i :i32 = 0;
    var result :i32;

    while (i <= 10) {
        result = fibonacci(i);
        println("fibonacci({}) = {}", i, result);
        i = i + 1;
    }

    println("END FIBONACCI");
}
```

```text
clang failed: target/temp.ll:12:30: error: expected value token
  %cmptmp = icmp eq i32 %n1, i64 0
                             ^
1 error generated.

Failed to generate machine code
```

---

## `test21.wave` (❌)

```wave
import("iosys");

fun main() {
    println("{}", ((0b110111010) & 0x1FF));
}
```

```text
Error: Expected ')'
Error: Failed to parse expression in 'println'
❌ Failed to parse function

thread 'main' panicked at src/runner.rs:17:34:
Failed to parse Wave code
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test22.wave` (❌)

```wave
import("iosys");

fun hello() {
    var a: i32 = 0;
    println("hello world");
}

fun main() {
    var i: i32 = 1;
    var j: i32 = 1;
    var num: i32;

    var n: i32 = 3;

    if (n > 5) {
        println("5보다 큽니다.");
    } else {
        println("5보다 작습니다.");
    }

    input("{}", num);

    while (i <= num) {
        j = num;
        while (j >= i) {
            println("*");
            j--;
        }
        println("\n");
        i++;
    }

    hello();
}
```

```text
❌ Failed to parse function

thread 'main' panicked at src/runner.rs:17:34:
Failed to parse Wave code
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test23.wave` (✔)

```wave
fun main() {
    var x: i32 = 10;
    var p: ptr<i32> = &x;

    println("x = {}", x);
    println("p = {}", deref p);
    println("address = {}", p);
}
```

```text
x = 10
p = 10
address = 140726848956164
```

---

## `test24.wave` (✔)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 20;

    var p1: ptr<i32> = &a;
    var p2: ptr<i32> = &b;

    println("Before:");
    println("a = {}, b = {}", a, b);
    println("p1 = {}, p2 = {}", deref p1, deref p2);

    var temp: i32 = deref p1;
    deref p1 = deref p2;
    deref p2 = temp;

    println("After:");
    println("a = {}, b = {}", a, b);
    println("p1 = {}, p2 = {}", deref p1, deref p2);
}
```

```text
Before:
a = 10, b = 20
p1 = 10, p2 = 20
After:
a = 20, b = 10
p1 = 20, p2 = 10
```

---

## `test25.wave` (✔)

```wave
fun make_http_get(host: str; path: str) {
    println("GET {} HTTP/1.0", path);
    println("Host: {}", host);
    println("User-Agent: WaveLang/0.0.1");
    println(" ");
}

fun main() {
    make_http_get("example.com", "/index.html");
}
```

```text
GET /index.html HTTP/1.0
Host: example.com
User-Agent: WaveLang/0.0.1
```

---

## `test26.wave` (✔)

```wave
fun main(q :i32 = 0; w :i32 = 10;) {
    var a :str = "World";
    let b :i32 = 2;
    let mut c :i32 = 3;
    println("Hello {} {} {} {} {}", a, b, c, q, w);
}
```

```text
Hello World 2 3 0 10
```

---

## `test27.wave` (✔)

```wave
fun main(name: str = "World") {
    println("Hello {}", name);
}
```

```text
Hello World
```

---

## `test28.wave` (❌)

### `math.wave`

```wave
fun add(a: i32; b: i32) -> i32 {
    return a + b;
}

fun sub(a: i32; b: i32) -> i32 {
    return a - b;
}

fun mul(a: i32; b: i32) -> i32 {
    return a * b;
}

fun div(a: i32; b: i32) -> i32 {
    return a / b;
}
```

### `main.wave`

```wave
import("math");

fun main() {
    println("2 + 3 = {}", add(2, 3));
    println("2 - 3 = {}", sub(2, 3));
    println("2 * 3 = {}", mul(2, 3));
    println("2 / 3 = {}", div(2, 3));
}
```

```text
luna@DESKTOP-VSM7GMK:/mnt/d/Programming/Wave$ wavec run test/test28/main.wave 
clang failed: target/temp.ll:59:23: error: '@add' defined with type 'i32 (i32, i32)*' but expected 'i32 (i64, i64)*'
  %calltmp = call i32 @add(i64 2, i64 3)
                      ^
1 error generated.

Failed to generate machine code
```

---

## `test29.wave` (✔)

```wave
fun main() {
    println("안녕, 세상!");
}
```

```text
안녕, 세상!
```

---

## `test30.wave` (✔)

```wave
fun main() {
    var msg_ptr: ptr<i8> = "Hello from syscall!\n";

    var ret: i64;
    asm {
        "syscall"
        in("rax") 1       // write
        in("rdi") 1       // stdout
        in("rsi") msg_ptr // message address
        in("rdx") 20      // message length
        out("rax") ret
    }
}
```

```text
Hello from syscall!\
```

---

## `test31.wave` (✔)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 20;

    var p1: ptr<i32> = &a;
    var p2: ptr<i32> = &b;
    var pp1: ptr<ptr<i32>> = &p1;
    var pp2: ptr<ptr<i32>> = &p2;

    println("a = {}, b = {}", a, b);
    println("p1 = {}, p2 = {}", p1, p2);
    println("pp1 = {}, pp2 = {}", pp1, pp2);
    println("deref p1 = {}, deref p2 = {}", deref p1, deref p2);
}

```

```text
a = 10, b = 20
p1 = 140730730152852, p2 = 140730730152848
pp1 = 140730730152840, pp2 = 140730730152832
deref p1 = 10, deref p2 = 20
```

---

## `test32.wave` (❌)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 20;

    var arr: array<ptr<i32>, 2> = [&a, &b];
    var c: ptr<i32> = arr[0];

    println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]);
    println("{}", c);
}
```

```text
clang failed: target/temp.ll:17:9: error: stored value and pointer type do not match
  store i32** %tmp_var_ptr, i32** %array_idx_0, align 8
        ^
1 error generated.

Failed to generate machine code
```

---

## `test33.wave` (✔)

```wave
fun main() {
    var x: i32 = 1;
    var p1: ptr<i32> = &x;
    var p2: ptr<ptr<i32>> = &p1;
    var p3: ptr<ptr<ptr<i32>>> = &p2;
    var p4: ptr<ptr<ptr<ptr<i32>>>> = &p3;
    var p5: ptr<ptr<ptr<ptr<ptr<i32>>>>> = &p4;
    var p6: ptr<ptr<ptr<ptr<ptr<ptr<i32>>>>>> = &p5;
    var p7: ptr<ptr<ptr<ptr<ptr<ptr<ptr<i32>>>>>>> = &p6;
    var p8: ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<i32>>>>>>>> = &p7;
    var p9: ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<i32>>>>>>>>> = &p8;
    var p10: ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<ptr<i32>>>>>>>>>> = &p9;



    println("{}", deref p1);
    println("{}", deref deref p2);
    println("{}", deref deref deref p3);
    println("{}", deref deref deref deref p4);
    println("{}", deref deref deref deref deref p5);
    println("{}", deref deref deref deref deref deref p6);
    println("{}", deref deref deref deref deref deref deref p7);
    println("{}", deref deref deref deref deref deref deref deref p8);
    println("{}", deref deref deref deref deref deref deref deref deref p9);
    println("{}", deref deref deref deref deref deref deref deref deref deref p10);


    println("bonus:")
    println("{}", deref p10);
    println("{}", deref deref p10);
    println("{}", deref deref deref p10);
    println("{}", deref deref deref deref p10);
    println("{}", deref deref deref deref deref p10);
    println("{}", deref deref deref deref deref deref p10);
    println("{}", deref deref deref deref deref deref deref p10);
    println("{}", deref deref deref deref deref deref deref deref p10);
    println("{}", deref deref deref deref deref deref deref deref deref p10);
    println("{}", deref deref deref deref deref deref deref deref deref deref p10);
}
```

```text
1
1
1
1
1
1
1
1
1
1
bonus:
140720708477232
140720708477240
140720708477248
140720708477256
140720708477264
140720708477272
140720708477280
140720708477288
140720708477300
1
```

---

## `test34.wave` (✔)

```wave
fun main() {
    var arr: ptr<array<i32, 3>> = &[1, 2, 3];
    println("{}", arr);
}
```

```text
140721774174788
```
