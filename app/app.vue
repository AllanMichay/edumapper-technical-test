<template>
  <div class="bg-beige min-h-screen pt-[60px] text-black">
    <MainHeader />
    <MainLayout>
      <HighschoolSelection />
      <ExpandableCard
        title="En quelle classe es-tu ?"
        :subtitle="selectedLevelText"
        :is-completed="isCompleted"
        :is-expanded="isExpandedPerCard.class"
        @toggleExpand="isExpandedPerCard.class = !isExpandedPerCard.class"
      >
        <form @submit.capture="handleSubmit" class="flex flex-col space-y-6 mt-6">
          <div class="flex space-x-2">
            <RadioPill
              v-for="classe in classes"
              :key="classe.value"
              name="class"
              :value="classe.value"
              :label="classe.name"
              :is-checked="selectedClass?.value === classe.value"
              @update-pill="updateClass"
            />
          </div>
          <div class="w-full h-[1px] bg-gray"></div>
          <div class="flex flex-col space-y-4">
            <p>Type de bac</p>
            <div class="flex space-x-2">
              <RadioPill
                v-for="bacType in bacTypes"
                :key="bacType.value"
                name="bacType"
                :value="bacType.value"
                :label="bacType.name"
                :is-checked="selectedBacType?.value === bacType.value"
                @update-pill="updateBacType"
              />
            </div>
          </div>
          <Button
            color="black"
            type="submit"
            :is-disabled="!isCompleted"
            @click.prevent="handleSubmit"
            >Confirmer</Button
          >
        </form>
      </ExpandableCard>
      <ExpandableCard
        title="Spécialités"
        :subtitle="EXPANDABLE_TO_DO_MESSAGE"
        :is-completed="false"
        :is-expanded="isExpandedPerCard.specialties"
        @toggleExpand="isExpandedPerCard.specialties = !isExpandedPerCard.specialties"
      >
        <p class="text-sm text-gray">{{ EXPANDABLE_NOT_COMPLETED_MESSAGE }}</p>
      </ExpandableCard>
      <ExpandableCard
        title="Notes"
        :subtitle="EXPANDABLE_TO_DO_MESSAGE"
        :is-completed="false"
        :is-expanded="isExpandedPerCard.notes"
        @toggleExpand="isExpandedPerCard.notes = !isExpandedPerCard.notes"
      >
        <p class="text-sm text-gray">{{ EXPANDABLE_NOT_COMPLETED_MESSAGE }}</p>
      </ExpandableCard>
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
const EXPANDABLE_NOT_COMPLETED_MESSAGE = "Cette fonctionnalité n'est pas encore implémentée.";
const EXPANDABLE_TO_DO_MESSAGE = 'À compléter';

const isExpandedPerCard = ref({
  class: false,
  specialties: false,
  notes: false,
});

const classes = [
  { name: 'Seconde', value: 'seconde' },
  { name: 'Première', value: 'premiere' },
  { name: 'Terminale', value: 'terminale' },
];

const bacTypes = [
  { name: 'Générale', value: 'generale' },
  { name: 'Technologique', value: 'technologique' },
  { name: 'Professionnel', value: 'professionnelle' },
];

const selectedClass = ref<(typeof classes)[0] | null>(null);
const selectedBacType = ref<(typeof bacTypes)[0] | null>(null);

const updateClass = (value: string) => {
  selectedClass.value = classes.find(c => c.value === value) || null;
};

const updateBacType = (value: string) => {
  selectedBacType.value = bacTypes.find(c => c.value === value) || null;
};

const isCompleted = computed(() => {
  return selectedClass.value !== null && selectedBacType.value !== null;
});

const selectedLevel = computed(() => {
  if (!selectedClass.value || !selectedBacType.value) {
    return null;
  }
  const mappingBacType = new Map<typeof selectedBacType.value.value, string>([
    ['generale', 'Générale'],
    ['technologique', 'Technologique'],
    ['professionnelle', 'Professionnelle'],
  ]);
  return `${selectedClass.value.name} ${mappingBacType.get(selectedBacType.value.value) || ''}`;
});

const selectedLevelText = computed(() => {
  return selectedLevel.value ? `${selectedLevel.value}` : EXPANDABLE_TO_DO_MESSAGE;
});

const handleSubmit = () => {
  isExpandedPerCard.value.class = false;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
</style>
