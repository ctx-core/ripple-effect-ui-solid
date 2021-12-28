import { Component, mergeProps, useContext } from 'solid-js'
import { createGlobalStyles } from 'solid-styled-components'
import type { Ctx } from '@ctx-core/object'
import { RippleEffect_Context, RippleEffect_loaded$_b } from './RippleEffect_loaded$_b.js'
export const RippleEffect:Component<{ ctx?:Ctx }> = _props=>{
	const props = mergeProps({ ctx: useContext(RippleEffect_Context) }, _props)
	const RippleEffect_loaded$ = RippleEffect_loaded$_b(props.ctx as Ctx)
	const RippleEffect_loaded = RippleEffect_loaded$.$
	if (!RippleEffect_loaded) {
		RippleEffect_loaded$.$ = true
	}
	return RippleEffect_loaded ? <Style__RippleEffect/> : <></>
}
const Style__RippleEffect = createGlobalStyles`
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
`
