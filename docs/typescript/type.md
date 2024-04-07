# 基本的な型

TypeScriptでは、多くの基本的な型が利用できます。これらの型を使用することで、変数の種類を明確にし、コードの安全性を高めることができます。

## boolean

`boolean`型は、真 (`true`) または偽 (`false`) のいずれかの値を持つことができます。

```typescript
let isDone: boolean = false;
```
## number

TypeScriptでは、浮動小数点値を含むすべての数値は`number`型です。
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## string

テキストのデータ型である`string`を使用して、文字列を表現できます。

```typescript
let color: string = "blue";
color = 'red';
```

## array

配列型は、同じ型の要素を複数持つことができます。配列を宣言するには、2つの方法があります。

```typescript
let list1: number[] = [1, 2, 3];
// または、ジェネリック配列型を使用する
let list2: Array<number> = [1, 2, 3];
```

## tuple

タプル型を使用すると、固定された数の要素を持ち、それぞれが特定の型である配列を表現できます。

```typescript
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // エラー
```

## enum

`enum`型は、関連する定数の集合により友好的な名前を付ける方法を提供します。

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

## any

不明または動的な型の変数を扱うために、`any`型を使用できます。
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // これもboolean型です
```