<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
    <div>
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }">Edit</RouterLink>
    </div>
    <button v-if="recipe" @click="recipeStore.toggleFavorite(recipe.id)">
      {{ isFavorite ? 'Remove from' : 'Add to favorites' }} favorites
    </button>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed, onMounted, watch } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
const route = useRoute();

const recipeStore = useRecipeStore();
const recipe = computed(() => recipeStore.getRecipById(route.params.id as string));

const isFavorite = computed(() => (recipe.value ? recipeStore.isFavorite(recipe.value.id) : false));

</script>
