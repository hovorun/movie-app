<template>
  <Loader v-if="isLoading" />

  <div
    v-else
    class="container single-movie"
  >
    <NuxtLink
      class="button"
      :to="{name: 'index'}"
    >
      Back
    </NuxtLink>


    <div
      v-if="movie"
      class="movie-info"
    >
      <div class="movie-img">
        <img
          :src="`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`"
          alt="movie-img"
        >
      </div>


      <div class="movie-content">
        <h1>Title: {{ movie.title }}</h1>

        <p class="movie-fact tagline">
          <span>
            Tagline:
          </span>
          "{{ movie.tagline }}"
        </p>

        <p class="movie-fact">
          <span>
            Released:
          </span>
          {{
            new Date(movie.release_date).toLocaleString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }}
        </p>

        <p class="movie-fact">
          <span>
            Duration:
          </span>
          {{ movie.runtime }} minutes
        </p>

        <p class="movie-fact">
          <span>
            Revenue:
          </span>
          {{
            movie.revenue.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD'
            })
          }} minutes
        </p>

        <p class="movie-fact">
          <span>
            Overview:
          </span>
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  getMovie,
  type SingleMovie,
} from '~/api';
import { useLocalState } from '~/composables';

const [movie, setMovie] = useLocalState<SingleMovie | null>(null);
const [isLoading, setIsLoading] = useLocalState<boolean>(false);

const { movieid } = useRoute().params;

const fetchSingleMovie = async () => {
  try {
    setIsLoading(true);
    const response = await getMovie(movieid);
    if (response) {
      setMovie(response);
    }
  } catch (e) {
    console.error(e);
  } finally {
    setIsLoading(false);
  }
};

fetchSingleMovie();


useHead({
  title: () => `${movie.value?.title}`,
});
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }

    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      .tagline {
        font-style: italic;

        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>
