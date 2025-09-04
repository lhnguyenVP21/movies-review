import Hero from "../hero/Hero"

const Home = ({movies}) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Hero movies={movies}/>
    </div>
  )
}

export default Home