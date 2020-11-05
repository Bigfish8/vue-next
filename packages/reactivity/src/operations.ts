/**
 * @done
 */

// using literal strings instead of numbers so that it's easier to inspect
// debugger events

// 追踪
export const enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate'
}

// 触发
export const enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear'
}
