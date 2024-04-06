import DefaultNavbar from "./DefaultNavbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultNavbar />
      <main className="page-body min-h-screen text-gray-500">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout;
