<template>
  <Card>
    <div
      class="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex flex-col space-y-2">
        <p v-if="!isEditing" class="text-main font-bold text-white text-2xl">
          {{ selectedHighSchool?.name }}
        </p>
        <select
          v-else
          v-model="selectedHighSchool"
          class="bg-white text-main text-sm rounded-full px-3 py-2 w-full"
        >
          <option v-for="highSchool in highSchoolList" :key="highSchool.name" :value="highSchool">
            {{ highSchool.name }}
          </option>
        </select>
        <div class="flex space-x-2">
          <div class="flex space-x-1 items-center">
            <MapPin class="text-sm text-transparent" />
            <p class="text-main text-sm text-white">
              {{ selectedHighSchool?.location }}
            </p>
          </div>
          <div class="flex space-x-1 items-center">
            <Building class="text-sm text-transparent" />
            <p class="text-main text-sm text-white">Lycée {{ selectedHighSchool?.type }}</p>
          </div>
        </div>
      </div>
      <div>
        <Button @click.prevent="handleEdition">
          {{ isEditing ? 'Enregistrer' : 'Modifier' }}
        </Button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import MapPin from '~/assets/icons/map-pin.svg';
import Building from '~/assets/icons/building.svg';

const highSchoolList = [
  { name: 'Etienne Dolet', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé Charles de Foucauld', location: 'Lille', type: 'Public' },
  { name: 'Lycée polyvalent Guillaume Tirel', location: 'Lille', type: 'Public' },
  { name: "Lycée polyvalent l'Initiative", location: 'Lille', type: 'Public' },
  { name: 'Lycée polyvalent privé Saint Jean de Montmartre', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé Pascal', location: 'Lille', type: 'Public' },
  { name: 'Lycée du bâtiment et des travaux publics', location: 'Lille', type: 'Public' },
  { name: 'Lycée polyvalent privé Saint-Nicolas', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé La Rochefoucauld', location: 'Lille', type: 'Public' },
  {
    name: "Lycée technique privé de l'école technique supérieure du laboratoire",
    location: 'Lille',
    type: 'Public',
  },
  { name: 'Lycée privé Charles Péguy', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé Sainte-Louise', location: 'Lille', type: 'Public' },
  { name: "Lycée privé L'Ecole alsacienne", location: 'Lille', type: 'Public' },
  { name: 'Lycée polyvalent ESAA-Ecole Boulle', location: 'Lille', type: 'Public' },
  { name: 'Lycée polyvalent Paul Poiret', location: 'Lille', type: 'Public' },
  { name: 'Lycée Charlemagne', location: 'Lille', type: 'Public' },
  { name: 'Lycée Claude Monet', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé Lucien de Hirsch', location: 'Lille', type: 'Public' },
  { name: 'Lycée privé Saint-Michel de Picpus', location: 'Lille', type: 'Public' },
];

const selectedHighSchool = ref(highSchoolList[0]);
const isEditing = ref(false);

const handleEdition = () => {
  isEditing.value = !isEditing.value;
};
</script>
