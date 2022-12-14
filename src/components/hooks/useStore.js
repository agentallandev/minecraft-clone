import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
        texture: 'dirt',
        cubes: [
            {
                key:nanoid(),
                pos: [1, 1, 1],
                texture:  'wood',
            }],
        addCube: (x, y, z) => {
            set((prev) => ({
                cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: prev.texture
                }
                ]
            }))
        },
        setTexture: () => {},
        saveWorld: () => {},
        newWorld: () => {}      
}))