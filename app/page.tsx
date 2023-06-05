import Navbar from "@/libs/ui/navBar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <nav className="navbar w-full  border-4 border-red-500">
        <Navbar />
      </nav>
    </div>
  )
}
