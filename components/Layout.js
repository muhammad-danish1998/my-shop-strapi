import Footer from './Footer';
import TopHeader from './Header'

const MainLayout = ({ children , cart }) => {
  return (
    <>
      <TopHeader cart = {cart} />
      <main>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;