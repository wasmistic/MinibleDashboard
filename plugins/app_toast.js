import toast from '../services/toast'
export default ({
  app
}, inject) => {
  inject('apptoast', toast)
}
