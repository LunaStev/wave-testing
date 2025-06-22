# Wave Testing

A website that shows the results of testing elements in the test/directory of the Wave repository.

---

## ![Wave Version](https://www.wave-lang.dev/img/version.svg)

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
    let a :i32 = 10;
    var b :i32 = 5;
    println("Hello World");
}
```

```text
❌ Failed to import 'iosys'
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
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
fwf
```

---

## `test6.wave` (✔)

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
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
b is greater than a
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
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
b is greater than 30
```

---

## `test9.wave` (❌)

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
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
a > b
a > c
b > c
a == a
b == b
c == c
```

---

## `test10.wave` (❌)

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
Error: Expected primary expression, found Println
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Println
Error: Expected primary expression, found Println
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Println
Error: Expected primary expression, found Lbrace
Error: Expected primary expression, found Else
Error: Expected primary expression, found Println
Error: Expected primary expression, found Println
Error: Expected primary expression, found Rbrace
clang failed: target/temp.ll:73:1: error: expected instruction opcode
}
^
1 error generated.

Failed to generate machine code
```

---

## `test11.wave` (✔)

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
* 
**
***
****
*****
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
thread 'main' panicked at llvm_temporary/src/llvm_temporary/expression.rs:390:22:
Unsupported target in IndexAccess
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
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
Error: Expected primary expression, found Rbrace
Current: 0
Current: 1
Current: 2
Current: 3
Current: 4
Hello 5
Hello 2
Hello World
```

---

## `test15.wave` (✔)

```wave
fun add(a :i32; b :i32;) -> i32 {
    return a + b;
}

fun main() {
    println("{}", add(4, 5));
}
```

```text
9
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
Error: Expected primary expression, found Rbrace
Value: 1
Value: 2
Value: 4
Value: 5
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
Error: Expected primary expression, found Var
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Println
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found If
Error: Expected primary expression, found Else
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace

thread 'main' panicked at llvm_temporary/src/llvm_temporary/expression.rs:64:17:
variable 'cnt' not found in current scope
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test18.wave` (✔)

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
9
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

## `test20.wave` (✔)

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
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 2
fibonacci(4) = 3
fibonacci(5) = 5
fibonacci(6) = 8
fibonacci(7) = 13
fibonacci(8) = 21
fibonacci(9) = 34
fibonacci(10) = 55
END FIBONACCI
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
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Input
Error: Expected ')'
Error: Expected primary expression, found Rparen
Error: Expected primary expression, found Decrement
Error: Expected primary expression, found Increment
❌ Failed to import 'iosys'
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
address = 140726731450484
```

---

## `test24.wave` (❌)

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
clang failed: target/temp.ll:42:9: error: stored value and pointer type do not match
  store i32 %deref_load14, i32** %p1, align 4
        ^
1 error generated.

Failed to generate machine code
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

## `test28.wave` (✔)

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
2 + 3 = 5
2 - 3 = -1
2 * 3 = 6
2 / 3 = 0
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
    var ret_val: i64;

    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

```text
Hello from syscall!
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
p1 = 140732170246612, p2 = 140732170246608
pp1 = 140732170246600, pp2 = 140732170246592
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
thread 'main' panicked at llvm_temporary/src/llvm_temporary/expression.rs:390:22:
Unsupported target in IndexAccess
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
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
140720655735600
140720655735608
140720655735616
140720655735624
140720655735632
140720655735640
140720655735648
140720655735656
140720655735668
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
140732170515428
```

---

## `test35.wave` (✔)

```wave
fun len(s: str) -> i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count = count + 1;
    }
    return count;
}

fun main() {
    var message: str = "hello, world!";
    var l: i32 = len(message);
    println("String Length: {}", l);
}
```

```text
String Length: 13
```

---

## `test36.wave` (✔)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 3;
    var c: i32 = a % b;
    println("{}", c);
}
```

```text
1
```

---

## `test37.wave` (✔)

```wave
fun main() {
    var a: i32 = 10;
    var b: i32 = 3;
    var f: f32 = 10.0;
    var g: f32 = 2.5;

    a += b;
    println("a += b: {}", a); // 13

    a -= 5;
    println("a -= 5: {}", a); // 8

    a *= 2;
    println("a *= 2: {}", a); // 16

    a /= 4;
    println("a /= 4: {}", a); // 4

    a %= 3;
    println("a %= 3: {}", a); // 1

    f += g;
    println("f += g: {}", f); // 12.5

    f -= 1.5;
    println("f -= 1.5: {}", f); // 11.0

    f *= 2.0;
    println("f *= 2.0: {}", f); // 22.0

    f /= 2.0;
    println("f /= 2.0: {}", f); // 11.0

    f %= 2.0;
    println("f %= 2.0: {}", f); // 1.0
}
```

```text
a += b: 13
a -= 5: 8
a *= 2: 16
a /= 4: 4
a %= 3: 1
f += g: 12.500000
f -= 1.5: 11.000000
f *= 2.0: 22.000000
f /= 2.0: 11.000000
f %= 2.0: 1.000000
```

---

## `test38.wave` (✔)

```wave
fun calculate_values(x: i32; y: i32; factor: f32) -> f32 {
    println("inside calculate_values");
    var result: f32 = x;
    result += y;
    result *= factor;
    return result;
}

fun main() {
    println("start");

    var a: i32 = 12;
    var b: i32 = 7;
    var c: i32 = 3;
    println("before math");

    var f: f32 = 4.5;
    var g: f32 = 2.0;

    println("before operations");

    a += b;
    b *= 2;
    c -= 1;

    println("before function call");

    var result: f32 = calculate_values(a, b, f);

    println("after function call, result: {}", result);
}
```

```text
start
before math
before operations
before function call
inside calculate_values
after function call, result: 148.500000
```

---

## `test39.wave` (❌)

```wave
fun calculate_values(x: i32; y: i32; factor: f32) -> f32 {
    println("inside calculate_values");
    var result: f32 = x;
    result += y;
    result *= factor;
    return result;
}

fun main() {
    println("start");

    var a: i32 = 12;
    var b: i32 = 7;
    var c: i32 = 3;
    println("before math");

    var f: f32 = 4.5;
    var g: f32 = 2.0;

    println("before operations");

    a += b;
    b *= 2;
    c -= 1;

    println("before function call");

    var result: f32 = calculate_values(a, b, f);

    println("after function call, result: {}", result);
}
```

```text
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace
Error: Expected primary expression, found Rbrace

thread 'main' panicked at llvm_temporary/src/llvm_temporary/expression.rs:64:17:
variable 'result' not found in current scope
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

---

## `test40.wave` (❌)

```wave
fun main() {
    var msg_ptr: ptr<str> = "Hello";
    var msg_ptr2: ptr<i8> = "Hello";
    println("{}", msg_ptr);
    println("{}", msg_ptr2);
}
```

```text
clang failed: target/temp.ll:12:9: error: stored value and pointer type do not match
  store i8* getelementptr inbounds ([6 x i8], [6 x i8]* @str_init_msg_ptr, i32 0, i32 0), i8*** %msg_ptr, align 8
        ^
1 error generated.

Failed to generate machine code
```

---

## `test41.wave` (✔)

```wave
fun main() {
    var s :str = "Line1\nLine2\tTabbed\\Backslash\"Quote\"";
    println("{}", s);
}
```

```text
Line1
Line2   Tabbed\Backslash"Quote"
```

---

## `test42.wave` (✔)

```wave
fun main() {
    var result: i64 = asm {
        "mov rax, 123"
        out("rax") result
    };

    println("Result is: {}", result);
}
```

```text
Result is: 123
```

---

## `test43.wave` (✔)

```wave
fun process(a: i32; b: i32; note: str) {
    var v: i32 = a + b;
    v *= 2;
    v /= 3;

    var i: i32 = 0;
    while (i < v) {
        if (i == 5) {
            println("{}", i);
            i += 1;
            println("{}", i);
            continue;
        }
        println("{}", i);
        i += 1;
    }
}

fun main() {
    process(12, 8, "test");
}
```

```text
0
1
2
3
4
5
6
6
7
8
9
10
11
12
```

---

## `test44.wave` (✔)

```wave
// factorial.wave
fun factorial(n: i64) -> i64 {
    if (n <= 1) {
        return 1;
    }

    var result: i64 = 1;
    var i: i64 = 2;
    while(i <= n) {
        result = result * i;
        i = i + 1;
    }

    return result;
}

fun main() {
    var i: i64 = 0;
    var result: i64 = factorial(i);

    // test from 0 to 10
    while(i <= 10){
        println("factorial({}) = {}", i, result);
        i = i + 1;
    }
}
```

```text
factorial(0) = 1
factorial(1) = 1
factorial(2) = 1
factorial(3) = 1
factorial(4) = 1
factorial(5) = 1
factorial(6) = 1
factorial(7) = 1
factorial(8) = 1
factorial(9) = 1
factorial(10) = 1
```

---

## `test45.wave` (✔)

```wave
// fibonacci.wave
fun fibonacci(n: i64) -> i64 {
    if (n == 0) { return 0; }
    if (n == 1) { return 1; }

    var prev: i64 = 0;
    var curr: i64 = 1;
    var next: i64;
    var i: i64 = 2;

    while (i <= n) {
        next = prev + curr;
        prev = curr;
        curr = next;
        i = i + 1;
    }

    return curr;
}

fun main() {
    var x: i64 = 0;
    var result: i64;

    while(x <= 10){
        result = fibonacci(x);
        println("fibonacci({}) = {}", x, result);
        x = x + 1;
    }
}
```

```text
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 2
fibonacci(4) = 3
fibonacci(5) = 5
fibonacci(6) = 8
fibonacci(7) = 13
fibonacci(8) = 21
fibonacci(9) = 34
fibonacci(10) = 55
```

---

## `test46.wave` (✔)

```wave
// prime.wave
// wave has not yet support modulo operator

fun is_prime(n: i64) -> i64 {
    if (n <= 1) { return 0; }
    if (n <= 3) { return 1; }

    // check if num is even
    var num_even: i64;
    num_even = n / 2;
    if (num_even * 2 == n) { 
        return 0; 
    }

    var i: i64 = 3;
    var div_result: i64;
    while (i * i <= n) {
        div_result = n / i;
        if (div_result * i == n) {
            return 0;
        }
        i = i + 2;
    }
    return 1;
}

fun main() {
    var num: i64 = 0;
    var result: i64;

    while(num <= 50) {
        result = is_prime(num);
        println("{} is prime? {}", num, result);
        num = num + 1;
    }
}
```

```text
0 is prime? 0
1 is prime? 0
2 is prime? 1
3 is prime? 1
4 is prime? 0
5 is prime? 1
6 is prime? 0
7 is prime? 1
8 is prime? 0
9 is prime? 0
10 is prime? 0
11 is prime? 1
12 is prime? 0
13 is prime? 1
14 is prime? 0
15 is prime? 0
16 is prime? 0
17 is prime? 1
18 is prime? 0
19 is prime? 1
20 is prime? 0
21 is prime? 0
22 is prime? 0
23 is prime? 1
24 is prime? 0
25 is prime? 0
26 is prime? 0
27 is prime? 0
28 is prime? 0
29 is prime? 1
30 is prime? 0
31 is prime? 1
32 is prime? 0
33 is prime? 0
34 is prime? 0
35 is prime? 0
36 is prime? 0
37 is prime? 1
38 is prime? 0
39 is prime? 0
40 is prime? 0
41 is prime? 1
42 is prime? 0
43 is prime? 1
44 is prime? 0
45 is prime? 0
46 is prime? 0
47 is prime? 1
48 is prime? 0
49 is prime? 0
50 is prime? 0
```

---

## `test47.wave` (✔)

```wave
// calculator.wave

fun main() {
    var a: i64;
    var b: i64;
    var res: i64;

    // plus 12, 5
    a = 12;
    b = 5;
    res = a + b;
    println("12 + 5 = {}", res);

    // minus 12, 5
    res = a - b;
    println("12 - 5 = {}", res);

    // mult 12, 5
    res = a * b;
    println("12 * 5 = {}", res);

    // div 12, 5
    res = a / b;
    println("12 / 5 = {}", res);
}
```

```text
12 + 5 = 17
12 - 5 = 7
12 * 5 = 60
12 / 5 = 2
```

---

## `test48.wave` (✔)

```wave
fun main() {
    var i :i32 = 0;
    println("before = {}", i);
    i = i + 1;
    println("after = {}", i);
}
```

```text
before = 0
after = 1
```
