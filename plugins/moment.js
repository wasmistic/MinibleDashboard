import moment from 'moment';
export default ({
  app
}, inject) => {
  inject('moment', moment)
}
