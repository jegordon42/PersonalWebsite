import { themes } from '../themes'
import { createStore } from 'redux';

const defaultState = {
  theme: themes.blue
};

const Reducer = (state = defaultState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case "CHANGE_THEME":
        state.theme = action.data.theme;
        const root = document.querySelector(':root');
        root.style.setProperty("--primary", state.theme.colors.primary);
        root.style.setProperty("--secondary", state.theme.colors.secondary);
        root.style.setProperty("--background", state.theme.colors.background);
        root.style.setProperty("--chip", state.theme.colors.chip);
        root.onmousemove = function(e) {
          const background = 'radial-gradient(600px at ' + e.pageX + 'px ' + e.pageY + 'px,' +
          state.theme.colors.backgroundGradient + ', transparent 80%)';
          root.style.setProperty('background', background);
        }
        return state
    default:
      return state
  }
};

let Store = createStore(Reducer)

export default Store;