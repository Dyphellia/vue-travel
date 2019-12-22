import Vuex from "vuex";

let defaultCity = '广州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity || '广州',
}
