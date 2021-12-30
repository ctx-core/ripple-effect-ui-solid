import {
	Component, Context, createContext, createEffect, createSignal, mergeProps, onCleanup, Show, useContext
} from 'solid-js'
import { be_, Ctx } from '@ctx-core/object'
export const RippleEffect_Context:Context<Ctx> = createContext(null)
const key = 'RippleEffect_props$'
export const RippleEffect_props$$$_b = be_(key, ()=>
	createSignal(null)
)
export const RippleEffect:Component<{ ctx?:Ctx }> = _props=>{
	const props = mergeProps({ ctx: useContext(RippleEffect_Context) }, _props)
	const [RippleEffect_props$, RippleEffect_props$$] = RippleEffect_props$$$_b(props.ctx)
	ensure_RippleEffect_props()
	createEffect(()=>ensure_RippleEffect_props())
	function ensure_RippleEffect_props() {
		if (!RippleEffect_props$()) {
			RippleEffect_props$$(props)
			onCleanup(()=>RippleEffect_props$$(null))
		}
	}
	return <>
		<Show when={RippleEffect_props$() === props}>
			<style innerHTML={`
				.ripple {
					overflow: hidden;
				}
				.ripple-effect {
					position: absolute;
					top: 0;
					left: 0;
					border-radius: 50%;
					width: 50px;
					height: 50px;
					background: white;
					opacity: 0.4;
					transform: scale(1);
					transition: all 2s;
					.ripple-effect-start {
						opacity: 0;
						transform: scale(100);
					}
				}
			`}>
			</style>
		</Show>
	</>
}
