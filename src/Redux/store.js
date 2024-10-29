import reducer, {configureStore} from "./reducer";

const store = configureStore({ reducer: reducer});
export default store;