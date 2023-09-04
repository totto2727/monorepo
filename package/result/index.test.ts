import { describe, expect, it } from "vitest";

import * as r from "./index.js";
import { fail, succeed } from "./index.js";

describe("Result型のテスト", () => {
  describe("Success型のテスト", () => {
    it('succeed関数の返り値は`type: "success"`を持つ', () => {
      expect(r.succeed("hoge")).toStrictEqual({
        type: "success",
        value: "hoge",
      });
    });

    it("isSuccess関数はSuccess型の時trueを返す", () => {
      expect(r.isSuccess({ type: "success", value: "hoge" })).toBe(true);
    });

    it("isSuccess関数はFailure型の時falseを返す", () => {
      expect(r.isSuccess({ type: "failure", cause: "hoge" })).toBe(false);
    });
  });

  describe("Failure型のテスト", () => {
    it('fail関数は`type: "failure"`を返す', () => {
      expect(fail("fuga")).toStrictEqual({ type: "failure", cause: "fuga" });
    });

    it("failTyped関数は`cause: {type: string}`を返す", () => {
      expect(r.failTyped("fuga")).toStrictEqual({
        type: "failure",
        cause: { type: "fuga" },
      });
    });

    it("failTyped関数は第2引数を持つとき`cause: {type: string. value: any}`を返す", () => {
      expect(r.failTyped("hoge", "fuga")).toStrictEqual({
        type: "failure",
        cause: { type: "hoge", value: "fuga" },
      });
    });

    it("isFailure関数はFailure型の時trueを返す", () => {
      expect(
        r.isFailure({
          type: "failure",
          cause: { type: "hoge" },
        }),
      ).toBe(true);
    });

    it("isFailure関数はTypedFailure型の時trueを返す", () => {
      expect(
        r.isFailure({
          type: "failure",
          cause: { type: "hoge" },
        }),
      ).toBe(true);
    });

    it("isFailure関数はSuccess型の時falseを返す", () => {
      expect(
        r.isFailure({ type: "success", value: "hoge" } as r.Success<"hoge">),
      ).toBe(false);
    });
  });

  describe("ユーティリティ関数のテスト", () => {
    describe("unwrap関数のテスト", () => {
      it("unwrap関数はSuccess型の値を受け取った時、valueプロパティの値を返す", () => {
        expect(r.unwrap(r.succeed(1))).toBe(1);
      });

      it("unwrap関数はFailure型の値を受け取った時、例外を投げる", () => {
        expect(() => r.unwrap(r.fail(1))).toThrow();
      });
    });

    describe("map関数のテスト", () => {
      const f = r.map((v: number) => v + 1);

      it("map関数はSuccess型の値を受け取った時、引数の関数を実行してSuccess型を返す", () => {
        expect(f(r.succeed(1))).toStrictEqual(r.succeed(2));
      });

      it("map関数はFailure型の値を受け取った時、そのままFailure型を返す", () => {
        expect(f(r.fail("error"))).toStrictEqual(r.fail("error"));
      });
    });

    describe("mapError関数のテスト", () => {
      const f = r.mapError((v: number) => v + 1);

      it("mapError関数はSuccess型の値を受け取った時、そのままSuccess型を返す", () => {
        expect(f(r.succeed(1))).toStrictEqual(r.succeed(1));
      });

      it("mapError関数はFailure型の値を受け取った時、関数を実行してSuccess型を返す", () => {
        expect(f(r.fail(1))).toStrictEqual(r.succeed(2));
      });
    });

    describe("flatMap関数のテスト", () => {
      const f = r.flatMap((v: number) => {
        switch (v) {
          case 1:
            return succeed(v + 1);
          default:
            return fail("error");
        }
      });

      it("flatMap関数はSuccess型の値を受け取った時、引数の関数を実行してSuccess型を返す", () => {
        expect(f(r.succeed(1))).toStrictEqual(r.succeed(2));
      });

      it("flatMap関数はSuccess型の値を受け取った時、引数の関数を実行してFailure型を返す", () => {
        expect(f(r.succeed(2))).toStrictEqual(r.fail("error"));
      });

      it("flatMap関数はFailure型の値を受け取った時、そのままFailure型を返す", () => {
        expect(f(r.fail(1))).toStrictEqual(r.fail(1));
      });
    });

    describe("flatMapError関数のテスト", () => {
      const f = r.flatMapError((v: number) => {
        switch (v) {
          case 1:
            return succeed(v + 1);
          default:
            return fail("error");
        }
      });

      it("flatMapError関数はSuccess型の値を受け取った時、そのままSuccess型を返す", () => {
        expect(f(r.succeed(1))).toStrictEqual(r.succeed(1));
      });

      it("flatMapError関数はFailure型の値を受け取った時、引数の関数を実行してSuccess型を返す", () => {
        expect(f(r.fail(1))).toStrictEqual(r.succeed(2));
      });

      it("flatMapError関数はFailure型の値を受け取った時、引数の関数を実行してFailure型を返す", () => {
        expect(f(r.fail(2))).toStrictEqual(r.fail("error"));
      });
    });

    describe("tryCatch関数のテスト", () => {
      it("tryCatch関数は例外が投げられなければ、Success型を返す", () => {
        expect(
          r.tryCatch(
            () => 1 + 1,
            () => fail("error"),
          )(),
        ).toStrictEqual(r.succeed(2));
      });

      it("tryCatch関数は例外が投げられた時、Failure型を返す", () => {
        expect(
          r.tryCatch(
            () => {
              throw 1;
            },
            () => fail("error"),
          )(),
        ).toStrictEqual(r.fail("error"));
      });
    });
  });
});
