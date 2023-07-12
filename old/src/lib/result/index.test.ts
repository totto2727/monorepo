// import type { Failure, Success, TypedCause, TypedFailure } from './'

// import { fail, failTyped, isFailure, isSuccess, succeed } from './'

// describe('Result型のテスト', () => {
//     describe('Success型のテスト', () => {
//         it('succeed関数の返り値は`type: "success"`を持つ', () => {
//             expect(succeed('hoge')).toMatchObject({ type: 'success', value: 'hoge' })
//         })

//         it('isSuccess関数はSuccess型の時trueを返す', () => {
//             expect(
//                 isSuccess({ type: 'success', value: 'hoge' } as Success<'hoge'>)
//             ).toBe(true)
//         })

//         it('isSuccess関数はFailure型の時falseを返す', () => {
//             expect(
//                 isSuccess({ type: 'failure', cause: 'hoge' } as Failure<'hoge'>)
//             ).toBe(false)
//         })
//     })

//     describe('Failure型のテスト', () => {
//         it('fail関数は`type: "failure"`を返す', () => {
//             expect(fail('fuga')).toMatchObject({ type: 'failure', cause: 'fuga' })
//         })

//         it('failTyped関数は`cause: {type: string}`を返す', () => {
//             expect(failTyped('fuga')).toMatchObject({
//                 type: 'failure',
//                 cause: { type: 'fuga' },
//             } as TypedFailure<TypedCause<'fuga'>>)
//         })

//         it('failTyped関数は第2引数を持つとき`cause: {type: string. value: any}`を返す', () => {
//             expect(failTyped('hoge', 'fuga')).toMatchObject({
//                 type: 'failure',
//                 cause: { type: 'hoge', value: 'fuga' },
//             } as TypedFailure<TypedCause<'hoge', 'fuga'>>)
//         })

//         it('isFailure関数はFailure型の時trueを返す', () => {
//             expect(
//                 isFailure({
//                     type: 'failure',
//                     cause: { type: 'hoge' },
//                 } as TypedFailure<TypedCause<'hoge'>>)
//             ).toBe(true)
//         })

//         it('isFailure関数はTypedFailure型の時trueを返す', () => {
//             expect(
//                 isFailure({
//                     type: 'failure',
//                     cause: { type: 'hoge' },
//                 } as TypedFailure<TypedCause<'hoge'>>)
//             ).toBe(true)
//         })

//         it('isFailure関数はSuccess型の時falseを返す', () => {
//             expect(
//                 isFailure({ type: 'success', value: 'hoge' } as Success<'hoge'>)
//             ).toBe(false)
//         })
//     })
// })