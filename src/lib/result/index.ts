/**
 * Result型の失敗を示す型
 */
export type Failure<T> = {
    type: 'failure'
    cause: T
}

/**
 * 型ガード可能な失敗の原因を示す型
 *
 * 値を持つかは任意で設定可能
 */
export type TypedCause<
    TCauseType extends string,
    TCauseValue = undefined
> = TCauseValue extends object
    ? {
        type: TCauseType
        value: TCauseValue
    }
    : { type: TCauseType }

/**
 * 原因が型付けされた失敗を示す型
 */
export type TypedFailure<TTypedCause> = TTypedCause extends TypedCause<
    infer TCauseType,
    infer TCauseValue
>
    ? Failure<TypedCause<TCauseType, TCauseValue>>
    : never

/**
 * 原因が片付けされていない失敗を示す型
 *
 * 失敗したことを明示的に示すため、objectを型引数にしています
 * undefinedやnullの場合は型エラーが発生します
 */
export type AnyhowFailure = Failure<object>

/**
 * 任意の値を持つ失敗を返す関数
 *
 * 基本的に型付けされるが、型ガードを考慮する場合はfailTyped関数を使用することを推奨
 *
 * @param {any} cause - 任意の失敗を表す値
 * @return {Failure}
 */
export function fail<const T>(cause: T): Failure<T> {
    return { type: 'failure', cause }
}

/**
 * Result型の結果が失敗であることを検証する型ガード関数
 *
 * @param {Result} result - 任意のResult型
 * @return {result is Failure} - Failか否かの型ガード
 */
export function isFailure<const T>(
    result: Result<unknown, T>
): result is Failure<T> {
    return result.type === 'failure'
}

/**
 * 型ガードを前提とした値を持った失敗を返す関数
 *
 * @param {string} type - 型ガードに使用するリテラル
 * @param {object | undefined} value - 失敗の詳細を表す値
 * @return {TypedFailure}
 */
export function failTyped<const TCauseType extends string, const TCauseValue>(
    type: TCauseType,
    value?: TCauseValue
): TypedFailure<TypedCause<TCauseType, TCauseValue>> {
    // TODO tsconfigのexactOptionalPropertyTypes有効時の型エラー解決が困難であるためキャストで暫定的に対応
    if (!value)
        return fail({ type }) as TypedFailure<TypedCause<TCauseType, TCauseValue>>
    return fail({ type, value }) as TypedFailure<
        TypedCause<TCauseType, TCauseValue>
    >
}

/**
 * Result型の成功を表す型
 */
export type Success<T> = {
    type: 'success'
    value: T
}

/**
 * 任意の値を持った成功を返す関数
 *
 * @param {any} value - 成功した処理の返り値
 * @return {Success}
 */
export function succeed<const T>(value: T): Success<T> {
    return { type: 'success', value }
}

/**
 * Result型の結果が成功であることを検証する型ガード関数
 */
export function isSuccess<const T>(
    result: Result<T, unknown>
): result is Success<T> {
    return result.type === 'success'
}

/**
 * 失敗する可能性があることを表す型
 *
 * 基本的にはTypedResultやAnyhowResult型を使用することを推奨
 * またisOk関数やisFail関数の検証をした上で、使用することを想定
 */
export type Result<T, U> = Success<T> | Failure<U>

/**
 * 失敗とその原因を返す可能性があることを示す型
 */
export type TypedResult<T, TFailure> = TFailure extends TypedCause<
    infer TCauseType,
    infer TCauseValue
>
    ? Success<T> | TypedFailure<TypedCause<TCauseType, TCauseValue>>
    : never

/**
 * 失敗する可能性があることのみを示す型
 *
 * 型ガードすることは不可能ではないが、実装を調べる必要性があるため、基本的には失敗した理由を知る必要がない時に使用する
 */
export type AnyhowResult<T> = Success<T> | AnyhowFailure

// 以下は頻出するTypedCauseの定義
// TypedResult型の型引数として利用することを想定している
/**
 * ステータスコード404を示す失敗
 */
export type NotFoundCause = TypedCause<'notfound'>

export function failNotFound(cause?: unknown): TypedFailure<NotFoundCause> {
    return failTyped('notfound', cause)
}