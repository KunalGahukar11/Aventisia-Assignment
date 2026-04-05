import Header from './layout/Header.jsx'
import SideBar from './layout/SideBar.jsx'
import MainContent from './layout/MainContent.jsx'

function App() {

  return (
    <div className='grid h-screen grid-cols-1 md:grid-cols-[200px_1fr] grid-rows-[auto_1fr]'>
      <header className='md:col-span-2 bg-(--color-secondary)'>
        <Header></Header>
      </header>
      <aside className='hidden md:block border-r border-gray-300'>
        <SideBar></SideBar>
      </aside>
      <main className="h-full overflow-hidden">
        {/* here we add routes from react-router-dom to add dynamic rendering */}
        <MainContent></MainContent>
      </main>
    </div>
  )
}

export default App
