import Vue from 'vue';
import moment from 'moment'

Vue.filter('currency', function (value) {
  let formatter = Intl.NumberFormat("NGN", {
    // style: "currency",
    minimumFractionDigits: 0
  }); //'₦ '+
  return '₦ ' + value;

});
Vue.filter('easy_currency', function (value) {
  if (value !== "" && value !== null && value !== undefined) {

    return '₦ ' + value.toLocaleString('en')
  }
});
Vue.filter('formatDate', function (value) {

  return moment(value).format('Do MMMM  YYYY , h:mm:ss a');

});
Vue.filter('appDate', function (value) {

  return moment(value).format('Do MMMM,  YYYY');

});
Vue.filter('firstToUpper', function (v) {
  if (typeof v !== "string") return "";
  return v.toUpperCase();

})
Vue.filter('shortNameBy25', function (v) {
  if (v !== "" && v !== null && v !== undefined) {
    if (v.length > 25) {
      return v.substring(0, 25) + ".."
    }
    return v;
  }
})
Vue.filter('shortNameBy45', function (v) {
  if (v !== "" && v !== null && v !== undefined) {
    if (v.length > 45) {
      return v.substring(0, 45) + ".."
    }
    return v;
  }
})
Vue.filter('shortNameBy30', function (v) {
  if (v !== "" && v !== null && v !== undefined) {
    if (v.length > 30) {
      return v.substring(0, 30) + "..."
    }
    return v;
  }
})
Vue.filter('shortNameBy40', function (v) {
  if (v !== "" && v !== null && v !== undefined) {
    if (v.length > 40) {
      return v.substring(0, 40) + "..."
    }
    return v;
  }
})
Vue.filter('limit_string', function (v) {
  if (v !== "" && v !== null && v !== undefined) {

    return v.slice(0, 200) + "..."


  }
})
Vue.directive("currency", {
  bind(el, binding, vnode) {
    el.value = binding.value && Number(binding.value).toLocaleString('en-US', {
      style: 'currency',
      currency: !binding.arg ? '₦' : binding.arg
    });
    el.onblur = function (e) {
      e.target.value = Number(e.target.value).toLocaleString('en-US', {
        style: 'currency',
        currency: !binding.arg ? '₦' : binding.arg
      });
    };
    el.onfocus = function (e) {
      e.target.value =
        e.target.value && Number(e.target.value.replace(/[^\d.]/g, ""));
    };
    el.oninput = function (e) {
      vnode.context.$data[binding.expression] = e.target.value;
    };
  }
});
