import { create } from 'zustand'; // Import Zustand correctly

const useSidebarStore = create((set) => ({
    sidebarOpen: false, // Initial state
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })), // Function to toggle sidebar
  }));
  
  export { useSidebarStore };