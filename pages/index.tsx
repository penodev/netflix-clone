import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "hooks/useCurrentUser";
import Navbar from "components/Navbar";
import Billboard from "components/Billboard";
import MovieList from "components/MovieList";
import useMovieList from "hooks/useMovieList";
import useFavorites from "hooks/useFavorites";
import InfoModal from "components/InfoModal";
import useInfoModal from "hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  return (
    <div>
      {/* <h1 className='text-4xl text-green-500'>Netflix Clone</h1>
      <p className='text-white'>Logged in as: {user?.email}</p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>
        Logout
      </button> */}
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='My List' data={favorites} />
      </div>
    </div>
  );
}
