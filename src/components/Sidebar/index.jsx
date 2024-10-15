import { useSidebarStore } from "../../store/sidebarStore"; // Import Zustand store
const Sidebar = () => {
    const sidebarOpen = useSidebarStore((state) => state.sidebarOpen); // Zustand state for sidebar
  
    return (
      <aside
        className={`fixed left-0 top-0 w-64 h-full bg-gray-800 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Sidebar content */}
        <p className="p-4">Sidebar Content</p>
      </aside>
    );
  };
  
  export default Sidebar;