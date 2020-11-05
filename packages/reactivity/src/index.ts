export {
  // 用对象包裹原始类型，从而Poxry实现响应式
  ref,
  // 当shallowRef接受对象时，value字段为一个对象，不会给该对象的属性代理响应式，响应式只会在value整个替换时触发
  shallowRef,
  // 是否为ref，检测__v_isRef属性是否为true
  isRef,
  // reactive -> ref 代理
  // 啥也不干，就是为了不丢失响应式
  toRef,
  // 每个value in reactive -> ref
  // 也不算代理，是为了使原有值在传递过程中不失去响应式
  // 例如 let a = reactive({ name: 'zy' })
  // let { b } = a 后b的改动不会影响a?
  toRefs,
  // 如果为ref,取出value
  unref,
  // refs -> 一个value为ref的对象
  // proxyRefs返回一个到refs的代理
  // 取值时先unref
  // 赋值时若是赋给ref对象，新值不为ref，则赋值代理到value上
  // 目的应该是toRefs()后的对象赋值取值不方便，多一层代理
  // let a = proxyRefs(toRefs(a))
  proxyRefs,
  // 自定义ref 决定是否追踪
  customRef,
  // 强制触发effect
  triggerRef,
  Ref,
  ToRefs,
  UnwrapRef,
  ShallowUnwrapRef,
  RefUnwrapBailTypes
} from './ref'
export {
  reactive,
  readonly,
  isReactive,
  isReadonly,
  isProxy,
  shallowReactive,
  shallowReadonly,
  markRaw,
  toRaw,
  ReactiveFlags,
  DeepReadonly
} from './reactive'
export {
  computed,
  ComputedRef,
  WritableComputedRef,
  WritableComputedOptions,
  ComputedGetter,
  ComputedSetter
} from './computed'
export {
  effect,
  stop,
  trigger,
  track,
  enableTracking,
  pauseTracking,
  resetTracking,
  ITERATE_KEY,
  ReactiveEffect,
  ReactiveEffectOptions,
  DebuggerEvent
} from './effect'
export { TrackOpTypes, TriggerOpTypes } from './operations'
