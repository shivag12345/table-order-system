import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useSocket } from "@/context/SocketContext";

export function StaffLayout() {
  const { user, logout } = useAuth();
  const { connected } = useSocket();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-cream">
      <Sidebar />
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative flex h-full w-72 max-w-[85vw] flex-col bg-forest-900 shadow-2xl"
          >
            <Sidebar
              className="flex h-full w-full flex-col p-4 text-white"
              onClose={() => setIsMobileSidebarOpen(false)}
            />
          </motion.div>
        </div>
      )}
      <div className="flex min-w-0 max-w-full flex-1 flex-col overflow-x-hidden">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-black/10 bg-white/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <img src="/royal-spice-brand.svg" alt="Shiva Royal Spice Restaurant and Bar" className="h-10 w-auto max-w-[150px] shrink-0 object-contain sm:h-11 sm:max-w-[180px] lg:hidden" />
            <div className="min-w-0">
              <p className="truncate text-sm font-black uppercase text-gold-700">Restaurant Table Ordering System</p>
              <h1 className="truncate text-lg font-black text-ink">Royal Spice Restaurant and Bar</h1>
            </div>
          </div>
          <div className="ml-3 flex shrink-0 items-center gap-2">
            <span className={`hidden rounded-full px-3 py-1 text-xs font-black sm:inline-flex ${connected ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
              {connected ? "Live" : "Offline"}
            </span>
            <Button
              variant="ghost"
              className="h-10 min-h-10 px-3 lg:hidden"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu size={17} />
            </Button>
            <Button variant="ghost" className="h-10 min-h-10 px-4" onClick={logout}>
              {user?.role}
            </Button>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
