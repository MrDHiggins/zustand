import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const store = (set) => ({
    draggedTask: title,

    //Add task to colum
    addTask: (title, state) => set((store) => ({
        tasks: [...store.tasks, { title, state }],
    }), false, "addTask"),

    //Remove task from colum
    deleteTask: (title) => set((store) => ({
        tasks: [...store.tasks.filter(task => task.title !== title)],
    }), false, "deleteTask"),

    setDraggedTask: (title) => set({ draggedTask: title }, false, "setDraggedTask"),
    moveTask: (title, state) =>
        set((store) => ({
            tasks: store.tasks.map((task) =>
                task.title === title ? { title, state } : task,
            )
        }), false, "moveTask"),
})

export const useStore = create(persist(devtools(store), { name: "store" }));