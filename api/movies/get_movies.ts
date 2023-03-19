import { Ref } from 'vue';
import { useFetch } from '#app';

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface GetMoviesResponse {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovies = async () => {
  const { data } = await useFetch<GetMoviesResponse>(
    'https://api.themoviedb.org/3/movie/now' +
      '_playing?api_key=62883b4caa2c3b1ffa61d475a0786649&language=en-US&page=1',
  );

  return data.value;
};
