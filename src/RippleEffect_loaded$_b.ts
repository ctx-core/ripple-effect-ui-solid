import { createContext } from 'solid-js'
import { atom$, ReadableAtom$ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import { be_ } from '@ctx-core/object'
export const RippleEffect_Context = createContext<Ctx>()
const key = 'RippleEffect_loaded$'
export const RippleEffect_loaded$_b:Be<ReadableAtom$<boolean>> = be_(key, ()=>
	atom$(false)
)
