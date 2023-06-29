import {atom, useAtomValue, useSetAtom} from "jotai";
import type {ComponentPropsWithoutRef} from "react";

const countAtom = atom(0)

export function Counter() {
    return <>{useAtomValue(countAtom)}</>
}

export function IncrementButton(props: Omit<ComponentPropsWithoutRef<'button'>, 'onClick'>) {
    const setter = useSetAtom(countAtom)
    return <button {...props} onClick={() => setter(v => v + 1)}/>
}