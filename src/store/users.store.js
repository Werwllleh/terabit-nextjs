import {create} from "zustand/react";


export const useUsersStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));

export default useUsersStore;
