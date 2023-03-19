import { useFetch } from '#app';
import type { GetMoviesResponse } from '~/api';

export const searchMovies = async (searchInput: string) => {
  const { data } = await useFetch<GetMoviesResponse>(
    [
      'https://api.themoviedb.org/3/search/movie?api_key=',
      `62883b4caa2c3b1ffa61d475a0786649&language=en-US&page=1&query=${searchInput}`,
    ].join(''),
  );

  return data.value;
};
