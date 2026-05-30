import NavBar from './components/NavBar'
import StudentChat from './pages/StudentChat'

function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8f9ff]">
      <NavBar />
      <main className="flex-1 min-w-0 overflow-hidden">
        <StudentChat />
      </main>
    </div>
  )
}

export default App