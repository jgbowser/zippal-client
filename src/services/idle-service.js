let _timeoutId
let _idleCallback = null
let _notIdleEvents = [
  'mousedown',
  'mousemove',
  'keypress',
  'scroll',
  'touchstart',
]

const _FIVE_MINUTES_IN_MS = 5 * 60 * 1000

const IdleService = {
  setIdleCallback(idleCallback){
    _idleCallback = idleCallback
  },
  resetIdleTime(ev){
    clearTimeout(_timeoutId))
    _timeoutId = setTimeout(_idleCallback,_FIVE_MINUTES_IN_MS)
  },
  registerIdleTimerResets(){
    _notIdleEvents.forEach(event => 
      document.addEventListener(
        event,
        IdleService.resetIdleTime,
        true,
      ))
  },
  unRegisterIdleResets(){
    clearTimeout(_timeoutId)
    _notIdleEvents.forEach(event =>
      document.removeEventListener(
        event,
        IdleService.resetIdleTime,
        true,
      ))
  },
}

export default IdleService