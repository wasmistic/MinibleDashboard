import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'

iZtoast.settings({
  timeout: 10000,
  onOpening: function () {
    console.log('callback abriu!');
  },
  onClosing: function () {
    console.log("callback fechou!");
  }
});

const toast = {
  error: (message, title = 'Error') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: 'topCenter'
    });
  },
  success: (message, title = 'Success') => {
    return iZtoast.success({
      title: title,
      message: message,
      position: 'topCenter'
      // position: 'center'
    });
  },
  warning: (message, title = 'Warning') => {
    return iZtoast.warning({
      title: title,
      message: message,
      position: 'topCenter'
    });
  }
};

export default toast;
