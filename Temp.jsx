import { useStore } from "./store";
import { shallow} from 'zustand/shallow'

export default function Temp({ state }) {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    //Shallow zustand method to compare objects
    shallow

    /*Alternative to zustand shallow method*/
    // (prev, next) => {
    //     const longest = prev.length > next.length ? prev.length : next.length;
    //     for(let i = 0; i < longest; i++) {
    //         if(!prev[i] || !next[i]) return false;
    //         if(prev[i] !== next[i]) return false;
    //     }
    //     return true;
    // }
    );
}
