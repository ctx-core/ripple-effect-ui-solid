import { be_ } from '@ctx-core/object'
import { Style_ } from '@ctx-core/ui-solid'
import { createContext, createEffect, createSignal, mergeProps, onCleanup, Show, useContext } from 'solid-js'
/** @type {typeof import('./index.d.ts').RippleEffect_Context} */
export const RippleEffect_Context = createContext(null)
/** @type {typeof import('./index.d.ts').RippleEffect__props__memo} */
export const RippleEffect__props__memo = be_('RippleEffect__props__memo', ()=>
	createSignal(null))
/** @type {typeof import('./index.d.ts').RippleEffect} */
export const RippleEffect = _props=>{
	const props =
		mergeProps({
			ctx: useContext(RippleEffect_Context)
		}, _props)
	const [RippleEffect_props_, RippleEffect_props__set] = RippleEffect__props__memo(props.ctx)
	RippleEffect_props__ensure()
	createEffect(()=>RippleEffect_props__ensure())
	function RippleEffect_props__ensure() {
		if (!RippleEffect_props_()) {
			RippleEffect_props__set(props)
			onCleanup(()=>RippleEffect_props__set(null))
		}
	}
	return (
		<Show when={RippleEffect_props_() === props}>
			<Style/>
		</Show>
	)
}
export { RippleEffect__props__memo as RippleEffect__props__ }
//language=CSS
const Style = Style_(()=>`
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
`)
