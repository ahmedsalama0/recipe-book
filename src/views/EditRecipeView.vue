<template>
  <div>updateRecipe form.</div>
  <form @submit.prevent="updateRecipe">
    <div>
      <input type="text" placeholder="Recipe Name" v-model="name" required />
    </div>
    <div>
      <textarea placeholder="Recipe Description" v-model="description" required></textarea>
    </div>
    <button type="submit">Edit</button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useRecipeStore();
const name = ref('');
const description = ref('');
const route = useRoute();
const router = useRouter();

const fetchRecipe = () => {
  const id = route.params.id as string;
  const recipe = store.getRecipById(id);
  if (recipe) {
    name.value = recipe.name;
    description.value = recipe.description;
  } else {
    router.push({
      name: 'not-found',
    });
  }
};

onMounted(fetchRecipe);

function updateRecipe() {
  store.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value,
  });
  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string,
    },
  });
}
</script>
