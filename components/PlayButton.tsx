import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

type PlayButtonProps = {
  movieId: string;
};

export default function PlayButton({ movieId }: PlayButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className='bg-white rounded-md py-1 px-2 md:py-2 md:px-4 transition
  w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300'
    >
      <BsFillPlayFill size={25} className='mr-1' />
      Play
    </button>
  );
}
